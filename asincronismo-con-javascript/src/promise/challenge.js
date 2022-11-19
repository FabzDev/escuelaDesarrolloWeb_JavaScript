import fetch from "node-fetch";
const API = `https://api.escuelajs.co/api/v1`;

function dataFetch(urlApi) {
	return fetch(urlApi);
}

dataFetch(`${API}/products`)
	.then((response) => response.json())
	.then((response) => console.log(response[0]))
	.then(console.log("OLE!"));
