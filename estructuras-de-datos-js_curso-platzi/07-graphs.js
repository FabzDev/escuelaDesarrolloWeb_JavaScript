//      2 - 0
//    /  \
//   1 - 3

// Edge list

const graph = [
	[0, 2],
	[2, 1],
	[2, 3],
	[1, 3],
];

// Adjacent list

const graph1 = [[2], [2, 3], [0, 1, 3], [1, 2]];

const graph2 = {
	0: [2],
	1: [2, 3],
	2: [0, 1, 3],
	3: [1, 2],
};

// Adjacent matrix

const graph3 = [
	[0, 0, 1, 0],
	[0, 0, 1, 1],
	[1, 1, 0, 1],
	[0, 1, 1, 0],
];

//       5 - 8
//    /   \
//   2 -  7

const graph4 = {
	//  2	 5  7  8
	2: [0, 1, 1, 0],
	5: [1, 0, 1, 1],
	7: [1, 1, 0, 0],
	8: [0, 1, 0, 0],
};
