'use strict'

const ExtendedLinkedList = require('../SinglyLinkedList/SinglyLinkedList')
const isEqual = require('lodash/isEqual')


/**
 * Time Complexity: O(n) 
 */
ExtendedLinkedList.prototype.containKey = function(key) {
    let current = this.head

    while(current !== undefined){
        if(isEqual(current.key, key)) return true
        current = current.next
    }

    return false
}

/**
 * Time Complexity: O(n) 
 */
ExtendedLinkedList.prototype.getValue = function(key) {
    let current = this.head

    while(current !== undefined){
        if(isEqual(current.key, key)) return current.value
        current = current.next
    }

    return undefined
}

/**
 * Time Complexity: O(n) 
 */
ExtendedLinkedList.prototype.entries = function() {
    let current = this.head
    let array = []

    while(current !== undefined){
        array.push({key: current.key, value: current.value})
        current = current.next
    }

    return array
}

/**
 * Time Complexity: O(n) 
 */
ExtendedLinkedList.prototype.keys = function() {
    let current = this.head
    let array = []

    while(current !== undefined){
        array.push(current.key)
        current = current.next
    }

    return array
}

/**
 * Time Complexity: O(n) 
 */
ExtendedLinkedList.prototype.values = function() {
    let current = this.head
    let array = []

    while(current !== undefined){
        array.push(current.value)
        current = current.next
    }

    return array
}

/**
 * Time Complexity: O(n) 
 */
ExtendedLinkedList.prototype.deletePair = function(key) {
    if(this.length === 1){
        this.deleteFirst()
        return
    } 
    
    let current = this.head
    let prev = undefined

    while(current !== undefined){
        if(isEqual(current.key, key)){
            prev.next = current.next
            this.lenght--
            return
        }
        prev = current
        current = current.next
    }
}

module.exports = ExtendedLinkedList