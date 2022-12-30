/*

1. Create a function called "fetchPokemon" that returns 
  a Promise that resolves with the value:
    {data: {name: "Pikachu", power: 20} } after 2 seconds
2. Print out "Program starting..."

3. Create an async function that uses await to wait for the data to comes back from "fetchPokemon" then log out the data

4. Call the async function you created
5. Log out "Program complete!"

After you are done the about ^:
6. Change "fetchPokemon" to reject after 2 seconds instead
  with a new Error Object with the message "Danger, danger!"
7. How can you modify your async function to catch this error?

*/

const pikachu = { data: { name: "Pikachu", power: 20 } };
const fetchPokemon = (poke) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (false) {
				resolve(poke);
			} else {
				reject("Danger, danger!");
			}
		}, 2000);
	});
};
const asyncFetchPokemon = async (pok) => {
	try {
		console.log("Program starting...");
		const respuesta = await fetchPokemon(pok);
		console.log(respuesta);
		console.log("Program complete!");
	} catch (error) {
		console.log(error);
		console.log(new Error("There was an error with our code but we are ok!"));
	}
};

asyncFetchPokemon(pikachu);
