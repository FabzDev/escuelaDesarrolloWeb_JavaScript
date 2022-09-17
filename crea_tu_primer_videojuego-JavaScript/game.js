const canvas = document.querySelector("#game");
const context = canvas.getContext("2d");

window.addEventListener("load", startGame);

function startGame() {
	let canvasSize;
	if (window.innerWidth >= window.innerHeight) {
		canvasSize = innerHeight * 0.8;
	} else {
		canvasSize = innerWidth * 0.8;
	}

	canvas.setAttribute("width", canvasSize);
	canvas.setAttribute("height", canvasSize);
	const elementsSize = canvasSize * 0.1;

	console.log(elementsSize);
	console.log(canvasSize);

	context.textAlign = "end";
	context.font = elementsSize + "px Verdana";
	for (i = 1; i <= 10; i++) {
		context.fillText(emojis["X"], elementsSize * i + 10, elementsSize);
	}

	// context.fillRect(100, 100, 1, 1);
	// context.clearRect(50, 0, 100, 50);
	// context.font = "30px Cabin";
	// context.fillStyle = "green";
	// context.textAlign = "center";
	// context.fillText("Fabio", 100, 100);
}
