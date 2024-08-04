
---

## Detailed Study Guide for "Probability Distributions"

### Agenda
- **2.1**: Introduction to Probability
- **2.2**: Random Variables and Probability Distribution
- **2.3**: Expectations of Random Variables

---

### 2.1 Introduction to Probability

#### **2.1.1 Probabilities and Long-Run Frequencies**

**Definition**: Probability is a measure of how likely an event is to occur. It ranges from 0 (impossible event) to 1 (certain event).

**Formula**: 
\[ P(A) = \frac{\text{Number of favorable outcomes}}{\text{Total number of possible outcomes}} \]

**Example**: The probability of drawing an Ace from a standard deck of cards.
- **Favorable outcomes (Aces)**: 4
- **Total possible outcomes (cards)**: 52
\[ P(\text{Ace}) = \frac{4}{52} = \frac{1}{13} \approx 0.077 \]

**Variables**:
- \( P(A) \): Probability of event A occurring.
- Number of favorable outcomes: Specific outcomes we are interested in.
- Total number of possible outcomes: All possible outcomes of the experiment.

**Case Example: Weather Forecast**
1. **Information**: The probability of rain tomorrow is 0.20.
2. **Description**: Over many days, it would rain on 20% of those days.
3. **Simulation**: Simulate 10,000 days to see how often it rains.
   - **Python Code**: `np.random.choice([0, 1], size=10000, p=[0.8, 0.2])`
   - **Explanation**: 0 represents no rain, and 1 represents rain. The probability of rain is 0.20.

**Calculation Steps**:
1. Identify the event and its probability: Rain tomorrow, \( P(\text{rain}) = 0.20 \).
2. Set up the simulation: Use a random number generator to simulate multiple trials.
3. Interpret the results: The number of rainy days should be close to 20% of the total trials.

---

#### **2.1.2 Sample Spaces and Events**

**Sample Space (S)**: The set of all possible outcomes of an experiment.
- **Example**: Flipping a coin twice results in S = \{(H, H), (H, T), (T, H), (T, T)\}.

**Event (E)**: A subset of the sample space.
- **Example**: Event of getting two heads (E) = \{(H, H)\}.

**Finding Sample Space Size (n(S))**:
1. **Coin Flip**: 
   - Each coin flip has 2 outcomes (H, T).
   - For 2 flips: \( n(S) = 2^2 = 4 \).

2. **Dice Roll**:
   - A single die has 6 outcomes (1, 2, 3, 4, 5, 6).
   - For 2 rolls: \( n(S) = 6^2 = 36 \).

3. **Dice Roll with Constraints (e.g., getting 3, 4, or 5 in any order)**:
   - Calculate combinations if order matters or specific outcomes are needed.

**Permutations and Combinations**:
- **Permutation**: Order matters.
  - Formula: \( P(n, r) = \frac{n!}{(n-r)!} \)
  - Example: Arranging 3 letters A, B, C: \( P(3, 3) = 3! = 6 \)

- **Combination**: Order does not matter.
  - Formula: \( C(n, r) = \frac{n!}{r!(n-r)!} \)
  - Example: Choosing 2 letters from A, B, C: \( C(3, 2) = \frac{3!}{2!(3-2)!} = 3 \)

**Case Examples**:
1. **Flipping Coins**:
   - **Scenario**: Flipping two coins.
   - **Sample Space**: S = \{(H, H), (H, T), (T, H), (T, T)\}
   - **Size**: \( n(S) = 4 \)

2. **Rolling Dice**:
   - **Scenario**: Rolling a die twice.
   - **Sample Space**: S = \{(1, 1), (1, 2), ..., (6, 5), (6, 6)\}
   - **Size**: \( n(S) = 36 \)

3. **Rolling Dice with Constraints**:
   - **Scenario**: Rolling a die, getting 3, 4, or 5 in any order.
   - **Sample Space**: S = \{(3, 4, 5), (3, 5, 4), (4, 3, 5), (4, 5, 3), (5, 3, 4), (5, 4, 3)\}
   - **Size**: \( n(S) = 6 \) (Permutations of 3 elements)

4. **Permutations of Letters**:
   - **Scenario**: Arranging letters A, B, C.
   - **Calculation**: \( P(3, 3) = 3! = 6 \)
   - **Results**: \{ABC, ACB, BAC, BCA, CAB, CBA\}

5. **Combinations of Letters**:
   - **Scenario**: Choosing 2 letters from A, B, C.
   - **Calculation**: \( C(3, 2) = \frac{3!}{2!1!} = 3 \)
   - **Results**: \{AB, AC, BC\}

**Hard Example**:
6. **Rolling Dice in Exact Order**:
   - **Scenario**: Rolling a die three times to get the exact order (3, 4, 5).
   - **Calculation**: There is only 1 way to get this exact order.
   - **Probability**: \( P(\text{Exact Order}) = \frac{1}{6^3} = \frac{1}{216} \approx 0.0046 \)

**Traits to Look For**:
- Keywords like "sample space," "outcomes," "possible results."
- Scenarios describing all possible results of an experiment.

---

#### **2.1.3 Probability Axioms and Implied Probability Rules**

**Axioms of Probability**:
1. **Non-negativity**: \( P(E) \geq 0 \) for any event E.
2. **Normalization**: \( P(S) = 1 \) where S is the sample space.
3. **Additivity**: For any two mutually exclusive events \( A \) and \( B \), \( P(A \cup B) = P(A) + P(B) \).

