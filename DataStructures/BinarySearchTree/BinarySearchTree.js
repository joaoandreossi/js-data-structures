'use strict'

const TreeNode = require('./TreeNode')
const Stack = require('../Stack/Stack')
const Queue = require('../Queue/Queue')

const BinarySearchTree = function(){
    this.root = new TreeNode()
}

BinarySearchTree.prototype.insert = function(value){
    if(this.root.value === undefined){
        this.root.value = value
        return
    }

    let node = new TreeNode(value)
    let root = this.root

    add(root, node)
}

BinarySearchTree.prototype.has = function(value, mode){
    if(this.root.value === undefined){
        return false
    }

    let root = this.root

    switch(mode){
        case 'bfs':
            return bfs(root, value)
        case 'preorder':
            return preOrder(root, value)
        case 'inorder':
            return inOrder(root, value)
        case 'postorder':
            return postOrder(root, value)
        default:
            return bfs(root, value)
    }
}

const add = function(root, node){
    if(node.value < root.value){
        if(root.left === undefined){
            root.left = node
            return
        }
        add(root.left, node)
    }
    if(node.value > root.value){
        if(root.right === undefined){
            root.right = node
            return
        }
        add(root.right, node)
    }
    return
}

const preOrder = function(root, value){
    const stack = new Stack(100)
    const visited = []

    stack.push(root)

    while(stack.length){
        let current = stack.peek()
        
        if(current.value === value){
            return true
        }
        if(!visited.includes(current)){
            visited.push(current)
        }
        if(!visited.includes(current.right) && current.right !== undefined){
            stack.push(current.right)
        }
        if(!visited.includes(current.left) && current.left !== undefined){
            stack.push(current.left)
        }
        if((visited.includes(current.left) || current.left === undefined) 
            && (visited.includes(current.right) || current.right === undefined)){
            stack.pop()
        }
        if(current.isLeaf()){
            stack.pop()
        }
    }

    return false
}

const inOrder = function(root, value){
    const stack = new Stack(100)
    const visited = []

    stack.push(root)

    while(stack.length){
        let current = stack.peek()

        if(current.value === value){
            return true
        }
        if(!visited.includes(current.left) && current.left !== undefined){
            stack.push(current.left)
        } else {
            visited.push(stack.pop())
            
            if(!visited.includes(current.right) && current.right !== undefined){
                stack.push(current.right)
            }
        }
    }

    return false
}

const postOrder = function(root, value){
    const stack = new Stack(100)
    const visited = []

    stack.push(root)

    while(stack.length){
        if(!visited.includes(stack.peek().left) && stack.peek().left !== undefined){
            stack.push(stack.peek().left)
        } else if(!visited.includes(stack.peek().right) && stack.peek().right !== undefined){
            stack.push(stack.peek().right)
        } else {
            if(stack.peek().value === value) return true
            visited.push(stack.pop())
        }
    }

    return false
}

const bfs = function(root, value){
    const queue = new Queue(100)
    queue.enqueue(root)

    while(queue.length){
        if(queue.front().value === value){
            return true
        }
        if(queue.front().left !== undefined) queue.enqueue(queue.front().left)
        if(queue.front().right !== undefined) queue.enqueue(queue.front().right)
        queue.dequeue()
    }

    return false
}

module.exports = BinarySearchTree