import fetch from "node-fetch";

const URL = "https://api.thedogapi.com/v1/images/search";
const img = document.querySelector("img");

fetch(URL)
	.then((rawData) => rawData.json())
	.then((jsonData) => {
		img.src = jsonData[0].url;
	});
