window.addEventListener("DOMContentLoaded", navigator, false);
window.addEventListener("hashchange", navigator, false);

searchFormBtn.addEventListener("click", () => {
	location.hash = "#search=" + searchFormInput.value;
});

trendingBtn.addEventListener("click", () => {
	location.hash = "#trends";
});

arrowBtn.addEventListener("click", () => {
	location.hash = "#home";
});

function navigator() {
	if (location.hash.startsWith("#trends")) {
		trendsPage();
	} else if (location.hash.startsWith("#search=")) {
		searchPage();
	} else if (location.hash.startsWith("#movie=")) {
		movieDetailsPage();
	} else if (location.hash.startsWith("#category=")) {
		categoriesPage();
	} else {
		homePage();
	}
	window.scroll({
		top: 0,
		left: 0,
		behavior: "instant",
	});
}

function homePage() {
	console.log("Home!");

	// header
	headerSection.classList.remove("header-container--long");
	headerSection.style.background = "";
	arrowBtn.classList.add("inactive");
	arrowBtn.classList.remove("header-arrow--white");
	headerCategoryTitle.classList.add("inactive");
	headerTitle.classList.remove("inactive");
	searchForm.classList.remove("inactive");

	// Tendencias
	trendingPreviewSection.classList.remove("inactive");

	// Categorias
	categoriesPreviewSection.classList.remove("inactive");

	//Seccion general
	genericSection.classList.add("inactive");

	//Movie detail section
	movieDetailSection.classList.add("inactive");

	getCategoriesPreview();
	getTrendingMoviedPreview();
}

function categoriesPage() {
	console.log("Categories!!");

	// header
	headerSection.classList.remove("header-container--long");
	headerSection.style.background = "";
	arrowBtn.classList.remove("inactive");
	arrowBtn.classList.remove("header-arrow--white");
	headerTitle.classList.add("inactive");
	headerCategoryTitle.classList.remove("inactive");
	searchForm.classList.add("inactive");

	// Tendencias
	trendingPreviewSection.classList.add("inactive");

	// Categorias
	categoriesPreviewSection.classList.add("inactive");

	//Seccion general
	genericSection.classList.remove("inactive");

	//Movie detail section
	movieDetailSection.classList.add("inactive");

	const hashContent = location.hash;
	const idAndName = hashContent.slice(10);
	const idAndNameArray = idAndName.split("-");
	const clicked_id = idAndNameArray[0];
	const clicked_name = idAndNameArray[1].replace("%20", " ");

	getMoviesByCategory(clicked_id, clicked_name);
}

function movieDetailsPage() {
	console.log("Movie!!");

	// header
	headerSection.classList.add("header-container--long");
	// headerSection.style.background = "";
	arrowBtn.classList.remove("inactive");
	arrowBtn.classList.add("header-arrow--white");
	headerTitle.classList.add("inactive");
	headerCategoryTitle.classList.add("inactive");
	searchForm.classList.add("inactive");

	// Tendencias
	trendingPreviewSection.classList.add("inactive");

	// Categorias
	categoriesPreviewSection.classList.add("inactive");

	//Seccion general
	genericSection.classList.add("inactive");

	//Movie detail section
	movieDetailSection.classList.remove("inactive");

	const [_, movieId] = location.hash.split("=");

	getMovieDetails(movieId);
}

function searchPage() {
	console.log("Search!!");

	// header
	headerSection.classList.remove("header-container--long");
	headerSection.style.background = "";
	arrowBtn.classList.remove("inactive");
	arrowBtn.classList.remove("header-arrow--white");
	headerTitle.classList.add("inactive");
	headerCategoryTitle.classList.add("inactive");
	searchForm.classList.remove("inactive");

	// Tendencias
	trendingPreviewSection.classList.add("inactive");

	// Categorias
	categoriesPreviewSection.classList.add("inactive");

	//Seccion general
	genericSection.classList.remove("inactive");

	//Movie detail section
	movieDetailSection.classList.add("inactive");

	const hashContent = location.hash;
	const [_, hashContentArray] = hashContent.split("=");
	const searchValue = hashContentArray.replaceAll("%20", " ");
	searchMovies(searchValue);
}

function trendsPage() {
	console.log("TRENDS!!");

	// header
	headerSection.classList.remove("header-container--long");
	headerSection.style.background = "";
	arrowBtn.classList.remove("inactive");
	arrowBtn.classList.remove("header-arrow--white");
	headerTitle.classList.add("inactive");
	headerCategoryTitle.classList.remove("inactive");
	searchForm.classList.add("inactive");

	// Tendencias
	trendingPreviewSection.classList.add("inactive");

	// Categorias
	categoriesPreviewSection.classList.add("inactive");

	//Seccion general
	genericSection.classList.remove("inactive");

	//Movie detail section
	movieDetailSection.classList.add("inactive");

	getTrendingMovies();
}
