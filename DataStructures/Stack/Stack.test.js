const Stack = require('./Stack')

test('When an empty stack is popped it should return undefined', () => {
    const stack = new Stack()
    stack.push(1)
    expect(stack.pop()).toBe(1)
    expect(stack.pop()).toBe(undefined)
})

test('The stack should follow LIFO rules', () => {
    const stack = new Stack()
    stack.push(1)
    stack.push(2)
    stack.push(3)
    expect(stack.pop()).toBe(3)
    expect(stack.pop()).toBe(2)
    expect(stack.pop()).toBe(1)
    expect(stack.pop()).toBe(undefined)
})

test('contains() should correctly indicate the presence of the passed value', () => {
    const stack = new Stack()
    stack.push(1)
    stack.push(2)
    stack.push(3)
    expect(stack.contains(3)).toBe(true)
    expect(stack.contains(5)).toBe(false)
})

test('The length property should show the correct size of the stack', () => {
    const stack = new Stack()
    stack.push(1)
    stack.push(2)
    stack.push(3)
    expect(stack.length).toBe(3)
})

test('peek() should return the element at the top of the stack without removing it', () => {
    const stack = new Stack()
    stack.push(1)
    expect(stack.peek()).toBe(1)
    expect(stack.pop()).toBe(1)
})

test('peek() should return undefined if the stack is empty', () => {
    const stack = new Stack()
    expect(stack.peek()).toBe(undefined)
})