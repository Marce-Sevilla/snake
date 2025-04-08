// HTML Elements
const board = document.getElementById('board');
const scoreBoard = document.getElementById('scoreBoard');
const start = document.getElementById('start');
const gameOver = document.getElementById('gameOver');

// Game Settings
const boarSize = 10;
const gmaeSpeed = 100;
const squareTime = {
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