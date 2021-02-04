'use strict'

const LinkedList = require('../SinglyLinkedList/SinglyLinkedList')

const Queue = function(size){
    this.list = new LinkedList()
    this.MAX_SIZE = size
}

Object.defineProperty(Queue, 'length', {
    get(){
        return this.list.length
    }
})

/**
 *  Time Complexity: O(1)
 */
Queue.prototype.enqueue = function(val){
    if(this.isFull()) throw new Error('Queue is full.')

    this.list.prepend(val)
}

/**
 *  Time Complexity: O(n)
 */
Queue.prototype.dequeue = function(){
    if(this.isEmpty()) return undefined

    const head = this.peek()
    this.list.deleteLast()
    return head
}

/**
 *  Time Complexity: O(1)
 */
Queue.prototype.peek = function(){
    return this.list.getLast()
}

/**
 *  Time Complexity: O(1)
 */
Queue.prototype.isEmpty = function(){
    return this.list.lenght === 0 ? true : false
}

/**
 *  Time Complexity: O(1)
 */
Queue.prototype.isFull = function(){
    return this.list.lenght === this.MAX_SIZE ? true : false
}

module.exports = Queue