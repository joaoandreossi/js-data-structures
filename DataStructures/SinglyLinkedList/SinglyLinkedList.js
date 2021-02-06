'use strict'

const Node = require('./Node')

/**
 * This will be used to make a Queue structure,
 * so we need a pointer to the last element.
*/
const SinglyLinkedList = function(){
    this.head = undefined
    this.last = undefined
    this.length = 0
}

Object.defineProperty(SinglyLinkedList, 'length', {
    get(){
        return this.length
    }
})

/** 
 * Time Complexity: O(1)
*/
SinglyLinkedList.prototype.append = function(value, key) {
    
    const node = new Node(value, key)
    
    if(this.head === undefined){
        this.head = node
        this.last = node
        this.length++
        return
    }

    let current = this.last
    current.next = node
    this.last = current.next
    this.length++
    return
}

/** 
 * Time Complexity: O(1)
*/
SinglyLinkedList.prototype.prepend = function(value, key) {
    
    const node = new Node(value, key)

    if(this.head === undefined){
        this.head = node
        this.last = node
        this.length++
        return
    }

    let newNode = node
    newNode.next = this.head
    this.head = newNode
    this.length++
    return
}

/** 
 * Time Complexity: O(n)
*/
SinglyLinkedList.prototype.insert = function(index, value, key) {

    const node = new Node(value, key)

    if(this.head === undefined){
        this.head = node
        this.last = node
        this.length++
        return
    }
    if(index > this.length){
        throw new Error(`Index out of bounds.\nList length: ${this.length} Input: ${index}`)
    }
    if(index < 0 && typeof(index) !== 'number'){
        throw new Error(`Invalid index value: ${index}`)
    }
    if(index === 0){
        this.prepend(node.value)
        return
    }
    if(index === this.length){
        this.append(node.value)
        return
    }

    let current = this.head
    let prev = undefined
    let newNode = node
    let i = 0

    do {
        if(i === index){
            prev.next = newNode
            newNode.next = current
            this.length++
            return
        }
        prev = current
        current = current.next
        i++
    } while(current !== undefined)
}

/** 
 * Time Complexity: O(1)
*/
SinglyLinkedList.prototype.deleteFirst = function() {
    if(this.head === undefined) return

    let current = this.head.next
    if(this.head === this.last){
        this.last = current
    }
    this.head = current
    this.length--
}

/** 
 * Time Complexity: O(n)
*/
SinglyLinkedList.prototype.deleteLast = function() {
    if(this.head === undefined) return
    if(this.head.next === undefined){
        this.head = undefined
        return
    } 

    let current = this.head
    let prev = current

    while(current !== undefined){
        if(current === this.last){
            prev.next = undefined
            this.last = prev
            this.length--
            return
        }
        prev = current
        current = current.next
    }
}

/** 
 * Time Complexity: O(n)
*/
SinglyLinkedList.prototype.delete = function(index) {
    this.verifyInput(index)

    if(index === 0){
        return this.deleteFirst()
    }
    if(index === this.length - 1){
        return this.deleteLast()
    }

    let current = this.head
    let prev = undefined
    let i = 0

    while(current !== undefined){
        if(i === index){
            prev.next = current.next
            this.length--
            return
        }
        prev = current
        current = current.next
        i++
    }
}

/** 
 * Time Complexity: O(n)
*/
SinglyLinkedList.prototype.update = function(index, val){
    this.verifyInput(index)

    if(this.head === undefined){
        return
    }

    let current = this.head
    let i = 0

    while(current !== undefined){
        if(i === index){
            current.value = val
            return
        }
        current = current.next
        i++
    }
}

/** 
 * Time Complexity: O(n)
*/
SinglyLinkedList.prototype.get = function(index) {
    this.verifyInput(index)

    if(index === 0){
        return this.getFirst()
    }
    if(index === this.length - 1){
        return this.getLast()
    }

    let current = this.head
    let i = 0

    while(current !== undefined){
        if(i === index){
            return current.value
        }
        current = current.next
        i++
    }

    return undefined
}

/** 
 * Time Complexity: O(1)
*/
SinglyLinkedList.prototype.getFirst = function() {
    if(this.head === undefined) return undefined

    return this.head.value
}

/** 
 * Time Complexity: O(1)
*/
SinglyLinkedList.prototype.getLast = function() {
    if(this.head === undefined) return undefined

    return this.last.value
}

/** 
 * Time Complexity: O(n)
*/
SinglyLinkedList.prototype.contains = function(value) {
    let current = this.head

    while(current !== undefined){
        if(current.value === value) return true
        current = current.next
    }

    return false
}

/** 
 * Time Complexity: O(n)
 * Space Complexity: O(n)
*/
SinglyLinkedList.prototype.toArray = function(){
    if(this.head === undefined) return

    const array = []
    let current = this.head

    while(current !== undefined){
        array.push(current.value)
        current = current.next
    }

    return array
}

/** 
 * Time Complexity: O(n)
*/
SinglyLinkedList.prototype.invert = function(){
    if(this.head === undefined) return undefined

    this.last = this.head
    let current = this.head
    let next = current.next
    let prev = undefined

    while(current !== undefined){
        current.next = prev
        prev = current
        current = next
        next === undefined ? next : next = current.next
    }

    this.head = prev
}

/** 
 * Time Complexity: O(n)
*/
SinglyLinkedList.prototype.print = function(){
    if(this.head === undefined){
        console.log('Empty list')
        return
    }

    let current = this.head
    let msg = ''

    while(current !== undefined){
        msg = msg.concat(...[current.value, ' -> '])
        current = current.next
    }
    msg = msg.concat('undefined')
    console.log(msg)
}

/** 
 * Time Complexity: O(1)
*/
SinglyLinkedList.prototype.verifyInput = function(index){
    if(index >= this.length){
        throw new Error(`Index out of bounds.\nLast Index: ${this.length-1} Input: ${index}`)
    }
    if(index < 0 && typeof(index) !== 'number'){
        throw new Error(`Invalid index value: ${index}`)
    }
}

module.exports = SinglyLinkedList