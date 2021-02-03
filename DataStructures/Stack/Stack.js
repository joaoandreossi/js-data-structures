'use strict'

const Stack = function(){
    this.array = []
}

Object.defineProperty(Stack.prototype, 'length', {
    get(){
        return this.array.length
    }
})

/*
*   Time complexity: O(1)
*/
Stack.prototype.push = function(val){
    return this.array.push(val)
}

/*
*  Time complexity: O(1)
*/
Stack.prototype.pop = function(){
    return this.array.pop()
}

/*
*   Time complexity: O(1)
*/
Stack.prototype.peek = function(){
    return this.array.length !== 0 ? this.array[this.array.length-1] : undefined
}

/*
*   Time complexity: O(1)
*/
Stack.prototype.print = function(){
    console.log(this.array)
}

/*
*   Time complexity: O(n)
*/
Stack.prototype.contains = function(val){
    let contain = false
    this.array.forEach((element) => {
        if(element === val) contain = true
    })
    return contain
}

module.exports = Stack