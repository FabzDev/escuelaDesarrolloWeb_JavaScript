// import fetch from "node-fetch";

const URL =
	"https://api.thedogapi.com/v1/images/search?limit=4&api_key=live_fEQTW9cdqcD8Zbj6LSL5UjMs4XBT6DdzaFNUienaGAI81nOIURATazEUkacciDBH";

const img1 = document.querySelector("#img1");
const img2 = document.querySelector("#img2");
const img3 = document.querySelector("#img3");
const img4 = document.querySelector("#img4");
const btn = document.querySelector(".boton");

(async () => {
	const rawData = await fetch(URL);
	const jsonData = await rawData.json();
	img1.src = jsonData[0].url;
	img2.src = jsonData[1].url;
	img3.src = jsonData[2].url;
	img4.src = jsonData[3].url;
})();

btn.addEventListener("click", reload);

function reload() {
	window.location.reload();
}
