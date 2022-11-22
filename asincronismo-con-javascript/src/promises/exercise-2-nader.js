/*

1. Print out "Program started" at the start of your code 
2. Create a Promise that resolves after 3 seconds 
	 and rejects after 2 seconds 
3. Log out the promise while it's pending
4. print out "Program in progress..." as well 

5. Print out "Program complete" if the promise fulflls
6. Print out "Program failure. If the promise rejects 

HINT: Use setrimeout for the delay 

*/
console.log("Program started");

const myPromise = new Promise((resolve, reject) => {
	if (false) {
		setTimeout(() => {
			resolve("Program Complete");
		}, 3000);
	} else {
		setTimeout(() => {
			reject("Program failure");
		}, 2000);
	}
});

console.log("Program in process...");

myPromise
	.then((result) => {
		console.log(result);
	})
	.catch((otherResult) => {
		console.log(otherResult);
	});
