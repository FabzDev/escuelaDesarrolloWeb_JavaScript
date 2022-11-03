class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class Stack {
	constructor() {
		this.top = null;
		this.bottom = null;
		this.length = 0;
	}
	peek() {
		return this.top;
	}

	push(value) {
		newNode = new Node(value);
		this.bottom = newNode;
		this.top = newNode;

		this.length++;
		return newNode;
	}
}
