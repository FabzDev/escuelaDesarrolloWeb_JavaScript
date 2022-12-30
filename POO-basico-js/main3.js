function videoPlay(id) {
	const urlSecreta = "https://PlatziURLsecreta";
	console.log("Se esta reproduciendo el video " + urlSecreta);
}

function videoStop(id) {
	const urlSecreta = "https://PlatziURLsecreta";
	console.log("Se pauso el video " + urlSecreta);
}

export class PlatziClass {
	constructor({ name, videoID }) {
		this.name = name;
		this.videoID = videoID;
	}
	reproducir() {
		videoPlay(this.videoID);
	}

	pausar() {
		videoStop(this.videoID);
	}
}
