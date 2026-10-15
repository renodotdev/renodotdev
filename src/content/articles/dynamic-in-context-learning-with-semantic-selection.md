---
title: "Dynamic In-Context Learning: Vector-Driven Exemplar Selection for Adaptive LLM Prompts"
description: "How to build dynamic few-shot pipelines that select diverse, semantically aligned exemplars from vector stores at runtime based on query characteristics."
publishDate: 2026-08-28
tags: ['Prompt Tutorials', 'Few-Shot', 'Vector Search', 'AI Pipelines', 'Python']
readTime: "7 min read"
featured: false
author: "Della Reno Rinaldi"
audience: "Data Scientists, AI Pipeline Engineers & Backend Developers"
---

## The Bottleneck of Static Few-Shot Prompts

Few-shot prompting is one of the most reliable techniques for boosting LLM accuracy: showing 3 examples of inputs and outputs outperforms paragraphs of textual rules.

However, in multi-faceted enterprise applications (e.g. customer support handling 200 distinct topics, or an accounting assistant processing invoices from 40 countries), **hardcoding 3 static examples into your prompt fails**:
- Static examples for a German VAT invoice provide zero relevance when processing an Indonesian e-commerce receipt.
- Stuffing all 200 examples into the prompt burns 30,000 tokens on every request, creating massive bills and slow response times.

The modern architectural pattern is **Dynamic In-Context Learning (Dynamic ICL)**: storing thousands of verified exemplars in a vector database and dynamically retrieving the top-3 most relevant examples at inference time.

---

## 1. Dynamic Exemplar Pipeline Architecture

```mermaid
graph LR
    UserQuery[Incoming User Request] --> Embedder[Vector Embedding Model]
    Embedder --> VectorDB[(Exemplar Bank Vector Index)]
    VectorDB --> MMR[Maximal Marginal Relevance Diversity Filter]
    MMR --> TopK[Top 3 Diverse Exemplars]
    TopK --> Compiler[Prompt Assembly Engine]
    UserQuery --> Compiler
    Compiler --> LLM[Execution LLM]
```

The key enhancement over standard nearest-neighbor search is **Maximal Marginal Relevance (MMR)**:
- We don't want 3 identical examples of German VAT invoices.
- We want 1 canonical German VAT invoice, 1 edge-case invoice with handwritten notes, and 1 negative/invalid receipt.
- MMR balances **relevance to query** with **diversity among exemplars**, maximizing the breadth of information provided in the few-shot window.

---

## 2. Implementing Dynamic ICL in Python

```python
# dynamic_icl.py
from typing import List, Dict
import numpy as np

class DynamicPromptEngine:
    def __init__(self, vector_store, embedding_client):
        self.vector_store = vector_store
        self.embedding_client = embedding_client

    def build_prompt(self, user_input: str, k: int = 3) -> str:
        # 1. Embed incoming user query
        query_vector = self.embedding_client.embed(user_input)

        # 2. Retrieve top-k diverse exemplars using MMR
        exemplars = self.vector_store.search_mmr(
            query_vector,
            k=k,
            lambda_mult=0.7 # 0.7 = 70% relevance, 30% diversity
        )

        # 3. Assemble Few-Shot Section
        exemplar_blocks = []
        for i, ex in enumerate(exemplars, 1):
            exemplar_blocks.append(
                f"<example id='{i}'>\n"
                f"<input>\n{ex['input_text']}\n</input>\n"
                f"<output>\n{ex['expected_output']}\n</output>\n"
                f"</example>"
            )

        few_shot_context = "\n\n".join(exemplar_blocks)

        # 4. Construct Final Dynamic Prompt
        return f"""
System: You are an expert financial transaction normalizer.
Study the following reference examples carefully:

{few_shot_context}

Now, process the following new input strictly following the formatting demonstrated above:
<input>
{user_input}
</input>
<output>
""".strip()
```

---

## 3. Curating the Exemplar Bank

A dynamic prompt is only as good as its exemplar bank. Follow these three golden curation rules:

1. **Human-in-the-Loop Approval:** Never automatically promote raw LLM outputs to the exemplar bank. Only promote examples that have been manually reviewed or passed unit test verification.
2. **Metadata Tagging:** Tag exemplars with domain attributes (`country: "ID"`, `document_type: "receipt"`). Use metadata filtering to restrict vector searches to the relevant domain before similarity scoring.
3. **Prune Duplicates:** Run periodic vector clustering sweeps to find near-identical examples and prune redundant exemplars.

---

## 4. Key Takeaways

- **Scale Beyond Static Limits:** Dynamic ICL allows your prompt system to leverage institutional knowledge across 10,000+ examples with zero context bloat.
- **Use MMR for Diversity:** Avoid retrieving 3 clones of the same example; force diversity into the few-shot context.
- **Filter by Metadata First:** Combine vector similarity with hard categorical filters (language, document type, tenant ID).
