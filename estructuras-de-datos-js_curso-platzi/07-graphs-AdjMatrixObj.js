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
myGraph.addVertex();
myGraph.addEdge();
