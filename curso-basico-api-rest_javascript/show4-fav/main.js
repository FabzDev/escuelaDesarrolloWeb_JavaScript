// import fetch from "node-fetch";

const API_URL_RANDOM =
	"https://api.thedogapi.com/v1/images/search?limit=4&api_key=live_fEQTW9cdqcD8Zbj6LSL5UjMs4XBT6DdzaFNUienaGAI81nOIURATazEUkacciDBH";

const API_URL_FAVORITES =
	"https://api.thedogapi.com/v1/favourites?api_key=live_fEQTW9cdqcD8Zbj6LSL5UjMs4XBT6DdzaFNUienaGAI81nOIURATazEUkacciDBH";

const API_URL_DELETE = "https://api.thedogapi.com/v1/favourites/{favourite_id}";

const img1 = document.querySelector("#img1");
const img2 = document.querySelector("#img2");
const img3 = document.querySelector("#img3");
const img4 = document.querySelector("#img4");
const btn = document.querySelector(".boton");

async function loadRandomPuppies() {
	const rawData = await fetch(API_URL_RANDOM);
	const jsonData = await rawData.json();
	img1.src = jsonData[0].url;
	img2.src = jsonData[1].url;
	img3.src = jsonData[2].url;
	img4.src = jsonData[3].url;
}

async function addPuppieToFavorites() {
	const rawData = await fetch(API_URL_FAVORITES, {
		method: "POST", // *GET, POST, PUT, DELETE, etc.
		// mode: "cors", // no-cors, *cors, same-origin
		// cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
		// credentials: "same-origin", // include, *same-origin, omit
		headers: {
			"Content-Type": "application/json",
			// 'Content-Type': 'application/x-www-form-urlencoded',
		},
		// redirect: "follow", // manual, *follow, error
		// referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
		body: JSON.stringify({
			image_id: "dje",
		}), // body data type must match "Content-Type" header
	});
	const jsonData = await rawData.json();
	console.log(jsonData);
}

async function deletePuppieFromFavorites(favourite_id) {
	const rawData = await fetch(
		`https://api.thedogapi.com/v1/favourites/${favourite_id}?api_key=live_fEQTW9cdqcD8Zbj6LSL5UjMs4XBT6DdzaFNUienaGAI81nOIURATazEUkacciDBH`,
		{
			method: "DELETE", // *GET, POST, PUT, DELETE, etc.
			// mode: "cors", // no-cors, *cors, same-origin
			// cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
			// credentials: "same-origin", // include, *same-origin, omit
			headers: {
				"Content-Type": "application/json",
				// 'Content-Type': 'application/x-www-form-urlencoded',
			},
			// redirect: "follow", // manual, *follow, error
			// referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
			body: JSON.stringify({
				image_id: "dje",
			}), // body data type must match "Content-Type" header
		}
	);
	const jsonData = rawData.json();
	console.log(jsonData);
}

async function loadFavoritePuppies() {
	const rawData = await fetch(API_URL_FAVORITES);
	const jsonData = await rawData.json();
	console.log(jsonData);
}

btn.addEventListener("click", loadRandomPuppies);

loadRandomPuppies();
loadFavoritePuppies();
