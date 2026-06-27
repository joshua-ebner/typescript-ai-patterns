# AI Workflow Patterns

This folder contains examples of basic workflow patterns used in AI systems.

These examples focus on the structure around AI calls, not just the AI call itself. Real AI systems often need to submit jobs, track status, process work asynchronously, handle failures, retry failed work, and store results.

## Examples

### `1_simple_job_status_workflow.ts`

Demonstrates a simple job-status workflow using in-memory TypeScript objects.

This example shows how to:

* create a job
* assign a job ID
* track job status
* move a job from `pending` to `processing`
* store a completed result
* handle failed jobs with an error message

This file does not call Claude yet. It simulates AI processing so the workflow structure is easier to understand.

## Why This Pattern Matters

Many production AI systems do not simply call an LLM and immediately return a result.

Instead, they often follow a workflow like:

```txt
submit job
→ mark job as pending
→ process job
→ mark job as completed or failed
→ store result or error
→ retrieve job status later
```

This pattern is useful for document processing, batch enrichment, classification jobs, evaluation runs, background tasks, and other AI workflows that may take time to complete.

## Run Example

From the project root:

```bash
npx tsx 04_ai_workflow_patterns/1_simple_job_status_workflow.ts
```
