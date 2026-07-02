import { Tree } from "./bst.js";

function generateRandomNumbersArray(len) {
  const arr = [];
  for (let i = 0; i < len; i++) {
    const randomNum = Math.floor(Math.random() * 100);
    arr.push(randomNum);
  }
  return arr;
}

const t = new Tree(generateRandomNumbersArray(100));

t.prettyPrint(t.root);
console.log(t.isBalanced());
t.levelOrderForEach((val) => {
  process.stdout.write(val + " ");
});
console.log();
console.log("-------------------------------------");

t.preOrderForEach((val) => {
  process.stdout.write(val + " ");
});
console.log();
console.log("-------------------------------------");

t.inOrderForEach((val) => {
  process.stdout.write(val + " ");
});
console.log();
console.log("-------------------------------------");

t.postOrderForEach((val) => {
  process.stdout.write(val + " ");
});
console.log();
console.log("-------------------------------------");

t.insert(100);
t.insert(101);
t.insert(102);
t.insert(103);

console.log(t.isBalanced());
t.prettyPrint(t.root);

t.rebalance();
console.log(t.isBalanced());
t.prettyPrint(t.root);

t.levelOrderForEach((val) => {
  process.stdout.write(val + " ");
});
console.log();
console.log("-------------------------------------");

t.preOrderForEach((val) => {
  process.stdout.write(val + " ");
});
console.log();
console.log("-------------------------------------");

t.inOrderForEach((val) => {
  process.stdout.write(val + " ");
});
console.log();
console.log("-------------------------------------");

t.postOrderForEach((val) => {
  process.stdout.write(val + " ");
});
console.log();
console.log("-------------------------------------");
