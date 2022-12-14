// import fetch from "node-fetch";

const URL = "https://api.thedogapi.com/v1/images/search?limit=2";
const img1 = document.querySelector("#img1");
const img2 = document.querySelector("#img2");
const img3 = document.querySelector("#img3");
const img4 = document.querySelector("#img4");
const btn = document.querySelector(".boton");

(async () => {
	const rawData = await fetch(URL);
	const jsonData = await rawData.json();
	console.log(jsonData);
	img1.src = jsonData[0].url;
})();

btn.addEventListener("click", reload);

function reload() {
	window.location.reload();
}
