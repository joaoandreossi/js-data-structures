const ExtendedLinkedList = require('./ExtendedLinkedList')

test('containKey() should correctly indicate if the list contain the passed key.', () => {
    const list = new ExtendedLinkedList()

    list.append(1, 'test')
    list.append({a: 1}, 55)
    list.append(false, true)

    expect(list.containKey('test')).toBe(true)
    expect(list.containKey(55)).toBe(true)
    expect(list.containKey(true)).toBe(true)
    expect(list.containKey(false)).toBe(false)
})

test('getValue() should return the value associated to the passed key.', () => {
    const list = new ExtendedLinkedList()

    list.append(1, 'test')
    list.append({a: 1}, 55)
    list.append(false, true)

    expect(list.getValue('test')).toBe(1)
    expect(list.getValue(55)).toMatchObject({a: 1})
    expect(list.getValue(true)).toBe(false)
    expect(list.getValue(false)).toBe(undefined)
})

test('deletePair() should remove from the list the key-value pair.', () => {
    const list = new ExtendedLinkedList()

    list.append(1, 'test')
    list.append({a: 1}, 55)
    list.append(false, true)

    expect(list.containKey('test')).toBe(true)
    expect(list.containKey(55)).toBe(true)
    expect(list.containKey(true)).toBe(true)

    list.deletePair(55)

    expect(list.containKey('test')).toBe(true)
    expect(list.containKey(55)).toBe(false)
    expect(list.containKey(true)).toBe(true)
})

test('keys() should return an array of all keys on the list.', () => {
    const list = new ExtendedLinkedList()

    expect(list.keys()).toMatchObject([])

    list.append(1, 'test')
    list.append({a: 1}, 55)
    list.append(false, true)

    expect(list.keys()).toMatchObject(['test', 55, true])
})

test('values() should return an array of all values on the list.', () => {
    const list = new ExtendedLinkedList()

    expect(list.values()).toMatchObject([])

    list.append(1, 'test')
    list.append({a: 1}, 55)
    list.append(false, true)

    expect(list.values()).toMatchObject([1, {a:1}, false])
})