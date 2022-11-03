class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class Stack {
	constructor(value) {
		this.top = new Node(value);
		this.bottom = null;
		this.length = 0;
		this.bottom = this.top;

		return this;
	}

	peek() {
		return this.top;
	}

	push(value) {
		const newNode = new Node(value);
		this.top.next = newNode;
		this.top = newNode;

		this.length++;
		return this;
	}
}
