const API_URL = "https://api.themoviedb.org/3";
const trendingArticle = document.getElementById("trending-article");

(async function getTrendingMoviedPreview() {
	// METODO APPEND CHILD BY PLATZI
	const res = await fetch(`${API_URL}/trending/movie/day?api_key=${API_KEY}`);
	const data = await res.json();
	const movies = data.results;
	console.log(movies);
	movies.forEach((movie) => {
		const trendingArticleContainer = document.getElementById("trending-article");

		const movieContainer = document.createElement("div");
		movieContainer.classList.add("movie-container");
		trendingArticleContainer.appendChild(movieContainer);

		const imgMovie = document.createElement("img");
		imgMovie.classList.add("movie-img");
		imgMovie.setAttribute("alt", movie.title);
		imgMovie.setAttribute("src", "https://image.tmdb.org/t/p/w300/" + movie.poster_path);
		movieContainer.appendChild(imgMovie);
	});
})();
