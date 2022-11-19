import fetch from "node-fetch";
const API = `https://api.escuelajs.co/api/v1`;

function dataFetch(urlApi) {
	return fetch(urlApi);
}

// dataFetch(`${API}/products`)
// 	.then((response) => response.json())
// 	.then((response) => console.log(response[0]))
// 	.then(console.log("OLE!"));

dataFetch(`${API}/products`)
	.then((response) => response.json())
	.then((products) => {
		return dataFetch(`${API}/products/${products[3].id}`);
	})
	.then((response) => response.json())
	.then((product) => {
		console.log(product);
		console.log(product.title);
		return dataFetch(`${API}/categories/${product.category.id}`);
	})
	.then((response) => response.json())
	.then((category) => console.log(category.name));
