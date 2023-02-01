class Node {
   constructor(data, next = null) {
      this.data = data;
      this.next = next;
   }
}

//   Create LinkList and its methods

class linkedList {
   constructor() {
      this.head = null;
   }

   //  Insert First
   insertFirst(data) {
      this.head = new Node(data, this.head);
   }
   //  Size
   size() {
      let count = 0;
      let node = this.head;
      while (node) {
         count++;
         node = node.next;
      }
      return count;
   }

   // Get First

   getFirst() {
      return this.head;
   }

   // Get Last
   getLast() {
      if (!this.head) {
         return false;
      }
      let node = this.head;
      while (node) {
         if (!node.next) {
            return node;
         }
         node = node.next;
      }
   }

   // Remove First
   removeFirst() {
      // Check If Linklist is it empty
      if (!this.head) {
         return;
      }
      return (this.head = this.head.next);
   }
   // Remove Last
   removeLast() {
      // Check If linklist is empty
      if (!this.head) {
         return;
      }
      // if Linklist have only one Node
      if (!this.head.next) {
         this.head = null;
      }
      let previous = this.head;
      let node = previous.next;
      while (node.next) {
         previous = node;
         node = node.next;
      }
      previous.next = null;
      return this.head;
   }

   // Insert Last node
   insertLast(data) {
      let last = this.getLast();
      if (last) {
         last.next = new Node(data);
         return last;
      } else {
         this.head = new Node(data);
         return this.head;
      }
   }

   // GetAt
   getAt(index) {
      if (!this.head) {
         return;
      }
      let counter = 0;
      let node = this.head;
      while (node) {
         if (counter === index) {
            return node;
         }
         counter++;
         node = node.next;
      }
      return "This is NULL";
   }

   //RemoveAt
   removeAt(index) {
      if (!this.head) {
         return;
      }
      if (index === 0) {
         this.head = this.head.next;
      }
      let previous = this.getAt(index - 1);
      if (!previous || !previous.next) {
         return "This is Out of Limit.";
      }
      previous.next = previous.next.next;
      return this.head;
   }

   // IsertAt

   insertAt(data, index) {
      if (!this.head) {
         this.head = new Node(data);
         return;
      }
      if (index === 0) {
         this.head = new Node(data, this.head);
         return;
      }
      let previous = this.getAt(index - 1) || this.getLast();
      let node = new Node(data, previous.next);
      previous.next = node;
      return this.head;
   }
   //   Create Circular Linked List in Node
   createCircular(index) {
      let lastNode = this.getLast();
      if (lastNode) {
         lastNode.next = this.getAt(index);
         return lastNode;
      }
      return false;
   }
}

//  FromLastNode linked List

function fromLastNode(linkedList, n) {
   let slow = linkedList.getFirst();
   let fast = linkedList.getFirst();
   for (let i = 0; i < n; i++) {
      fast = fast.next;
   }
   while (fast.next) {
      fast = fast.next;
      slow = slow.next;
   }
   return slow;
}

const linkList = new linkedList();
const node = new Node("Hey"); // first input
linkList.head = node;
console.log(linkList);
linkList.insertFirst("Hi");
linkList.insertFirst("Hub");
linkList.insertFirst("WelcomeToOurVillage");
linkList.insertFirst("Guy");

linkList.insertFirst("Warmy");
linkList.insertFirst("SeeYou");
linkList.insertFirst("ByeBye");
// linkList.createCircular(1);

// Yes,Hi,Hub,Hey

//  Middile Point in LinkedList

function getMidPoint(linkedList) {
   let slow = linkedList.getFirst();
   let fast = linkedList.getFirst();

   while (fast.next && fast.next.next) {
      fast = fast.next.next;
      slow = slow.next;
   }

   return slow;
}

//  CheckCircle linkedlist

function CheckCircle(linkedList) {
   let slow = linkedList.getFirst();
   let fast = linkedList.getFirst();
   while (fast.next && fast.next.next) {
      slow = slow.next;
      fast = fast.next.next;
      if (slow === fast) {
         return true;
      }
   }
   return false;
}

/* console.log("Insert First Data is :", linkList);

console.log("LinkedList Total Size is :", linkList.size());
console.log("Get First Data is :", linkList.getFirst());

console.log("Get LastNode is :", linkList.getLast());
 */
// console.log("Remove Firt InNode :", linkList.removeFirst());

// console.log("Remove Last Node :", linkList.removeLast());
// console.log("Insert Last :", linkList.insertLast("Yes"));
// console.log("Insert Last :", linkList.getLast());

// console.log("This is a GetAt 1 :", linkList.getAt(10));
// console.log("This is a GetAt 1 :", linkList.removeAt(10));
// console.log("This is a InsertAt 1 :", linkList.insertAt("Yes", 1));

// MidPoint in linkedlist

// console.log("This is MidPoint INlinkedList :", getMidPoint(linkList));
// console.log("Linked list is CheckCircular? Answer is ", CheckCircle(linkList));
console.log("Linked list FromLastNode Answer is ", fromLastNode(linkList, 3));
