//  Binary SearCh Tree

class Node {
   constructor(data) {
      this.data = data;
      this.left = null;
      this.right = null;
   }

   // Insert Data
   insert(data) {
      if (data < this.data && this.left) {
         this.left.insert(data);
      } else if (data < this.data) {
         this.left = new Node(data);
      } else if (data > this.data && this.right) {
         this.right.insert(data);
      } else if (data > this.data) {
         this.right = new Node(data);
      }
   }

   contains(data) {
      if (this.data === data) {
         return this.data;
      }
      if (data < this.data && this.left) {
         return this.left.contains(data);
      } else if (data > this.data && this.right) {
         return this.right.contains(data);
      }
      return null;
   }
}

let node = new Node(5);
node.insert(2);
node.insert(8);
node.insert(1);
node.insert(3);
node.insert(7);
node.insert(9);
node.insert(-3);
node.insert(11);
console.log(node);

/*
                5 
              /   \
            2       8
           /  \    /  \
         1     3   7   9
        /               \
      -3                 11 
*/
