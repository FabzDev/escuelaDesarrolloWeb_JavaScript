class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class Queue {
	constructor(value) {
		this.first = {
			value,
			next: null,
		};
		this.last = this.first;

		this.length = 1;
		return this;
	}

	peek() {
		return this.first;
	}

	enqueue(value) {
		const newNode = new Node(value);
		this.last.next = newNode;
		this.last = newNode;

		this.length++;
		return this;
	}
	dequeue() {
		this.first = this.first.next;
		this.length--;
		return this;
	}
}

let queue = new Queue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);
