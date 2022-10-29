// 1 --> 2 --> 3 --> 4 --> 5--> null

let singlyLinkedList = {
	head: {
		value: 1,
		next: {
			value: 2,
			next: {
				value: 3,
				next: {
					value: 4,
					next: null,
				},
			},
		},
	},
};

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
		this.tail = value;
		this.length++;
		if (Array.isArray(this.next)) {
			this.append(value);
		} else {
			this.value = value;
			this.next = null;
		}
	}
}

const list = new MySinglyLinkedList(2);
list.append(4);
list.append(8);
list.append(16);
