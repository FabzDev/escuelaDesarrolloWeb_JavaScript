import fetch from "node-fetch";
const API = "https://api.escuelajs.co/api/v1";

async function fetchData(urlApi) {
	const rawData = await fetch(`${urlApi}/products`);
	const data = await rawData.json();
	return data;
}

const dataBase = fetchData(API);

const dataBase2 = await dataBase;

console.log(dataBase2[5]);
