
### Expanded Glossary of Symbols, Terms, and Variables

#### General Symbols

1. **Sigma Notation (\(\sum\))**:
   - **Meaning**: Summation, which means adding up a series of numbers.
   - **Example**:
     - \( \sum_{i=1}^{5} x_i \) means adding \( x_1 + x_2 + x_3 + x_4 + x_5 \).
     - If \( x_i = 1, 2, 3, 4, 5 \):
       \[ \sum_{i=1}^{5} x_i = 1 + 2 + 3 + 4 + 5 = 15 \]

2. **Pi Notation (\(\prod\))**:
   - **Meaning**: Product, which means multiplying a series of numbers.
   - **Example**:
     - \( \prod_{i=1}^{4} x_i \) means multiplying \( x_1 \times x_2 \times x_3 \times x_4 \).
     - If \( x_i = 2, 3, 4, 5 \):
       \[ \prod_{i=1}^{4} x_i = 2 \times 3 \times 4 \times 5 = 120 \]

3. **Factorial (!)**:
   - **Meaning**: The product of all positive integers up to a certain number \( n \).
   - **Example**:
     - \( n! \) where \( n = 5 \):
       \[ 5! = 5 \times 4 \times 3 \times 2 \times 1 = 120 \]

4. **Binomial Coefficient (\(\binom{n}{k}\))**:
   - **Meaning**: The number of ways to choose \( k \) successes in \( n \) trials.
   - **Formula**:
     \[ \binom{n}{k} = \frac{n!}{k!(n-k)!} \]
   - **Example**:
     - \( \binom{5}{2} \):
       \[ \binom{5}{2} = \frac{5!}{2!(5-2)!} = \frac{5 \times 4 \times 3!}{2 \times 1 \times 3!} = \frac{20}{2} = 10 \]
   - **Related Concept**: Combination
     - **Definition**: A selection of items without regard to the order.
     - **Formula**: Same as binomial coefficient.
     - **Example**: Choosing 2 items out of 5, order does not matter.

#### Probability Distributions

1. **Probability Mass Function (PMF) for Binomial Distribution**:
   - **Formula**:
     \[ P(Y = y) = \binom{n}{y} \pi^y (1-\pi)^{n-y} \]
   - **Steps**:
     - Calculate the binomial coefficient \( \binom{n}{y} \).
     - Raise \( \pi \) to the power of \( y \).
     - Raise \( (1-\pi) \) to the power of \( (n-y) \).
     - Multiply these three results together.
   - **Related Concept**: Combination (used to calculate the binomial coefficient).

2. **Probability Mass Function (PMF) for Poisson Distribution**:
   - **Formula**:
     \[ P(Y = y) = \frac{\lambda^y e^{-\lambda}}{y!} \]
   - **Steps**:
     - Raise \( \lambda \) to the power of \( y \).
     - Multiply by \( e^{-\lambda} \) (Note: For manual calculation, approximate \( e \approx 2.718 \)).
     - Divide by \( y! \).

3. **Probability Density Function (PDF) for Normal Distribution**:
   - **Formula**:
     \[ f(y) = \frac{1}{\sigma \sqrt{2\pi}} e^{-\frac{(y-\mu)^2}{2\sigma^2}} \]
   - **Steps**:
     - Calculate \( \frac{1}{\sigma \sqrt{2\pi}} \) (approximate \( \pi \approx 3.14 \)).
     - Compute the exponent \( -\frac{(y-\mu)^2}{2\sigma^2} \).
     - Raise \( e \) to this exponent.

#### Statistical Measures

1. **Mean (\(\mu\))**:
   - **Definition**: The average value of a dataset or distribution.
   - **Formula for Discrete Data**:
     \[ \mu = \frac{\sum x_i}{n} \]
   - **Formula for Continuous Data**:
     \[ \mu = \int_{-\infty}^{\infty} y f(y) dy \]
   - **Example**: Average test score.
   - **Related Concept**: Arithmetic Mean

2. **Variance (\(\sigma^2\))**:
   - **Definition**: A measure of the dispersion of a dataset or distribution.
   - **Formula for Discrete Data**:
     \[ \sigma^2 = \frac{\sum (x_i - \mu)^2}{n} \]
   - **Formula for Continuous Data**:
     \[ \sigma^2 = \int_{-\infty}^{\infty} (y - \mu)^2 f(y) dy \]
   - **Example**: Variance in test scores.
   - **Related Concept**: Standard Deviation (square root of variance)

3. **Standard Deviation (\(\sigma\))**:
   - **Definition**: The square root of the variance, representing the spread of a dataset or distribution.
   - **Formula**:
     \[ \sigma = \sqrt{\sigma^2} \]
   - **Example**: Standard deviation of heights.
   - **Related Concept**: Variance

4. **Z-Score**:
   - **Formula**:
     \[ Z = \frac{Y - \mu}{\sigma} \]
   - **Steps**:
     - Subtract the mean \( \mu \) from the value \( Y \).
     - Divide by the standard deviation \( \sigma \).
   - **Related Concept**: Standard Normal Distribution

