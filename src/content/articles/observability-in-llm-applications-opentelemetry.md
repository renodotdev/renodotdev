---
title: "End-to-End LLM Observability: Tracing Latency, Tokens, and Failures with OpenTelemetry and Langfuse"
description: "Instrumenting complex multi-agent execution graphs: tracking cost per tenant, catching silent hallucinations, and setting up automated semantic alerting."
publishDate: 2026-08-11
tags: ['Observability', 'OpenTelemetry', 'Langfuse', 'Monitoring', 'Technology']
readTime: "7 min read"
featured: false
author: "Della Reno Rinaldi"
audience: "Site Reliability Engineers, Backend Architects & DevOps Leads"
---

## The "Black Box" Problem in Generative AI

In traditional microservices, observability is a solved discipline: Datadog, Grafana, and OpenTelemetry trace HTTP spans, database query timings, and CPU saturation metrics.

When an LLM system enters production, standard APMs become blind:
- An endpoint returns HTTP 200 OK, but the model generated a complete hallucination.
- A single customer runs an un-throttled agentic workflow that loops 45 times, burning \$400 in OpenAI tokens in ten minutes.
- The 95th percentile latency climbs from 1.2s to 6.4s, and you have no trace showing whether the bottleneck was vector database retrieval, tool execution, or model inference queueing.

Modern AI applications require **LLM-Native Observability**: distributed tracing that captures spans, input/output prompts, token expenditures, and user feedback signals.

---

## 1. The Anatomy of an LLM Trace Graph

An autonomous workflow is not a single linear function call; it is a nested execution tree:

```mermaid
graph TD
    Root[Trace: Customer Support Ticket #4912] --> S1[Span: Vector Search Embedding - 18ms]
    Root --> S2[Span: Pinecone Vector Query - 42ms]
    Root --> S3[Span: LLM Router Generation - 410ms ($0.001)]
    S3 --> S4[Span: CRM Tool Call - 120ms]
    Root --> S5[Span: Final Frontier Generation - 1450ms ($0.018)]
```

Without distributed trace identifiers connecting the initial user click to every downstream tool call and model generation, identifying cost centers and latency bottlenecks is impossible.

---

## 2. Implementing Tracing with OpenTelemetry & Langfuse

**Langfuse** has emerged as the leading open-source LLM observability platform. It integrates natively with **OpenTelemetry (OTel)** standards:

```typescript
// lib/telemetry.ts
import { Langfuse } from 'langfuse';

export const langfuse = new Langfuse({
  publicKey: process.env.LANGFUSE_PUBLIC_KEY,
  secretKey: process.env.LANGFUSE_SECRET_KEY,
  baseUrl: process.env.LANGFUSE_BASE_URL || 'https://cloud.langfuse.com',
});

export async function runAuditedAgentWorkflow(userId: string, query: string) {
  // 1. Create Root Trace
  const trace = langfuse.trace({
    name: 'contract_audit_flow',
    userId: userId,
    metadata: { environment: process.env.NODE_ENV },
  });

  // 2. Span for Retrieval
  const retrievalSpan = trace.span({ name: 'vector_retrieval' });
  // Perform search...
  retrievalSpan.end({ output: { docsRetrieved: 4 } });

  // 3. Generation Event
  const generation = trace.generation({
    name: 'gpt-4o-clause-audit',
    model: 'gpt-4o',
    input: query,
    modelParameters: { temperature: 0.2 },
  });

  // Perform LLM Call...
  const responseText = "Audited output...";
  
  generation.end({
    output: responseText,
    usage: { promptTokens: 1420, completionTokens: 310, totalTokens: 1730 },
  });

  return responseText;
}
```

---

## 3. Critical Metrics for Your Operational Dashboard

1. **Token Cost per Tenant:** Aggregate token spend grouped by `tenant_id` to prevent multi-tenant noisy neighbors from inflating your cloud bills.
2. **Latency Breakdown by Phase:** Isolate Time-to-First-Token (TTFT) from Generation Time to distinguish between provider queueing delays and large output generation.
3. **Implicit & Explicit User Feedback:** Track thumbs-up/down UI ratings, copy-to-clipboard actions, and user regenerations to calculate automated satisfaction scores.

---

## 4. Key Takeaways

- **Trace Every Agent Turn:** Never execute multi-step tool calls without propagating trace contexts.
- **Correlate Cost with Customer Accounts:** Enforce hard monthly token quotas per user to prevent runaway loops.
- **Instrument User Feedback:** Connect thumbs-up/down clicks directly to trace IDs to automatically curate golden evaluation datasets.
