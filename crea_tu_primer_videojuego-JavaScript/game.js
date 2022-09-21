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
let level = -1;

const playerPosition = {
	x: undefined,
	y: undefined,
};
const pricePosition = {
	x: undefined,
	y: undefined,
};
const bombPosition = {
	x: 0,
	y: 0,
};
const initialPosition = {
	x: 0,
	y: 0,
};

function startGame() {
	delMap();
	isPricePosition();

	context.textAlign = "end";
	context.font = elementsSize + "px Verdana";

	let map = maps[level];
	const cleanMap = map.trim().split("\n");
	const matrixMap = cleanMap.map((row) => row.trim().split(""));
	matrixMap.forEach((row, rowP) => {
		row.forEach((col, colP) => {
			let posX = Math.round(elementsSize * (colP + 1));
			let posY = Math.round(elementsSize * (rowP + 1));

			if (
				col == "O" &&
				playerPosition.x == undefined &&
				playerPosition.y == undefined
			) {
				playerPosition.x = posX;
				playerPosition.y = posY;
				initialPosition.x = posX;
				initialPosition.y = posY;
			}
			if (col == "I") {
				pricePosition.x = posX;
				pricePosition.y = posY;
			}
			if (col == "X") {
				bombPosition.x = posX;
				bombPosition.y = posY;
			}
			if (
				playerPosition.x == bombPosition.x &&
				playerPosition.y == bombPosition.y
			) {
				playerPosition.x = initialPosition.x;
				playerPosition.y = initialPosition.y;
				startGame;
			}
			context.fillText(emojis[col], posX, posY);
		});
	});
	console.log(
		playerPosition.x,
		playerPosition.y,
		pricePosition.x,
		pricePosition.y,
		initialPosition.x,
		initialPosition.y,
		level
	);
	movePlayer();
}
function movePlayer() {
	context.fillText(emojis["PLAYER"], playerPosition.x, playerPosition.y);
}
function delMap() {
	context.clearRect(0, 0, canvasSize, canvasSize);
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
		canvasSize = Math.round(innerHeight * 0.8);
	} else {
		canvasSize = Math.round(innerWidth * 0.8);
	}

	canvas.setAttribute("width", canvasSize);
	canvas.setAttribute("height", canvasSize);
	elementsSize = Math.round(canvasSize * 0.1);

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
	if (playerPosition.x > elementsSize) {
		playerPosition.x -= elementsSize;
	}
	startGame();
}
function moveUp() {
	if (playerPosition.y > elementsSize) {
		playerPosition.y -= elementsSize;
	}
	startGame();
}
function moveRight() {
	if (playerPosition.x < canvasSize) {
		playerPosition.x += elementsSize;
	}
	startGame();
}
function moveDown() {
	if (playerPosition.y < canvasSize) {
		playerPosition.y += elementsSize;
	}
	startGame();
}

function isPricePosition() {
	if (
		pricePosition.x == playerPosition.x &&
		pricePosition.y == playerPosition.y
	) {
		level = level + 1;
		playerPosition.x = undefined;
		playerPosition.y = undefined;
	}
}
