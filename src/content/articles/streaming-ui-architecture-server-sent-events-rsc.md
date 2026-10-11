---
title: "Architecting Streaming UIs: Smooth Token Delivery with React Server Components, SSE, and WebSockets"
description: "Solving the 10-second blank screen problem: handling HTTP/2 streaming backpressure, incremental markdown AST parsing, and network retry resilience."
publishDate: 2026-08-04
tags: ['Streaming UI', 'React', 'Next.js', 'Web Development', 'Technology']
readTime: "8 min read"
featured: true
author: "Della Reno Rinaldi"
audience: "Frontend Architects, Full-Stack Engineers & UI Specialists"
---

## The "Spinner of Death" in Modern Web Applications

In traditional web development, requests complete in 150 milliseconds. A user clicks submit, a loading spinner flashes briefly, and the complete HTML or JSON payload renders.

Generative AI completely broke this mental model. Generating a comprehensive 800-word analysis can take 12 seconds. Leaving a user staring at a loading spinner for 12 seconds triggers extreme cognitive friction: users assume the app crashed, click refresh, and trigger duplicate expensive API runs.

**Streaming UI Architecture** transforms this user experience. By delivering tokens incrementally over **Server-Sent Events (SSE)** as they are synthesized, Time to First Token (TTFT) drops to 300 milliseconds.

---

## 1. Transport Showdown: Server-Sent Events vs. WebSockets vs. Fetch Streams

| Protocol | Server-Sent Events (SSE) | WebSockets | Raw Fetch ReadableStream |
| :--- | :--- | :--- | :--- |
| **Direction** | Unidirectional (Server $\rightarrow$ Client) | Bidirectional (Full duplex) | Unidirectional (HTTP POST response) |
| **Protocol Overhead** | Minimal (Standard HTTP/2) | Higher (Requires TCP handshake + upgrade) | Minimal (Standard HTTP/2) |
| **Auto-Reconnect** | Native browser support | Requires custom client code | Requires manual retry handling |
| **Edge & CDN Caching** | Works seamlessly | Often blocked or problematic | Works seamlessly |

For standard conversational AI and text generation, **Fetch with `ReadableStream` over HTTP/2** is the industry standard: it allows sending complex request bodies (user prompt, file metadata) via POST while streaming responses back chunk by chunk.

---

## 2. End-to-End Implementation with Next.js & React

Here is how to build an edge-compatible streaming endpoint using the Web Streams API:

```typescript
// app/api/chat/route.ts
import { streamText } from 'ai';
import { openai } from '@ai-sdk/openai';

export const runtime = 'edge'; // Deploy to Edge for lowest latency

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = streamText({
    model: openai('gpt-4o'),
    system: 'You are an expert systems engineer. Provide concise technical answers.',
    messages,
  });

  return result.toDataStreamResponse();
}
```

On the client, consume the stream smoothly using React hooks:

```tsx
// components/ChatStream.tsx
'use client';
import { useChat } from 'ai/react';

export function ChatStream() {
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat();

  return (
    <div class="max-w-2xl mx-auto p-4 flex flex-col h-[500px]">
      <div class="flex-1 overflow-y-auto space-y-4">
        {messages.map((m) => (
          <div key={m.id} class={`p-3 rounded-lg ${m.role === 'user' ? 'bg-zinc-800' : 'bg-zinc-900 border border-zinc-700'}`}>
            <span class="text-xs uppercase font-mono text-zinc-400 block mb-1">{m.role}</span>
            <div class="prose prose-invert text-sm">{m.content}</div>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} class="mt-4 flex gap-2">
        <input
          value={input}
          onChange={handleInputChange}
          placeholder="Ask a question..."
          class="flex-1 bg-zinc-900 border border-zinc-700 rounded px-3 py-2 text-white"
        />
        <button type="submit" disabled={isLoading} class="bg-lime-400 text-black font-semibold px-4 py-2 rounded">
          Send
        </button>
      </form>
    </div>
  );
}
```

---

## 3. Tackling the Incremental Markdown AST Problem

Streaming raw text is straightforward; streaming **Markdown** and **Code blocks** is treacherous.

If a code fence arrives split across tokens:
- Token 1: ````
- Token 2: `ts
const x = 1`

A naive markdown parser will render broken HTML, causing ugly visual flickering on every incoming token.

To solve this:
1. **Incremental AST Parsers:** Use parsers like `remark-rehype` with streaming memoization that gracefully auto-close unclosed markdown tags during rendering.
2. **CSS Smoothing:** Apply smooth opacity transitions to trailing tokens using CSS keyframe animations so new text fades in fluidly rather than jumping abruptly.

---

## 4. Key Takeaways

- **Default to Edge Streaming:** Run streaming endpoints on edge runtimes (Cloudflare Workers, Vercel Edge) to cut connection latency.
- **Graceful Network Handling:** Support client-side stream resumption in case of mobile network switches.
- **Auto-Scroll Discipline:** Only auto-scroll the user's viewport if they are already pinned to the bottom; never hijack scrolling if the user is reading earlier paragraphs.
