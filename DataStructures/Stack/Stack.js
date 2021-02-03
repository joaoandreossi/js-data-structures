'use strict'

const Stack = function(){
    this.array = []
}

Object.defineProperty(Stack.prototype, 'length', {
    get(){
        return this.array.length
    }
})

Stack.prototype.push = function(val){
    return this.array.push(val)
}

Stack.prototype.pop = function(){
    return this.array.pop()
}

Stack.prototype.peek = function(){
    return this.array.length !== 0 ? this.array[this.array.length-1] : undefined
}

Stack.prototype.print = function(){
    console.log(this.array)
}

Stack.prototype.contains = function(val){
    let contain = false
    this.array.forEach((element) => {
        if(element === val) contain = true
    })
    return contain
}

module.exports = Stack