const Deque = require("./deque");

function find_survivor(max, num) {
  if (num > max) {
    return "max number must be less than victim number";
  } else if (num == 1) {
    return "number must be greater than 1";
  }
  let victimDeque = new Deque();
  for (let i = 1; i <= max; i++) {
    victimDeque.appendright(i);
  }
  let curr = victimDeque.head;
  victimDeque.head.prev = victimDeque.tail;
  victimDeque.tail.next = victimDeque.head;

  while (curr.val !== curr.prev.val && curr.val !== curr.next.val) {
    for (let i = 1; i < num; i++) {
      curr = curr.next;
    }
    curr.prev.next = curr.next;
    curr.next.prev = curr.prev;
    curr = curr.next;
  }
  return curr.val;
}
