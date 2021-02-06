'use strict'

const ExtendedLinkedList = require('./ExtendedLinkedList')
const getHash = require('./Hash')

/**
 * The worst case is indeed O(n) for a lot of operations,
 * but is extremely improbable and in most cases is O(1)
 */
const HashMap = function(size){
    this.buckets = []
    this.MAX_SIZE = size
}

/**
 * Time Complexity: O(1) 
 */
HashMap.prototype.set = function(key, val){
    let hash = getHash(key, this.MAX_SIZE)

    if(this.buckets[hash] === undefined){
        const list = new ExtendedLinkedList()
        list.append(val, key)
        this.buckets[hash] = list
    } else {
        this.buckets[hash].append(val, key)
    }
}

/**
 * Time Complexity: O(n) 
 * Average: O(1)
 */
HashMap.prototype.has = function(key){
    let hash = getHash(key, this.MAX_SIZE)

    if(this.buckets[hash] === undefined) return false

    return this.buckets[hash].containKey(key)
}

/**
 * Time Complexity: O(n)
 * Average: O(1)
 */
HashMap.prototype.get = function(key){
    let hash = getHash(key, this.MAX_SIZE)

    if(this.buckets[hash] === undefined) return undefined

    return this.buckets[hash].getValue(key)
}

/**
 * Time Complexity: O(n) 
 */
HashMap.prototype.entries = function(){
    let array = []
    
    this.buckets.forEach((list) => {
        array = array.concat(list.entries())
    })

    return array
}

/**
 * Time Complexity: O(n) 
 */
HashMap.prototype.keys = function(){
    let array = []
    
    this.buckets.forEach((list) => {
        array = array.concat(list.keys())
    })

    return array
}

/**
 * Time Complexity: O(n) 
 */
HashMap.prototype.values = function(){
    let array = []
    
    this.buckets.forEach((list) => {
        array = array.concat(list.values())
    })

    return array
}

/**
 * Time Complexity: O(n) 
 * Average: O(1)
 */
HashMap.prototype.delete = function(key){
    let hash = getHash(key, this.MAX_SIZE)

    if(this.buckets[hash] === undefined) return undefined

    return this.buckets[hash].deletePair(key)
}

/**
 * Time Complexity: O(n) 
 */
HashMap.prototype.clear = function(){
    this.buckets.forEach((list) => {
        while(list.getFirst() !== undefined){
            list.deleteLast()
        }
    })
}

module.exports = HashMap