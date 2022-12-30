const callback = (entries) => {
	entries.forEach((movie) => {
		movie.src = movie.dataImg;
	});
};

const observer = new IntersectionObserver(callback);

observer.observe(imgMovie);
