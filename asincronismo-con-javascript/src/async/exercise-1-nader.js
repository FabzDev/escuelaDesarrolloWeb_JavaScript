/*
1. Create a function called "fetchUser" that returns 
  a Promise that resolves with the value
  data: {user: "Monkey", admin: true} } after 3 seconds

2. Create a function called "login" that takes an Object 
  as an argument. If the object has a property called
  "admin" with a value of true, then log out
  "Successfully logged in!", otherwise log out
  "Failed to log in, please try again."

3. Print out "Program starting..."

4. Create an async function that uses await to wait for
  the data to comes back from "fetchUser".

5. Pass the user that comes back from "fetchUser" to the
  "login" function you created above

6. Call the async function you created
7. Log out "Program complete!"
*/
const monkey = { data: { user: "Monkey", admin: true } };
const buti = { data: { user: "Buti", admin: false } };

const fetchUser = (user) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(user);
		}, 3000);
	});
};

const login = async (usuario) => {
	console.log("Program starting...");
	const response = await fetchUser(usuario);
	// console.log(response);
	if (response.data.admin === true) {
		console.log("Successfully logged in!");
	} else {
		console.log("Failed to log in, please try again");
	}
	console.log("Program complete!");
};

login(buti);
