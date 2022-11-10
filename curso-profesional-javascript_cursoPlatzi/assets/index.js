import MediaPlayer from "./MediaPlayer.js";
import AutoPlay from "./plugins/AutoPlay.js";

const video = document.querySelector(".movie");
const player = new MediaPlayer({
	el: video,
	plugins: [
		// new AutoPlay()
	],
});

const button1 = document.querySelector("#play");
const button2 = document.querySelector("#mute");
button1.onclick = () => player.tooglePlay();
button2.onclick = () => player.mute();
