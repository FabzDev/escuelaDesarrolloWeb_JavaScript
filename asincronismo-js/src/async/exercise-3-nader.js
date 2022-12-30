/*

1. Create a function called "goGetCandies" which will return
	 a Promise Object that resolves to the value: 
	 { candy: "sour keys", quantity: 10 } This should take 2 seconds

2. Create another function called "sellCandies" that will take 
	 a candy Object like above ^ and return a Number that is 25 * quantity. 
	 This will be how much (in cents) we get for our candies.
	 However, make this function take 3 seconds to do this math 
	 (return a Promise with a setTimeout with the answer).

3. Write an async function that uses await to: 
	 1. Get the candy object from goGetCandies() 
	 2. Passes it to "sellCandies" and waits for the response 
	 3. Prints out how much money we made from our sale 

4. Do the same steps as #3 but with vanilla Promises. 
	
Q1: Which of these 2 methods do you prefer? 
Q2: Which of these 2 methods is easier to read? 

*/

const goGetCandies = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve({ candy: "sour keys", quantity: 10 });
		}, 2000);
	});
};

/* METODO FABIO */

const sellCandies2 = async () => {
	const candy = await goGetCandies();
	const totalAmount = 25 * candy.quantity;
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(console.log(`1. We made $${totalAmount / 100} dollars selling candies`));
		}, 3000);
	});
};

// sellCandies2();

/* METODO NADER */

const sellCandies = (obj) => {
	const totalAmount = 25 * obj.quantity;
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(totalAmount);
		}, 3000);
	});
};

const asynCandy = async () => {
	const candyObject = await goGetCandies();
	const totalSell = await sellCandies(candyObject);
	console.log(`2. We made $${totalSell / 100} dollars selling candies`);
};

console.log("Program starting...");
asynCandy();
console.log("Program complete");