**Complementary Rule**: The probability of an event not occurring is 1 minus the probability of it occurring.
- **Formula**: \( P(A') = 1 - P(A) \)
- **Example**: If the probability of making a correct inference is 0.95, then the probability of making a wrong inference is \( P(\text{wrong inference}) = 1 - 0.95 = 0.05 \).

**Variables**:
- \( P(E) \): Probability of event E.
- \( P(A') \): Probability of the complement of event A.

**Case Examples**:
1. **Complementary Probability**:
   - **Information**: Probability of making a correct inference is 0.95.
   - **Calculation**: \( P(\text{wrong inference}) = 1 - 0.95 = 0.05 \).

2. **Mutually Exclusive Events**:
   - **Scenario**: Drawing a card that is either a heart or a spade.
   - **Calculation**: \( P(\text{Heart} \cup \text{Spade}) = P(\text{Heart}) + P(\text{Spade}) \).
   - **Result**: \( \frac{13}{52} + \frac{13}{52} = \frac{26}{52} = 0.5 \).

3. **Non-Mutually Exclusive Events**:
   - **Scenario**: Drawing a card that is a heart or a face card.
   - **Calculation**: Use \( P(A \cup B) = P(A) + P(B) - P(A \cap B) \).
   - **Result**: \( \frac{13}{52} + \frac{12}{52} - \frac{3}{52} = \frac{22}{52} \approx 0.423 \).

4. **Normalization**:
   - **Scenario**: Total probability in a sample space.
   - **Calculation**: \( P(S) = 1 \).
   - **Result**: Sum of probabilities of all possible outcomes must equal 1.

5. **Additivity for Multiple Events**:
   - **Scenario**: Probability of drawing a card that is an Ace, King, or Queen.
   - **Calculation**: \( P(A \cup K \cup Q)

 = P(A) + P(K) + P(Q) \) (if events are mutually exclusive).
   - **Result**: \( \frac{4}{52} + \frac{4}{52} + \frac{4}{52} = \frac{12}{52} \approx 0.231 \).

**Hard Example**:
6. **Complex Event Calculation**:
   - **Scenario**: Probability of rolling two dice and getting a sum of 7 or 11.
   - **Sample Space**: 36 possible outcomes.
   - **Favorable Outcomes**: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1) for 7; (5,6), (6,5) for 11.
   - **Calculation**: \( P(7 \cup 11) = \frac{6}{36} + \frac{2}{36} = \frac{8}{36} \approx 0.222 \).

**Traits to Look For**:
- Keywords like "complement," "not occurring," "opposite event."
- Scenarios describing mutually exclusive or non-exclusive events.

---

#### **2.1.4 Example: Diagnostics for Disease Screening**

**Disease Screening**:
- **Positive Test (+)**: Indicates the presence of a disease.
- **True Disease Status (D)**: Can be yes (D) or no (\( D^C \)).

**Truth Table for Disease Screening**:
|          | Prediction + | Prediction - |
|----------|--------------|--------------|
| True +   | True Positive | False Negative |
| True -   | False Positive | True Negative |

**Calculations**:
- **True Positive Rate (Sensitivity)**: \( \frac{TP}{TP + FN} \)
- **False Positive Rate**: \( \frac{FP}{FP + TN} \)

**Variables**:
- **TP**: True Positives.
- **FN**: False Negatives.
- **FP**: False Positives.
- **TN**: True Negatives.

**Case Examples**:
1. **Simple Calculation**:
   - **Information**: 80 true positives, 20 false negatives.
   - **Calculation**: Sensitivity = \( \frac{TP}{TP + FN} = \frac{80}{80+20} = 0.80 \).

2. **False Positive Rate**:
   - **Information**: 15 false positives, 85 true negatives.
   - **Calculation**: False Positive Rate = \( \frac{FP}{FP + TN} = \frac{15}{15+85} = 0.15 \).

3. **Combined Calculation**:
   - **Information**: 100 tests, 40 TP, 10 FN, 5 FP, 45 TN.
   - **Sensitivity**: \( \frac{40}{40+10} = 0.80 \).
   - **False Positive Rate**: \( \frac{5}{5+45} = 0.10 \).

4. **Understanding the Table**:
   - **Scenario**: 200 tests, 50 TP, 30 FN, 20 FP, 100 TN.
   - **Sensitivity**: \( \frac{50}{50+30} = 0.625 \).
   - **False Positive Rate**: \( \frac{20}{20+100} = 0.167 \).

5. **Complex Scenario**:
   - **Scenario**: 500 tests, disease prevalence 10%, sensitivity 90%, false positive rate 5%.
   - **Calculation**: 
     - True Positives = 45, False Negatives = 5.
     - False Positives = 23.75, True Negatives = 426.25.
     - Sensitivity = \( \frac{45}{50} = 0.90 \).
     - False Positive Rate = \( \frac{23.75}{23.75+426.25} \approx 0.053 \).

**Hard Example**:
6. **Combining Sensitivity and Specificity**:
   - **Scenario**: Test with sensitivity 0.95 and specificity 0.90.
   - **Disease prevalence**: 5%.
   - **Calculation**:
     - True Positives (TP): \( 0.05 \times 0.95 \).
     - False Negatives (FN): \( 0.05 \times 0.05 \).
     - True Negatives (TN): \( 0.95 \times 0.90 \).
     - False Positives (FP): \( 0.95 \times 0.10 \).
   - **Result**: TP = 0.0475, FN = 0.0025, TN = 0.855, FP = 0.095.

**Traits to Look For**:
- Keywords like "diagnostic test," "sensitivity," "false positive."
- Scenarios describing true/false positives and negatives.

---

#### **2.1.5 Bayes’ Theorem**

**Bayes' Theorem**: Provides a way to update probabilities based on new evidence.
- **Formula**: 
\[ P(A|B) = \frac{P(B|A) \cdot P(A)}{P(B)} \]
- **Example**: Estimating the probability of a disease given a positive test result.

**Variables**:
- \( P(A|B) \): Probability of event A given event B.
- \( P(B|A) \): Probability of event B given event A.
- \( P(A) \): Probability of event A.
- \( P(B) \): Probability of event B.

**Case Examples**:
1. **Simple Calculation**:
   - **Scenario**: Probability of having a disease given a positive test result.
   - **Information**: 
     - \( P(\text{Disease}) = 0.01 \)
     - \( P(\text{Positive Test}|\text{Disease}) = 0.99 \)
     - \( P(\text{Positive Test}) = 0.05 \)
   - **Calculation**:
     - \( P(\text{Disease}|\text{Positive Test}) = \frac{P(\text{Positive Test}|\text{Disease}) \cdot P(\text{Disease})}{P(\text{Positive Test})} \)
     - \( P(\text{Disease}|\text{Positive Test}) = \frac{0.99 \times 0.01}{0.05} = 0.198 \)

2. **Inverse Probability**:
   - **Scenario**: Given probability of symptoms given disease.
   - **Information**: 
     - \( P(\text{Symptoms}|\text{Disease}) = 0.80 \)
     - \( P(\text{Symptoms}) = 0.10 \)
     - \( P(\text{Disease}) = 0.02 \)
   - **Calculation**:
     - \( P(\text{Disease}|\text{Symptoms}) = \frac{P(\text{Symptoms}|\text{Disease}) \cdot P(\text{Disease})}{P(\text{Symptoms})} \)
     - \( P(\text{Disease}|\text{Symptoms}) = \frac{0.80 \times 0.02}{0.10} = 0.16 \)

3. **Multiple Conditions**:
   - **Scenario**: Updating probability with additional evidence.
   - **Information**:
     - \( P(A) = 0.10 \)
     - \( P(B|A) = 0.70 \)
     - \( P(C|B) = 0.80 \)
     - \( P(C) = 0.50 \)
   - **Calculation**:
     - First, find \( P(B) \): \( P(B) = P(B|A) \cdot P(A) + P(B|A') \cdot P(A') = 0.70 \times 0.10 + 0.20 \times 0.90 = 0.07 + 0.18 = 0.25 \)
     - Then find \( P(A|C) \): \( P(A|C) = \frac{P(C|B) \cdot P(B|A) \cdot P(A)}{P(C)} = \frac{0.80 \times 0.70 \times 0.10}{0.50} = 0.112 \)

4. **Conditional Probability**:
   - **Scenario**: Disease and test reliability.
   - **Information**:
     - \( P(\text{Disease}) = 0.02 \)
     - \( P(\text{Test Positive}|\text{Disease}) = 0.95 \)
     - \( P(\text{Test Positive}|\text{No Disease}) = 0.10 \)
   - **Calculation**:
     - \( P(\text{Disease}|\text{Test Positive}) = \frac{P(\text{Test Positive}|\text{Disease}) \cdot P(\text{Disease})}{P(\text{Test Positive})} \)
     - Find \( P(\text{Test Positive}) \): \( P(\text{Test Positive}) = P(\text{Test Positive}|\text{Disease}) \cdot P(\text{Disease}) + P(\text{Test Positive}|\text{No Disease}) \cdot P(\text{No Disease}) = 0.95 \times 0.02 + 0.10 \times 0.98 = 0.019 + 

0.098 = 0.117 \)
     - Then \( P(\text{Disease}|\text{Test Positive}) = \frac{0.95 \times 0.02}{0.117} \approx 0.162 \)

5. **Hard Example**:
   - **Scenario**: Combining multiple probabilities.
   - **Information**:
     - \( P(A) = 0.10 \)
     - \( P(B|A) = 0.70 \)
     - \( P(C|A \cap B) = 0.80 \)
     - \( P(C) = 0.50 \)
   - **Calculation**:
     - First, find \( P(A \cap B) \): \( P(A \cap B) = P(B|A) \cdot P(A) = 0.70 \times 0.10 = 0.07 \)
     - Then, find \( P(C|A \cap B) \): \( P(C|A \cap B) = \frac{P(A \cap B) \cdot P(C|A \cap B)}{P(C)} = \frac{0.07 \times 0.80}{0.50} = 0.112 \)

**Traits to Look For**:
- Keywords like "given," "conditional probability," "Bayes' Theorem."
- Scenarios involving updating probabilities based on new evidence.

---

#### **2.1.6 Multiplicative Law of Probability and Independent Events**

**Multiplicative Law**: For independent events \( A \) and \( B \), the probability that both occur is the product of their individual probabilities.
- **Formula**: 
\[ P(A \cap B) = P(A) \cdot P(B) \]
- **Example**: Probability of two independent correct inferences.

**Variables**:
- \( P(A \cap B) \): Probability of both events A and B occurring.
- \( P(A) \): Probability of event A.
- \( P(B) \): Probability of event B.

**Case Examples**:
1. **Simple Independent Events**:
   - **Scenario**: Flipping two coins.
   - **Calculation**:
     - \( P(\text{H on 1st flip}) = 0.5 \)
     - \( P(\text{H on 2nd flip}) = 0.5 \)
     - \( P(\text{H on both flips}) = 0.5 \times 0.5 = 0.25 \)

2. **Dice Roll**:
   - **Scenario**: Rolling two dice, both showing 3.
   - **Calculation**:
     - \( P(\text{3 on 1st die}) = \frac{1}{6} \)
     - \( P(\text{3 on 2nd die}) = \frac{1}{6} \)
     - \( P(\text{3 on both dice}) = \frac{1}{6} \times \frac{1}{6} = \frac{1}{36} \)

3. **Drawing Cards**:
   - **Scenario**: Drawing two cards from a deck with replacement, both are Aces.
   - **Calculation**:
     - \( P(\text{Ace on 1st draw}) = \frac{4}{52} \)
     - \( P(\text{Ace on 2nd draw}) = \frac{4}{52} \)
     - \( P(\text{Ace on both draws}) = \frac{4}{52} \times \frac{4}{52} = \frac{16}{2704} = \frac{1}{169} \)

4. **Independent Test Scores**:
   - **Scenario**: Probability of passing two independent tests.
   - **Calculation**:
     - \( P(\text{Pass 1st test}) = 0.8 \)
     - \( P(\text{Pass 2nd test}) = 0.75 \)
     - \( P(\text{Pass both tests}) = 0.8 \times 0.75 = 0.6 \)

5. **Hard Example**:
   - **Scenario**: Probability of drawing a red card and rolling a 5.
   - **Calculation**:
     - \( P(\text{Red card}) = \frac{26}{52} = 0.5 \)
     - \( P(\text{Rolling a 5}) = \frac{1}{6} \)
     - \( P(\text{Red card and rolling a 5}) = 0.5 \times \frac{1}{6} = \frac{1}{12} \approx 0.083 \)

**Traits to Look For**:
- Keywords like "independent events," "both occur," "multiplicative."
- Scenarios involving the product of probabilities.

---

### 2.2 Random Variables and Probability Distributions

#### **Random Variables**

**Random Variable (Y)**: A variable that takes on numerical values based on the outcomes of a random phenomenon.
- **Example**: Number of people favoring legalization.
- **Types**:
  - **Discrete Random Variable**: Takes distinct, separate values.
  - **Continuous Random Variable**: Takes any value within a range.

**Variables**:
- \( Y \): Random variable.
- \( y \): Possible value of the random variable.
- \( P(Y=y) \): Probability that the random variable Y takes value y.

**Probability Distribution**
- **Discrete Probability Distribution**: Describes probabilities for discrete random variables using a Probability Mass Function (PMF).
- **Continuous Probability Distribution**: Describes probabilities for continuous random variables using a Probability Density Function (PDF).

**Case Examples**:
1. **Coin Flips (Discrete)**:
   - **Scenario**: Number of heads in 3 coin flips.
   - **Possible Values**: 0, 1, 2, 3 heads.
   - **PMF Calculation**:
     - \( P(Y=0) = \frac{1}{8}, P(Y=1) = \frac{3}{8}, P(Y=2) = \frac{3}{8}, P(Y=3) = \frac{1}{8} \)

2. **Survey Results (Discrete)**:
   - **Scenario**: Number of people agreeing in a 4-person survey.
   - **Possible Values**: 0, 1, 2, 3, 4 agreements.
   - **PMF Calculation**: Based on survey data or binomial distribution.

3. **Height Measurement (Continuous)**:
   - **Scenario**: Height of students in a class.
   - **Range**: 150 cm to 200 cm.
   - **PDF Calculation**: Using normal distribution parameters (mean, standard deviation).

4. **Time to Complete Task (Continuous)**:
   - **Scenario**: Time taken to complete a task.
   - **Range**: 30 minutes to 90 minutes.
   - **PDF Calculation**: Using exponential or normal distribution.

5. **Hard Example**:
   - **Scenario**: Number of customers arriving in an hour (Poisson distribution).
   - **Possible Values**: 0, 1, 2, 3, ...
   - **PMF Calculation**: 
     - \( P(Y=k) = \frac{e^{-\lambda} \lambda^k}{k!} \)
     - Given \( \lambda = 10 \), calculate \( P(Y=0), P(Y=1), P(Y=2) \), etc.

**Traits to Look For**:
- Keywords like "random variable," "possible values," "probability."
- Scenarios describing outcomes based on random phenomena.

---

#### **2.2.1 Probability Distributions for Discrete Random Variables**

**Discrete Random Variable**: A variable that takes distinct, separate values, typically integers.
- **Example**: Number of heads in two coin flips.

**Variables**:
- \( Y \): Discrete random variable.
- \( y \): Possible values (e.g., 0, 1, 2).
- \( P(Y=y) \): Probability that Y takes value y.

**Probability Mass Function (PMF)**:
- **Formula**: 
\[ P(Y=y) = \text{Pr}(Y=y) \]
  - **Example**: For flipping two coins, Y can be 0, 1, or 2 heads.

**Case Examples**:
1. **Flipping Coins**:
   - **Scenario**: Identifying the number of heads.
   - **Possible Values**: 0, 1, 2 heads.
   - **PMF Calculation**:
     - \( P(Y=0) = \frac{1}{4}, P(Y=1) = \frac{2}{4}, P(Y=2) = \frac{1}{4} \)

2. **Survey on Agreement**:
   - **Scenario**: Asking three people for their agreement.
   - **Possible Values**: 0, 1, 2, 3 agreements.
   - **PMF Calculation**: Based on survey results.

3. **Rolling a Die**:
   - **Scenario**: Number of times a 4 appears in 5 rolls.
   - **Possible Values**: 0, 1, 2, 3, 4, 5.
   - **PMF Calculation**: Using binomial distribution.

4. **Number of Calls Received**:
   - **Scenario**: Calls received by a call center in an hour.
   - **Possible Values**: 0, 1, 2,

 3, ...
   - **PMF Calculation**: Using Poisson distribution.

5. **Hard Example**:
   - **Scenario**: Number of students passing an exam in a class of 30.
   - **Possible Values**: 0, 1, 2, ..., 30.
   - **PMF Calculation**:
     - Using binomial distribution with \( n = 30 \) and probability of passing \( p = 0.8 \).
     - \( P(Y=k) = \binom{30}{k} (0.8)^k (0.2)^{30-k} \) for \( k = 0, 1, 2, ..., 30 \).

**Traits to Look For**:
- Keywords like "number of," "discrete values," "count."
- Scenarios involving distinct, separate values.

---

#### **2.2.2 Example: Geometric Probability Distribution**

**Geometric Distribution**: Models the number of trials until the first success.
- **PMF**: 
\[ P(Y=y) = (1-\pi)^{y-1} \pi \]
- **Example**: Probability of winning a game for the first time on the \( y \)-th trial.

**Variables**:
- \( Y \): Number of trials until first success.
- \( y \): Specific trial number.
- \( \pi \): Probability of success on each trial.
- \( P(Y=y) \): Probability of achieving the first success on the \( y \)-th trial.

**Case Examples**:
1. **Winning a Game**:
   - **Scenario**: Probability of winning on the 3rd trial.
   - **Information**: Probability of winning a game \( \pi = 0.2 \).
   - **Calculation**:
     - \( P(Y=3) = (1-0.2)^{3-1} \cdot 0.2 = 0.8^2 \cdot 0.2 = 0.128 \).

2. **First Successful Call**:
   - **Scenario**: Number of calls needed to reach a person.
   - **Information**: Probability of reaching a person on each call \( \pi = 0.1 \).
   - **Calculation**:
     - \( P(Y=5) = (1-0.1)^{5-1} \cdot 0.1 = 0.9^4 \cdot 0.1 = 0.06561 \).

3. **First Heads in Coin Flips**:
   - **Scenario**: Number of flips until first heads.
   - **Information**: Probability of heads \( \pi = 0.5 \).
   - **Calculation**:
     - \( P(Y=4) = (1-0.5)^{4-1} \cdot 0.5 = 0.5^3 \cdot 0.5 = 0.0625 \).

4. **First Sales Conversion**:
   - **Scenario**: Number of calls to first sales conversion.
   - **Information**: Conversion rate \( \pi = 0.05 \).
   - **Calculation**:
     - \( P(Y=10) = (1-0.05)^{10-1} \cdot 0.05 = 0.95^9 \cdot 0.05 \approx 0.032 \).

5. **Hard Example**:
   - **Scenario**: Number of defective items until the first non-defective item.
   - **Information**: Probability of non-defective \( \pi = 0.99 \).
   - **Calculation**:
     - \( P(Y=20) = (1-0.99)^{20-1} \cdot 0.99 = 0.01^{19} \cdot 0.99 \approx 9.05 \times 10^{-41} \).

**Traits to Look For**:
- Keywords like "first success," "number of trials," "geometric distribution."
- Scenarios involving counting trials until the first success.

---

#### **2.2.3 Probability Distributions for Continuous Random Variables**

**Continuous Random Variable**: A variable that takes any value within a range.
- **Example**: Heights, weights, etc.
- **Probability Density Function (PDF)**: Describes the likelihood of a random variable taking on a range of values.
  - **Formula**: 
\[ P(a \leq Y \leq b) = \int_a^b f(y) dy \]
  - **Example**: Heights of students normally distributed.

**Variables**:
- \( Y \): Continuous random variable.
- \( f(y) \): Probability density function.
- \( a, b \): Interval endpoints.

**Case Examples**:
1. **Height Measurement**:
   - **Scenario**: Heights of students.
   - **Range**: 150 cm to 200 cm.
   - **PDF**: Normal distribution with mean \( \mu = 170 \), standard deviation \( \sigma = 10 \).
   - **Calculation**: 
     - \( P(160 \leq Y \leq 180) = \int_{160}^{180} \frac{1}{10\sqrt{2\pi}} e^{-\frac{(y-170)^2}{2 \cdot 10^2}} dy \).

2. **Weight Distribution**:
   - **Scenario**: Weights of adults.
   - **Range**: 50 kg to 100 kg.
   - **PDF**: Normal distribution with mean \( \mu = 75 \), standard deviation \( \sigma = 12 \).
   - **Calculation**:
     - \( P(60 \leq Y \leq 80) = \int_{60}^{80} \frac{1}{12\sqrt{2\pi}} e^{-\frac{(y-75)^2}{2 \cdot 12^2}} dy \).

3. **Time to Complete Task**:
   - **Scenario**: Time taken to complete a task.
   - **Range**: 30 minutes to 90 minutes.
   - **PDF**: Exponential distribution with rate \( \lambda = 0.05 \).
   - **Calculation**:
     - \( P(40 \leq Y \leq 70) = \int_{40}^{70} 0.05 e^{-0.05y} dy \).

4. **Temperature Measurement**:
   - **Scenario**: Daily temperatures.
   - **Range**: 10°C to 40°C.
   - **PDF**: Normal distribution with mean \( \mu = 25 \), standard deviation \( \sigma = 5 \).
   - **Calculation**:
     - \( P(20 \leq Y \leq 30) = \int_{20}^{30} \frac{1}{5\sqrt{2\pi}} e^{-\frac{(y-25)^2}{2 \cdot 5^2}} dy \).

5. **Hard Example**:
   - **Scenario**: Lifespan of electronic devices.
   - **Range**: 0 to 10 years.
   - **PDF**: Weibull distribution with shape parameter \( k = 1.5 \), scale parameter \( \lambda = 2 \).
   - **Calculation**:
     - \( P(1 \leq Y \leq 5) = \int_{1}^{5} \frac{1.5}{2} \left(\frac{y}{2}\right)^{0.5} e^{-(y/2)^{1.5}} dy \).

**Traits to Look For**:
- Keywords like "continuous," "range of values," "probability density."
- Scenarios involving probabilities over intervals.

---

#### **2.2.4 Example: Uniform Distribution**

**Uniform Distribution**: Equal probability for all values in a given range.
- **PDF**: 
\[ f(y) = \frac{1}{b-a} \text{ for } a \leq y \leq b \]
- **Example**: Time of arrival uniformly distributed between 5 and 15 minutes.

**Variables**:
- \( Y \): Uniform random variable.
- \( a, b \): Range endpoints.
- \( f(y) \): Probability density function.
- \( P(a \leq Y \leq b) \): Probability that Y falls within [a, b].

**Case Examples**:
1. **Uniform Distribution of Coach's Lateness**:
   - **Scenario**: Probability of being late if the coach is uniformly late between 5 and 15 minutes.
   - **Range**: 5 to 15 minutes.
   - **PDF Calculation**: 
\[ f(y) = \frac{1}{15-5} = 0.1 \]
   - **Probability Calculation**: 
\[ P(12 \leq Y \leq 15) = (15-12) \cdot 0.1 = 0.3 \]

2. **Uniform Distribution of Arrival Time**:
   - **Scenario**: Arrival time uniformly distributed between 8 AM and 10 AM.
   - **Range**: 8 to 10 AM.
   - **PDF Calculation**:
\[ f(y) = \frac{1}{2} = 0.5 \]
   - **Probability Calculation**:
\[ P(9 \leq Y \leq 10) = (10-9) \cdot 0.5 = 0.5 \]

3. **Uniform Distribution of Exam Scores**:


   - **Scenario**: Exam scores uniformly distributed between 50 and 100.
   - **Range**: 50 to 100.
   - **PDF Calculation**:
\[ f(y) = \frac{1}{100-50} = 0.02 \]
   - **Probability Calculation**:
\[ P(70 \leq Y \leq 90) = (90-70) \cdot 0.02 = 0.4 \]

4. **Uniform Distribution of Production Time**:
   - **Scenario**: Time to produce a product uniformly distributed between 1 and 3 hours.
   - **Range**: 1 to 3 hours.
   - **PDF Calculation**:
\[ f(y) = \frac{1}{3-1} = 0.5 \]
   - **Probability Calculation**:
\[ P(1.5 \leq Y \leq 2.5) = (2.5-1.5) \cdot 0.5 = 0.5 \]

5. **Hard Example**:
   - **Scenario**: Waiting time for a bus uniformly distributed between 0 and 20 minutes.
   - **Range**: 0 to 20 minutes.
   - **PDF Calculation**:
\[ f(y) = \frac{1}{20-0} = 0.05 \]
   - **Probability Calculation**:
\[ P(5 \leq Y \leq 15) = (15-5) \cdot 0.05 = 0.5 \]

**Traits to Look For**:
- Keywords like "uniform distribution," "equal probability," "range."
- Scenarios involving equal likelihood within a specified range.

---

#### **2.2.5 Probability Functions and Cumulative Distribution Function**

**Cumulative Distribution Function (CDF)**: Cumulative probability up to a value \( y \).
- **For Discrete Variables**: 
\[ F(y) = \sum_{t \leq y} P(Y=t) \]
- **For Continuous Variables**: 
\[ F(y) = \int_{-\infty}^y f(t) dt \]

**Variables**:
- \( F(y) \): Cumulative distribution function.
- \( f(y) \): Probability density function.
- \( P(Y \leq y) \): Cumulative probability.

**Case Examples**:
1. **Discrete CDF Calculation**:
   - **Scenario**: Number of heads in 3 coin flips.
   - **Possible Values**: 0, 1, 2, 3 heads.
   - **PMF**: 
\[ P(Y=0) = \frac{1}{8}, P(Y=1) = \frac{3}{8}, P(Y=2) = \frac{3}{8}, P(Y=3) = \frac{1}{8} \]
   - **CDF Calculation**:
\[ F(0) = P(Y=0) = 0.125 \]
\[ F(1) = P(Y=0) + P(Y=1) = 0.125 + 0.375 = 0.5 \]
\[ F(2) = P(Y=0) + P(Y=1) + P(Y=2) = 0.5 + 0.375 = 0.875 \]
\[ F(3) = P(Y=0) + P(Y=1) + P(Y=2) + P(Y=3) = 0.875 + 0.125 = 1.0 \]

2. **Continuous CDF Calculation**:
   - **Scenario**: Heights of students normally distributed.
   - **Range**: 150 cm to 200 cm.
   - **PDF**: Normal distribution with mean \( \mu = 170 \), standard deviation \( \sigma = 10 \).
   - **CDF Calculation**:
\[ F(y) = \int_{-\infty}^y \frac{1}{10\sqrt{2\pi}} e^{-\frac{(t-170)^2}{2 \cdot 10^2}} dt \]

3. **Poisson Distribution**:
   - **Scenario**: Number of calls received by a call center in an hour.
   - **Possible Values**: 0, 1, 2, 3, ...
   - **PMF**: Using Poisson distribution with rate \( \lambda = 10 \).
   - **CDF Calculation**: Sum of Poisson probabilities up to y.

4. **Exponential Distribution**:
   - **Scenario**: Time taken to complete a task.
   - **Range**: 30 minutes to 90 minutes.
   - **PDF**: Exponential distribution with rate \( \lambda = 0.05 \).
   - **CDF Calculation**:
\[ F(y) = \int_{0}^y 0.05 e^{-0.05t} dt \]

5. **Hard Example**:
   - **Scenario**: Lifespan of electronic devices.
   - **Range**: 0 to 10 years.
   - **PDF**: Weibull distribution with shape parameter \( k = 1.5 \), scale parameter \( \lambda = 2 \).
   - **CDF Calculation**:
\[ F(y) = \int_{0}^y \frac{1.5}{2} \left(\frac{t}{2}\right)^{0.5} e^{-(t/2)^{1.5}} dt \]

**Traits to Look For**:
- Keywords like "cumulative probability," "CDF," "sum," "integrate."
- Scenarios involving the accumulation of probabilities.

---

#### **2.2.6 Example: Exponential Random Variable**

**Exponential Distribution**: Models the time between events in a Poisson process.
- **PDF**: 
\[ f(y) = \lambda e^{-\lambda y} \text{ for } y \geq 0 \]
- **Example**: Time until the next customer arrives.

**Variables**:
- \( Y \): Exponential random variable.
- \( \lambda \): Rate parameter.
- \( f(y) \): Probability density function.

**Case Examples**:
1. **Time Between Customers**:
   - **Scenario**: Time until the next customer arrives.
   - **Rate**: \( \lambda = 0.1 \) customers per minute.
   - **PDF Calculation**:
\[ f(y) = 0.1 e^{-0.1y} \]
   - **Probability Calculation**:
\[ P(5 \leq Y \leq 10) = \int_{5}^{10} 0.1 e^{-0.1y} dy \]

2. **Time Between Phone Calls**:
   - **Scenario**: Time between phone calls.
   - **Rate**: \( \lambda = 0.2 \) calls per minute.
   - **PDF Calculation**:
\[ f(y) = 0.2 e^{-0.2y} \]
   - **Probability Calculation**:
\[ P(3 \leq Y \leq 7) = \int_{3}^{7} 0.2 e^{-0.2y} dy \]

3. **Time Until Failure**:
   - **Scenario**: Time until a machine fails.
   - **Rate**: \( \lambda = 0.05 \) failures per hour.
   - **PDF Calculation**:
\[ f(y) = 0.05 e^{-0.05y} \]
   - **Probability Calculation**:
\[ P(10 \leq Y \leq 20) = \int_{10}^{20} 0.05 e^{-0.05y} dy \]

4. **Lifetime of a Light Bulb**:
   - **Scenario**: Lifetime of a light bulb.
   - **Rate**: \( \lambda = 0.02 \) failures per hour.
   - **PDF Calculation**:
\[ f(y) = 0.02 e^{-0.02y} \]
   - **Probability Calculation**:
\[ P(50 \leq Y \leq 100) = \int_{50}^{100} 0.02 e^{-0.02y} dy \]

5. **Hard Example**:
   - **Scenario**: Time until the next earthquake.
   - **Rate**: \( \lambda = 0.01 \) earthquakes per day.
   - **PDF Calculation**:
\[ f(y) = 0.01 e^{-0.01y} \]
   - **Probability Calculation**:
\[ P(30 \leq Y \leq 60) = \int_{30}^{60} 0.01 e^{-0.01y} dy \]

**Traits to Look For**:
- Keywords like "time between events," "Poisson process," "exponential distribution."
- Scenarios involving the time until the next event occurs.

---

#### **2.2.7 Families of Probability Distributions Indexed by Parameters**

**Parameterization**: Different distributions can be indexed by parameters like mean and variance.
- **Examples**: Normal distribution (mean, variance), Binomial distribution (n, \(\pi\)).

**Variables**:
- **Mean (\(\mu\))**: Average value.
- **Variance (\(\sigma^2\))**: Measure of dispersion.

**Case Examples**:
1. **Normal Distribution**:
   - **Scenario**: Heights of students.
   - **Parameters**: Mean \( \mu = 170 \), Variance \( \sigma^2 = 100 \).
   - **PDF Calculation**:
\[ f(y

) = \frac{1}{\sqrt{2\pi \cdot 100}} e^{-\frac{(y-170)^2}{2 \cdot 100}} \]

2. **Binomial Distribution**:
   - **Scenario**: Number of heads in 10 coin flips.
   - **Parameters**: \( n = 10 \), \( \pi = 0.5 \).
   - **PMF Calculation**:
\[ P(Y=k) = \binom{10}{k} (0.5)^k (0.5)^{10-k} \text{ for } k = 0, 1, ..., 10 \]

3. **Poisson Distribution**:
   - **Scenario**: Number of calls received by a call center in an hour.
   - **Parameter**: Rate \( \lambda = 10 \).
   - **PMF Calculation**:
\[ P(Y=k) = \frac{e^{-10} \cdot 10^k}{k!} \text{ for } k = 0, 1, 2, ... \]

4. **Exponential Distribution**:
   - **Scenario**: Time between phone calls.
   - **Parameter**: Rate \( \lambda = 0.2 \).
   - **PDF Calculation**:
\[ f(y) = 0.2 e^{-0.2y} \]

5. **Hard Example**:
   - **Scenario**: Lifetime of a machine.
   - **Distribution**: Weibull distribution with shape parameter \( k = 1.5 \), scale parameter \( \lambda = 2 \).
   - **PDF Calculation**:
\[ f(y) = \frac{1.5}{2} \left(\frac{y}{2}\right)^{0.5} e^{-(y/2)^{1.5}} \]

**Traits to Look For**:
- Keywords like "mean," "variance," "parameters."
- Scenarios involving specific distributions and their parameters.

---

### 2.3 Expectations of Random Variables

#### **Expectation (E(Y))**

**Definition**: The mean or average value of a random variable.
- **For Discrete Variables**: 
\[ E(Y) = \sum y P(Y=y) \]
- **For Continuous Variables**: 
\[ E(Y) = \int_{-\infty}^\infty y f(y) dy \]
- **Example**: Average number of heads in coin flips.

**Variables**:
- \( E(Y) \): Expected value of Y.
- \( y \): Possible values.
- \( P(Y=y) \): Probability of Y taking value y.
- \( f(y) \): Probability density function.

**Case Examples**:
1. **Discrete Random Variable**:
   - **Scenario**: Number of successes in trials.
   - **Possible Values**: 0, 1, 2, ...
   - **PMF Calculation**: Based on binomial distribution.
   - **Expectation Calculation**:
\[ E(Y) = \sum y P(Y=y) \]

2. **Continuous Random Variable**:
   - **Scenario**: Heights of students.
   - **Range**: 150 cm to 200 cm.
   - **PDF Calculation**: Normal distribution with mean \( \mu = 170 \), standard deviation \( \sigma = 10 \).
   - **Expectation Calculation**:
\[ E(Y) = \int_{150}^{200} y \cdot \frac{1}{10\sqrt{2\pi}} e^{-\frac{(y-170)^2}{2 \cdot 10^2}} dy \]

3. **Poisson Distribution**:
   - **Scenario**: Number of calls received by a call center in an hour.
   - **Parameter**: Rate \( \lambda = 10 \).
   - **Expectation Calculation**:
\[ E(Y) = \lambda = 10 \]

4. **Exponential Distribution**:
   - **Scenario**: Time taken to complete a task.
   - **Rate**: \( \lambda = 0.05 \).
   - **Expectation Calculation**:
\[ E(Y) = \frac{1}{\lambda} = 20 \text{ minutes} \]

5. **Hard Example**:
   - **Scenario**: Lifetime of an electronic device.
   - **Distribution**: Weibull distribution with shape parameter \( k = 1.5 \), scale parameter \( \lambda = 2 \).
   - **Expectation Calculation**:
\[ E(Y) = \lambda \cdot \Gamma\left(1 + \frac{1}{k}\right) = 2 \cdot \Gamma\left(1 + \frac{1}{1.5}\right) \approx 2 \cdot 0.886 = 1.772 \]

**Traits to Look For**:
- Keywords like "expected value," "mean," "average."
- Scenarios involving the calculation of averages and dispersions.

---

#### **2.3.2 Expected Values for Continuous Random Variables**

**Calculation**: Integral of the product of the variable and its PDF.
- **Formula**: 
\[ E(Y) = \int_{-\infty}^\infty y f(y) dy \]

**Variables**:
- \( E(Y) \): Expected value of Y.
- \( y \): Continuous values.
- \( f(y) \): Probability density function.

**Case Examples**:
1. **Continuous Random Variable**:
   - **Scenario**: Given PDF for a continuous random variable.
   - **PDF**: \( f(y) \).
   - **Expectation Calculation**:
\[ E(Y) = \int_{-\infty}^\infty y f(y) dy \]

2. **Normal Distribution**:
   - **Scenario**: Heights of students.
   - **Range**: 150 cm to 200 cm.
   - **PDF**: Normal distribution with mean \( \mu = 170 \), standard deviation \( \sigma = 10 \).
   - **Expectation Calculation**:
\[ E(Y) = \int_{150}^{200} y \cdot \frac{1}{10\sqrt{2\pi}} e^{-\frac{(y-170)^2}{2 \cdot 10^2}} dy \]

3. **Exponential Distribution**:
   - **Scenario**: Time taken to complete a task.
   - **Rate**: \( \lambda = 0.05 \).
   - **Expectation Calculation**:
\[ E(Y) = \int_{0}^{\infty} y \cdot 0.05 e^{-0.05y} dy = \frac{1}{\lambda} = 20 \text{ minutes} \]

4. **Weibull Distribution**:
   - **Scenario**: Lifetime of an electronic device.
   - **Shape Parameter**: \( k = 1.5 \), Scale Parameter \( \lambda = 2 \).
   - **Expectation Calculation**:
\[ E(Y) = \int_{0}^{\infty} y \cdot \frac{1.5}{2} \left(\frac{y}{2}\right)^{0.5} e^{-(y/2)^{1.5}} dy \]

5. **Hard Example**:
   - **Scenario**: Lifetime of a machine.
   - **Distribution**: Log-normal distribution with mean \( \mu = 5 \), standard deviation \( \sigma = 1 \).
   - **Expectation Calculation**:
\[ E(Y) = \int_{0}^{\infty} y \cdot \frac{1}{y\sigma\sqrt{2\pi}} e^{-\frac{(\ln y - \mu)^2}{2\sigma^2}} dy = e^{\mu + \frac{\sigma^2}{2}} = e^{5 + \frac{1}{2}} = e^{5.5} \approx 244.691 \]

**Traits to Look For**:
- Keywords like "continuous," "integral," "expected value."
- Scenarios involving the calculation of averages for continuous variables.

---

#### **2.3.3 Example: Mean and Variability for Uniform Random Variable**

**Uniform Distribution**: Mean and variance for uniform random variable over [a, b].
- **Mean**: 
\[ E(Y) = \frac{a+b}{2} \]
- **Variance**: 
\[ \text{Var}(Y) = \frac{(b-a)^2}{12} \]

**Variables**:
- \( a, b \): Range endpoints.
- \( E(Y) \): Expected value.
- \( \text{Var}(Y) \): Variance.

**Case Examples**:
1. **Uniform Distribution of Coach's Lateness**:
   - **Scenario**: Probability of being late if the coach is uniformly late between 5 and 15 minutes.
   - **Range**: 5 to 15 minutes.
   - **Mean Calculation**:
\[ E(Y) = \frac{5+15}{2} = 10 \]
   - **Variance Calculation**:
\[ \text{Var}(Y) = \frac{(15-5)^2}{12} = \frac{100}{12} \approx 8.333 \]

2. **Uniform Distribution of Arrival Time**:
   - **Scenario**: Arrival time uniformly distributed between 8 AM and 10 AM.
   - **Range**: 8 to 10 AM.
   - **Mean Calculation**:
\[ E(Y) = \frac{8+10}{2} = 9 \]
   - **Variance Calculation**:
\[ \text

{Var}(Y) = \frac{(10-8)^2}{12} = \frac{4}{12} \approx 0.333 \]

3. **Uniform Distribution of Exam Scores**:
   - **Scenario**: Exam scores uniformly distributed between 50 and 100.
   - **Range**: 50 to 100.
   - **Mean Calculation**:
\[ E(Y) = \frac{50+100}{2} = 75 \]
   - **Variance Calculation**:
\[ \text{Var}(Y) = \frac{(100-50)^2}{12} = \frac{2500}{12} \approx 208.333 \]

4. **Uniform Distribution of Production Time**:
   - **Scenario**: Time to produce a product uniformly distributed between 1 and 3 hours.
   - **Range**: 1 to 3 hours.
   - **Mean Calculation**:
\[ E(Y) = \frac{1+3}{2} = 2 \]
   - **Variance Calculation**:
\[ \text{Var}(Y) = \frac{(3-1)^2}{12} = \frac{4}{12} \approx 0.333 \]

5. **Hard Example**:
   - **Scenario**: Waiting time for a bus uniformly distributed between 0 and 20 minutes.
   - **Range**: 0 to 20 minutes.
   - **Mean Calculation**:
\[ E(Y) = \frac{0+20}{2} = 10 \]
   - **Variance Calculation**:
\[ \text{Var}(Y) = \frac{(20-0)^2}{12} = \frac{400}{12} \approx 33.333 \]

**Traits to Look For**:
- Keywords like "uniform distribution," "mean," "variance."
- Scenarios involving equal probabilities over a range.

---

#### **2.3.4 Higher Moments: Skewness**

**Skewness**: Measure of asymmetry in the distribution of a random variable.
- **Positive Skew**: Tail on the right side is longer or fatter.
- **Negative Skew**: Tail on the left side is longer or fatter.

**Variables**:
- **Skewness**: Measure of asymmetry.

**Case Examples**:
1. **Positive Skewness**:
   - **Scenario**: Income distribution where a few individuals earn significantly more.
   - **Result**: Right tail longer or fatter.

2. **Negative Skewness**:
   - **Scenario**: Age at retirement where most people retire around a certain age but a few retire earlier.
   - **Result**: Left tail longer or fatter.

3. **No Skewness**:
   - **Scenario**: Heights of adult men, normally distributed.
   - **Result**: Symmetrical distribution.

4. **Positive Skewness in Exam Scores**:
   - **Scenario**: Exam scores where most students score below the maximum.
   - **Result**: Right tail longer or fatter.

5. **Hard Example**:
   - **Scenario**: Lifespan of a new drug where most patients live a long time but a few live much longer.
   - **Result**: Right tail longer or fatter.

**Traits to Look For**:
- Keywords like "asymmetry," "positive skew," "negative skew."
- Scenarios involving the shape of the distribution.

---

#### **2.3.5 Expectations of Linear Functions of Random Variables**

**Linear Transformation**: 
\[ E(aY + b) = aE(Y) + b \]
- **Example**: Scaling and shifting random variables.

**Variables**:
- \( a, b \): Constants.
- \( E(aY + b) \): Expected value after transformation.

**Case Examples**:
1. **Scaling Test Scores**:
   - **Scenario**: Scaling test scores by a factor of 2.
   - **Information**: \( E(Y) = 50 \), \( a = 2 \), \( b = 0 \).
   - **Calculation**:
\[ E(2Y) = 2E(Y) = 2 \times 50 = 100 \]

2. **Shifting Heights**:
   - **Scenario**: Shifting heights by adding 10 cm.
   - **Information**: \( E(Y) = 170 \), \( a = 1 \), \( b = 10 \).
   - **Calculation**:
\[ E(Y + 10) = E(Y) + 10 = 170 + 10 = 180 \]

3. **Scaling and Shifting Production Time**:
   - **Scenario**: Scaling and shifting production time.
   - **Information**: \( E(Y) = 5 \text{ hours} \), \( a = 1.5 \), \( b = -1 \).
   - **Calculation**:
\[ E(1.5Y - 1) = 1.5E(Y) - 1 = 1.5 \times 5 - 1 = 7.5 - 1 = 6.5 \]

4. **Shifting Exam Scores**:
   - **Scenario**: Adding 5 points to exam scores.
   - **Information**: \( E(Y) = 70 \), \( a = 1 \), \( b = 5 \).
   - **Calculation**:
\[ E(Y + 5) = E(Y) + 5 = 70 + 5 = 75 \]

5. **Hard Example**:
   - **Scenario**: Scaling and shifting lifetime of a machine.
   - **Information**: \( E(Y) = 10 \text{ years} \), \( a = 0.8 \), \( b = 2 \).
   - **Calculation**:
\[ E(0.8Y + 2) = 0.8E(Y) + 2 = 0.8 \times 10 + 2 = 8 + 2 = 10 \]

**Traits to Look For**:
- Keywords like "linear transformation," "scaling," "shifting."
- Scenarios involving changes to random variables by scaling or adding constants.

---

#### **2.3.6 Standardizing a Random Variable**

**Standardization**: Converting a random variable to have a mean of 0 and a standard deviation of 1.
- **Formula**: 
\[ Z = \frac{Y - E(Y)}{\sigma(Y)} \]
- **Example**: Z-scores in a normal distribution.

**Variables**:
- \( Z \): Standardized variable.
- \( E(Y) \): Mean of Y.
- \( \sigma(Y) \): Standard deviation of Y.

**Case Examples**:
1. **Standardizing Heights**:
   - **Scenario**: Heights of students with mean \( E(Y) = 170 \), standard deviation \( \sigma(Y) = 10 \).
   - **Standardization Calculation**:
\[ Z = \frac{Y - 170}{10} \]

2. **Standardizing Test Scores**:
   - **Scenario**: Test scores with mean \( E(Y) = 75 \), standard deviation \( \sigma(Y) = 15 \).
   - **Standardization Calculation**:
\[ Z = \frac{Y - 75}{15} \]

3. **Standardizing Production Time**:
   - **Scenario**: Production time with mean \( E(Y) = 5 \text{ hours} \), standard deviation \( \sigma(Y) = 1 \text{ hour} \).
   - **Standardization Calculation**:
\[ Z = \frac{Y - 5}{1} \]

4. **Standardizing Lifespan**:
   - **Scenario**: Lifespan of devices with mean \( E(Y) = 10 \text{ years} \), standard deviation \( \sigma(Y) = 2 \text{ years} \).
   - **Standardization Calculation**:
\[ Z = \frac{Y - 10}{2} \]

5. **Hard Example**:
   - **Scenario**: Waiting time for a bus with mean \( E(Y) = 8 \text{ minutes} \), standard deviation \( \sigma(Y) = 2 \text{ minutes} \).
   - **Standardization Calculation**:
\[ Z = \frac{Y - 8}{2} \]

**Traits to Look For**:
- Keywords like "standardize," "Z-score," "mean," "standard deviation."
- Scenarios involving normalization of random variables.

---

### Detailed Formulas and Simplified Explanations

#### **Probability and Long-Run Frequencies**
- **Formula**: 
\[ P(A) = \frac{\text{Number of favorable outcomes}}{\text{Total number of trials}} \]
  - **Simplified**: Probability is the chance of something happening based on how often it happens over many tries.

#### **Sample Space and Events**
- **Formula for Sample Space (S)**: 
\[ S = \{ \text{all possible outcomes} \} \]
  - **Simplified**: It's like listing all the possible results of an experiment, like all possible outcomes when flipping two coins.

#### **Complementary Rule**
- **Formula**: 
\[ P(A') = 1 - P(A) \]
  - **Simplified**: The probability of something not happening is 1 minus the probability of it happening.

#### **Bayes’ Theorem**
- **Formula**: 
\[ P(A|B) = \frac{P(B|A) \cdot P(A)}{P(B)} \]
  - **Simplified

**: It's like updating your guess about something based on new information.

#### **Multiplicative Law for Independent Events**
- **Formula**: 
\[ P(A \cap B) = P(A) \cdot P(B) \]
  - **Simplified**: The chance of two independent things both happening is the product of their individual chances.

#### **Expectation of a Random Variable**
- **Formula for Discrete Variables**: 
\[ E(Y) = \sum y P(Y=y) \]
  - **Simplified**: The average value of a random variable over many trials.

---
