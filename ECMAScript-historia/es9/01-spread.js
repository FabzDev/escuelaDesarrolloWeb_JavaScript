const user = { username: "fabio18", age: 32, country: "CO" };
const { username, ...elResto } = user;
console.log(username); // fabio18
console.log(elResto); // { age: 32, country: 'CO' }
console.log(user); // { username: 'fabio18', age: 32, country: 'CO' }

// Pruebas de funcionamiento By Fabio
// const { username, age, country } = user; // operador de propagacion
// console.log(username);
// console.log(age);
// console.log(country);
// const test = username + "     " + "Co co Colombia, si si, caribe " + country; // prueba para ver funcionamiento
// console.log(test);
