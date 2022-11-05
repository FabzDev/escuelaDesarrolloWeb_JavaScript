class Node {
	constructor(value) {
		this.left = null;
		this.right = null;
		this.value = value;
	}
}

class BinaryTree {
	constructor() {
		this.root = null;
	}

	search(value) {
		if (this.root) {
			let currentNode = this.root;
			while (true) {
				if (currentNode) {
					if (value < currentNode.value) {
						currentNode = currentNode.left;
					} else if (value > currentNode.value) {
						currentNode = currentNode.right;
					} else {
						return currentNode;
					}
				} else return "Ugh, that number does not exist";
			}
		} else {
			return "This Binary Tree is empty";
		}
	}

	insert(value) {
		const newNode = new Node(value);
		if (this.root === null) {
			this.root = newNode;
			return this;
		} else {
			// empieza el algoritmo para valores distintos al primero
			let currentNode = this.root;
			while (true) {
				if (value < currentNode.value) {
					if (!currentNode.left) {
						currentNode.left = newNode;
						return this;
					}
					currentNode = currentNode.left;
				} else {
					if (!currentNode.right) {
						currentNode.right = newNode;
						return this;
					}
					currentNode = currentNode.right;
				}
			}
		}
	}
}

const tree = new BinaryTree();
tree.insert(10);
tree.insert(4);
tree.insert(20);
tree.insert(2);
tree.insert(8);
tree.insert(17);
tree.insert(54);
tree.insert(170);
tree.search(54);
