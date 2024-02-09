class Node {
  constructor(val, prev = null, next = null) {
    this.val = val;
    this.prev = prev;
    this.next = next;
  }
}

class Deque {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  isEmpty() {
    if (this.head == null && this.tail == null) {
      return true;
    } else {
      return false;
    }
  }

  appendleft(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      let currHead = this.head;
      currHead.prev = newNode;
      newNode.next = currHead;
      this.head = newNode;
    }
  }

  appendright(val) {
    const newNode = new Node(val);
    if (!this.tail) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      let currTail = this.tail;
      currTail.next = newNode;
      newNode.prev = currTail;
      this.tail = newNode;
    }
  }

  popleft() {
    if (!this.head) {
      throw new Error("Deque is empty");
    } else {
      let currentNode = this.head;
      let returnVal = currentNode.val;
      let nextNode = currentNode.next;
      if (!nextNode) {
        this.head = null;
        this.tail = null;
        return returnVal;
      } else {
        nextNode.prev = null;
        this.head = nextNode;
        return returnVal;
      }
    }
  }

  popright() {
    if (!this.tail) {
      throw new Error("Deque is empty");
    } else {
      let currentNode = this.tail;
      let returnVal = currentNode.val;
      let prevNode = currentNode.prev;
      if (!prevNode) {
        this.head = null;
        this.tail = null;
        return returnVal;
      } else {
        prevNode.next = null;
        this.tail = prevNode;
        return returnVal;
      }
    }
  }

  peekleft() {
    if (!this.head) {
      return "Deque is empty";
    } else {
      let currentNode = this.head;
      let returnVal = currentNode.val;
      return returnVal;
    }
  }

  peekright() {
    if (!this.tail) {
      return "Deque is empty";
    } else {
      let currentNode = this.tail;
      let returnVal = currentNode.val;
      return returnVal;
    }
  }
}

module.exports = Deque;