### Detailed Examples with Manual Calculations

#### Sigma Notation (\(\sum\))

1. **Summing a Series of Numbers**:
   - **Problem**: Find the sum of the first 5 natural numbers.
   - **Solution**:
     \[ \sum_{i=1}^{5} i = 1 + 2 + 3 + 4 + 5 = 15 \]

2. **Summing the Squares of the First 4 Natural Numbers**:
   - **Problem**: Find the sum of \( i^2 \) for \( i = 1 \) to \( 4 \).
   - **Solution**:
     \[ \sum_{i=1}^{4} i^2 = 1^2 + 2^2 + 3^2 + 4^2 = 1 + 4 + 9 + 16 = 30 \]

#### Pi Notation (\(\prod\))

1. **Multiplying a Series of Numbers**:
   - **Problem**: Find the product of the first 4 natural numbers.
   - **Solution**:
     \[ \prod_{i=1}^{4} i = 1 \times 2 \times 3 \times 4 = 24 \]

2. **Multiplying a Series of Fractions**:
   - **Problem**: Find the product of \( \frac{1}{2}, \frac{2}{3}, \frac{3}{4}, \frac{4}{5} \).
   - **Solution**:
     \[ \prod_{i=1}^{4} \frac{i}{i+1} = \frac{1}{2} \times \frac{2}{3} \times \frac{3}{4} \times \frac{4}{5} = \frac{1 \times 2 \times 3 \times 4}{2 \times 3 \times 4 \times 5} = \frac{24}{120} = \frac{1}{5} \]

#### Factorial (!)

1. **Finding the Factorial of a Number**:
   - **Problem**: Calculate \( 6! \).
   - **Solution**:
     \[ 6! = 6 \times 5 \times 4 \times 3 \times 2 \times 1 = 720 \]

2. **Simplifying Factorial Expressions**:
   - **Problem**: Simplify \( \frac{7!}{5!} \).
   - **Solution**:
     \[ \frac{7!}{5!} = \frac{7 \times 6 \times 5!}{5!} = 7 \times 6 = 42 \]

#### Binomial Coefficient (\(\binom{n}{k}\))

1. **Calculating Binomial Coefficients**:
   - **Problem**: Calculate \( \binom{6}{2} \).
   - **Solution**:
     \[ \binom{6}{2} = \

frac{6!}{2!(6-2)!} = \frac{6!}{2! \times 4!} = \frac{6 \times 5 \times 4!}{2 \times 1 \times 4!} = \frac{30}{2} = 15 \]

2. **Calculating Binomial Coefficients for Larger Values**:
   - **Problem**: Calculate \( \binom{10}{3} \).
   - **Solution**:
     \[ \binom{10}{3} = \frac{10!}{3!(10-3)!} = \frac{10!}{3! \times 7!} = \frac{10 \times 9 \times 8 \times 7!}{3 \times 2 \times 1 \times 7!} = \frac{720}{6} = 120 \]

#### Mean (\(\mu\))

1. **Calculating the Mean of a Dataset**:
   - **Problem**: Find the mean of the numbers 4, 8, 12, 16.
   - **Solution**:
     \[ \mu = \frac{\sum x_i}{n} = \frac{4 + 8 + 12 + 16}{4} = \frac{40}{4} = 10 \]

2. **Calculating the Mean of Exam Scores**:
   - **Problem**: Find the mean of the scores 75, 85, 95, 80, 70.
   - **Solution**:
     \[ \mu = \frac{75 + 85 + 95 + 80 + 70}{5} = \frac{405}{5} = 81 \]

#### Variance (\(\sigma^2\))

1. **Calculating the Variance of a Dataset**:
   - **Problem**: Find the variance of the numbers 4, 8, 12, 16.
   - **Solution**:
     - Mean: \( \mu = 10 \)
     - Variance:
       \[ \sigma^2 = \frac{\sum (x_i - \mu)^2}{n} = \frac{(4-10)^2 + (8-10)^2 + (12-10)^2 + (16-10)^2}{4} = \frac{36 + 4 + 4 + 36}{4} = \frac{80}{4} = 20 \]

2. **Calculating the Variance of Exam Scores**:
   - **Problem**: Find the variance of the scores 75, 85, 95, 80, 70.
   - **Solution**:
     - Mean: \( \mu = 81 \)
     - Variance:
       \[ \sigma^2 = \frac{\sum (x_i - \mu)^2}{n} = \frac{(75-81)^2 + (85-81)^2 + (95-81)^2 + (80-81)^2 + (70-81)^2}{5} = \frac{36 + 16 + 196 + 1 + 121}{5} = \frac{370}{5} = 74 \]

#### Standard Deviation (\(\sigma\))

1. **Calculating the Standard Deviation of a Dataset**:
   - **Problem**: Find the standard deviation of the numbers 4, 8, 12, 16.
   - **Solution**:
     - Variance: \( \sigma^2 = 20 \)
     - Standard Deviation:
       \[ \sigma = \sqrt{20} \approx 4.47 \]

