const canvas = document.querySelector("#game");
const context = canvas.getContext("2d");

window.addEventListener("load", setCanvasSize);
window.addEventListener("resize", setCanvasSize);

let canvasSize;
let elementsSize;

function startGame() {
	const map = maps[2];
	const cleanMap = map
		.trim()
		.split("\n")
		.map((row) => row.trim());
	const matrixMap = cleanMap.map((row) => row.split(""));

	context.textAlign = "end";
	context.font = elementsSize + "px Verdana";
	for (rows = 1; rows <= 10; rows++) {
		for (cols = 1; cols <= 10; cols++) {
			context.fillText(
				emojis[matrixMap[rows - 1][cols - 1]],
				elementsSize * cols + 10,
				elementsSize * rows - 10
			);
		}
	}

	// context.fillRect(100, 100, 1, 1);
	// context.clearRect(50, 0, 100, 50);
	// context.font = "30px Cabin";
	// context.fillStyle = "green";
	// context.textAlign = "center";
	// context.fillText("Fabio", 100, 100);
}

function setCanvasSize() {
	canvasSize;
	if (window.innerWidth >= window.innerHeight) {
		canvasSize = innerHeight * 0.8;
	} else {
		canvasSize = innerWidth * 0.8;
	}

	canvas.setAttribute("width", canvasSize);
	canvas.setAttribute("height", canvasSize);
	elementsSize = canvasSize * 0.1;

	startGame();
}
