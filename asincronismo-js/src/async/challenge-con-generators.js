import fetch from "node-fetch";
const API = "https://api.escuelajs.co/api/v1";

async function fetchData(urlApi) {
	const rawData = await fetch(`${urlApi}`);
	const data = await rawData.json();
	return data;
}

const counter = async function* (urlApi) {
	const products = await fetchData(`${urlApi}/products`);
	yield products[1];

	const product = await fetchData(`${urlApi}/products/${products[140].id}`);
	yield product.title;

	const category = await fetchData(`${urlApi}/categories/${product.category.id}`);
	yield category;
};

const counterGenerator = counter(API);

for await (const promise of counterGenerator) {
	console.log(promise);
}
