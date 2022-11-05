class Graph {
	constructor() {
		this.adjacentList = {};
		this.nodes = 0;
	}

	addVertex(node) {
		this.adjacentList[node] = [0, 0, 0, 0];
		this.nodes++;
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
myGraph.addVertex(5);
myGraph.addVertex(2);
myGraph.addVertex(7);
myGraph.addEdge(8, 5);
