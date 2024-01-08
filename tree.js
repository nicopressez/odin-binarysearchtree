let arraytest = [15,0,1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]

class Node{
  constructor(d){
    this.data = d;
    this.left = null;
    this.right = null;
  }
}

class Tree{
  constructor(array){
    const sortedArray = array.sort((a,b) => a - b);
    this.root = this.buildTree(sortedArray);
  }

  buildTree(sortedArray) {
    if (sortedArray.length === 0) return null;

    const midpoint = Math.floor(sortedArray.length / 2);
    const newNode = new Node(sortedArray[midpoint]);
    newNode.left = this.buildTree(sortedArray.slice(0, midpoint));
    newNode.right = this.buildTree(sortedArray.slice(midpoint + 1));
    return newNode;
  }

  insert(value) {
    let newNode = new Node(value);

    if (!this.root) {
      this.root = newNode;
      return;
    }

    let currentNode = this.root;
    let parentNode = null;

    while (currentNode !== null) {
      parentNode = currentNode;

      if (value < currentNode.data) {
        currentNode = currentNode.left;
      } else if (value > currentNode.data) {
        currentNode = currentNode.right;
      } else {
                return;
      }
    }

    if (value < parentNode.data) {
      parentNode.left = newNode;
    } else {
      parentNode.right = newNode;
    }
  }

  delete(value){
    let previousNode;
    let currentNode = this.root;

    while (currentNode.data != value)
    {
      if (value > currentNode.data) {
        previousNode = currentNode;
        currentNode = currentNode.right}
      else if (value < currentNode.data) {
        previousNode = currentNode;
        currentNode = currentNode.left}
    }
    if (currentNode.left == null && currentNode.right == null){
      if (previousNode.right == currentNode) previousNode.right = null;
      else if (previousNode.left == currentNode) previousNode.left = null;
      delete this.currentNode
    }
    
    if (currentNode.left && currentNode.right === null){
      if (previousNode.left == currentNode) previousNode.left = currentNode.left;
      if (previousNode.right == currentNode) previousNode.right = currentNode.left;
    delete this.currentNode;
    }
      else if (currentNode.right && currentNode.left === null){
        if (previousNode.left == currentNode) previousNode.left = currentNode.right;
        if (previousNode.right == currentNode) previousNode.right = currentNode.right;
        delete this.currentNode;
      }

    if (currentNode.left && currentNode.right){
      let replacingNode = currentNode.right;
      let previousToReplacingNode;
      while (replacingNode.left){
          previousToReplacingNode = replacingNode;
          replacingNode = replacingNode.left
      }

      previousToReplacingNode.left = null;      
      currentNode.data = replacingNode.data;
      delete this.replacingNode;
    }
  }
  find(value){
    let currentNode = this.root;
    while (currentNode.data != value) {

      if (value < currentNode.data) {
        currentNode = currentNode.left;
      } else if (value > currentNode.data) {
        currentNode = currentNode.right;
      } else {
                return;
      }

      return currentNode;
  }}
  levelOrder(callbackFn){
    const queue = [this.root]
    const results = [];

    while(queue.length){
    let currentNode = queue.shift();
      results.push(currentNode.data);
      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);

      if (currentNode !== null && callbackFn){
        callbackFn(currentNode);
      }
    }

    if (!callbackFn) return results;
  }

  inOrder(callbackFn){
    const results = [];

    function traverse(node){
    if (node !== null){
      traverse(node.left);
      results.push(node.data);
      traverse(node.right)
    }
  }
  traverse(this.root);
  if (!callbackFn) return (results)
    else results.forEach (data => callbackFn(data));
}
  postOrder(callbackFn){
    const results = [];
    function traverse(node){
       if (node !== null){
      traverse (node.left);
      traverse (node.right);
      results.push(node.data);
       }
    }
    traverse(this.root);
    if (!callbackFn) return results;
      else results.forEach(data => (callbackFn(data)));
  }

  preOrder (callbackFn){
    const results = [];
    function traverse(node){
      if (node !== null){
        results.push(node.data);
        traverse(node.left);
        traverse(node.right);
      }
    }
    traverse(this.root);

    if (!callbackFn) return results;
      else results.forEach(data => (callbackFn(data)));
  }

  height(node){
    let currentHeight = 0;
      function traverse (node, thisHeight = 0){
        if (node !== null){
        thisHeight ++;
        traverse(node.left, thisHeight);
        traverse(node.right, thisHeight);}

        if (thisHeight > currentHeight) currentHeight = thisHeight;
      }
      traverse(node);
      return currentHeight;

  }
  depth(node){
    let currentDepth = 0;
    let value = node.data
    let currentNode = this.root;

    while (value !== currentNode.data)
    if (value < currentNode.data) {
        currentDepth++;
        currentNode = currentNode.left;
      } else if (value > currentNode.data) {
        currentDepth++
        currentNode = currentNode.right;
     }
     return currentDepth;
  }
  isBalanced(){
    const leftHeight = this.height(this.root.left);
    const rightHeight = this.height(this.root.right)

    const heightDiff = leftHeight - rightHeight;
    if (Math.abs(heightDiff) <= 1) return true;
        else return false;
  }
  rebalance(){
    const nodes = this.inOrder();
    this.root = this.buildTree(nodes);
  }
}

const prettyPrint = (node, prefix = "", isLeft = true) => {
  if (node === null) {
    return;
  }
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
  }
  console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
  }
};

  const tree = new Tree(arraytest)
  prettyPrint(tree.root)