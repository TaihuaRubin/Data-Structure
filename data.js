"use strict";

/*
Fill in your own code where you see "your code here".
You can insert new lines at those locations, but you
will not need to edit the lines above and below them.
*/

// -----------------------------------------
// Stacks

class Stack {
  // Stack constructor function
  // stacks are LIFO -> last in, first out

  constructor() {
    this.stack = [];
    this.stackTop = null; // start from null. lastest added item's index would be the new top
  }

  // Stack.prototype.add
  add(item) {
    // check if the stack is empty
    // if it is empty, make the stackTop 0 to add the item
    // if not, ++ to add the item to that index
    if (this.stack === []) {
      this.stackTop = 0;
      this.stack[this.stackTop] = item;
      console.log("Im the first add", this.stack);
    } else {
      this.stackTop++;
      this.stack[this.stackTop] = item;
    }
    return this; // for chaining, do not edit
  }

  // Stack.prototype.remove
  remove() {
    let removedItem = this.stack[this.stackTop];
    this.stackTop === 0 ? (this.stackTop = null) : this.stackTop--;
    return removedItem;
  }
}

// -----------------------------------------
// Queues

// EXTRA CREDIT: remove the `pending` line in the spec to attempt.

class Queue {
  // Queue constructor function
  // Queue -> FIFO
  constructor() {
    this.queue = [];
    this.next = null;
  }

  // Queue.prototype.add
  add(item) {
    this.queue = [...this.queue, item];
    if (this.next === null) {
      this.next = 0;
    }
    return this; // for chaining, do not edit
  }

  // Queue.prototype.remove
  remove() {
    if (this.next === null) {
      return undefined;
    } else {
      let removedItem = this.queue[this.next];
      this.next++;
      return removedItem;
    }
  }
}

// -----------------------------------------
// Linked lists

// EXTRA CREDIT: remove the `pending` line in the spec to attempt.

class LinkedList {
  // LinkedList constructor function
  constructor() {
    this.head = this.tail = null;
  }

  // LinkedList.prototype.addToTail
  addToTail(item) {
    // if we have no item
    if (!this.head) {
      let newNode = new ListNode(item, null, null);
      this.head = newNode;
      this.tail = newNode;
    } else if (this.head === this.tail) {
      // if we have only one
      let newNode = new ListNode(item, this.tail);
      this.head.next = newNode;
      this.tail = newNode;
    } else {
      let newNode = new ListNode(item, this.tail);
      this.tail.next = newNode; // link new tail to prev tail
      this.tail = this.tail.next; // re-set the new tail
    }

    return this; // for chaining, do not edit
  }

  // LinkedList.prototype.removeFromTail
  removeFromTail() {
    while (this.tail && this.tail !== this.head) {
      let removedNode = this.tail;
      // new tail = prev
      this.tail = removedNode.prev;
      this.tail.next = null;
      return removedNode.item;
    }
    if (this.head && this.head === this.tail) {
      let removedNode = this.head;
      this.head = this.tail = null;
      return removedNode.item;
    } else {
      return undefined;
    }
  }

  // LinkedList.prototype.forEach
  forEach(callbackFunc) {
    let allNode = [];
    // start with head
    let currentNode = this.head;
    // keep pushing & re-assign currentNode to .next
    while (currentNode.next) {
      allNode.push(currentNode.item);
      currentNode = currentNode.next;
      console.log(currentNode);
    }
    // until currentNode.next is null, then we still want to push this one
    allNode.push(currentNode.item);
    return allNode.forEach((each) => callbackFunc(each));
  }
}

class ListNode {
  // ListNode constructor function
  constructor(item, prev, next) {
    this.item = item;
    this.next = next || null;
    this.prev = prev || null;
  }
}

//-----------------------------------------
// Association lists

class Alist {
  // the lasted set would be the "next"

  // Alist constructor function
  constructor() {
    this.head = null;
  }

  // Alist.prototype.set
  set(key, value) {
    let newNode = new AlistNode(key, value, null);

    if (this.head === null) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    return this; // for chaining; do not edit
  }

  // Alist.prototype.get
  get(key) {
    // check head
    if (this.head !== null && this.head.key === key) {
      return this.head.value;
    } else {
      // check this.head.next
      let currentNode = this.head;
      while (currentNode.next) {
        if (currentNode.next.key === key) {
          return currentNode.next.value;
        } else {
          currentNode = currentNode.next;
        }
      }
    }
    return undefined;
  }
}

class AlistNode {
  // AlistNode constructor function
  constructor(key, value, next) {
    this.key = key;
    this.value = value;
    this.next = next;
  }
}

//-----------------------------------------
// Hash Tables

function hash(key) {
  let hashedKey = 0;
  for (let i = 0; i < key.length; i++) {
    hashedKey += key.charCodeAt(i);
  }
  return hashedKey % 20;
}

class HashTable {
  // HashTable constructor function
  constructor() {
    this.buckets = Array(20);
    // so there's 20 buckets in this table,
    // when collition of hashkeys happen, they go on that particular key's bucket's linked list...
    for (let i = 0; i < 20; i++) {
      this.buckets[i] = new Alist();
    }
  }

  // HashTable.prototype.set
  set(key, value) {
    // get hashkey
    const hashIdx = hash(key);
    this.buckets[hashIdx].set(key, value);
    return this;
  }

  // HashTable.prototype.get
  get(key) {
    const hashIdx = hash(key);
    const list = this.buckets[hashIdx];

    return this.buckets[hashIdx].get(key);
  }
}
//-----------------------------------------
// Binary search trees

class BinarySearchTree {
  // BinarySearchTree constructor function
  constructor(val) {
    // your code here
    this.value = val;
    this.left = null;
    this.right = null;
  }

  // BinarySearchTree.prototype.insert
  insert(val) {
    let newTree = new BinarySearchTree(val);

    // get direction
    const direction = val < this.value ? "left" : "right";

    if (!this[direction]) {
      this[direction] = newTree;
    } else {
      this[direction].insert(val);
    }

    return this; // for chaining, do not edit
  }

  // BinarySearchTree.prototype.min
  min() {
    let curNode = this;
    while (curNode.left) {
      curNode = curNode.left;
    }

    return curNode.value;
  }

  // BinarySearchTree.prototype.max
  max() {
    let curNode = this;
    while (curNode.right) {
      curNode = curNode.right;
    }
    return curNode.value;
  }

  // BinarySearchTree.prototype.contains
  contains(val) {
    // check this
    if (this.value === val) return true;

    let dir = val < this.value ? "left" : "right";
    // check the dir
    if (this[dir]) {
      if (this[dir].value === val) {
        return true;
      } else {
        return this[dir].contains(val);
      }
    } else {
      return false;
    }
  }

  // BinarySearchTree.prototype.traverse
  traverse(callbackFunc) {
    //left -> root -> right
    if (this.left) {
      this.left.traverse(callbackFunc);
    }
    callbackFunc(this.value);

    if (this.right) {
      this.right.traverse(callbackFunc);
    }
  }
}
