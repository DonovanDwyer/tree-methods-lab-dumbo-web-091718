function inOrder(node){
  if(node.left){
    inOrder(node.left)
  }
  console.log(node.data);
  if(node.right){
    inOrder(node.right)
  }
}

function findOrAdd(rootNode, newNode){
  if(newNode.data === rootNode.data){
    return true
  } else {
    if(rootNode.data > newNode.data){
      if(rootNode.left){
        return findOrAdd(rootNode.left, newNode);
      } else {
        rootNode.left = newNode;
      }
    } else {
      if(rootNode.right){
        return findOrAdd(rootNode.right, newNode);
      } else {
        rootNode.right = newNode;
      }
    }
  }
}

function max(rootNode){
  if(rootNode.right){
    return max(rootNode.right)
  } else {
    return rootNode
  }
}


function min(rootNode){
  if(rootNode.left){
    return min(rootNode.left)
  } else {
    return rootNode
  }
}
