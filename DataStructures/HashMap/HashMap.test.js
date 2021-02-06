const HashMap = require('./HashMap')

test('set() should insert the key-value pair on the HashMap.', () => {
    const map = new HashMap(5)
    
    map.set(0, 0)
    map.set(true, 0)
    map.set('test', 0)
    map.set(50, 0)
    map.set({test: test}, 0)

    expect(map.has(0)).toBe(true)
    expect(map.has(true)).toBe(true)
    expect(map.has('test')).toBe(true)
    expect(map.has(50)).toBe(true)
    expect(map.has({test: test})).toBe(true)
})

test('get() should return the value associated with the passed key.', () => {
    const map = new HashMap(5)
    
    map.set(0, 'wow')
    map.set(true, 420)
    map.set('test', {a:1})
    map.set(50, [1,2,3])
    map.set({test: test}, undefined)

    expect(map.get(0)).toBe('wow')
    expect(map.get(true)).toBe(420)
    expect(map.get('test')).toMatchObject({a:1})
    expect(map.get(50)).toMatchObject([1,2,3])
    expect(map.get({test: test})).toBe(undefined)
})

test('delete() should remove the key-value pair from the HashMap.', () => {
    const map = new HashMap(5)
    
    map.set(0, 'wow')
    map.set(true, 420)
    map.set('test', {a:1})
    map.set(50, [1,2,3])
    map.set({test: test}, undefined)

    map.delete(true)
    map.delete('test')

    expect(map.has(0)).toBe(true)
    expect(map.has(true)).toBe(false)
    expect(map.has('test')).toBe(false)
    expect(map.has(50)).toBe(true)
    expect(map.has({test: test})).toBe(true)
})

test('clear() should delete all entries on the HashMap.', () => {
    const map = new HashMap(5)

    map.set(0, 0)
    map.set(true, 0)
    map.set('test', 0)
    map.set(50, 0)
    map.set({test: test}, 0)
    
    expect(map.has(0)).toBe(true)
    expect(map.has(true)).toBe(true)
    expect(map.has('test')).toBe(true)
    expect(map.has(50)).toBe(true)
    expect(map.has({test: test})).toBe(true)
    
    map.clear()
    
    expect(map.has(0)).toBe(false)
    expect(map.has(true)).toBe(false)
    expect(map.has('test')).toBe(false)
    expect(map.has(50)).toBe(false)
    expect(map.has({test: test})).toBe(false)
})

test('entries() should return an array of objects representing the key-value pairs.', () => {
    const map = new HashMap(5)

    let array = []
    
    map.set(0, 'wow')
    map.set(true, 420)
    map.set('test', {a:1})
    map.set(50, [1,2,3])
    map.set({test: test}, undefined)

    array = map.entries()

    /* difficult to test as JavaScript compares objects references not values,
     * the order also changes with the hashing
    */
    expect(array.length).toBe(5)
    
})

test('keys() should return an array with all the keys from the HashMap.', () => {
    const map = new HashMap(5)

    let array = []
    
    map.set(0, 'wow')
    map.set(true, 420)
    map.set('test', {a:1})
    map.set(50, [1,2,3])
    map.set({test: test}, undefined)

    array = map.keys()

    expect(array.includes(0)).toBe(true)
    expect(array.includes(true)).toBe(true)
    expect(array.includes('test')).toBe(true)
    expect(array.includes(50)).toBe(true)
    expect(array.length).toBe(5)
    /* fails because it compares objects references not values
    expect(array.includes({test: test})).toBe(true)
    */
    
})

test('values() should return an array with all the values from the HashMap.', () => {
    const map = new HashMap(5)
    
    let array = []
    
    map.set(0, 'wow')
    map.set(true, 420)
    map.set('test', {a:1})
    map.set(50, [1,2,3])
    map.set({test: test}, undefined)

    array = map.values()

    expect(array.includes('wow')).toBe(true)
    expect(array.includes(420)).toBe(true)
    /* fails because it compares objects references not values
    expect(array.includes({a:1})).toBe(true)
    expect(array.includes([1,2,3])).toBe(true)
    */
    expect(array.includes(undefined)).toBe(true)
    expect(array.length).toBe(5)
})