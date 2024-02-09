const Stack = require("./stack");

function balancedBrackets(str) {
  let bracketStack = new Stack();
  for (let char of str) {
    if (char == "(" || char == "[" || char == "{") {
      bracketStack.push(char);
    } else if (char == ")" || char == "]" || char == "}") {
      if (bracketStack.isEmpty()) {
        return false;
      }
      let front = bracketStack.pop();
      let brackStr = front.concat(char);
      if (brackStr !== "()" && brackStr !== "[]" && brackStr !== "{}") {
        return false;
      }
    }
  }

  if (bracketStack.isEmpty()) {
    return true;
  } else {
    return false;
  }
}
