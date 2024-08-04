
---

## Detailed Study Guide for "Probability Distributions"

### Agenda
- **2.4**: Discrete Probability Distributions
- **2.5**: Continuous Probability Distributions

---

### 2.4 Discrete Probability Distributions

#### **2.4.1 Binomial Distribution**

**Definition**: The Binomial distribution models the number of successes in a fixed number of trials with two possible outcomes: success or failure.
- **Parameters**: 
  - \( n \): Number of trials
  - \( \pi \): Probability of success in each trial

**Binomial Probability Mass Function (PMF)**:
\[ P(Y = y) = \binom{n}{y} \pi^y (1-\pi)^{n-y} \]
- **Where**:
  - \( \binom{n}{y} \): Binomial coefficient, representing the number of ways to choose \( y \) successes out of \( n \) trials
  - \( \pi \): Probability of success
  - \( (1-\pi) \): Probability of failure

**Variables**:
- \( Y \): Number of successes
- \( n \): Number of trials
- \( y \): Specific number of successes
- \( \pi \): Probability of success

**Case Examples**:
1. **Flipping Coins**:
   - **Scenario**: Flipping a coin 5 times.
   - **Parameters**: \( n = 5 \), \( \pi = 0.5 \).
   - **Calculation**:
     - Probability of getting exactly 3 heads:
     \[ P(Y = 3) = \binom{5}{3} (0.5)^3 (0.5)^2 = 10 \cdot 0.125 \cdot 0.25 = 0.3125 \]

2. **Quality Control**:
   - **Scenario**: Checking 10 items, with a 90% success rate.
   - **Parameters**: \( n = 10 \), \( \pi = 0.9 \).
   - **Calculation**:
     - Probability of finding exactly 8 non-defective items:
     \[ P(Y = 8) = \binom{10}{8} (0.9)^8 (0.1)^2 = 45 \cdot 0.43046721 \cdot 0.01 = 0.193710 \]

3. **Medical Trials**:
   - **Scenario**: 20 patients, treatment success rate 70%.
   - **Parameters**: \( n = 20 \), \( \pi = 0.7 \).
   - **Calculation**:
     - Probability of exactly 15 patients being cured:
     \[ P(Y = 15) = \binom{20}{15} (0.7)^{15} (0.3)^5 = 15504 \cdot 0.00474756150994 \cdot 0.00243 \approx 0.1787 \]

4. **Classroom Performance**:
   - **Scenario**: 30 students, probability of passing 80%.
   - **Parameters**: \( n = 30 \), \( \pi = 0.8 \).
   - **Calculation**:
     - Probability of exactly 25 students passing:
     \[ P(Y = 25) = \binom{30}{25} (0.8)^{25} (0.2)^5 = 142506 \cdot 0.00017179869184 \cdot 0.00032 \approx 0.0078 \]

5. **Hard Example**:
   - **Scenario**: Conducting 50 trials with a success rate of 60%.
   - **Parameters**: \( n = 50 \), \( \pi = 0.6 \).
   - **Calculation**:
     - Probability of exactly 35 successes:
     \[ P(Y = 35) = \binom{50}{35} (0.6)^{35} (0.4)^{15} \]
     - This calculation involves large binomial coefficients and is typically solved using software or tables.

**Traits to Look For**:
- Keywords like "number of successes," "fixed number of trials," "success or failure."
- Scenarios involving counting the number of successes in repeated trials.

---

#### **2.4.2 Example: Composition of Jury List**

**Scenario**: Evaluating the probability distribution of the Hispanic composition of a jury list.
- **Parameters**: 
  - \( n = 12 \) (number of jurors)
  - \( \pi = 0.20 \) (probability of a juror being Hispanic)

