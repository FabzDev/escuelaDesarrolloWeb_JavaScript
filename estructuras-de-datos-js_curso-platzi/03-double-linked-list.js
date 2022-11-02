class Nodo {
	constructor(value) {
		this.value = value;
		this.next = null;
		this.prev = null;
	}
}

class MySinglyLinkedList {
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
		const prevNode = this.tail;
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

let list = new MySinglyLinkedList(4);
list.append(8);
list.append(12);
list.append(16);
list.append(20);
list.insert(14, 3);

// list.insert(3.5, 3);
// list.delete(1);

// 	prepend(value) {
// 		const body = this.head;
// 		const newNode = new Nodo(value);
// 		this.head = newNode;
// 		this.head.next = body;
// 		this.length++;

// 		return this;
// 	}

// 	insert(value, index) {
// 		const newNode = new Nodo(value);
// 		const resto = this.findIndex(index);
// 		const pointer = this.findIndex(index - 1);

// 		pointer.next = newNode;
// 		pointer.next.next = resto;

// 		this.length++;

// 		return this;
// 	}

// 	findIndex(index) {
// 		let counter = 0;
// 		let currentNodo = this.head;

// 		while (counter !== index) {
// 			currentNodo = currentNodo.next;
// 			counter++;
// 		}
// 		return currentNodo;
// 	}

// 	delete(index) {
// 		const resto = this.findIndex(index);
// 		const pointer = this.findIndex(index - 2);

// 		pointer.next = resto;

// 		this.length--;

// 		return this;
// 	}
