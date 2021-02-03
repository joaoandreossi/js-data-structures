const Stack = require('./Stack')

const stack = new Stack()

test('Stack', () => {
    expect(stack.push(1)).toBe(1)
    expect(stack.push(1)).toBe(2)
    expect(stack.length).toBe(2)
    expect(stack.contains(1)).toBe(true)
    expect(stack.contains(2)).toBe(false)
    expect(stack.pop()).toBe(1)
    expect(stack.pop()).toBe(1)
    expect(stack.pop()).toBe(undefined)
    expect(stack.contains(1)).toBe(false)
    expect(stack.length).toBe(0)
})