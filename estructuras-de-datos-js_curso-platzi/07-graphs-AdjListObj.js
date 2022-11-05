class Graph {
	constructor() {
		this.adjacentList = [];
		this.nodes = 0;
	}

	addEdge(node1, node2) {
		if (!this.adjacentList[node1]) {
			this.adjacentList[node1] = [];
		}
		if (!this.adjacentList[node2]) {
			this.adjacentList[node2] = [];
		}
		this.adjacentList[node1].push(node2);
		this.adjacentList[node2].push(node1);
		return this;
	}
}

const myGraph = new Graph();
myGraph.addEdge("", "");

// myGraph.addVertex("8");
// myGraph.addVertex("4");
// myGraph.addVertex("5");
// myGraph.addVertex("1");
// myGraph.addVertex("3");
// myGraph.addVertex("6");

// myGraph.addEdge("8", "4");
// myGraph.addEdge("4", "1");
// myGraph.addEdge("4", "5");
// myGraph.addEdge("1", "3");
// myGraph.addEdge("1", "6");
// myGraph.addEdge("5", "3");
// myGraph.addEdge("3", "6");