**Case Examples**:
1. **Estimation and Plotting**:
   - **Task**: Find and plot the binomial probabilities.
   - **Calculation**: Using the binomial PMF:
   \[ P(Y = y) = \binom{12}{y} (0.20)^y (0.80)^{12-y} \]
   - **Example**: Probability of exactly 3 Hispanic jurors:
   \[ P(Y = 3) = \binom{12}{3} (0.20)^3 (0.80)^9 \approx 0.2362 \]
   - **Plot**: Create a plot of probabilities for \( y = 0, 1, 2, ..., 12 \).

2. **Simulation**:
   - **Task**: Simulate the binomial distribution and plot the graph.
   - **Simulation Code**: Using Python's `numpy` or `scipy` libraries.
     ```python
     import numpy as np
     import matplotlib.pyplot as plt
     from scipy.stats import binom

     n = 12
     p = 0.20
     x = np.arange(0, n+1)
     y = binom.pmf(x, n, p)

     plt.bar(x, y)
     plt.xlabel('Number of Hispanic Jurors')
     plt.ylabel('Probability')
     plt.title('Binomial Distribution of Hispanic Jurors')
     plt.show()
     ```

**Variations**:
1. **Different Probabilities**:
   - **Scenario**: \( \pi = 0.50 \)
   - **Calculation**: Probability of exactly 6 Hispanic jurors:
   \[ P(Y = 6) = \binom{12}{6} (0.50)^6 (0.50)^6 \approx 0.2256 \]

2. **Higher Probability**:
   - **Scenario**: \( \pi = 0.80 \)
   - **Calculation**: Probability of exactly 10 Hispanic jurors:
   \[ P(Y = 10) = \binom{12}{10} (0.80)^{10} (0.20)^2 \approx 0.2835 \]

**Hard Example**:
3. **Complex Jury Composition**:
   - **Scenario**: Evaluating a composition with multiple probabilities.
   - **Calculation**: Using software to simulate and plot the distribution for varying probabilities.

**Traits to Look For**:
- Keywords like "jury composition," "binomial probabilities," "simulate and plot."
- Scenarios involving evaluation of specific compositions in a fixed number of trials.

---

#### **2.4.3 Mean, Variability, and Skewness of Binomial Distribution**

**Mean**:
- **Formula**: 
\[ \mu = n\pi \]
- **Explanation**: The average number of successes in \( n \) trials with success probability \( \pi \).

**Variance**:
- **Formula**: 
\[ \sigma^2 = n\pi(1-\pi) \]
- **Explanation**: The measure of dispersion or variability in the number of successes.

**Skewness**:
- **Formula**: 
\[ \text{Skewness} = \frac{1-2\pi}{\sqrt{n\pi(1-\pi)}} \]
- **Explanation**: Indicates the asymmetry of the distribution. Positive skewness means the tail is on the right, and negative skewness means the tail is on the left.

**Case Examples**:
1. **Flipping Coins**:
   - **Scenario**: 10 coin flips, \( \pi = 0.5 \).
   - **Calculation**:
     - Mean: 
     \[ \mu = 10 \times 0.5 = 5 \]
     - Variance: 
     \[ \sigma^2 = 10 \times 0.5 \times 0.5 = 2.5 \]
     - Skewness: 
     \[ \text{Skewness} = \frac{1-2 \times 0.5}{\sqrt{10 \times 0.5 \times 0.5}} = 0 \]

2. **Quality Control**:
   - **Scenario**: 15 items, \( \pi = 0.9 \).
   - **Calculation**:
     - Mean: 
     \[ \mu = 15 \times 0.9 = 13.5 \]
     - Variance: 
     \[ \sigma^2 = 15 \times 0.9 \times 0.1 = 1.35 \]
     - Skewness: 


     \[ \text{Skewness} = \frac{1-2 \times 0.9}{\sqrt{15 \times 0.9 \times 0.1}} \approx -1.549 \]

