class TreeNode {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }

  setLeft(left) {
    this.left = left;
  }

  setRight(right) {
    this.right = right;
  }
}

class Tree {
  constructor(arr) {
    arr.sort((a, b) => a - b);
    let newArr = [];
    arr.forEach((element) => {
      if (!newArr.includes(element)) {
        newArr.push(element);
      }
    });
    this.arr = newArr;
    this.root = this.buildTree(this.arr);
  }

  buildTree(array) {
    if (array.length <= 1) {
      return array[0] ? new TreeNode(array[0]) : null;
    }
    const midIndex = Math.floor(array.length / 2);
    const midElement = array[midIndex];
    const root = new TreeNode(midElement);
    root.setLeft(this.buildTree(array.slice(0, midIndex)));
    root.setRight(this.buildTree(array.slice(midIndex + 1)));
    return root;
  }

  prettyPrint(node, prefix = "", isLeft = true) {
    if (node === null || node === undefined) {
      return;
    }

    this.prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.value}`);
    this.prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
  }
}

const t = new Tree([1, 2, 3, 4, 5, 6, 7, 8]);
console.log(t.root);
t.prettyPrint(t.root);
