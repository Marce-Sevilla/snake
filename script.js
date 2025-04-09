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

const createBoard = () => {
    boardSquares.forEach((row, rowIndex) => {
        row.forEach((column, columnndex) => {
            const squareValue = `${rowIndex}${columnndex}`;
            const squareElement = document.createElement('div');
            squareElement.setAttribute('class', 'square emptySquare');
            squareElement.setAttribute('id', squareValue);
            board.appendChild(squareElement);
            emptySquares.push(squareValue);
        });
    });
};

const setGame = () => {
    snake = ['00','01','02','03'];
    score = snake.length;
    direction = 'ArrowRigth';
    boardSquares = Array.from(Array(boardSize), () => new Array(boardSize).fill(squareType.emptySquare));
    board.innerHTML = '';
    emptySquares = [];
    createBoard();
};

const startGame = () => {
    setGame();
};

startButton.addEventListener('click', startGame);