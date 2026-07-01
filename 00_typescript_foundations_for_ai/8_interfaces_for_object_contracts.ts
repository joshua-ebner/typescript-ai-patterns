/*
  Interfaces for Object Contracts

  This example demonstrates how TypeScript interfaces can define object
  contracts.

  An interface describes what properties or methods an object must have.
  This pattern is useful in AI systems when different components need to
  agree on the shape of inputs, outputs, clients, or processors.
*/

interface IncomingText {
    id: string;
    source: string;
    text: string;
  }
  
  interface ClassificationResult {
    inputId: string;
    category: string;
    confidence: number;
  }
  
  interface TextClassifier {
    classify(input: IncomingText): ClassificationResult;
  }
  
  const keywordClassifier: TextClassifier = {
    classify(input: IncomingText): ClassificationResult {
      if (input.text.includes("charged")) {
        return {
          inputId: input.id,
          category: "billing",
          confidence: 0.91,
        };
      }
  
      return {
        inputId: input.id,
        category: "general",
        confidence: 0.72,
      };
    },
  };
  
  function printClassification(result: ClassificationResult): void {
    console.log(`Input ${result.inputId} was classified as ${result.category}.`);
    console.log(`Confidence: ${result.confidence}`);
  }
  
  function main(): void {
    const message: IncomingText = {
      id: "msg_001",
      source: "support_email",
      text: "Customer says they were charged twice.",
    };
  
    const result = keywordClassifier.classify(message);
  
    console.log();
    console.log("INCOMING TEXT");
    console.log(message);
  
    console.log();
    console.log("CLASSIFICATION RESULT");
    console.log(result);
  
    console.log();
    printClassification(result);
    console.log();
  }
  
  main();