3. **Medical Trials**:
   - **Scenario**: 25 patients, \( \pi = 0.7 \).
   - **Calculation**:
     - Mean: 
     \[ \mu = 25 \times 0.7 = 17.5 \]
     - Variance: 
     \[ \sigma^2 = 25 \times 0.7 \times 0.3 = 5.25 \]
     - Skewness: 
     \[ \text{Skewness} = \frac{1-2 \times 0.7}{\sqrt{25 \times 0.7 \times 0.3}} \approx -0.385 \]

4. **Classroom Performance**:
   - **Scenario**: 30 students, \( \pi = 0.8 \).
   - **Calculation**:
     - Mean: 
     \[ \mu = 30 \times 0.8 = 24 \]
     - Variance: 
     \[ \sigma^2 = 30 \times 0.8 \times 0.2 = 4.8 \]
     - Skewness: 
     \[ \text{Skewness} = \frac{1-2 \times 0.8}{\sqrt{30 \times 0.8 \times 0.2}} \approx -0.548 \]

5. **Hard Example**:
   - **Scenario**: 50 trials, \( \pi = 0.6 \).
   - **Calculation**:
     - Mean: 
     \[ \mu = 50 \times 0.6 = 30 \]
     - Variance: 
     \[ \sigma^2 = 50 \times 0.6 \times 0.4 = 12 \]
     - Skewness: 
     \[ \text{Skewness} = \frac{1-2 \times 0.6}{\sqrt{50 \times 0.6 \times 0.4}} \approx -0.258 \]

**Traits to Look For**:
- Keywords like "mean," "variance," "skewness."
- Scenarios involving calculations of distribution properties.

---

#### **2.4.4 Example: Predicting Results of a Sample Survey**

**Scenario**: Predicting survey results using the binomial distribution.
- **Parameters**: 
  - \( n = 1500 \) (number of respondents)
  - \( \pi = 0.60 \) (probability of a positive response)

**Case Examples**:
1. **Estimation and Plotting**:
   - **Task**: Find and plot the binomial probabilities.
   - **Calculation**: Using the binomial PMF:
   \[ P(Y = y) = \binom{1500}{y} (0.60)^y (0.40)^{1500-y} \]
   - **Example**: Probability of exactly 900 positive responses:
   \[ P(Y = 900) \]
   - **Plot**: Create a plot of probabilities for \( y \).

2. **Retail Store Example**:
   - **Scenario**: 6 customers, 30% purchase rate.
   - **Tasks**:
     - Probability of exactly 4 purchases:
     \[ P(Y = 4) = \binom{6}{4} (0.30)^4 (0.70)^2 \approx 0.0595 \]
     - Probability of at most 2 purchases:
     \[ P(Y \leq 2) = \sum_{y=0}^{2} \binom{6}{y} (0.30)^y (0.70)^{6-y} \]
     - Probability of 3 or more purchases:
     \[ P(Y \geq 3) = 1 - P(Y \leq 2) \]

**Hard Example**:
3. **Complex Survey**:
   - **Scenario**: 2000 respondents, 70% positive response rate.
   - **Calculation**:
     - Probability of exactly 1400 positive responses:
     \[ P(Y = 1400) = \binom{2000}{1400} (0.70)^{1400} (0.30)^{600} \]

**Traits to Look For**:
- Keywords like "sample survey," "binomial probabilities," "predicting results."
- Scenarios involving evaluations of survey outcomes.

---

#### **2.4.5 The Sample Proportion as a Scaled Binomial Random Variable**

**Sample Proportion (\(\hat{p}\))**: The proportion of successes in a sample.
- **Formula**: 
\[ \hat{p} = \frac{Y}{n} \]
- **Explanation**: A binomial random variable scaled by the number of trials.

**Case Examples**:
1. **Flipping Coins**:
   - **Scenario**: 10 coin flips, \( \pi = 0.5 \).
   - **Calculation**: 
     - Number of heads (\( Y \)) follows a binomial distribution.
     - Sample proportion: 
     \[ \hat{p} = \frac{Y}{10} \]

