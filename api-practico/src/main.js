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

	renderMovies(movies, trendingMoviesPreviewList);
}

async function getCategoriesPreview() {
	const res = await apiAxios("/genre/movie/list");
	const genres = res.data.genres;
	// console.log(genres);

	renderGenres(genres, categoriesPreviewList);
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

	renderMovies(categoryList, genericSection);
}

async function searchMovies(hash) {
	const temp = location.hash;

	const { data } = await apiAxios("/search/movie", {
		params: {
			query: hash,
		},
	});
	const searchedMovies = data.results;
	renderMovies(searchedMovies, genericSection);
}

async function getTrendingMovies() {
	const res = await apiAxios("/trending/movie/week");
	const trendingMovies = res.data.results;
	// console.log(trendingMovies);
	headerCategoryTitle.innerText = "Trending Movies";

	renderMovies(trendingMovies, genericSection);
}

async function getMovieDetails(movie_id) {
	const res = await apiAxios(`/movie/${movie_id}`);
	const detailedMovie = res.data;
	// console.log(detailedMovie);

	movieDetailTitle.textContent = detailedMovie.title; // <h1 class="movieDetail-title">Deadpool</h1>
	movieDetailScore.textContent = Math.round(detailedMovie.vote_average * 10) / 10; // <span class=categoriesPreviewList"movieDetail-score">7.6</span>
	headerSection.style.background = `linear-gradient(180deg, rgba(0, 0, 0, 0.35) 19.27%, rgba(0, 0, 0, 0) 29.17%), url(https://image.tmdb.org/t/p/w300/${detailedMovie.poster_path})`;
	movieDetailDescription.textContent = detailedMovie.overview;
	const relatedGenres = detailedMovie.genres;
	renderGenres(relatedGenres, movieDetailCategoriesList);

	const res2 = await apiAxios(`/movie/${movie_id}/similar`);
	const relatedMovies = res2.data.results;
	// console.log(relatedMovies);
	renderMovies(relatedMovies, relatedMoviesContainer);
}

//RENDER MOVIES
function renderMovies(parameter, fatherContainer) {
	fatherContainer.innerHTML = "";
	parameter.forEach((movie) => {
		const movieContainer = document.createElement("div");
		movieContainer.classList.add("movie-container");
		fatherContainer.appendChild(movieContainer);

		movieContainer.addEventListener("click", () => {
			location.hash = `#movie=${movie.id}`;
		});

		const imgMovie = document.createElement("img");
		imgMovie.classList.add("movie-img");
		imgMovie.setAttribute("alt", movie.title);
		imgMovie.setAttribute("src", "https://image.tmdb.org/t/p/w300/" + movie.poster_path);
		movieContainer.appendChild(imgMovie);
	});
}

//RENDER CATEGORIES
function renderGenres(gen, container) {
	container.innerHTML = "";
	gen.forEach((category) => {
		const categoryContainer = document.createElement("div");
		categoryContainer.classList.add("category-container");
		// categoriesPreviewList.appendChild(categoryContainer);
		container.appendChild(categoryContainer);

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
