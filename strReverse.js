const Stack = require("./stack");

const letStack = new Stack();

function stringReverse(str) {
  for (let letter of str) {
    letStack.push(letter);
  }
  let revString = "";
  while (!letStack.isEmpty()) {
    let newStr = letStack.pop();
    revString = revString.concat(newStr);
  }
  return revString;
}
