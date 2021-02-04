const Queue = require('./Queue')

test('enqueue() should put a value at the end of the Queue', () => {
    const queue = new Queue(3)
    queue.enqueue(1)
    queue.enqueue(2)
    queue.enqueue(3)
    expect(queue.peek()).toBe(1)
})

test('dequeue() should return and remove the first element from the Queue', () => {
    const queue = new Queue(3)
    expect(queue.dequeue()).toBe(undefined)
    queue.enqueue(1)
    queue.enqueue(2)
    queue.enqueue(3)
    expect(queue.dequeue()).toBe(1)
    expect(queue.peek()).toBe(2)
    expect(queue.dequeue()).toBe(2)
    expect(queue.dequeue()).toBe(3)
    expect(queue.dequeue()).toBe(undefined)
})

test('Adding to a full Queue should throw an error', () => {
    const queue = new Queue(3)
    queue.enqueue(1)
    queue.enqueue(2)
    queue.enqueue(3)
    expect(() => queue.enqueue(4)).toThrow()
})