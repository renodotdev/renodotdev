---
title: "Imbalanced Few-Shot Prompting: Overcoming Classification Bias in Rare-Event Detection"
description: "How to structure few-shot exemplars to prevent models from defaulting to majority classes in fraud detection and anomalous log analysis."
publishDate: 2026-09-26
tags: ['Prompt Tutorials', 'Few-Shot', 'Machine Learning', 'Classification', 'AI']
readTime: "7 min read"
featured: false
author: "Della Reno Rinaldi"
audience: "Machine Learning Engineers, Data Scientists & Fraud Analysts"
---

## The Majority-Class Bias in LLM Classification

When using LLMs to classify rare events (fraudulent credit card transactions, critical infrastructure security breaches, rare medical anomalies), developers confront severe **majority-class bias**:

In real-world data, 99.8% of events are benign, and only 0.2% are malicious.

If you provide an LLM with 10 random few-shot examples from production logs, all 10 examples will be benign. As a result, the model's attention mechanism sets a near-zero prior probability for the rare event. Faced with an ambiguous transaction, it defaults to `"BENIGN"`, completely failing its detection mission.

**Imbalanced Few-Shot Prompting** corrects this prior probability distribution through intentional exemplar balancing and threshold conditioning.

---

## 1. Exemplar Equalization: The 50/50 Rule

In standard machine learning, training sets reflect natural class distributions. In few-shot prompting, however, **exemplars should represent decision boundaries, not population statistics**:

```markdown
<!-- ❌ UNBALANCED FEW-SHOT: 5 Normal, 1 Fraud -->
Result: Model learns that fraud is virtually impossible; misses subtle fraud signals.

<!-- ✅ BALANCED DECISION BOUNDARY: 2 Normal, 2 Fraud, 1 Edge-Case -->
Result: Model learns the specific semantic markers that distinguish fraud from normal behavior.
```

When building a 4-shot prompt for payment fraud detection:
- **Exemplar 1 (Canonical Normal):** Regular customer purchasing coffee at home location.
- **Exemplar 2 (Complex Normal):** Regular customer traveling abroad on vacation (abnormal location, but verified device ID).
- **Exemplar 3 (Canonical Fraud):** Brand-new device, multiple failed CVV attempts, high-value electronics.
- **Exemplar 4 (Subtle Fraud):** Familiar device, micro-deposits, rapid sequence of card authorizations across different merchants.

---

## 2. Explicit Prior Calibration Prompting

Because few-shot equalization artificially inflates the model's perception of fraud frequency, calibrate the model's prior belief in the system prompt:

```xml
<classification_calibration>
  <baseline_context>
    You are an automated fraud detection classifier.
    In the target population, fraudulent transactions account for approximately 0.5% of total volume.
    Do NOT flag transactions as FRAUD based purely on geographic distance if biometric authorization succeeded.
  </baseline_context>

  <decision_threshold>
    Flag "FRAUD" ONLY when there is clear evidence of credential stuffing,
    velocity anomalies, or mismatching device fingerprints.
    When probability is between 0.4 and 0.7, output "MANUAL_REVIEW_REQUIRED".
  </decision_threshold>
</classification_calibration>
```

---

## 3. Evaluation: Prioritizing Recall Over Accuracy

In rare-event classification, standard "Accuracy" is a deceptive vanity metric: a classifier that labels every transaction as benign has 99.8% accuracy while failing 100% of its business purpose.

Always evaluate your prompt using **Precision, Recall, and F2-Score**:

$$F_2 = 5 \times \frac{\text{Precision} \times \text{Recall}}{4 \times \text{Precision} + \text{Recall}}$$

The $F_2$-score places twice as much weight on **Recall** (catching every instance of fraud) as Precision (avoiding false alarms).

---

## 4. Key Takeaways

- **Never Mirror Real-World Skew in Few-Shot Exemplars:** Provide equal numbers of positive and negative examples to showcase boundary conditions.
- **Include Hard Negatives:** Show examples of legitimate transactions that look suspicious to prevent false-positive floods.
- **Optimize for F2-Score:** Focus on recall when missing a rare event has catastrophic business consequences.
