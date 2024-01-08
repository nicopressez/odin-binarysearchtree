

const randomArray = (size) => {
    return Array.from({ length: size }, () => Math.floor(Math.random() * 100));
  };
  
  
  const tree = new Tree(randomArray(30));
  
  console.log("Balanced: " + tree.isBalanced());
  console.log("Level order: " + tree.levelOrder());
  console.log("Pre Order: " + tree.preOrder());
  console.log("Post Order: " + tree.postOrder());
  console.log("In Order: " + tree.inOrder());
  
  for (let index = 0; index < 5; index++) {
    tree.insert(Math.floor(Math.random() * 1000));
    
  }
  
  console.log("Balanced: " + tree.isBalanced())
  tree.rebalance();
  console.log("Balanced: " + tree.isBalanced())
  console.log("Level order: " + tree.levelOrder());
  console.log("Pre Order: " + tree.preOrder());
  console.log("Post Order: " + tree.postOrder());
  console.log("In Order: " + tree.inOrder());
  


