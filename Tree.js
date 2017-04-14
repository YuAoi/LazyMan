class Node {
  constructor (data, left, right) {
    this.data = data
    this.left = left
    this.right = right
  }

  show () {
    return this.data
  }
}

class BST {
  constructor() {
    this.root = null
  }

  insert (data) {
    let n = new Node(data, null, null)
    if (this.root === null) {
      this.root = n
    } else {
      let current = this.root
      let parent
      while (true) {
        parent = current
        if (data < current.data) {
          current = current.left
          if (current === null) {
            parent.left = n
            break
          }
        } else {
          current = current.right
          if (current === null) {
            parent.right = n
            break
          }
        }
      }
    }
  }

  inOrder (node) {
    if (!(node === null)) {
      this.inOrder(node.left)
      putstr(node.show() + ' ')
      this.inOrder(node.right)
    }
  }

  preOrder (node) {
    if (!(node === null)) {
      putstr(node.show() + ' ')
      this.preOrder(node.left)
      this.preOrder(node.right)
    }
  }

  postOrder (node) {
    if (!(node === null)) {
      this.postOrder(node.left)
      this.postOrder(node.right)
      putstr(node.show() + ' ')
    }
  }

  getMin () {
    let current = this.root
    while (!(current.left === null)) {
      console.log('process', current.data)
      current = current.left
    }
    return current.data
  }

  getMax () {
    let current = this.root
    while (!(current.right === null)) {
      current = current.right
    }
    return current.data
  }

  find (data) {
    let current = this.root
    while (current !== null) {
      if (current.data === data) {
        return current
      } else if (data < current.data) {
        current = current.left
      } else {
        current = current.right
      }
    }
    return null
  }
}

function putstr (str) {
  console.log(str)
}

let nums = new BST()
nums.insert(23)
nums.insert(45)
nums.insert(16)
nums.insert(37)
nums.insert(3)
nums.insert(99)
nums.insert(9)
nums.insert(12)
nums.insert(52)
nums.insert(2)
// console.log('Inorder traversal: ')
// nums.inOrder(nums.root)
// console.log('Preorder traversal: ')
// nums.preOrder(nums.root)
// console.log('PostOrder traversal: ')
// nums.postOrder(nums.root)

console.log('Min', nums.getMin())
console.log('Max', nums.getMax())
console.log('99', nums.find(99))
// console.log(JSON.stringify(nums, null, 2))
