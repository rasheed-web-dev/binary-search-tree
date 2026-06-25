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
      return new TreeNode(array[0]);
    }
    const midIndex = Math.floor(array.length / 2);
    const midElement = array[midIndex];
    const root = new TreeNode(midElement);
    root.setLeft(this.buildTree(array.slice(0, midIndex)));
    root.setRight(this.buildTree(array.slice(midIndex + 1)));
    return root;
  }
}

const t = new Tree([]);
console.log(t.root);
