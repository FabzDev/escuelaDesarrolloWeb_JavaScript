//flat
const array = [1, 1, 2, 3, 4, ["a", "b", "c", [1, 2, 3], "d"]];
// console.log(array.flat(2)); //[ 1, 1, 2, 3, 4, 'a', 'b', 'c', 1, 2, 3, 'd']
// console.log(array.flat(1)); //[ 1, 1, 2, 3, 4, 'a', 'b', 'c', [ 1, 2, 3 ], 'd' ]

//flatmap
const anotherArray = [1, 2, 3, 4, 5];
console.log(anotherArray.map((v) => [v, v * 2])); //[ [ 1, 2 ], [ 2, 4 ], [ 3, 6 ], [ 4, 8 ], [ 5, 10 ] ]
console.log(anotherArray.flatMap((v) => [v, v * 2])); //[ [1, 2, 2, 4,  3,  6, 4, 8, 5, 10]
