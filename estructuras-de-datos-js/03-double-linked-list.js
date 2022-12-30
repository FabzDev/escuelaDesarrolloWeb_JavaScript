class Nodo {
	constructor(value) {
		this.value = value;
		this.next = null;
		this.prev = null;
	}
}

class MyDoublyLinkedList {
	constructor(value) {
		this.head = {
			value: value,
			next: null,
			prev: null,
		};
		this.tail = this.head;
		this.length = 1;
	}

	append(value) {
		const newNode = new Nodo(value);
		newNode.prev = this.tail;
		this.tail.next = newNode;
		this.tail = newNode;
		this.length++;
		return this;
	}

	prepend(value) {
		const newNode = new Nodo(value);
		this.head.prev = newNode;
		newNode.next = this.head;
		this.head = newNode;
		this.length++;
		return this;
	}

	insert(value, index) {
		const newNode = new Nodo(value);
		const resto = this.findIndex(index);
		const newPos = this.findIndex(index - 1);
		newPos.next = newNode;
		newNode.next = resto;
		newNode.prev = newPos;
		resto.prev = newNode;

		this.length++;
		return this;
	}

	delete(index) {
		if (index == 0) {
			this.head = this.head.next;
			this.head.prev = null;
			this.length--;
			return this;
		}
		if (index > 0 && index < this.length - 1) {
			const delNode = this.findIndex(index);
			delNode.next.prev = delNode.prev;
			delNode.prev.next = delNode.next;

			this.length--;
			return this;
		}
		if (index == this.length - 1) {
			this.tail.prev.next = null;
			this.tail = this.tail.prev;
			this.length--;
			return this;
		}
	}

	findIndex(index) {
		let counter = 0;
		let currentNodo = this.head;

		while (counter !== index) {
			currentNodo = currentNodo.next;
			counter++;
		}
		return currentNodo;
	}
}

let list = new MyDoublyLinkedList(4);
list.append(8);
list.append(12);
list.append(16);
list.append(20);
