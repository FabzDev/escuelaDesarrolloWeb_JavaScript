import fetch from "node-fetch";

const API = "https://api.escuelajs.co/api/v1";

function postData(urlApi, data) {
	const response = fetch(urlApi, {
		method: "POST",
		mode: "cors",
		credentials: "same-origin",
		headers: {
			"content-type": "application/json",
		},
		body: JSON.stringify(data),
	});
	return response;
}

const data = {
	title: "219",
	price: 30,
	description: "Baker Boy Hat, Flat Caps,8 Panel Peaky blinder",
	categoryId: 1,
	images: ["https://m.media-amazon.com/images/I/81lQwQRDNVL._AC_UX679_.jpg"],
};

postData(`${API}/products`, data)
	.then((response) => response.json())
	.then((data) => console.log(data));
