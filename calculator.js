const Stack = require("./stack");

function calc(mathStr) {
  let mathStack = new Stack();
  mathStr = mathStr.split(" ");
  mathStr = mathStr.reverse();

  for (let char of mathStr) {
    if (!isNaN(parseFloat(char))) {
      mathStack.push(parseFloat(char));
    } else {
      let num1 = mathStack.pop();
      let num2 = mathStack.pop();
      if (char == "+") {
        mathStack.push(parseFloat(num1 + num2));
      } else if (char == "*") {
        mathStack.push(parseFloat(num1 * num2));
      } else if (char == "-") {
        mathStack.push(parseFloat(num1 - num2));
      } else if (char == "/") {
        mathStack.push(parseFloat(num1 / num2));
      } else if (char == "^") {
        mathStack.push(parseFloat(num1 ** num2));
      } else {
        return "Could not understand expression";
      }
    }
  }
  let returnVal = mathStack.first.val;
  return returnVal;
}