2. **Quality Control**:
   - **Scenario**: 20 items, 90% success rate.
   - **Calculation**: 
     - Number of non-defective items (\( Y \)) follows a binomial distribution.
     - Sample proportion: 
     \[ \hat{p} = \frac{Y}{20} \]

3. **Medical Trials**:
   - **Scenario**: 30 patients, 70% success rate.
   - **Calculation**: 
     - Number of cured patients (\( Y \)) follows a binomial distribution.
     - Sample proportion: 
     \[ \hat{p} = \frac{Y}{30} \]

4. **Classroom Performance**:
   - **Scenario**: 40 students, 80% pass rate.
   - **Calculation**: 
     - Number of students passing (\( Y \)) follows a binomial distribution.
     - Sample proportion: 
     \[ \hat{p} = \frac{Y}{40} \]

5. **Hard Example**:
   - **Scenario**: 100 trials, 60% success rate.
   - **Calculation**: 
     - Number of successes (\( Y \)) follows a binomial distribution.
     - Sample proportion: 
     \[ \hat{p} = \frac{Y}{100} \]

**Traits to Look For**:
- Keywords like "sample proportion," "scaled binomial."
- Scenarios involving proportions derived from binomial distributions.

---

#### **2.4.6 Poisson Distribution**

**Definition**: The Poisson distribution models the number of events occurring in a fixed interval of time or space.
- **Parameters**: 
  - \( \lambda \): The average number of events in the interval

**Poisson Probability Mass Function (PMF)**:
\[ P(Y = y) = \frac{\lambda^y e^{-\lambda}}{y!} \]
- **Where**:
  - \( \lambda \): Average number of events
  - \( y \): Number of events

**Variables**:
- \( Y \): Number of events
- \( \lambda \): Average number of events
- \( y \): Specific number of events

**Case Examples**:
1. **Number of Calls**:
   - **Scenario**: Number of calls received in an hour, \( \lambda = 10 \).
   - **Calculation**:
     - Probability of receiving exactly 8 calls:
     \[ P(Y = 8) = \frac{10^8 e^{-10}}{8!} \approx 0.1126 \]

2. **Number of Emails**:
   - **Scenario**: Number of emails received in a day, \( \lambda = 20 \).
   - **Calculation**:
     - Probability of receiving exactly 15 emails:
     \[ P(Y = 15) = \frac{20^{15} e^{-20}}{15!} \approx 0.0516 \]

3. **Machine Failures**:
   - **Scenario**: Number of machine failures in a month, \( \lambda = 3 \).
   - **Calculation**:
     - Probability of exactly 2 failures:
     \[ P(Y = 2) = \frac{3^2 e^{-3}}{2!} \approx 0.2240 \]

4. **Customer Arrivals**:
   - **Scenario**: Number of customer arrivals in an hour, \( \lambda = 5 \).
   - **Calculation**:
     - Probability of exactly 7 arrivals:
     \[ P(Y = 7) = \frac{5^7 e^{-5}}{7!} \approx 0.1044 \]

5. **Hard Example**:
   - **Scenario**: Number of earthquakes in a year, \( \lambda = 1.5 \).
   - **Calculation**:
     - Probability of exactly 3 earthquakes:
     \[ P(Y = 3) = \frac{1.5^3 e^{-1.5}}{3!} \approx 0.1255 \]

**Mean**:
- **Formula**: 


\[ \mu = \lambda \]
- **Explanation**: The average number of events in the interval.

**Variance**:
- **Formula**: 
\[ \sigma^2 = \lambda \]
- **Explanation**: The measure of dispersion in the number of events.

**Skewness**:
- **Formula**: 
\[ \text{Skewness} = \frac{1}{\sqrt{\lambda}} \]
- **Explanation**: Indicates the asymmetry of the distribution. Positive skewness means the tail is on the right.

**Traits to Look For**:
- Keywords like "number of events," "fixed interval," "Poisson distribution."
- Scenarios involving counting events in a fixed time or space.

