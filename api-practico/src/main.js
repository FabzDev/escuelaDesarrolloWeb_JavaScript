const API_URL = "https://api.themoviedb.org/3";

const apiAxios = axios.create({
	baseURL: "https://api.themoviedb.org/3",
	// headers: {
	// 	"Content-Type": "application/json;charset=utf-8",
	// },
	params: {
		api_key: API_KEY,
	},
});

async function getTrendingMoviedPreview() {
	const res = await apiAxios("/trending/movie/day");
	// const data = await res.json(); no es necesario en AXIOS
	const movies = res.data.results;
	// Tambien es posible usar =>  const { data } = await apiAxios("/trending/movie/day"); para recivir "data" directamente.

	trendingMoviesPreviewList.innerHTML = "";
	// METODO APPEND CHILD BY PLATZI
	movies.forEach((movie) => {
		const movieContainer = document.createElement("div");
		movieContainer.classList.add("movie-container");
		trendingMoviesPreviewList.appendChild(movieContainer);

		const imgMovie = document.createElement("img");
		imgMovie.classList.add("movie-img");
		imgMovie.setAttribute("alt", movie.title);
		imgMovie.setAttribute("src", "https://image.tmdb.org/t/p/w300/" + movie.poster_path);
		movieContainer.appendChild(imgMovie);
	});
}

async function getCategoriesPreview() {
	const res = await apiAxios("/genre/movie/list");
	const genres = res.data.genres;
	categoriesPreviewList.innerHTML = "";
	// console.log(genres);

	// METODO APPEND CHILD BY PLATZI
	genres.forEach((category) => {
		const categoryContainer = document.createElement("div");
		categoryContainer.classList.add("category-container");
		categoriesPreviewList.appendChild(categoryContainer);

		const h3Category = document.createElement("h3");
		h3Category.classList.add("category-title");
		h3Category.setAttribute("id", "id" + category.id);
		h3Category.addEventListener("click", () => {
			location.hash = `#category=${category.id}-${category.name}`;
		});
		// h3Category.setAttribute("onClick", `reply_click(${category.id}, "${category.name}")`); // tomado de stack overflow
		h3Category.innerHTML = category.name;
		categoryContainer.appendChild(h3Category);
	});
}

async function getMoviesByCategory(clicked_id, clicked_name) {
	headerCategoryTitle.innerText = clicked_name;
	const res = await apiAxios("/discover/movie", {
		params: {
			sort_by: "popularity.desc",
			with_genres: clicked_id,
		},
	});
	const categoryList = res.data.results;
	genericSection.innerHTML = "";
	categoryList.forEach((movie) => {
		const movieContainer = document.createElement("div");
		movieContainer.classList.add("movie-container");
		genericSection.appendChild(movieContainer);

		const imgMovie = document.createElement("img");
		imgMovie.classList.add("movie-img");
		imgMovie.setAttribute("alt", movie.title);
		imgMovie.setAttribute("src", "https://image.tmdb.org/t/p/w300/" + movie.poster_path);
		movieContainer.appendChild(imgMovie);
		window.scroll({
			top: 0,
			left: 0,
			behavior: "smooth",
		});
	});
}

// METODO ASYNC AWAIT (NO AXIOS)
// (async function getTrendingMoviedPreview() {
// 	const res = await fetch(`${API_URL}/trending/movie/day?api_key=${API_KEY}`);
// 	const data = await res.json();
// 	const movies = data.results;

// 	// // METODO APPEND CHILD BY PLATZI
// 	// movies.forEach((movie) => {
// 	// 	const trendingArticleContainer = document.getElementById("trending-article");

// 	// 	const movieContainer = document.createElement("div");
// 	// 	movieContainer.classList.add("movie-container");
// 	// 	trendingArticleContainer.appendChild(movieContainer);

// 	// 	const imgMovie = document.createElement("img");
// 	// 	imgMovie.classList.add("movie-img");
// 	// 	imgMovie.setAttribute("alt", movie.title);
// 	// 	imgMovie.setAttribute("src", "https://image.tmdb.org/t/p/w300/" + movie.poster_path);
// 	// 	movieContainer.appendChild(imgMovie);
// 	// });

// 	// METODO MAP BY FABIO
// 	const mapArticle = document.getElementById("trending-article");
// 	mapArticle.innerHTML = movies
// 		.map(
// 			(movie) =>
// 				`
// 	            <div class="movie-container">
// 	            <img
// 	                src="https://image.tmdb.org/t/p/w300/${movie.poster_path}"
// 	                class="movie-img"
// 	                alt="${movie.title}"
// 	            />
// 	            </div>
// 	        `
// 		)
// 		.join("");
// })();

// (async function getCategoriesPreview() {
// 	const res = await fetch(`${API_URL}/genre/movie/list?api_key=${API_KEY}`);
// 	const data = await res.json();
// 	const genres = data.genres;

// 	// // METODO APPEND CHILD BY PLATZI
// 	// genres.forEach((category) => {
// 	// 	const categoriesArticle = document.querySelector("#categoriesPreview .categoriesPreview-list");

// 	// 	const categoryContainer = document.createElement("div");
// 	// 	categoryContainer.classList.add("category-container");
// 	// 	categoriesArticle.appendChild(categoryContainer);

// 	// 	const h3Category = document.createElement("h3");
// 	// 	h3Category.classList.add("category-title");
// 	// 	h3Category.setAttribute("id", "id" + category.id);
// 	// 	h3Category.innerHTML = category.name;
// 	// 	categoryContainer.appendChild(h3Category);
// 	// });

// 	// METODO MAP BY FABIO
// 	const mapCategory = document.querySelector("#categoriesPreview .categoriesPreview-list");
// 	mapCategory.innerHTML = genres
// 		.map(
// 			(category) =>
// 				`
// 	            <div class="category-container">
// 	            <h3 id="id${category.id}" class="category-title">${category.name}</h3>
// 	            </div>
// 	        `
// 		)
// 		.join("");
// })();
