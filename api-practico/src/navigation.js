window.addEventListener("hashchange", navigator, false);

(function navigator() {
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
})();

function homePage() {
	console.log("Home!");

	// header
	headerSection.classList.remove("header-container--long");
	headerSection.style.background = "";
	arrowBtn.classList.add("inactive");
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

	getCategoriesPreview();
}

function movieDetailsPage() {
	console.log("Movie!!");
}

function searchPage() {
	console.log("Search!!");
}

function trendsPage() {
	console.log("TRENDS!!");
}
