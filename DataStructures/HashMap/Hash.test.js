const getHash = require('./Hash')

test('getHash() should return the same value for equal parameters', () => {
    const hash1 = getHash('test', 100)
    const hash2 = getHash('test', 100)
    const hash3 = getHash('       test', 100)
    const hash4 = getHash({a:1, b:2}, 100)
    const hash5 = getHash({b:2, a:1}, 100)
    const hash6 = getHash({b:2, a:1}, 100)
    const hash7 = getHash(undefined, 100)
    const hash8 = getHash(undefined, 100)
    const hash9 = getHash(true, 100)
    const hash10 = getHash(true, 100)

    expect(hash1 === hash2).toBe(true)
    expect(hash2 === hash3).toBe(false)
    expect(hash4 === hash5).toBe(false)
    expect(hash5 === hash6).toBe(true)
    expect(hash7 === hash8).toBe(true)
    expect(hash9 === hash10).toBe(true)
    expect(() => getHash('   ')).toThrow()
    expect(() => getHash(NaN)).toThrow()
})