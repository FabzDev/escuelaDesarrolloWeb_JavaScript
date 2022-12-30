// import fetch from "node-fetch";

const content = null || document.getElementById("content");

const API =
	"https://youtube138.p.rapidapi.com/channel/videos/?id=UCw3LzfWsv-xXTFI6Q4Y4SwQ&filter=videos_latest&hl=en&gl=US";

const options = {
	method: "GET",
	headers: {
		"X-RapidAPI-Key": "5665d944b0mshae3b3f8030218efp1ed044jsn2c295e8f6017",
		"X-RapidAPI-Host": "youtube138.p.rapidapi.com",
	},
};

const youtube = async () => {
	const rawData = await fetch(API, options);
	const data = await rawData.json();
	return data;
};

(async () => {
	try {
		const videos = await youtube();
		let view = `
		${videos.contents
			.map(
				(eachVideo) => `
		<div class="group relative">
		    <div
		      class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none"
		    >
		      <img src="${eachVideo.video.thumbnails[0].url}" alt="${eachVideo.video.title}" class="w-full" />
		    </div>
		    <div class="mt-4 flex justify-between">
		      <h3 class="text-sm text-gray-700">
		        <span aria-hidden="true" class="absolute inset-0"></span>
		        ${eachVideo.video.title}
		      </h3>
		    </div>
		  </div>`
			)
			.slice(0, 4)
			.join("")}`;
		content.innerHTML = view;
	} catch (error) {
		console.log(error);
	}
})();
