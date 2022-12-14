const canvas = document.querySelector("#game");
const context = canvas.getContext("2d");
const btnLeft = document.querySelector("#left");
const btnUp = document.querySelector("#up");
const btnRight = document.querySelector("#right");
const btnDown = document.querySelector("#down");
const vidasR = document.querySelector("#lifesR");
const time = document.querySelector("#timeID");
const recordSpan = document.querySelector("#recordID");
const resetBtn = document.querySelector("#reset");

window.addEventListener("load", setCanvasSize);
window.addEventListener("resize", setCanvasSize);
window.addEventListener("resize", positionPlayer);

function positionPlayer() {
	playerPosition.x = undefined;
	playerPosition.y = undefined;
}

let canvasSize;
let elementsSize;
let level = 0;
let lives = 3;
let timeStart;
let timePlayer;
let timeInterval;
let record;
let win = false;
let lose = false;

time.innerHTML = timeInterval;

showLives();

showRecord();

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
	context.font = elementsSize * 0.9 + "px Verdana";
	let map = maps[level];

	if (!map) {
		gameWin();
		return;
	}

	if (!timeStart) {
		timeStart = Date.now();
		timeInterval = setInterval(showTime, 100);
	}

	bombPosition = [];

	const cleanMap = map.trim().split("\n");
	let matrixMap = cleanMap.map((row) => row.trim().split(""));
	context.clearRect(0, 0, canvasSize, canvasSize);

	matrixMap.forEach((row, rowP) => {
		row.forEach((col, colP) => {
			let posX = parseFloat((elementsSize * (colP + 1)).toFixed(2));
			let posY = parseFloat((elementsSize * (rowP + 1)).toFixed(2));
			if (!win && !lose) {
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
						if (firePosition.x == undefined && firePosition.y == undefined) {
							firePosition.x = posX;
							firePosition.y = posY;
						} else {
							firePosition.a = posX;
							firePosition.b = posY;
						}
					}
				}
				if (firePosition.x != undefined && firePosition.y != undefined) {
					context.clearRect(
						firePosition.x - elementsSize,
						firePosition.y - elementsSize + 10,
						elementsSize,
						elementsSize
					);
					context.fillText(
						emojis["BOMB_COLLISION"],
						firePosition.x,
						firePosition.y
					);
					if (firePosition.a != undefined && firePosition.b != undefined) {
						context.clearRect(
							firePosition.a - elementsSize,
							firePosition.b - elementsSize + 10,
							elementsSize,
							elementsSize
						);
						context.fillText(
							emojis["BOMB_COLLISION"],
							firePosition.a,
							firePosition.b
						);
					}
				}
				context.fillText(emojis[col], posX, posY);
			} else if (lose) {
				if (col == "X") {
					looser(posX, posY, rowP);
				}
			} else if (win) {
				if (col == "X") {
					winner(posX, posY, colP);
				}
			}
		});
	});
	movePlayer();
}

const looser = function (x, y, index) {
	setTimeout(function () {
		context.fillText(emojis["COLLISION"], x, y);
	}, index * 20);
};

const winner = function (x, y, index) {
	setTimeout(function () {
		context.fillText(emojis["WIN"], x, y);
	}, index * 20);
};

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
		if (!maps[level]) {
			gameWin();
			return;
		}
		win = true;
		removePositions();
		startGame();
		level++;
		setTimeout(winFunction, 600);
	}
}
function winFunction() {
	win = false;
	startGame();
}

function movePlayer() {
	isBombColition();
	isPricePosition();
	context.fillText(emojis["PLAYER"], playerPosition.x, playerPosition.y);
}

function setCanvasSize() {
	canvasSize;
	if (window.innerWidth >= window.innerHeight) {
		canvasSize = Math.round((innerHeight * 0.7).toFixed(2));
	} else {
		canvasSize = Math.round((innerWidth * 0.7).toFixed(2));
	}

	canvas.setAttribute("width", canvasSize);
	canvas.setAttribute("height", canvasSize);
	elementsSize = Math.round((canvasSize * 0.1).toFixed(2));

	startGame();
}

window.addEventListener("keydown", moveByKeys);
btnLeft.addEventListener("click", moveLeft);
btnUp.addEventListener("click", moveUp);
btnRight.addEventListener("click", moveRight);
btnDown.addEventListener("click", moveDown);
resetBtn.addEventListener("click", reload);

function reload() {
	location.reload();
}

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
		startGame();
	}
	// console.log(playerPosition.x, canvasSize);
}
function moveUp() {
	if (playerPosition.y > elementsSize) {
		playerPosition.y -= elementsSize;
	}
	startGame();
	// console.log(playerPosition.y, canvasSize, elementsSize);
}
function moveRight() {
	if (playerPosition.x < canvasSize) {
		playerPosition.x += elementsSize;
	}
	startGame();
	// console.log(playerPosition.x, canvasSize);
}
function moveDown() {
	if (playerPosition.y < canvasSize) {
		playerPosition.y += elementsSize;
	}
	startGame();
	// console.log(playerPosition.y, canvasSize);
}

function gameWin() {
	if (timePlayer < localStorage.puntaje) {
		localStorage.setItem("puntaje", timePlayer);
	}

	clearInterval(timeInterval);
}

function showRecord() {
	if (!localStorage.puntaje) {
		localStorage.setItem("puntaje", 9999);
	}
	recordSpan.innerHTML = localStorage.puntaje + " seg";
}

function removePositions() {
	firePosition.x = undefined;
	firePosition.y = undefined;
	firePosition.a = undefined;
	firePosition.b = undefined;
	playerPosition.x = undefined;
	playerPosition.y = undefined;
}
function loseFunction() {
	level = 0;
	lose = false;
	startGame();
}
function lvlFail() {
	if (lives <= 1) {
		lives = 3;
		showLives();
		clearInterval(timeInterval);
		timeStart = undefined;
		removePositions();
		lose = true;
		startGame();
		setTimeout(loseFunction, 3000);
	} else {
		lives--;
		showLives();
	}
}

function showLives() {
	const heartsArray = Array(lives).fill(emojis["HEART"]); // [~,~,~]
	// vidasR.innerHTML = heartsArray;
	// vidasR.innerHTML = emojis["HEART"].repeat(lives);
	vidasR.innerHTML = "";
	heartsArray.forEach((heart) => vidasR.append(heart));
}

function showTime() {
	timePlayer = (Date.now() - timeStart) / 1000;
	time.innerHTML = timePlayer.toFixed(1) + " seg";
}
