'use strict'

const getHash = function(key, size){
    if(!isValidKey(key)) throw new Error(`Invalid key.\nInput: ${key}`)
    
    let strKey = key

    switch(typeof(key)){
        case 'object':
            strKey = JSON.stringify(key)
            break
        case 'undefined':
            strKey = 'undefined'
            break
        default:
            strKey = strKey.toString()
            break
    }

    let hash = 0

    for (var i = 0; i < strKey.length; i++) {
        var char = strKey.charCodeAt(i)
        hash = ((hash<<5) - hash) + char
        hash = hash & hash
    }
    
    return hash % size
}

const isValidKey = (val) => {
    // this is to check is the value is NaN (NaN !== NaN)
    if(val !== val) return false

    if(typeof(val) === 'string'){
        if(val.trim().length === 0) return false
    }
    
    return true
}

module.exports = getHash