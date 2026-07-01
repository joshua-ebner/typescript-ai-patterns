/*
  Async Functions and Promises

  This example demonstrates how TypeScript models asynchronous work with
  async functions, Promises, and await.

  This pattern is useful in AI systems because API calls, database calls,
  file processing, and background tasks usually complete later, not
  immediately.
*/

type ClassificationResult = {
    category: string;
    confidence: number;
  };
  
  async function classifyMessage(inputText: string): Promise<ClassificationResult> {
    await simulateDelay(1000);
  
    if (inputText.includes("charged")) {
      return {
        category: "billing",
        confidence: 0.91,
      };
    }
  
    return {
      category: "general",
      confidence: 0.72,
    };
  }
  
  function simulateDelay(milliseconds: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  }
  
  async function main(): Promise<void> {
    const message = "Customer says they were charged twice.";
  
    console.log();
    console.log("CLASSIFYING MESSAGE...");
    console.log(message);
  
    const result = await classifyMessage(message);
  
    console.log();
    console.log("CLASSIFICATION RESULT");
    console.log(result);
    console.log();
  }
  
  main();