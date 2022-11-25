const API_URL_RANDOM =
	"https://api.thedogapi.com/v1/images/search?limit=4&api_key=live_fEQTW9cdqcD8Zbj6LSL5UjMs4XBT6DdzaFNUienaGAI81nOIURATazEUkacciDBH";

const API_URL_FAVORITES =
	"https://api.thedogapi.com/v1/favourites?api_key=live_fEQTW9cdqcD8Zbj6LSL5UjMs4XBT6DdzaFNUienaGAI81nOIURATazEUkacciDBH";

const API_URL_DELETE = "https://api.thedogapi.com/v1/favourites/{favourite_id}";

const content = document.querySelector("#content");

const img1 = document.querySelector("#img1");
const img2 = document.querySelector("#img2");
const img3 = document.querySelector("#img3");
const img4 = document.querySelector("#img4");

const btn = document.querySelector("#btn");

const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const btn3 = document.querySelector("#btn3");
const btn4 = document.querySelector("#btn4");

let imgId1;
let imgId2;
let imgId3;
let imgId4;

async function loadRandomPuppies() {
	const rawData = await fetch(API_URL_RANDOM);
	const jsonData = await rawData.json();
	imgId1 = jsonData[0].id;
	imgId2 = jsonData[1].id;
	imgId3 = jsonData[2].id;
	imgId4 = jsonData[3].id;

	img1.src = jsonData[0].url;
	img2.src = jsonData[1].url;
	img3.src = jsonData[2].url;
	img4.src = jsonData[3].url;
}

async function addPuppieToFavorites1() {
	const rawData = await fetch(API_URL_FAVORITES, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			image_id: imgId1,
		}),
	});
	renderFavoritePuppies();
}

async function addPuppieToFavorites2() {
	const rawData = await fetch(API_URL_FAVORITES, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			image_id: imgId2,
		}),
	});
	renderFavoritePuppies();
}

async function addPuppieToFavorites3() {
	const rawData = await fetch(API_URL_FAVORITES, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			image_id: imgId3,
		}),
	});
	renderFavoritePuppies();
}

async function addPuppieToFavorites4() {
	const rawData = await fetch(API_URL_FAVORITES, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			image_id: imgId4,
		}),
	});
	renderFavoritePuppies();
}

async function deletePuppieFromFavorites(favourite_id) {
	const rawData = await fetch(
		`https://api.thedogapi.com/v1/favourites/${favourite_id}?api_key=live_fEQTW9cdqcD8Zbj6LSL5UjMs4XBT6DdzaFNUienaGAI81nOIURATazEUkacciDBH`,
		{
			method: "DELETE",
		}
	);
	renderFavoritePuppies();
}

async function loadFavoritePuppies() {
	const rawData = await fetch(API_URL_FAVORITES);
	const jsonData = await rawData.json();
	console.log(jsonData);
}

btn.addEventListener("click", loadRandomPuppies);

btn1.addEventListener("click", addPuppieToFavorites1);
btn2.addEventListener("click", addPuppieToFavorites2);
btn3.addEventListener("click", addPuppieToFavorites3);
btn4.addEventListener("click", addPuppieToFavorites4);

loadRandomPuppies();

async function renderFavoritePuppies() {
	const rawData = await fetch(API_URL_FAVORITES);
	const jsonData = await rawData.json();
	let view = `${jsonData
		.map(
			(eachPuppie) =>
				`<div class= "img-container">
				<img id="img-fav" src="${eachPuppie.image.url}" alt="foto puppie favorito" />
					<button onclick="deletePuppieFromFavorites(${eachPuppie.id})" class="boton-like">Unlike 💔</button>
					</div>`
		)
		.join("")}`;
	content.innerHTML = view;
}

renderFavoritePuppies();
