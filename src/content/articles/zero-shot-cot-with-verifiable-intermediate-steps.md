---
title: "Verifiable Intermediate Steps: Engineering Zero-Shot CoT with Formal Proof Checkpoints"
description: "How to structure mathematical and logical zero-shot prompts with verifiable equation checkpoints to eliminate arithmetic hallucinations."
publishDate: 2026-10-14
tags: ['Prompt Tutorials', 'Chain of Thought', 'Mathematical AI', 'Formal Verification', 'Reasoning Models']
readTime: "7 min read"
featured: false
author: "Della Reno Rinaldi"
audience: "Financial Engineers, Quantitative Analysts & Prompt Specialists"
---

## The "Math Hallucination" Vulnerability

Large language models are probabilistic token predictors, not algebraic calculators. When asked to perform complex compound calculations in free-form prose:

> *"Calculate the net present value of a 5-year lease at \$12,000/month discounted at 7.5% per annum with 3% annual escalation..."*

The model writes a convincing-looking explanation, uses formulas that look correct, but outputs a final dollar figure that is mathematically wrong by \$42,000.

Because standard Chain-of-Thought allows the model to mix prose and calculations freely, arithmetic errors hide behind smooth sentence transitions.

**Verifiable Intermediate Steps** forces the model to structure reasoning into discrete, algebraically checkable proof checkpoints.

---

## 1. Structuring the Formal Proof Checkpoint

Instead of free-form thoughts, mandate explicit numbered steps containing **Symbolic Formulas**, **Substituted Values**, and **Intermediate Totals**:

```xml
<formal_calculation_contract>
  <execution_rules>
    For every calculation step, you must output strictly in this four-part format:
    1. [STEP_NAME]: Brief descriptive title.
    2. [FORMULA]: Symbolic mathematical formula using standard notation.
    3. [SUBSTITUTION]: Formula with numbers substituted.
    4. [EVALUATION]: Calculated numerical result rounded to 4 decimal places.
  </execution_rules>

  <falsification_guard>
    Never write a final answer without the preceding [SUBSTITUTION] line.
    Do not combine multiple mathematical operations into a single line.
  </falsification_guard>
</formal_calculation_contract>
```

---

## 2. Exemplar Execution Trace

```markdown
Input: Calculate compound monthly amortization on $250,000 at 6.0% annual interest over 30 years.

[STEP 1: Monthly Interest Rate]
[FORMULA]: r = annual_rate / 12
[SUBSTITUTION]: r = 0.06 / 12
[EVALUATION]: r = 0.0050

[STEP 2: Total Number of Monthly Payments]
[FORMULA]: n = years * 12
[SUBSTITUTION]: n = 30 * 12
[EVALUATION]: n = 360

[STEP 3: Compounded Growth Factor]
[FORMULA]: factor = (1 + r)^n
[SUBSTITUTION]: factor = (1 + 0.0050)^360
[EVALUATION]: factor = 6.022575

[STEP 4: Monthly Payment Formula]
[FORMULA]: PMT = P * [ r(1 + r)^n ] / [ (1 + r)^n - 1 ]
[SUBSTITUTION]: PMT = 250000 * [ 0.0050 * 6.022575 ] / [ 6.022575 - 1 ]
[SUBSTITUTION_SIMPLIFIED]: PMT = 250000 * 0.030113 / 5.022575
[EVALUATION]: PMT = 1498.876

[FINAL_ANSWER]: $1,498.88 per month
```

---

## 3. Automated External Python Verification

By standardizing output into formal `[SUBSTITUTION]` lines, your backend can parse the equations with regex and verify them using Python's `math` library before returning the result to the user:

```python
# verify_math.py
import re

def verify_step(formula_str: str, evaluated_str: str) -> bool:
    # Safely evaluate math expression and compare against LLM's evaluation
    # Flag discrepancies > 0.01% tolerance
    pass
```

If the Python verifier detects an arithmetic error at Step 3, the pipeline automatically intercepts the response and re-prompts the model with the exact corrected value.

---

## 4. Key Takeaways

- **Isolate Formulas from Prose:** Require dedicated lines for formulas and numeric substitutions.
- **Enable External AST Verification:** Standardized syntax allows Python interpreters to double-check the model's math.
- **Eliminate Mental Shortcuts:** Forcing explicit intermediate steps cuts compound arithmetic errors by over 80%.
