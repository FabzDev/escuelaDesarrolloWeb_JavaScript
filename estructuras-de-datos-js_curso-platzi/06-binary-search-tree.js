class Node {
	constructor(value) {
		this.left = null;
		this.right = null;
		this.value = value;
	}
}

class BinaryTree {
	constructor() {
		this.head = {
			value: null,
			prev: null,
			nextUp: null,
			nextDown: null,
		};
		this.tail = this.head;
		this.length = 0;
		return this;
	}

	add(value) {
		if (this.length == 0) {
			const firstNode = new Node(value);
			this.head = firstNode;
			this.tail = firstNode;

			this.length++;
			return this;
		} else if (this.length == 1) {
			const nodeUp = new Node(value);
			const nodeDown = new Node(value);
			this.tail.nextUp = nodeUp;
			this.tail.nextDown = nodeDown;
			this.nodeUp.prev = this.tail;
			this.nodeDown.prev = this.tail;
			this.tail = nodwUp;
		} else if (this.length > 1) {
		}
	}
}
