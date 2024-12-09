const game = document.getElementById("game");
const player1ScoreElement = document.getElementById("player1Score");
const player2ScoreElement = document.getElementById("player2Score");
const winnerMessage = document.getElementById("winnerMessage");
const drawMessage = document.getElementById("drawMessage");

let currentPlayer = "X"; 
let player1Score = 0;
let player2Score = 0;
let board = Array(3).fill().map(() => Array(3).fill(""));


function drawBoard() {
    game.innerHTML = ""; 
    for (let i = 0; i < 3; i++) {
        const row = document.createElement("tr");
        for (let j = 0; j < 3; j++) {
            const cell = document.createElement("td");
            cell.addEventListener("click", () => makeMove(i, j));
            cell.textContent = board[i][j];
            row.appendChild(cell);
        }
        game.appendChild(row);
    }
}


function makeMove(row, col) {
    if (board[row][col] === "" && !checkWinner()) {
        board[row][col] = currentPlayer;
        drawBoard();
        if (checkWinner()) {
            endGame(`${currentPlayer} wins!`);
            updateScore();
        } else if (isDraw()) {
            endGame("It's a draw!", true);
        } else {
            currentPlayer = currentPlayer === "X" ? "O" : "X"; 
        }
    }
}


function checkWinner() {
  
    for (let i = 0; i < 3; i++) {
        if (
            board[i][0] === currentPlayer &&
            board[i][1] === currentPlayer &&
            board[i][2] === currentPlayer
        ) {
            return true;
        }
        if (
            board[0][i] === currentPlayer &&
            board[1][i] === currentPlayer &&
            board[2][i] === currentPlayer
        ) {
            return true;
        }
    }
    if (
        board[0][0] === currentPlayer &&
        board[1][1] === currentPlayer &&
        board[2][2] === currentPlayer
    ) {
        return true;
    }
    if (
        board[0][2] === currentPlayer &&
        board[1][1] === currentPlayer &&
        board[2][0] === currentPlayer
    ) {
        return true;
    }
    return false;
}

function isDraw() {
    return board.flat().every(cell => cell !== "");
}

function endGame(message, isDraw = false) {
    if (isDraw) {
        drawMessage.textContent = message;
    } else {
        winnerMessage.textContent = message;
    }
    setTimeout(resetGame, 2000); 
}

function updateScore() {
    if (currentPlayer === "X") {
        player1Score++;
        player1ScoreElement.textContent = player1Score;
    } else {
        player2Score++;
        player2ScoreElement.textContent = player2Score;
    }
}

function resetGame() {
    board = Array(3).fill().map(() => Array(3).fill(""));
    currentPlayer = "X";
    winnerMessage.textContent = "";
    drawMessage.textContent = "";
    drawBoard();
}


drawBoard();


