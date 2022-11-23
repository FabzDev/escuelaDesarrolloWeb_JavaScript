import fetch from "node-fetch";

const API = "https://api.thedogapi.com/v1/images/search";

fetch(url)
	.then((rawData) => rawDat.json())
	.then((jsonData) => console.log(jsonData));
