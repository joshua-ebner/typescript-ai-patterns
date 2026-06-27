/*
  Simple Job Status Workflow

  Demonstrates a basic job-status pattern for AI workflows.

  This example does not call Claude yet. It simulates processing so we can
  focus on the workflow structure: submit a job, track status, process it,
  and store the result or error.
*/

type JobStatus = "pending" | "processing" | "completed" | "failed";

type JobResult = {
  summary: string;
};

type Job = {
  id: string;
  inputText: string;
  status: JobStatus;
  result?: JobResult;
  error?: string;
};

const jobs = new Map<string, Job>();

function createJob(inputText: string): Job {
  const id = crypto.randomUUID();

  const job: Job = {
    id,
    inputText,
    status: "pending",
  };

  jobs.set(id, job);

  return job;
}

function getJob(id: string): Job | undefined {
  return jobs.get(id);
}

async function processJob(id: string): Promise<void> {
  const job = jobs.get(id);

  if (!job) {
    throw new Error(`Job not found: ${id}`);
  }

  try {
    job.status = "processing";

    const result = await simulateAiProcessing(job.inputText);

    job.result = result;
    job.status = "completed";
  } catch (error) {
    job.status = "failed";
    job.error = error instanceof Error ? error.message : "Unknown error";
  }
}

async function simulateAiProcessing(inputText: string): Promise<JobResult> {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return {
    summary: `Processed text with ${inputText.length} characters.`,
  };
}

async function main() {
  const job = createJob(
    "Customer says they were charged twice and need help before tomorrow."
  );

  console.log();
  console.log("JOB CREATED");
  console.log(getJob(job.id));

  await processJob(job.id);

  console.log();
  console.log("JOB AFTER PROCESSING");
  console.log(getJob(job.id));
  console.log();
}

main();