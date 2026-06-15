# Structured Outputs

This folder contains examples of getting structured responses from Claude using TypeScript and the Anthropic SDK.

The goal is to move beyond plain text generation and show how LLM responses can be converted into objects that application code can use.

## Files

### `1_structured_output_json.ts`

Demonstrates a basic structured-output pattern using JSON.

Shows:

* defining a TypeScript type for the expected response shape
* asking Claude to return valid JSON
* cleaning the response if Claude wraps it in markdown
* parsing the JSON with `JSON.parse()`
* accessing fields from the parsed object

## Run Example

From the project root:

```bash
npx tsx 02_structured_outputs/1_structured_output_json.ts
```