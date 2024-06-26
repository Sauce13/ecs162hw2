const player1 = "Red";
const player2 = "Yellow";

const numRows = 6;
const numCols = 7;
const playerPiece = document.getElementById("player");

var playerPieceLocation = 3; // middle of the board
var boardState = []; // internal representation of the board
var currentPlayer = null;
var prevPieceLocation = null;

window.onload = () => {
   createBoard();
   switchPlayer();
   addEventListeners();
};

const createBoard = () => {
   for (let i = 0; i < numRows; i++) {
      for (let j = 0; j < numCols; j++) {
         let cell = document.createElement("div");
         cell.classList.add("cell");
         document.getElementById("board").appendChild(cell);
      }
      boardState.push(new Array(numCols).fill(null));
   }
};

const switchPlayer = () => {
   currentPlayer = currentPlayer === player1 ? player2 : player1;
   if (currentPlayer === player1) {
      document.getElementById("player").classList.remove("yellow-piece");
      document.getElementById("player").classList.add("red-piece");
   } else {
      document.getElementById("player").classList.remove("red-piece");
      document.getElementById("player").classList.add("yellow-piece");
   }
};

const addEventListeners = () => {
   const leftBtn = document.getElementById("left");
   const rightBtn = document.getElementById("right");
   const dropBtn = document.getElementById("drop");

   leftBtn.addEventListener("click", () => {
      movePiece(-1);
   });

   rightBtn.addEventListener("click", () => {
      movePiece(1);
   });

   dropBtn.addEventListener("click", () => {
      dropPiece();
   });

   // when the window resizes, we need to update the position of the player piece above the board by dynamically changing the left property
   window.addEventListener("resize", () => {
      const cellStyle = getComputedStyle(document.querySelector(".cell"));
      const totalCellWidth =
         parseFloat(cellStyle.width) + parseFloat(cellStyle.marginLeft) + parseFloat(cellStyle.marginRight);

      playerPiece.style.left = `${playerPieceLocation * totalCellWidth + 10}px`;
   });
};

const movePiece = (direction) => {
   const cellStyle = getComputedStyle(document.querySelector(".cell"));
   const totalCellWidth =
      parseFloat(cellStyle.width) + parseFloat(cellStyle.marginLeft) + parseFloat(cellStyle.marginRight);

   const newLocation = playerPieceLocation + direction;
   if (newLocation >= 0 && newLocation < numCols) {
      playerPieceLocation = newLocation;
      playerPiece.style.left = `${playerPieceLocation * totalCellWidth + 10}px`;
   }
};

const dropPiece = () => {
   const column = playerPieceLocation;

   for (let i = numRows - 1; i >= 0; i--) {
      if (boardState[i][column] === null) {
         boardState[i][column] = currentPlayer;
         prevPieceLocation = [i, column];
         const cell = document.getElementsByClassName("cell")[i * numCols + column];
         cell.classList.add(currentPlayer === player1 ? "red-piece" : "yellow-piece");
         break;
      }
   }

   setTimeout(() => {
      const didWin = checkForWin();
      if (didWin) {
         alert(`${currentPlayer} wins!`);
         resetGame();
      }
      playerPieceLocation = 3;
      playerPiece.style.left = null;
      switchPlayer();
   }, 10); // add a 10ms delay to allow the piece to "drop" before checking for a win
};

const resetGame = () => {
   boardState = [];
   currentPlayer = null;
   prevPieceLocation = null;
   document.getElementById("board").innerHTML = "";
   createBoard();
};

const checkForWin = () => {
   // given were the most recent piece was dropped, check if there is a horizontal/vertical/diagonal sequence of 4 pieces of the same color
   return checkForHorizontalWin() || checkForVerticalWin() || checkForDiagonalWin();
};

const checkForHorizontalWin = () => {
   const row = prevPieceLocation[0];
   const col = prevPieceLocation[1];

   let count = 0;

   // check horizontal to the right
   for (let i = 0; i < 4; i++) {
      if (i + col < numCols && boardState[row][i + col] === currentPlayer) {
         count++;
      } else {
         break;
      }
   }

   if (count === 4) {
      return true;
   }

   // check horizontal to the left
   count = 0;
   for (let i = 0; i < 4; i++) {
      if (col - i >= 0 && boardState[row][col - i] === currentPlayer) {
         count++;
      } else {
         break;
      }
   }

   if (count === 4) {
      return true;
   }

   return false;
};

const checkForVerticalWin = () => {
   const row = prevPieceLocation[0];
   const col = prevPieceLocation[1];

   let count = 0;

   for (let i = 0; i < 4; i++) {
      if (i + row < numRows && boardState[i + row][col] === currentPlayer) {
         count++;
      } else {
         break;
      }
   }

   if (count === 4) {
      return true;
   }

   count = 0;
   for (let i = 0; i < 4; i++) {
      if (row - i >= 0 && boardState[row - i][col] === currentPlayer) {
         count++;
      } else {
         break;
      }
   }

   if (count === 4) {
      return true;
   }

   return false;
};

const checkForDiagonalWin = () => {
   const row = prevPieceLocation[0];
   const col = prevPieceLocation[1];

   let count = 0;

   for (let i = 0; i < 4; i++) {
      if (i + row < numRows && i + col < numCols && boardState[i + row][i + col] === currentPlayer) {
         count++;
      } else {
         break;
      }
   }

   if (count === 4) {
      return true;
   }

   count = 0;
   for (let i = 0; i < 4; i++) {
      if (row - i >= 0 && col - i >= 0 && boardState[row - i][col - i] === currentPlayer) {
         count++;
      } else {
         break;
      }
   }

   if (count === 4) {
      return true;
   }

   count = 0;
   for (let i = 0; i < 4; i++) {
      if (row + i < numRows && col - i >= 0 && boardState[row + i][col - i] === currentPlayer) {
         count++;
      } else {
         break;
      }
   }

   if (count === 4) {
      return true;
   }

   count = 0;
   for (let i = 0; i < 4; i++) {
      if (row - i >= 0 && col + i < numCols && boardState[row - i][col + i] === currentPlayer) {
         count++;
      } else {
         break;
      }
   }

   if (count === 4) {
      return true;
   }

   return false;
};
