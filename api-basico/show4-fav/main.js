const API_URL_RANDOM =
	"https://api.thedogapi.com/v1/images/search?limit=4&api_key=live_fEQTW9cdqcD8Zbj6LSL5UjMs4XBT6DdzaFNUienaGAI81nOIURATazEUkacciDBH";

const API_URL_FAVORITES = "https://api.thedogapi.com/v1/favourites";

const API_URL_DELETE = (id) => `https://api.thedogapi.com/v1/favourites/${id}`;

const content = document.querySelector("#content");
const content2 = document.querySelector("#content2");

const btn = document.querySelector("#btn");

btn.addEventListener("click", renderRandomPuppies);

async function renderRandomPuppies() {
	const rawData = await fetch(API_URL_RANDOM);
	const jsonData = await rawData.json();
	const view = `${jsonData
		.map(
			(randomPuppy) =>
				`<div class="img-container">
		<img src="${randomPuppy.url}" alt="foto puppy aleatorio" />
		<button onclick="addPuppieToFavorites('${randomPuppy.id}')" class="boton-like">Like ❤️</button>
	</div>`
		)
		.join("")}`;
	content2.innerHTML = view;
}

async function addPuppieToFavorites(imgId) {
	const rawData = await fetch(API_URL_FAVORITES, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			"X-API-KEY": "live_fEQTW9cdqcD8Zbj6LSL5UjMs4XBT6DdzaFNUienaGAI81nOIURATazEUkacciDBH",
		},
		body: JSON.stringify({
			image_id: imgId,
		}),
	});
	renderFavoritePuppies();
}

async function deletePuppieFromFavorites(favourite_id) {
	const rawData = await fetch(API_URL_DELETE(favourite_id), {
		method: "DELETE",
		headers: {
			"x-api-key": "live_fEQTW9cdqcD8Zbj6LSL5UjMs4XBT6DdzaFNUienaGAI81nOIURATazEUkacciDBH",
		},
	});
	renderFavoritePuppies();
}

async function loadFavoritePuppies() {
	const rawData = await fetch(API_URL_FAVORITES, {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
			"x-api-key": "live_fEQTW9cdqcD8Zbj6LSL5UjMs4XBT6DdzaFNUienaGAI81nOIURATazEUkacciDBH",
		},
	});
	const jsonData = await rawData.json();
	console.log(jsonData);
}

async function renderFavoritePuppies() {
	const rawData = await fetch(API_URL_FAVORITES, {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
			"x-api-key": "live_fEQTW9cdqcD8Zbj6LSL5UjMs4XBT6DdzaFNUienaGAI81nOIURATazEUkacciDBH",
		},
	});
	const jsonData = await rawData.json();
	let view = `${jsonData
		.map(
			(eachPuppie) =>
				`<div class= "img-container">
			<img id="img-fav" src="${eachPuppie.image.url}" alt="foto puppy favorito" />
			<button onclick="deletePuppieFromFavorites(${eachPuppie.id})" class="boton-like">Unlike 💔</button>
			</div>`
		)
		.join("")}`;
	content.innerHTML = view;
}

renderRandomPuppies();
renderFavoritePuppies();