---

#### **2.4.7 Poisson Variability and Overdispersion**

**Variability**:
- **Formula**: 
\[ \sigma^2 = \lambda \]
- **Explanation**: The measure of dispersion in the number of events.

**Overdispersion**: When the observed variance is greater than the mean, indicating that the data may not follow a Poisson distribution strictly.

**Case Examples**:
1. **Number of Calls**:
   - **Scenario**: Calls received per hour with \( \lambda = 10 \).
   - **Calculation**:
     - Variance: 
     \[ \sigma^2 = 10 \]

2. **Number of Emails**:
   - **Scenario**: Emails received per day with \( \lambda = 20 \).
   - **Calculation**:
     - Variance: 
     \[ \sigma^2 = 20 \]

3. **Machine Failures**:
   - **Scenario**: Failures per month with \( \lambda = 3 \).
   - **Calculation**:
     - Variance: 
     \[ \sigma^2 = 3 \]

4. **Customer Arrivals**:
   - **Scenario**: Customer arrivals per hour with \( \lambda = 5 \).
   - **Calculation**:
     - Variance: 
     \[ \sigma^2 = 5 \]

5. **Hard Example**:
   - **Scenario**: Earthquakes per year with \( \lambda = 1.5 \).
   - **Calculation**:
     - Variance: 
     \[ \sigma^2 = 1.5 \]

**Traits to Look For**:
- Keywords like "variability," "overdispersion."
- Scenarios involving the measure of dispersion in event counts.

---

### 2.5 Continuous Probability Distributions

#### **2.5.1 Normal Distribution**

**Definition**: The Normal distribution is a continuous probability distribution characterized by its bell-shaped curve.
- **Parameters**: 
  - \( \mu \): Mean
  - \( \sigma \): Standard deviation

**Normal Probability Density Function (PDF)**:
\[ f(y) = \frac{1}{\sigma \sqrt{2\pi}} e^{-\frac{(y-\mu)^2}{2\sigma^2}} \]

**Variables**:
- \( Y \): Continuous random variable
- \( \mu \): Mean
- \( \sigma \): Standard deviation
- \( f(y) \): Probability density function

**Properties**:
- Symmetrical around the mean
- Mean, median, and mode are equal
- Approximately 68% of the data falls within one standard deviation of the mean, 95% within two, and 99.7% within three.

**Case Examples**:
1. **Height Measurement**:
   - **Scenario**: Heights of students with mean \( \mu = 170 \) cm and \( \sigma = 10 \) cm.
   - **PDF Calculation**:
     - PDF at \( y = 175 \):
     \[ f(175) = \frac{1}{10 \sqrt{2\pi}} e^{-\frac{(175-170)^2}{2 \cdot 10^2}} \approx 0.0242 \]

2. **Weight Distribution**:
   - **Scenario**: Weights of adults with mean \( \mu = 75 \) kg and \( \sigma = 12 \) kg.
   - **PDF Calculation**:
     - PDF at \( y = 80 \):
     \[ f(80) = \frac{1}{12 \sqrt{2\pi}} e^{-\frac{(80-75)^2}{2 \cdot 12^2}} \approx 0.0328 \]

3. **Test Scores**:
   - **Scenario**: Test scores with mean \( \mu = 70 \) and \( \sigma = 15 \).
   - **PDF Calculation**:
     - PDF at \( y = 85 \):
     \[ f(85) = \frac{1}{15 \sqrt{2\pi}} e^{-\frac{(85-70)^2}{2 \cdot 15^2}} \approx 0.0216 \]

4. **Daily Temperatures**:
   - **Scenario**: Daily temperatures with mean \( \mu = 25 \)°C and \( \sigma = 5 \)°C.
   - **PDF Calculation**:
     - PDF at \( y = 30 \):
     \[ f(30) = \frac{1}{5 \sqrt{2\pi}} e^{-\frac{(30-25)^2}{2 \cdot 5^2}} \approx 0.048 \]

