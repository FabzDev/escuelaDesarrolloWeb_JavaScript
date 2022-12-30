class Graph {
	constructor() {
		this.adjacentList = {};
		this.nodes = 0;
	}

	addVertex(node) {
		if (!this.adjacentList[node]) {
			this.adjacentList[node] = [];
		}
		const keys = Object.keys(this.adjacentList);
		for (let i = 0; i <= this.nodes; i++) {
			this.adjacentList[keys[i]] = [];
			for (let j = 0; j <= this.nodes; j++) {
				this.adjacentList[keys[i]].push(0);
			}
		}

		this.nodes++;
		return this;
	}

	addEdge(node1, node2) {
		const keys = Object.keys(this.adjacentList);
		for (let i = 0; i < this.nodes; i++) {
			if (node2 == keys[i]) {
				this.adjacentList[node1][i] = 1;
				this.adjacentList[node2][keys.findIndex((index) => index == node1)] = 1;
			}
		}
		return this;
	}
}
const myGraph = new Graph();
myGraph.addVertex(8);
myGraph.addVertex(4);
myGraph.addVertex(1);
myGraph.addVertex(5);
myGraph.addVertex(3);
myGraph.addVertex(6);
myGraph.addEdge(8, 4);
myGraph.addEdge(4, 1);
myGraph.addEdge(4, 5);
myGraph.addEdge(1, 3);
myGraph.addEdge(5, 3);
myGraph.addEdge(1, 6);
myGraph.addEdge(3, 6);
