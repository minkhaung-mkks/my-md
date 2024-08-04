const fs = require('fs');
const path = require('path');
const markdownIt = require('markdown-it');
const markdownItKatex = require('markdown-it-katex');
const puppeteer = require('puppeteer');
const { select } = require('@inquirer/prompts');

async function convertMarkdownToPdf(markdownFilePath, outputDir) {
  const markdownText = fs.readFileSync(markdownFilePath, 'utf8');
  const md = markdownIt().use(markdownItKatex);
  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <title>Document</title>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex/dist/katex.min.css">
      <script defer src="https://cdn.jsdelivr.net/npm/katex/dist/katex.min.js"></script>
      <script defer src="https://cdn.jsdelivr.net/npm/katex/dist/contrib/auto-render.min.js"></script>
    </head>
    <body>
      ${md.render(markdownText)}
      <script>
        document.addEventListener('DOMContentLoaded', function() {
          renderMathInElement(document.body);
        });
      </script>
    </body>
    </html>
  `;

  const fileName = path.basename(markdownFilePath, path.extname(markdownFilePath));
  const outputPdfPath = path.join(outputDir, `${fileName}.pdf`);

  const browser = await puppeteer.launch({
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();
  await page.setContent(htmlContent, { waitUntil: 'networkidle0' });

  // Wait for KaTeX to render the math
  await page.waitForFunction('window.katex && document.querySelector(".katex")');

  await page.pdf({ path: outputPdfPath, format: 'A4' });

  await browser.close();
  console.log(`PDF created at ${outputPdfPath}`);
}

async function chooseFileAndConvert() {
  const directory = './markdown_files'; // Directory to search for markdown files

  if (!fs.existsSync(directory)) {
    console.error('Directory not found:', directory);
    return;
  }

  const files = fs.readdirSync(directory).filter(file => path.extname(file) === '.md');
  if (files.length === 0) {
    console.log('No Markdown files found in the directory.');
    return;
  }

  const selectedFile = await select({
    message: 'Select a Markdown file to convert:',
    choices: files.map(file => ({ name: file, value: file }))
  });

  const selectedFilePath = path.join(directory, selectedFile);
  await convertMarkdownToPdf(selectedFilePath, directory);
}

async function runIndefinitely() {
  while (true) {
    await chooseFileAndConvert();
    await new Promise(resolve => setTimeout(resolve, 5000)); // Wait for 5 seconds before next check
  }
}

runIndefinitely();
