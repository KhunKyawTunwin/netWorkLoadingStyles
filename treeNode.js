class Node {
   constructor(data) {
      this.data = data;
      this.children = [];
   }
   add(data) {
      this.children.push(new Node(data));
   }
   remove(data) {
      this.children = this.children.filter((node) => {
         return node.data !== data;
      });
   }
}

// Tree  Data structures

class Tree {
   constructor() {
      this.root = null;
   }

   traverseBFS() {
      let arr = [this.root];
      let resultArray = [];
      while (arr.length) {
         let node = arr.shift();
         if (node.children.length) {
            // for (let i = 0; i < node.children.length; i++) {
            //    arr.push(node.children[i]);
            // }
            arr.push(...node.children);
         }
         resultArray.push(node.data);
      }
      return resultArray;
   }

   // Traverse DFS v

   traverseDFS() {
      let arr = [this.root];
      let dfsArray = [];
      while (arr.length) {
         let node = arr.shift();
         if (node.children.length) {
            arr.unshift(...node.children);
         }
         dfsArray.push(node.data);
      }
      return dfsArray;
   }
}

// Tree Level With

function getTreeLevelWidth(root) {
   let counter = [0];
   let arr = [root, "s"];
   while (arr.length > 1) {
      let node = arr.shift();
      if (node === "s") {
         arr.push("s");
         counter.push(0);
      } else {
         if (node.children.length) {
            arr.push(...node.children);
         }
         counter[counter.length - 1]++;
      }
   }
   return counter;
}

const node = new Node(5);
node.add(10);
node.add(-3);
node.add(8);
node.children[0].add(7);
node.children[0].add(6);
node.children[0].add(14);
node.children[2].add(2);

const tree = new Tree();
tree.root = node;

// console.log(tree.root);
// console.log(tree.root.children[2]);

// let bfsResult = tree.traverseBFS();
// console.log("BFS Traverse Result is :", bfsResult);
// let dfsResult = tree.traverseDFS();
// console.log("BFS Traverse Result is :", dfsResult);
const treeLevelWidth = getTreeLevelWidth(tree.root);
console.log("DFS ", treeLevelWidth);