2. **Calculating the Standard Deviation of Exam Scores**:
   - **Problem**: Find the standard deviation of the scores 75, 85, 95, 80, 70.
   - **Solution**:
     - Variance: \( \sigma^2 = 74 \)
     - Standard Deviation:
       \[ \sigma = \sqrt{74} \approx 8.60 \]

#### Z-Score

1. **Calculating the Z-Score for a Data Point**:
   - **Problem**: Calculate the Z-score for a test score of 90, with mean 75 and standard deviation 10.
   - **Solution**:
     \[ Z = \frac{Y - \mu}{\sigma} = \frac{90 - 75}{10} = 1.5 \]

2. **Calculating the Z-Score for a Height**:
   - **Problem**: Calculate the Z-score for a height of 180 cm, with mean 170 cm and standard deviation 5 cm.
   - **Solution**:
     \[ Z = \frac{Y - \mu}{\sigma} = \frac{180 - 170}{5} = 2.0 \]

#### Binomial Distribution

1. **Calculating Binomial Probabilities**:
   - **Problem**: Find the probability of getting exactly 3 heads in 5 flips of a fair coin.
   - **Solution**:
     - Parameters: \( n = 5 \), \( \pi = 0.5 \)
     - Binomial coefficient: \( \binom{5}{3} = 10 \)
     - Probability: 
       \[ P(Y = 3) = \binom{5}{3} (0.5)^3 (0.5)^2 = 10 \cdot 0.125 \cdot 0.25 = 0.3125 \]

2. **Calculating Binomial Probabilities for a Biased Coin**:
   - **Problem**: Find the probability of getting exactly 4 heads in 7 flips of a coin with \( \pi = 0.6 \).
   - **Solution**:
     - Parameters: \( n = 7 \), \( \pi = 0.6 \)
     - Binomial coefficient: \( \binom{7}{4} = 35 \)
     - Probability:
       \[ P(Y = 4) = \binom{7}{4} (0.6)^4 (0.4)^3 = 35 \cdot 0.1296 \cdot 0.064 = 0.2916 \]

#### Poisson Distribution

1. **Calculating Poisson Probabilities**:
   - **Problem**: Find the probability of receiving exactly 6 calls in an hour, given an average rate of 4 calls per hour.
   - **Solution**:
     - Parameter: \( \lambda = 4 \)
     - Probability:
       \[ P(Y = 6) = \frac{4^6 e^{-4}}{6!} = \frac{4096 \cdot 0.0183}{720} \approx 0.104 \]

2. **Calculating Poisson Probabilities for a Different Rate**:
   - **Problem**: Find the probability of receiving exactly 3 emails in an hour, given an average rate of 2 emails per hour.
   - **Solution**:
     - Parameter: \( \lambda = 2 \)
     - Probability:
       \[ P(Y = 3) = \frac{2^3 e^{-2}}{3!} = \frac{8 \cdot 0.1353}{6} \approx 0.180 \]

### More Symbols and How to Use Them

#### Cumulative Distribution Function (CDF) (F)

1. **Finding the Cumulative Probability**:
   - **Problem**: For a normal distribution with \( \mu = 0 \) and \( \sigma = 1 \), find the probability that \( Y \leq 1.5 \).
   - **Solution**:
     - Standardize 1.5:
       \[ Z = \frac{1.5 - 0}{1} = 1.5 \]
     - Use Z-tables to find \( P(Z \leq 1.5) \approx 0.9332 \).

2. **Finding the Cumulative Probability for a Different Z-Score**:
   - **Problem**: For a normal distribution with \( \mu = 0 \) and \( \sigma = 1 \), find the probability that \( Y \leq -1 \).
   - **Solution**:
     - Standardize -1:
       \[ Z = \frac{-1 - 0}{1} = -1 \]
     - Use Z-tables to find \( P(Z \leq -1) \approx 0.1587 \).

### Summary

This expanded glossary now includes references to related concepts and detailed steps in calculations. Here are the key steps and related concepts for each type of calculation:

1. **Summation (\(\sum\))**: Add up a series of numbers.
2. **Product (\(\prod\))**: Multiply a series of numbers.
3. **Factorial (!)**: Multiply all positive integers up to a given number.
4. **Binomial Coefficient (\(\binom{n}{k}\))**: Calculate the number of ways to choose \( k \) successes in \( n \) trials (related to combination).
5. **Mean (\(\mu\))**: Find the average of a dataset (related to arithmetic mean).
6. **Variance (\(\sigma^2\))**: Measure the dispersion of a dataset (related to standard deviation).
7. **Standard Deviation (\(\sigma\))**: Calculate the spread of a dataset (related to variance).
8. **Z-Score**: Standardize a value relative to the mean and

 standard deviation (related to standard normal distribution).
9. **Binomial Distribution**: Calculate probabilities for binomial experiments (involving combinations).
10. **Poisson Distribution**: Calculate probabilities for Poisson processes.
11. **Cumulative Distribution Function (CDF) (F)**: Find cumulative probabilities.