5. **Hard Example**:
   - **Scenario**: Lifespan of electronic devices with mean \( \mu = 1000 \) hours and \( \sigma = 200 \) hours.
   - **PDF Calculation**:
     - PDF at \( y = 1100 \):
     \[ f(1100) = \frac{1}{200 \sqrt{2\pi}} e^{-\frac{(1100-1000)^2}{2 \cdot 200^2}} \approx 0.0018 \]

**Traits to Look For**:
- Keywords like "normal distribution," "bell-shaped curve," "mean," "standard deviation."
- Scenarios involving continuous random variables with a normal distribution.

---

#### **2.5.2 The Standard Normal Distribution**

**Definition**: The Standard Normal distribution is a normal distribution with a mean of 0 and a standard deviation of 1.
- **Z-Score**: 
\[ Z = \frac{Y - \mu}{\sigma} \]

**Variables**:
- \( Z \): Standardized variable
- \( \mu \): Mean of the original distribution
- \( \sigma \): Standard deviation of the original distribution

**Properties**:
- Mean = 0, Standard Deviation = 1
- Used to compare different normal distributions

**Case Examples**:
1. **Standardizing Heights**:
   - **Scenario**: Heights of students with mean \( \mu = 170 \) cm and \( \sigma = 10 \) cm.
   - **Calculation**: Standardize height \( y = 175 \):
     \[ Z = \frac{175 - 170}{10} = 0.5 \]

2. **Standardizing Test Scores**:
   - **Scenario**: Test scores with mean \( \mu = 70 \) and \( \sigma = 15 \).
   - **Calculation**: Standardize score \( y = 85 \):
     \[ Z = \frac{85 - 70}{15} = 1.0 \]

3. **Standardizing Weights**:
   - **Scenario**: Weights of adults with mean \( \mu = 75 \) kg and \( \sigma = 12 \) kg.
   - **Calculation**: Standardize weight \( y = 80 \):
     \[ Z = \frac{80 - 75}{12} \approx 0.42 \]

4. **Standardizing Temperatures**:
   - **Scenario**: Daily temperatures with mean \( \mu = 25 \)°C and \( \sigma = 5 \)°C.
   - **Calculation**: Standardize temperature \( y = 30 \):
     \[ Z = \frac{30 - 25}{5} = 1.0 \]

5. **Hard Example**:
   - **Scenario**: Lifespan of devices with mean \( \mu = 1000 \) hours and \( \sigma = 200 \) hours.
   - **Calculation**: Standardize lifespan \( y = 1200 \):
     \[ Z = \frac{1200 - 1000}{200} = 1.0 \]

**Traits to Look For**:
- Keywords like "standard normal distribution," "Z-score," "mean 0," "standard deviation 1."
- Scenarios involving standardizing data to compare different normal distributions.

---

#### **2.5.3 Examples: Finding Normal Probabilities and Percentiles**

**Finding Probabilities**:
- **Z-Score Calculation**: 
\[ Z = \frac{Y - \mu}{\sigma} \]
- **Using Z-Tables**: Convert Z-scores to probabilities.

**Case Examples**:
1. **Work Hours**:
   - **Scenario**: Work hours are normally distributed with mean \( \mu = 45 \) hours and \( \sigma = 15 \) hours.
   - **Task**: Find the proportion working between 50 and 70 hours.
   - **Calculation**:
     - Standardize 50 hours:
     \[ Z = \frac{50 - 45}{15} = 0.33 \]


     - Standardize 70 hours:
     \[ Z = \frac{70 - 45}{15} = 1.67 \]
     - Use Z-tables to find probabilities:
     \[ P(50 \leq Y \leq 70) = P(Z \leq 1.67) - P(Z \leq 0.33) \approx 0.9525 - 0.6293 = 0.3232 \]

