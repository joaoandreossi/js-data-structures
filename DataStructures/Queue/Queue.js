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

    const head = this.front()
    this.list.deleteLast()
    return head
}

/**
 *  Time Complexity: O(1)
 */
Queue.prototype.front = function(){
    return this.list.getLast()
}

/**
 *  Time Complexity: O(1)
 */
Queue.prototype.rear = function(){
    return this.list.getFirst()
}

/**
 *  Time Complexity: O(n)
 */
Queue.prototype.contains = function(val){
    return this.list.contains(val)
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
    return this.list.length === this.MAX_SIZE ? true : false
}

module.exports = Queue