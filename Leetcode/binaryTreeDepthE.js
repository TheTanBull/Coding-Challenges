// Code by Jeff "Tan" Bullock 
// @TheTanBull

var maxDepth = function(root) {
    let max = -1;
    const getMaxLevel = (node, depth=0) => {
      if (node) {
        if (depth > max) max = depth;
        getMaxLevel(node.left, depth + 1);
        getMaxLevel(node.right, depth + 1);
      }
    }
    getMaxLevel(root);
    return max + 1;
  };