# js-data-structures
Implementation of various data structures in (mostly) pure JavaScript.

## About the project
Having done most of my programming during college in C and Java, I thought it would be useful to see how I would go about implementing common data structures in
vanilla JavaScript. Currently this project includes:

* [Stack](#pushpin-stack)
* [Queue](#pushpin-queue)
* [Singly Linked List](#pushpin-singly-linked-list)
* Hash Map
* Binary Search Tree (only partially done)

Everything was done without (almost) any external dependencies, the exception being the ExtendedLinkedList file that I had to use [lodash's](https://lodash.com/) `isEqual` 
function to perform a deep object comparison for some Hash Map methods. And, of course, had to import [jest](https://jestjs.io/) for some unit testing.

## :pushpin: Usage
First, make sure you have lodash installed in your node_modules folder. It is a dependency for a bunch of stuff, so chances are you already have it on your node_modules
folder, but if you haven't you could install easily via npm:

```
npm install lodash
```

It is also a dependency of jest, so if you happens to have jest as your testing framework it is installed automatically as a dependency.

```
npm install jest
```

After that, just put the files somewhere in your working directory and import your desired data structure as follows:

```
const Stack = require('./DataStructures/Stack/Stack.js')
const Queue = require('./DataStructures/Queue/Queue.js')
const List = require('./DataStructures/SinglyLinkedList/SinglyLinkedList.js')
const HashMap = require('./DataStructures/HashMap/HashMap.js')
const BinarySearchTree = require('./DataStructures/BinarySearchTree/BinarySearchTree.js')
```

Note that some data structures are built using other data structures, so all files are required even if you're only using some of them.

## :pushpin: Stack

The Stack is like a deck of cards where you can only remove the top card, so the first element to come in is the last to come out. The methods supported are the following:

### Instantiation

The only parameter is the stack size. If an element were to be added to a full stack, a stack overflow error is thrown.

```
const stack = new Stack(10)
```

### Stack.push(element)
Insert the passed element to the top of the stack.

```
stack.push(1)
stack.push(2)
stack.push(3)
```
```
stack: [1, 2, 3] <-- top
```

Time complexity: `O(1)`

### Stack.pop()
Removes the top element of the stack and returns it.

```
stack.push(1)
stack.push(2)
stack.push(3)

let element = stack.pop()
```
```
element: 3
stack: [1, 2] <-- top
```

Time complexity: `O(1)`

### Stack.peek()
Returns the element at the top of the stack, but does not remove it.

```
stack.push(1)
stack.push(2)
stack.push(3)

let element = stack.peek()
```
```
element: 3
stack: [1, 2, 3] <-- top
```

Time complexity: `O(1)`

### Stack.contains(element)
Return `true` if the element is present on the stack or `false` if it isn't.

```
stack.push(1)
stack.push(2)
stack.push(3)

let element = stack.contains(5)
```
```
element: false
stack: [1, 2, 3] <-- top
```

Time complexity: `O(n)`

### Stack.isFull()
Return `true` if the number of elements on the stack is equal to it's size or `false` if not.

```
const stack = new Stack(3)

stack.push(1)
stack.push(2)
stack.push(3)

let full = stack.isFull()
```
```
full: true
stack: [1, 2, 3] <-- top
```

Time complexity: `O(1)`

### Stack.print()
Print the stack on the console.

```
stack.push(1)
stack.push(2)
stack.push(3)

stack.print()
```
```
console: "[1, 2, 3]"
stack: [1, 2, 3] <-- top
```

Time complexity: `O(1)`

## :pushpin: Queue
Like a real life queue, the first element to be inserted in a Queue data structure is the first element to come out.

### Instantiation

Like the Stack, a Queue needs a size during instantiation. If an element were to be added to a full queue, an error is thrown.

```
const queue = new Queue(10)
```

### Queue.enqueue(element)
Inserts the passed element at the end of the queue.

```
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
```
```
queue: [3, 2, 1] <-- front
```

Time complexity: `O(1)`

### Queue.dequeue()
Removes the element at the front of the queue and return it.

```
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)

let element = queue.dequeue()
```
```
element: 1
queue: [3, 2] <-- front
```

Time complexity: `O(n)`

### Queue.front()
Returns the element at the front of the queue, but does not remove it.

```
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)

let element = queue.front()
```
```
element: 1
queue: [3, 2, 1] <-- front
```

Time complexity: `O(1)`

### Queue.rear()
Returns the element at the back of the queue, but does not remove it.

```
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)

let element = queue.rear()
```
```
element: 3
queue: [3, 2, 1] <-- front
```

Time complexity: `O(1)`

### Queue.contains(element)
Return `true` if the element is present on the queue or `false` if it isn't.

```
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)

console.log(queue.contains(2))
```
```
console: true
queue: [3, 2, 1] <-- front
```

Time complexity: `O(n)`

### Queue.isFull()
Return `true` if the number of elements on the queue is equal to it's size or `false` if not.

```
const queue = new Queue(3)

queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)

console.log(queue.isFull())
```
```
console: true
queue: [3, 2, 1] <-- front
```

Time complexity: `O(1)`

### Queue.isEmpty()
Return `true` if there are no elements on the queue or `false` if there is.

```
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)

queue.dequeue()
queue.dequeue()
queue.dequeue()

console.log(queue.isEmpty())
```
```
console: true
queue: [] <-- front
```

Time complexity: `O(1)`


## :pushpin: Singly Linked List
A Linked List is a data structure where every element is, unsurprisingly, linked to each other. Every element (or node) have a pointer to the next one on the list.
It is similar to an array but better at performing certain tasks like inserting and deleting, but is worse at some others like accessing via index.

### Instantiation

This implementations does not have a defined maximum size, so it can be instantiated without any parameters.

```
const list = new SinglyLinkedList()
```
### SinglyLinkedList.append(element)
Insert the passed element at the end of the list.

```
list.append(1)
list.append(2)
list.append(3)
```
```
list: 1 -> 2 -> 3 -> undefined
```

Time complexity: `O(1)`

### SinglyLinkedList.prepend(element)
Insert the passed element at the beginning of the list.

```
list.prepend(1)
list.prepend(2)
list.prepend(3)
```
```
list: 3 -> 2 -> 1 -> undefined
```

Time complexity: `O(1)`

### SinglyLinkedList.insert(index, element)
Insert the passed element at the specified index.

```
list.prepend(1)
list.prepend(2)
list.prepend(3)

list.insert(1, 4)
```
```
list: 3 -> 4 -> 2 -> 1 -> undefined
```

Time complexity: `O(n)`

### SinglyLinkedList.deleteFirst()
Remove the first element of the list.

```
list.prepend(1)
list.prepend(2)
list.prepend(3)

list.deleteFirst()
```
```
list: 2 -> 1 -> undefined
```

Time complexity: `O(1)`

### SinglyLinkedList.deleteLast()
Remove the last element of the list.

```
list.prepend(1)
list.prepend(2)
list.prepend(3)

list.deleteLast()
```
```
list: 3 -> 2 -> undefined
```

Time complexity: `O(n)`

### SinglyLinkedList.delete(index)
Remove the element at the specified index.

```
list.prepend(1)
list.prepend(2)
list.prepend(3)

list.delete(1)
```
```
list: 3 -> 1 -> undefined
```

Time complexity: `O(n)`

### SinglyLinkedList.update(index, newValue)
Update the element at the specified index to the passed value.

```
list.prepend(1)
list.prepend(2)
list.prepend(3)

list.update(0, 4)
```
```
list: 4 -> 2 -> 1 -> undefined
```

Time complexity: `O(n)`

### SinglyLinkedList.get(index)
Returns the element at the specified index.

```
list.prepend(1)
list.prepend(2)
list.prepend(3)

console.log(list.get(2))
```
```
console: 1
list: 3 -> 2 -> 1 -> undefined
```

Time complexity: `O(n)`

### SinglyLinkedList.getFirst()
Returns the first element of the list.

```
list.prepend(1)
list.prepend(2)
list.prepend(3)

console.log(list.getFirst())
```
```
console: 3
list: 3 -> 2 -> 1 -> undefined
```

Time complexity: `O(1)`

### SinglyLinkedList.getLast()
Returns the last element of the list.

```
list.prepend(1)
list.prepend(2)
list.prepend(3)

console.log(list.getLast())
```
```
console: 1
list: 3 -> 2 -> 1 -> undefined
```

Time complexity: `O(1)`

### SinglyLinkedList.contains(element)
Returns `true` if the list contains the passed element, or `false` if it doesn't.

```
list.prepend(1)
list.prepend(2)
list.prepend(3)

console.log(list.contains(4))
```
```
console: false
list: 3 -> 2 -> 1 -> undefined
```

Time complexity: `O(n)`

### SinglyLinkedList.toArray()
Returns an array representation of the list.

```
list.prepend(1)
list.prepend(2)
list.prepend(3)

const array = list.toArray()
```
```
array: [3, 2, 1]
list: 3 -> 2 -> 1 -> undefined
```

Time complexity: `O(n)`

### SinglyLinkedList.invert()
Invert the order of the list.

```
list.prepend(1)
list.prepend(2)
list.prepend(3)

list.invert()
```
```
list: 1 -> 2 -> 3 -> undefined
```

Time complexity: `O(n)`

### SinglyLinkedList.print()
Print the list on the console.

```
list.prepend(1)
list.prepend(2)
list.prepend(3)

list.print()
```
```
console: "3 -> 2 -> 1 -> undefined"
list: 3 -> 2 -> 1 -> undefined
```

Time complexity: `O(n)`
