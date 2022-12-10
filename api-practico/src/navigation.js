window.addEventListener("DOMContentLoaded", navigator, false);
window.addEventListener("hashchange", navigator, false);

searchFormBtn.addEventListener("click", () => {
	location.hash = "#search=";
});

trendingBtn.addEventListener("click", () => {
	location.hash = "#trends";
});

arrowBtn.addEventListener("click", () => {
	location.hash = "#home";
});

function navigator() {
	console.log({ location });

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

	getCategoriesPreview();
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
}

function searchPage() {
	console.log("Search!!");

	// header
	headerSection.classList.remove("header-container--long");
	headerSection.style.background = "";
	arrowBtn.classList.remove("inactive");
	arrowBtn.classList.remove("header-arrow--white");
	headerTitle.classList.add("inactive");
	headerCategoryTitle.classList.remove("inactive");
	searchForm.classList.remove("inactive");

	// Tendencias
	trendingPreviewSection.classList.add("inactive");

	// Categorias
	categoriesPreviewSection.classList.add("inactive");

	//Seccion general
	genericSection.classList.remove("inactive");

	//Movie detail section
	movieDetailSection.classList.add("inactive");
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
}
