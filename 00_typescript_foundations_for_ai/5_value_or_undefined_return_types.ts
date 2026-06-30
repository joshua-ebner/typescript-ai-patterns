/*
  Value or Undefined Return Types

  This example demonstrates how TypeScript can model functions that may
  return a value or may return nothing.

  This pattern is useful in AI systems when looking up records, finding
  matching rules, checking cached results, or parsing inputs that may not
  be valid.
*/

type RoutingRule = {
    id: string;
    category: string;
    keyword: string;
  };
  
  const routingRules: RoutingRule[] = [
    {
      id: "rule_001",
      category: "billing",
      keyword: "charged",
    },
    {
      id: "rule_002",
      category: "support",
      keyword: "login",
    },
    {
      id: "rule_003",
      category: "technical",
      keyword: "error",
    },
  ];
  
  function findRuleByKeyword(inputText: string): RoutingRule | undefined {
    return routingRules.find((rule) => inputText.includes(rule.keyword));
  }
  
  function describeMatchedRule(rule: RoutingRule | undefined): string {
    if (!rule) {
      return "No matching rule was found.";
    }
  
    return `Matched rule ${rule.id} for category: ${rule.category}`;
  }
  
  function main() {
    const billingMessage = "Customer says they were charged twice.";
    const generalMessage = "Customer wants to know your business hours.";
  
    const billingRule = findRuleByKeyword(billingMessage);
    const generalRule = findRuleByKeyword(generalMessage);
  
    console.log();
    console.log("BILLING MESSAGE MATCH");
    console.log(billingRule);
    console.log(describeMatchedRule(billingRule));
  
    console.log();
    console.log("GENERAL MESSAGE MATCH");
    console.log(generalRule);
    console.log(describeMatchedRule(generalRule));
    console.log();
  
    // TypeScript forces us to handle the possibility that no rule was found.
  }
  
  main();