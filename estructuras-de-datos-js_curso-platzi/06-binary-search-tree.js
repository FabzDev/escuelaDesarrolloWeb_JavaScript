class Node {
	constructor(value) {
		value = value;
		prev = null;
		nextUp = null;
		nextDown = null;
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
		const newNode = new Node(value);
		if (this.length == 0) {
			this.head.value = newnode.value;
			this.tail = newNode;
			this.length++;
		} else if (this.length > 0) {
			this.tail.nextUp = new Node;
      this.tail.nextUp = newNode.value;
      
      this,nextUp = 
      this,nextDown = 

		} else if (this.length < 0) {
			this.tail.nextDown = value;
		}

		this.length++;
		return this;
	}
}
