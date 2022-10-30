// 1 --> 2 --> 3 --> 4 --> 5--> null

// let singlyLinkedList = {
// 	head: {
// 		value: 1,
// 		next: {
// 			value: 2,
// 			next: {
// 				value: 3,
// 				next: {
// 					value: 4,
// 					next: null,
// 				},
// 			},
// 		},
// 	},
// };

class Nodo {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class MySinglyLinkedList {
	constructor(value) {
		this.head = {
			value: value,
			next: null,
		};
		this.tail = this.head;
		this.length = 1;
	}

	append(value) {
		const newNode = new Nodo(value);
		this.head.next = newNode;
		this.head = newNode;
		this.length++;

		return this;
	}
}

let list = new MySinglyLinkedList(1);
list.append(2);
list.append(3);
list.append(4);