2. **Height Measurement**:
   - **Scenario**: Heights of students with mean \( \mu = 170 \) cm and \( \sigma = 10 \) cm.
   - **Task**: Find the proportion between 160 and 180 cm.
   - **Calculation**:
     - Standardize 160 cm:
     \[ Z = \frac{160 - 170}{10} = -1.0 \]
     - Standardize 180 cm:
     \[ Z = \frac{180 - 170}{10} = 1.0 \]
     - Use Z-tables to find probabilities:
     \[ P(160 \leq Y \leq 180) = P(Z \leq 1.0) - P(Z \leq -1.0) \approx 0.8413 - 0.1587 = 0.6826 \]

3. **Test Scores**:
   - **Scenario**: Test scores with mean \( \mu = 70 \) and \( \sigma = 15 \).
   - **Task**: Find the proportion scoring between 60 and 90.
   - **Calculation**:
     - Standardize 60:
     \[ Z = \frac{60 - 70}{15} = -0.67 \]
     - Standardize 90:
     \[ Z = \frac{90 - 70}{15} = 1.33 \]
     - Use Z-tables to find probabilities:
     \[ P(60 \leq Y \leq 90) = P(Z \leq 1.33) - P(Z \leq -0.67) \approx 0.9082 - 0.2514 = 0.6568 \]

4. **Daily Temperatures**:
   - **Scenario**: Daily temperatures with mean \( \mu = 25 \)°C and \( \sigma = 5 \)°C.
   - **Task**: Find the proportion between 20 and 30°C.
   - **Calculation**:
     - Standardize 20°C:
     \[ Z = \frac{20 - 25}{5} = -1.0 \]
     - Standardize 30°C:
     \[ Z = \frac{30 - 25}{5} = 1.0 \]
     - Use Z-tables to find probabilities:
     \[ P(20 \leq Y \leq 30) = P(Z \leq 1.0) - P(Z \leq -1.0) \approx 0.8413 - 0.1587 = 0.6826 \]

5. **Hard Example**:
   - **Scenario**: Lifespan of devices with mean \( \mu = 1000 \) hours and \( \sigma = 200 \) hours.
   - **Task**: Find the proportion between 800 and 1200 hours.
   - **Calculation**:
     - Standardize 800 hours:
     \[ Z = \frac{800 - 1000}{200} = -1.0 \]
     - Standardize 1200 hours:
     \[ Z = \frac{1200 - 1000}{200} = 1.0 \]
     - Use Z-tables to find probabilities:
     \[ P(800 \leq Y \leq 1200) = P(Z \leq 1.0) - P(Z \leq -1.0) \approx 0.8413 - 0.1587 = 0.6826 \]

**Traits to Look For**:
- Keywords like "normal probabilities," "percentiles," "Z-score."
- Scenarios involving calculations of probabilities for normal distributions.

---

### Detailed Formulas and Simplified Explanations

#### **Binomial Distribution**
- **Formula**: 
\[ P(Y = y) = \binom{n}{y} \pi^y (1-\pi)^{n-y} \]
  - **Simplified**: The probability of getting exactly \( y \) successes in \( n \) trials, each with a success probability \( \pi \).

#### **Poisson Distribution**
- **Formula**: 
\[ P(Y = y) = \frac{\lambda^y e^{-\lambda}}{y!} \]
  - **Simplified**: The probability of \( y \) events occurring in a fixed interval, given an average rate of \( \lambda \) events.

#### **Normal Distribution**
- **Formula**: 
\[ f(y) = \frac{1}{\sigma \sqrt{2\pi}} e^{-\frac{(y-\mu)^2}{2\sigma^2}} \]
  - **Simplified**: The probability density of a normal distribution with mean \( \mu \) and standard deviation \( \sigma \).

#### **Standard Normal Distribution**
- **Z-Score Formula**: 
\[ Z = \frac{Y - \mu}{\sigma} \]
  - **Simplified**: The number of standard deviations \( Y \) is from the mean \( \mu \).

---