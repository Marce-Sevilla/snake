// HTML Elements
const board = document.getElementById('board');
const scoreBoard = document.getElementById('scoreBoard');
const startButton = document.getElementById('start');
const gameOverSign = document.getElementById('gameOver');

// Game Settings
const boardSize = 10;
const gmaeSpeed = 100;
const squareType = {
    emptySquare: 0,
    snakeSquare: 1,
    foodSquare: 2,
};
const directions = {
    ArrowUp: -10,
    ArrowDown: 10,
    ArrowRight: 1,
    ArrowLeft: -1,
};

// Variables Game
let snake;
let score;
let direction;
let boardSquares;
let emptySquares;
let moveInterval;

const setGame = () => {
    snake = ['00','01','02','03'];
    score = snake.length;
    direction = 'ArrowRigth';
    boardSquares = Array.from(Array(boardSize), () => new Array(boardSize).fill(squareType.emptySquare));
    console.log(boardSquares);
};

const startGame = () => {
    setGame();
};

startButton.addEventListener('click', startGame);