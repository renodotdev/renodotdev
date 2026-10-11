---
title: "Unlocking Reasoning: Chain-of-Thought, Hidden Scratchpads, and Self-Consistency in Modern LLMs"
description: "A deep dive into zero-shot CoT, self-consistency majority voting, and how next-gen reasoning models process multi-step logic."
publishDate: 2026-03-18
tags: ['Prompt Tutorials', 'Chain of Thought', 'AI', 'LLM', 'Reasoning Models']
readTime: "8 min read"
featured: false
author: "Della Reno Rinaldi"
audience: "AI Researchers, Prompt Engineers & Software Architects"
---

## Why Direct Answering Fails in Multi-Step Logic

Standard auto-regressive language models predict tokens one by one based on existing context. When you ask a complex question requiring 5 mathematical or logical deductions and demand an immediate answer:

> *"What is the net profit after a 12% sales tax, 4% processing fee, and a tiered 15% volume discount on $45,000?"*

The model must commit its probability distribution for the final number immediately on token 1. If it cannot pre-compute the calculation in its initial forward pass, it will guess a plausible-looking number and hallucinate post-hoc rationalizations to justify it.

**Chain-of-Thought (CoT)** fundamentally alters this dynamic by allowing the model to generate intermediate reasoning tokens, giving the transformer computational steps across time before committing to the final answer.

---

## 1. Zero-Shot CoT vs. Structured Scratchpads

The famous discovery by Kojima et al. (2022) revealed that appending a simple trigger phrase like *"Let's think step by step"* dramatically boosts mathematical accuracy. In production engineering, however, unconstrained step-by-step thinking creates unstructured verbiage that is impossible to parse.

Instead, production applications use **Explicit XML Scratchpads**:

```markdown
<instruction>
Solve the tier allocation problem below.
First, perform your step-by-step mathematical reasoning inside <scratchpad>.
Then, provide the final structured output strictly inside <result>.
</instruction>

User Query:
"We have 142 server instances. 40 are reserved, 60 are spot, and the remainder on-demand.
Spot price is $0.12/hr, reserved is $0.08/hr, on-demand is $0.25/hr. What is the hourly cost?"

Expected Generation:
<scratchpad>
1. Calculate on-demand instances: 142 - (40 + 60) = 142 - 100 = 42 instances.
2. Reserved cost: 40 * 0.08 = $3.20.
3. Spot cost: 60 * 0.12 = $7.20.
4. On-demand cost: 42 * 0.25 = $10.50.
5. Total sum: 3.20 + 7.20 + 10.50 = 10.40 + 10.50 = $21.10.
</scratchpad>
<result>
{"total_hourly_cost": 21.10, "on_demand_count": 42}
</result>
```

In your application backend, your streaming parser can discard or hide the `<scratchpad>` tokens from the end user while surfacing the validated `<result>` object directly in the UI.

---

## 2. Self-Consistency: Majority Voting Across Temperature Paths

For high-stakes decisions (medical triage, financial risk evaluation, code verification), relying on a single Chain-of-Thought path is risky. A single arithmetic error in step 2 corrupts the entire output.

**Self-Consistency** runs $N$ parallel CoT paths with a non-zero temperature ($T = 0.7$), parses the final answers, and selects the majority consensus:

```mermaid
graph TD
    Prompt[User Input & CoT Prompt] --> Path1[Path 1: T=0.7 -> Answer A]
    Prompt --> Path2[Path 2: T=0.7 -> Answer B]
    Prompt --> Path3[Path 3: T=0.7 -> Answer A]
    Prompt --> Path4[Path 4: T=0.7 -> Answer A]
    Prompt --> Path5[Path 5: T=0.7 -> Answer C]
    
    Path1 --> Aggregator[Majority Vote Aggregator]
    Path2 --> Aggregator
    Path3 --> Aggregator
    Path4 --> Aggregator
    Path5 --> Aggregator
    
    Aggregator --> Result[Final Consensus: Answer A (60% Agreement)]
```

### Self-Consistency Python Implementation

```python
import collections
from openai import OpenAI

client = OpenAI()

def run_self_consistency(prompt: str, n_samples: int = 5) -> str:
    response = client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[
            {"role": "system", "content": "Think step by step in <scratchpad>. Conclude with 'FINAL_ANSWER: <value>'"},
            {"role": "user", "content": prompt}
        ],
        temperature=0.7,
        n=n_samples,
    )

    answers = []
    for choice in response.choices:
        text = choice.message.content
        if "FINAL_ANSWER:" in text:
            ans = text.split("FINAL_ANSWER:")[-1].strip().split("\n")[0]
            answers.append(ans)

    counter = collections.Counter(answers)
    consensus_answer, count = counter.most_common(1)[0]
    confidence = count / len(answers)
    print(f"Consensus: {consensus_answer} (Confidence: {confidence:.0%})")
    return consensus_answer
```

---

## 3. Reasoning Models (o1, o3, DeepSeek-R1): The Shift to Native Inference-Time Compute

With models natively trained on reinforcement learning with internal Chain-of-Thought (e.g. OpenAI o1/o3, DeepSeek-R1), prompting for *"think step by step"* is no longer strictly necessary. These models generate internal hidden reasoning tokens before emitting their first output token.

However, guiding their reasoning remains crucial:
- **Constraint Boundaries:** Define explicit falsification criteria (*"If assumption X fails, abort hypothesis Y immediately"*).
- **Format Restraints:** Keep user constraints concise so the model does not spend reasoning tokens trying to decipher contradictory meta-instructions.

---

## 4. Key Takeaways

1. **Tokens Equal Compute:** The more complex the logic, the more tokens the model must emit before delivering the final answer.
2. **Scratchpad Encapsulation:** Segregate internal deductions from client-facing output using XML tags.
3. **Use Self-Consistency for Mission-Critical Tasks:** Trading $5\times$ token cost for majority voting cuts reasoning errors by up to 70%.
