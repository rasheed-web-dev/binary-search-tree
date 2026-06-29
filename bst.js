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
    this.root = this.#buildTree(this.arr);
  }

  #buildTree(array) {
    if (array.length <= 1) {
      return array[0] ? new TreeNode(array[0]) : null;
    }
    const midIndex = Math.floor(array.length / 2);
    const midElement = array[midIndex];
    const root = new TreeNode(midElement);
    root.setLeft(this.#buildTree(array.slice(0, midIndex)));
    root.setRight(this.#buildTree(array.slice(midIndex + 1)));
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

  includes(value, rootNode = this.root) {
    if (rootNode == null) {
      return false;
    }
    if (rootNode.value == value) {
      return true;
    }
    return (
      this.includes(value, rootNode.left) ||
      this.includes(value, rootNode.right)
    );
  }

  insert(value, rootNode = this.root) {
    if (rootNode == null) {
      const root = new TreeNode(value);
      return root;
    }
    if (rootNode.value == value) {
      return rootNode;
    }
    if (rootNode.value > value) {
      rootNode.left = this.insert(value, rootNode.left);
      return rootNode;
    } else {
      rootNode.right = this.insert(value, rootNode.right);
      return rootNode;
    }
  }

  deleteItem(value) {
    this.root = this.deleteItemHelper(value);
  }

  deleteItemHelper(value, rootNode = this.root) {
    if (rootNode.value == value) {
      if (rootNode.left != null) {
        if (rootNode.right != null) {
          rootNode.left.right = rootNode.right;
        }
        rootNode = rootNode.left;
        return rootNode;
      }
      if (rootNode.right != null) {
        rootNode = rootNode.right;
        return rootNode;
      }
      return null;
    }
    if (rootNode.value > value) {
      rootNode.left = this.deleteItemHelper(value, rootNode.left);
      return rootNode;
    } else {
      rootNode.right = this.deleteItemHelper(value, rootNode.right);
      return rootNode;
    }
  }

  levelOrderForEach(callback, rootNode = this.root) {
    if (!callback || typeof callback != "function") {
      throw Error("A Callback function is required");
    }
    let queue = [rootNode];
    while (queue.length != 0) {
      callback(queue[0].value);
      if (queue[0].left != null) {
        queue.push(queue[0].left);
      }
      if (queue[0].right != null) {
        queue.push(queue[0].right);
      }
      queue.shift();
    }
  }

  inOrderForEach(callback) {
    if (!callback || typeof callback != "function") {
      throw Error("A Callback function is required");
    }
    this.inOrderForEachHelper(callback);
  }
  inOrderForEachHelper(callback, rootNode = this.root) {
    if (rootNode == null) {
      return;
    }
    this.inOrderForEachHelper(callback, rootNode.left);
    callback(rootNode.value);
    this.inOrderForEachHelper(callback, rootNode.right);
  }

  preOrderForEach(callback) {
    if (!callback || typeof callback != "function") {
      throw Error("A Callback function is required");
    }
    this.preOrderForEachHelper(callback);
  }
  preOrderForEachHelper(callback, rootNode = this.root) {
    if (rootNode == null) {
      return;
    }
    callback(rootNode.value);
    this.preOrderForEachHelper(callback, rootNode.left);
    this.preOrderForEachHelper(callback, rootNode.right);
  }

  postOrderForEach(callback) {
    if (!callback || typeof callback != "function") {
      throw Error("A Callback function is required");
    }
    this.postOrderForEachHelper(callback);
  }
  postOrderForEachHelper(callback, rootNode = this.root) {
    if (rootNode == null) {
      return;
    }
    this.postOrderForEachHelper(callback, rootNode.left);
    this.postOrderForEachHelper(callback, rootNode.right);
    callback(rootNode.value);
  }
}

const t = new Tree([1, 2, 3, 4, 5, 6, 7, 8]);
t.prettyPrint(t.root);
t.preOrderForEach((item) => {
  console.log(item);
});
