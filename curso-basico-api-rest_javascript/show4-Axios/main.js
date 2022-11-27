const API_URL_RANDOM =
	"https://api.thedogapi.com/v1/images/search?limit=4&api_key=live_fEQTW9cdqcD8Zbj6LSL5UjMs4XBT6DdzaFNUienaGAI81nOIURATazEUkacciDBH";

const API_URL_FAVORITES = "https://api.thedogapi.com/v1/favourites";

const API_URL_DELETE = (id) => `https://api.thedogapi.com/v1/favourites/${id}`;

const API_URL_UPLOAD = "https://api.thedogapi.com/v1/images/upload";

const content = document.querySelector("#content");
const content2 = document.querySelector("#content2");

const btn = document.querySelector("#btn");

btn.addEventListener("click", renderRandomPuppies);

// <-- AXIOS CONFIG -->
const api = axios.create({
	baseURL: "https://api.thedogapi.com/v1",
	headers: {
		"x-api-key": "live_fEQTW9cdqcD8Zbj6LSL5UjMs4XBT6DdzaFNUienaGAI81nOIURATazEUkacciDBH",
	},
});

async function renderRandomPuppies() {
	// <-- WITH AXIOS -->

	const { data, status } = await api.get("/images/search?limit=4");
	const view = `${data
		.map(
			(randomPuppy) =>
				`<div class="img-container">
		<img src="${randomPuppy.url}" alt="foto puppy aleatorio" />
		<button onclick="addPuppieToFavorites('${randomPuppy.id}')" class="boton-like">Like ❤️</button>
	</div>`
		)
		.join("")}`;
	content2.innerHTML = view;
	console.log("Random puppies rendered");

	// <-- WITH FETCH -->

	// const rawData = await fetch(API_URL_RANDOM);
	// const jsonData = await rawData.json();
	// const view = `${jsonData
	// 	.map(
	// 		(randomPuppy) =>
	// 			`<div class="img-container">
	// 	<img src="${randomPuppy.url}" alt="foto puppy aleatorio" />
	// 	<button onclick="addPuppieToFavorites('${randomPuppy.id}')" class="boton-like">Like ❤️</button>
	// </div>`
	// 	)
	// 	.join("")}`;
	// content2.innerHTML = view;
}

async function addPuppieToFavorites(imgId) {
	// <-- WITH AXIOS -->
	const { data, status } = await api.post("/favourites", {
		image_id: imgId,
	});

	renderFavoritePuppies();
	console.log("Puppy added to favorites");

	// <-- WITH FETCH -->

	// const rawData = await fetch(API_URL_FAVORITES, {
	// 	method: "POST",
	// 	headers: {
	// 		"Content-Type": "application/json",
	// 		"X-API-KEY": "live_fEQTW9cdqcD8Zbj6LSL5UjMs4XBT6DdzaFNUienaGAI81nOIURATazEUkacciDBH",
	// 	},
	// 	body: JSON.stringify({
	// 		image_id: imgId,
	// 	}),
	// });
	// renderFavoritePuppies();
}

async function deletePuppieFromFavorites(favourite_id) {
	// <-- WITH AXIOS -->
	const { data, status } = await api.delete(`/favourites/${favourite_id}`);

	renderFavoritePuppies();
	console.log("Puppy deleted from favorites");

	// <-- WITH FETCH -->
	// const rawData = await fetch(API_URL_DELETE(favourite_id), {
	// 	method: "DELETE",
	// 	headers: {
	// 		"x-api-key": "live_fEQTW9cdqcD8Zbj6LSL5UjMs4XBT6DdzaFNUienaGAI81nOIURATazEUkacciDBH",
	// 	},
	// });

	// const jsonData = await rawData.json();
	// console.log(jsonData);
	// renderFavoritePuppies();
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
	// <-- WITH AXIOS -->
	const { data, status } = await api.get("/favourites");
	let view = `${data
		.map(
			(eachPuppie) =>
				`<div class= "img-container">
			<img id="img-fav" src="${eachPuppie.image.url}" alt="foto puppy favorito" />
			<button onclick="deletePuppieFromFavorites(${eachPuppie.id});deleteUploadedPuppies('${eachPuppie.image_id}')" class="boton-like">Unlike 💔</button>
			</div>`
		)
		.join("")}`;
	content.innerHTML = view;
	console.log("Favorite puppies rendered");

	// <-- WITH FETCH -->
	// const rawData = await fetch(API_URL_FAVORITES, {
	// 	method: "GET",
	// 	headers: {
	// 		"Content-Type": "application/json",
	// 		"x-api-key": "live_fEQTW9cdqcD8Zbj6LSL5UjMs4XBT6DdzaFNUienaGAI81nOIURATazEUkacciDBH",
	// 	},
	// });
	// const jsonData = await rawData.json();
	// let view = `${jsonData
	// 	.map(
	// 		(eachPuppie) =>
	// 			`<div class= "img-container">
	// 		<img id="img-fav" src="${eachPuppie.image.url}" alt="foto puppy favorito" />
	// 		<button onclick="deletePuppieFromFavorites(${eachPuppie.id});deleteUploadedPuppies('${eachPuppie.image_id}')" class="boton-like">Unlike 💔</button>
	// 		</div>`
	// 	)
	// 	.join("")}`;
	// content.innerHTML = view;
}

async function uploadPuppy() {
	// <-- WITH AXIOS -->

	const puppyForm = document.getElementById("puppyForm");
	const puppyFormData = new FormData(puppyForm);

	const res = await api.post("/images/upload", puppyFormData);

	addPuppieToFavorites(res.data.id);
	console.log("Your puppy was uploaded");

	// <-- WITH FETCH -->

	// const puppyForm = document.getElementById("puppyForm");
	// const puppyFormData = new FormData(puppyForm);

	// console.log(puppyFormData.get("file"));

	// const resp = fetch(API_URL_UPLOAD, {
	// 	method: "POST",
	// 	headers: {
	// 		"x-api-key": "live_fEQTW9cdqcD8Zbj6LSL5UjMs4XBT6DdzaFNUienaGAI81nOIURATazEUkacciDBH",
	// 	},
	// 	body: puppyFormData,
	// });

	// const rawData = await resp;
	// const jsonData = await rawData.json();

	// console.log(jsonData);

	// addPuppieToFavorites(jsonData.id);
}

async function uploadedPuppies() {
	const rawData = await fetch("https://api.thedogapi.com/v1/images?limit=10", {
		headers: {
			"x-api-key": "live_fEQTW9cdqcD8Zbj6LSL5UjMs4XBT6DdzaFNUienaGAI81nOIURATazEUkacciDBH",
		},
	});
	const jsonData = await rawData.json();
	console.log(jsonData);
}

async function deleteUploadedPuppies(imgId) {
	const rawData = await fetch(`https://api.thedogapi.com/v1/images/${imgId}`, {
		method: "DELETE",
		headers: {
			"x-api-key": "live_fEQTW9cdqcD8Zbj6LSL5UjMs4XBT6DdzaFNUienaGAI81nOIURATazEUkacciDBH",
		},
	});
}

function showPreview(event) {
	if (event.target.files.length > 0) {
		var src = URL.createObjectURL(event.target.files[0]);
		var preview = document.getElementById("file-ip-1-preview");
		preview.src = src;
		preview.style.display = "block";
	}
}

renderRandomPuppies();
renderFavoritePuppies();
