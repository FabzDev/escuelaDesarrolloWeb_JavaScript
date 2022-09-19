const canvas = document.querySelector("#game");
const context = canvas.getContext("2d");
const btnLeft = document.querySelector("#left");
const btnUp = document.querySelector("#up");
const btnRight = document.querySelector("#right");
const btnDown = document.querySelector("#down");

window.addEventListener("load", setCanvasSize);
window.addEventListener("resize", setCanvasSize);

let canvasSize;
let elementsSize;
let x;
let y;

const playerPosition = {
	x: undefined,
	y: undefined,
};

function startGame() {
	context.clearRect(0, 0, canvasSize, canvasSize);
	context.textAlign = "end";
	context.font = elementsSize + "px Verdana";

	const map = maps[0];
	const cleanMap = map.trim().split("\n");
	const matrixMap = cleanMap.map((row) => row.trim().split(""));
	// console.log(matrixMap);

	matrixMap.forEach((row, rowP) => {
		row.forEach((col, colP) => {
			let posX = elementsSize * (colP + 1);
			let posY = elementsSize * (rowP + 1);

			if (col == "O" && x == undefined && y == undefined) {
				x = posX;
				y = posY;
			}
			context.fillText(emojis[col], posX, posY);
		});
	});
	console.log({ x, y });
	context.fillText(emojis["PLAYER"], x, y);
}

// context.fillRect(100, 100, 1, 1);
// context.clearRect(50, 0, 100, 50);
// context.font = "30px Cabin";
// context.fillStyle = "green";
// context.textAlign = "center";
// context.fillText("Fabio", 100, 100);

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

window.addEventListener("keydown", moveByKeys);
btnLeft.addEventListener("click", moveLeft);
btnUp.addEventListener("click", moveUp);
btnRight.addEventListener("click", moveRight);
btnDown.addEventListener("click", moveDown);

function moveByKeys(event) {
	const tecla = event.key;
	switch (tecla) {
		case "ArrowLeft":
			moveLeft();
			break;
		case "ArrowUp":
			moveUp();
			break;
		case "ArrowRight":
			moveRight();
			break;
		case "ArrowDown":
			moveDown();
			break;
		default:
			break;
	}
}

function moveLeft() {
	console.log("Left");
}
function moveUp() {
	// context.fillText(emojis["PLAYER"], x, y - elementsSize);
	y = y - elementsSize;
	startGame();
}
function moveRight() {
	console.log("Right");
}
function moveDown() {
	console.log("Down");
}
