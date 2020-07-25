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
    // if we have no item at all
    if (this.head === null) {
      this.head = this.tail = new ListNode(item);
    } else {
      const newNode = new ListNode(item, this.tail, null);
      this.tail.next = newNode;
    }

    return this; // for chaining, do not edit
  }

  // LinkedList.prototype.removeFromTail
  removeFromTail() {
    // your code here
  }

  // LinkedList.prototype.forEach
  forEach(callbackFunc) {
    // your code here
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
    // your code here
  }

  // HashTable.prototype.set
  set(key, value) {
    // your code here. DO NOT simply set a prop. on an obj., that's cheating!
    return this; // for chaining, do not edit
  }

  // HashTable.prototype.get
  get(key) {
    // your code here. DO NOT simply get a prop. from an obj., that's cheating!
  }
}

//-----------------------------------------
// Binary search trees

class BinarySearchTree {
  // BinarySearchTree constructor function
  constructor(val) {
    // your code here
  }

  // BinarySearchTree.prototype.insert
  insert(val) {
    // your code here
    return this; // for chaining, do not edit
  }

  // BinarySearchTree.prototype.min
  min() {
    // your code here
  }

  // BinarySearchTree.prototype.max
  max() {
    // your code here
  }

  // BinarySearchTree.prototype.contains
  contains(val) {
    // your code here
  }

  // BinarySearchTree.prototype.traverse
  traverse(callbackFunc) {
    // your code here
  }
}
