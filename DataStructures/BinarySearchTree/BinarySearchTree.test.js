const BinarySearchTree = require('./BinarySearchTree')

test('insert() should insert the value on the tree.', () => {
    const bst = new BinarySearchTree()

    bst.insert(5)
    bst.insert(3)
    bst.insert(7)
    bst.insert(4)
    bst.insert(8)
    bst.insert(6)
    bst.insert(1)

    expect(bst.has(1)).toBe(true)
    expect(bst.has(0)).toBe(false)
})