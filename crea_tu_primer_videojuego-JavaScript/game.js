const canvas = document.querySelector("#game");
const context = canvas.getContext("2d");
const btnLeft = document.querySelector("#left");
const btnUp = document.querySelector("#up");
const btnRight = document.querySelector("#right");
const btnDown = document.querySelector("#down");
const vidasR = document.querySelector("#lifesR");

window.addEventListener("load", setCanvasSize);
window.addEventListener("resize", setCanvasSize);

let canvasSize;
let elementsSize;
let level = 0;
let lives = 3;

const playerPosition = {
	x: undefined,
	y: undefined,
};
const pricePosition = {
	x: undefined,
	y: undefined,
};
let firePosition = {
	x: undefined,
	y: undefined,
};

let bombPosition = [];

//FUNCION PRINCIPAL
function startGame() {
	context.textAlign = "end";
	context.font = elementsSize + "px Verdana";

	let map = maps[level];

	if (!map) {
		gameWin();
		return;
	}

	bombPosition = [];

	const cleanMap = map.trim().split("\n");
	const matrixMap = cleanMap.map((row) => row.trim().split(""));
	context.clearRect(0, 0, canvasSize, canvasSize);
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
			}
			if (col == "I") {
				pricePosition.x = posX;
				pricePosition.y = posY;
			}
			if (col == "X") {
				bombPosition.push({
					x: posX,
					y: posY,
				});
				if (posX == playerPosition.x && posY == playerPosition.y) {
					firePosition.x = posX;
					firePosition.y = posY;
				}
			}
			if (posX == firePosition.x && posY == firePosition.y) {
				context.fillText(emojis["BOMB_COLLISION"], posX, posY);
			} else {
				// console.log("KAREN PERO QUE MONDAAAA");
				// firePosition.x = undefined;
				// firePosition.y = undefined;
				context.fillText(emojis[col], posX, posY);
			}
		});
	});
	movePlayer();
}

function isBombColition() {
	const bombColition = bombPosition.find((pos) => {
		return pos.x == playerPosition.x && pos.y == playerPosition.y;
	});

	if (bombColition) {
		playerPosition.x = undefined;
		playerPosition.y = undefined;

		lvlFail();

		startGame();
	}
}

function isPricePosition() {
	if (
		pricePosition.x == playerPosition.x &&
		pricePosition.y == playerPosition.y
	) {
		playerPosition.x = undefined;
		playerPosition.y = undefined;
		firePosition.x = undefined;
		firePosition.y = undefined;

		level++;
		startGame();
	}
}

function movePlayer() {
	isBombColition();
	isPricePosition();
	context.fillText(emojis["PLAYER"], playerPosition.x, playerPosition.y);
}

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

function gameWin() {
	console.log("TERMINASTE EL JUEGO!");
}

function lvlFail() {
	if (lives <= 1) {
		level = 0;
		lives = 3;
		firePosition.x = undefined;
		firePosition.y = undefined;
	} else {
		lives--;
		console.log(lives);
	}
	vidasR.innerHTML = lives;
}

// context.clearRect(50, 0, 100, 50);
// context.font = "30px Cabin";
// context.fillStyle = "green";
// context.textAlign = "center";
// context.fillText("Fabio", 100, 100);
// context.fillRect(100, 100, 1, 1);
