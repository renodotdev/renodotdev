---
title: "Prompting Reasoning Models (o1, o3, DeepSeek-R1): What Works, What Fails, and How to Guide Hidden CoT"
description: "How the rules of prompt engineering change fundamentally with RL-trained reasoning models: why 'think step by step' is counterproductive and how to steer internal search."
publishDate: 2026-10-11
tags: ['Prompt Tutorials', 'Reasoning Models', 'DeepSeek R1', 'OpenAI o1', 'AI']
readTime: "8 min read"
featured: true
author: "Della Reno Rinaldi"
audience: "AI Researchers, Prompt Architects & Advanced Systems Developers"
---

## The Paradigm Shift in Prompt Engineering

For three years, the undisputed golden rule of prompt engineering was:
> *"Always instruct the model to 'think step by step' and articulate its chain of thought."*

With the rise of reasoning models trained with large-scale Reinforcement Learning on internal Chain-of-Thought (e.g. OpenAI o1/o3, DeepSeek-R1), **this advice is now obsolete and often harmful**.

These models do not need you to tell them to think. They spend seconds or minutes generating hundreds of internal, hidden reasoning tokens before outputting their very first response token.

Prompting a reasoning model requires a completely different engineering playbook.

---

## 1. What Changes: What to Stop Doing

| Legacy Prompt Habit | Why It Fails on Reasoning Models (o1 / R1) | What to Do Instead |
| :--- | :--- | :--- |
| **"Think step by step"** | Redundant. The model already executes internal RL search. Adds useless prompt tokens. | State the objective and falsification criteria directly. |
| **Micro-managing intermediate steps** | Restricts the model's internal search tree; forces suboptimal reasoning paths. | Define the desired final output invariants and constraints. |
| **Massive few-shot exemplar lists** | Consumes context without improving reasoning; can bias the internal search. | Provide 0 or 1 canonical exemplar defining output format. |
| **Demanding ultra-fast answers** | Reasoning models allocate inference-time compute dynamically based on problem difficulty. | Let the model spend reasoning tokens on complex math/code. |

---

## 2. The New Playbook: Constraint Bounding & Falsification Criteria

Instead of dictating *how* the model should reason, the best prompts for reasoning models define **clear boundary boundaries and falsification tests**:

```xml
<problem_specification>
  <objective>
    Design an optimal multi-datacenter data replication topology for a financial ledger.
  </objective>

  <system_invariants>
    1. Zero RPO (Recovery Point Objective): No committed transaction can ever be lost.
    2. RTO (Recovery Time Objective) under 500ms during an entire regional outage.
    3. Maximum WAN round-trip latency between datacenters is 65ms.
  </system_invariants>

  <falsification_criteria>
    - Any proposed architecture that relies on synchronous two-phase commit over WAN
      must explicitly prove how it prevents distributed deadlocks.
    - If a quorum-based protocol is selected, explicitly account for split-brain partitions.
  </falsification_criteria>

  <output_contract>
    Deliver the final architectural specification, network sequence diagram,
    and mathematical proof of fault tolerance.
  </output_contract>
</problem_specification>
```

When given clear invariants and falsification tests, the internal reasoning engine explores hypotheses, catches its own flaws in hidden CoT, backtracks, and presents a thoroughly vetted final solution.

---

## 3. Handling Reasoning Tokens in Production APIs

When integrating reasoning models via APIs:
- **`max_completion_tokens` encompasses both hidden and visible tokens:** If you set `max_completion_tokens: 1000` on a hard math problem, the model might burn 900 tokens on hidden reasoning, leaving only 100 tokens for the final output, causing an abrupt truncation.
- **Budgeting Compute:** Set generous completion token limits (e.g., 8,000 to 16,000) so the model has sufficient computational space to solve the problem before emitting the answer.

---

## 4. Key Takeaways

- **Do Not Tell Reasoning Models How to Think:** Give them goals, boundary constraints, and falsification rules.
- **Keep System Prompts Lean:** Avoid conversational fluff that clutters the internal search space.
- **Budget Ample Completion Tokens:** Ensure hidden reasoning tokens have room to breathe.
