class Stack {
   constructor() {
      this.data = [];
   }
   add(record) {
      this.data.push(record);
   }
   remove() {
      this.data.pop();
   }
   peek() {
      return this.data.length > 0;
   }
}
// stackNew = new Stack();
// for (let i = 1; i <= 6; i++) {
//    stackNew.add(i);
// }
// console.log(stackNew);

// for (let i = 1; i < 2; i++) {
//    stackNew.remove(i);
// }
// console.log(stackNew);

// // Export Data from stack tEsting.js

module.exports = Stack;
