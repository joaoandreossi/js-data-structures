const TreeNode = function(value){
    this.value = value
    this.left = undefined
    this.right = undefined
}

TreeNode.prototype.isLeaf = function(){
    return this.left === undefined && this.right === undefined ? true : false
}

module.exports = TreeNode