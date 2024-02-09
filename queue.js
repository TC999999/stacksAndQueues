/** Node: node for a queue. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Queue: chained-together nodes where you can
 *  remove from the front or add to the back. */

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** enqueue(val): add new value to end of the queue. Returns undefined. */

  enqueue(val) {
    if (val == undefined) {
      throw new Error("value cannot be empty");
    }
    const newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
      this.size = 1;
    } else {
      this.last.next = newNode;
      this.last = newNode;
      this.size += 1;
    }
  }

  /** dequeue(): remove the node from the start of the queue
   * and return its value. Should throw an error if the queue is empty. */

  dequeue() {
    if (!this.first) {
      throw new Error("Queue is Empty");
    } else {
      let currentNode = this.first;
      let nextNode = currentNode.next;
      let returnVal = currentNode.val;
      this.first = nextNode;
      this.size -= 1;
      if (this.first == null) {
        this.last = null;
        this.size = 0;
      }
      return returnVal;
    }
  }

  /** peek(): return the value of the first node in the queue. */

  peek() {
    if (!this.first) {
      return "Queue is Empty";
    } else {
      let currentNode = this.first;
      let returnVal = currentNode.val;
      return returnVal;
    }
  }

  /** isEmpty(): return true if the queue is empty, otherwise false */

  isEmpty() {
    if (this.size == 0) {
      return true;
    } else {
      return false;
    }
  }
}

module.exports = Queue;
