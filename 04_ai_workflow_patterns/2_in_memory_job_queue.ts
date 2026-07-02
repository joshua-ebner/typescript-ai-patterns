/*
  In-Memory Job Queue

  Demonstrates a simple in-memory queue for AI workflow jobs.

  This example does not call Claude yet. It simulates AI processing so we
  can focus on the queue pattern: enqueue jobs, process them one at a time,
  update job status, and store results.
*/

type JobStatus = "queued" | "processing" | "completed" | "failed";

type JobResult = {
  category: string;
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
const jobQueue: string[] = [];

function enqueueJob(inputText: string): Job {
  const id = crypto.randomUUID();

  const job: Job = {
    id,
    inputText,
    status: "queued",
  };

  jobs.set(id, job);
  jobQueue.push(id);

  return job;
}

function getJob(id: string): Job | undefined {
  return jobs.get(id);
}

async function processNextJob(): Promise<void> {
  const nextJobId = jobQueue.shift();

  if (!nextJobId) {
    console.log("No jobs in the queue.");
    return;
  }

  const job = jobs.get(nextJobId);

  if (!job) {
    console.log(`Job not found: ${nextJobId}`);
    return;
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

async function processAllJobs(): Promise<void> {
  while (jobQueue.length > 0) {
    await processNextJob();
  }
}

async function simulateAiProcessing(inputText: string): Promise<JobResult> {
  await new Promise((resolve) => setTimeout(resolve, 500));

  if (inputText.includes("charged")) {
    return {
      category: "billing",
      summary: "Customer reports a billing issue.",
    };
  }

  if (inputText.includes("login")) {
    return {
      category: "support",
      summary: "Customer reports a login issue.",
    };
  }

  return {
    category: "general",
    summary: "Customer message does not match a specific category.",
  };
}

async function main() {
  const firstJob = enqueueJob(
    "Customer says they were charged twice for their subscription."
  );

  const secondJob = enqueueJob(
    "Customer says they cannot login to their account."
  );

  const thirdJob = enqueueJob(
    "Customer wants to know your business hours."
  );

  console.log();
  console.log("JOBS AFTER ENQUEUE");
  console.log(getJob(firstJob.id));
  console.log(getJob(secondJob.id));
  console.log(getJob(thirdJob.id));

  console.log();
  console.log("QUEUE LENGTH BEFORE PROCESSING");
  console.log(jobQueue.length);

  await processAllJobs();

  console.log();
  console.log("JOBS AFTER PROCESSING");
  console.log(getJob(firstJob.id));
  console.log(getJob(secondJob.id));
  console.log(getJob(thirdJob.id));

  console.log();
  console.log("QUEUE LENGTH AFTER PROCESSING");
  console.log(jobQueue.length);
  console.log();
}

main();