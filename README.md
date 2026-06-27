# TypeScript AI Patterns

A small collection of practical AI engineering patterns built with TypeScript, Node.js, and Claude.

The goal of this repo is to demonstrate reusable patterns for building AI systems, including prompting, structured outputs, schema validation, and eventually workflow architecture.

## Sections

### `01_claude_prompting_patterns`

Basic Claude prompting examples using the Anthropic SDK.

Includes:

* simple Claude API calls
* system prompts
* prompt templates
* reusable prompts with dynamic input

### `02_structured_outputs`

Examples of turning Claude responses into structured, machine-usable data.

Includes:

* basic JSON structured output
* structured output with Zod validation
* classification of incoming text into a typed object

### `03_reusable_claude_client`

Examples of wrapping Claude API calls in reusable TypeScript functions.

Includes:

- a reusable Claude text client function
- typed input objects for Claude calls
- default values for common API settings
- a simple pattern for separating API plumbing from task-specific code

## Setup

Install dependencies:

```bash
npm install
```

Create a `.env` file with your Anthropic API key:

```bash
ANTHROPIC_API_KEY=your_api_key_here
```

## Run Examples

Run any example with `tsx`:

```bash
npx tsx 01_claude_prompting_patterns/1_simple_llm_call.ts
npx tsx 02_structured_outputs/3_classify_incoming_text.ts
npx tsx 03_reusable_claude_client/1_create_reusable_claude_text_client.ts
```

## Purpose

This repo is intentionally small and pattern-focused. It is not a full application or framework.

Each example is meant to show a specific AI engineering pattern clearly, with enough TypeScript structure to be useful in real systems.
