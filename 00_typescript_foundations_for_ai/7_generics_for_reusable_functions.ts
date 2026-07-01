/*
  Generics for Reusable Functions

  This example demonstrates how TypeScript generics allow one function
  to work with different data types while preserving the specific type
  that was passed in.

  This pattern is useful in AI systems when building reusable helpers
  for different result types, record types, schemas, or API responses.
*/

type ClassificationResult = {
    category: string;
    confidence: number;
  };
  
  type SummaryResult = {
    summary: string;
    wordCount: number;
  };
  
  type ResultEnvelope<T> = {
    id: string;
    result: T;
  };
  
  function wrapResult<T>(id: string, result: T): ResultEnvelope<T> {
    return {
      id,
      result,
    };
  }
  
  function getFirst<T>(items: T[]): T | undefined {
    return items[0];
  }
  
  function main() {
    const classification: ClassificationResult = {
      category: "billing",
      confidence: 0.91,
    };
  
    const summary: SummaryResult = {
      summary: "Customer reports a duplicate charge.",
      wordCount: 5,
    };
  
    const wrappedClassification = wrapResult("result_001", classification);
    const wrappedSummary = wrapResult("result_002", summary);
  
    console.log();
    console.log("WRAPPED CLASSIFICATION RESULT");
    console.log(wrappedClassification);
  
    console.log();
    console.log("WRAPPED SUMMARY RESULT");
    console.log(wrappedSummary);
  
    const categories = ["billing", "support", "technical"];
    const firstCategory = getFirst(categories);
  
    console.log();
    console.log("FIRST CATEGORY");
    console.log(firstCategory);
    console.log();
  }
  
  main();