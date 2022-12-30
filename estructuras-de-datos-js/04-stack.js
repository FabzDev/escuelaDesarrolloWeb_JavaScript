class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class Stack {
	constructor(value) {
		this.top = new Node(value);
		this.bottom = this.top;
		this.length = 1;

		return this;
	}

	peek() {
		return this.top;
	}

	push(value) {
		const newNode = new Node(value);
		const holdingPointer = this.top;
		this.top = newNode;
		this.top.next = holdingPointer;

		this.length++;
		return this;
	}

	pop() {
		this.top = this.top.next;

		this.length--;
		return this;
	}
}

const stack = new Stack(4);
stack.push(8);
stack.push(12);
stack.pop();
