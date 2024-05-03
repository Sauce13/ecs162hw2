let mineNum = 0;

// Create the board with hardcoded rows/columns. 25% chance of a cell being a mine.
const createBoard = () => {
  let startRow = Math.floor(Math.random() * 8) + 1; // Choose a start row, avoid edges
  let startCol = Math.floor(Math.random() * 8) + 1; // Choose a start column, avoid edges
  let safeArea = new Set([
    `${startRow}-${startCol}`,
    `${startRow - 1}-${startCol}`,
    `${startRow}-${startCol + 1}`,
    `${startRow - 1}-${startCol - 1}`,
    `${startRow + 1}-${startCol + 1}`,
  ]);

  for (let i = 0; i < 10; i++) {
    let row = document.createElement("div");
    row.classList.add(`column`);
    row.classList.add(`row${i + 1}`);
    document.getElementById("board").appendChild(row);
    for (let j = 0; j < 10; j++) {
      let cell = document.createElement("p");
      if (!safeArea.has(`${i + 1}-${j + 1}`)) {
        const mine = Math.random();
        if (mine > 0.25) {
          cell.textContent = "S";
          cell.classList.add("safe");
        } else {
          cell.textContent = "X";
          cell.classList.add("mine");
          mineNum++;
        }
      } else {
        cell.textContent = "S";
        cell.classList.add("safe");
      }
      cell.classList.add("not-revealed");
      cell.classList.add("cell");
      cell.classList.add(`cell-${i + 1}-${j + 1}`);
      row.appendChild(cell);
    }
  }
  // Automatically reveal the initial safe cluster
  revealCluster(startRow, startCol);
};

function revealCluster(row, column) {
  // Reveal the specified cell and its neighbors
  revealCell(row, column);
  revealCell(row - 1, column);
  revealCell(row + 1, column);
  revealCell(row, column - 1);
  revealCell(row, column + 1);
  revealCell(row - 1, column - 1);
  revealCell(row - 1, column + 1);
  revealCell(row + 1, column - 1);
  revealCell(row + 1, column + 1);
}

createBoard();

function checkHorizontalMines(row, column) {
  let mines = 0;
  const currentCell = document.querySelector(`.cell-${row}-${column}`);
  if (currentCell.classList.contains("mine")) {
    return 0;
  }

  if (column > 1) {
    let left = document.querySelector(`.cell-${row}-${Number(column) - 1}`);
    if (left && left.classList.contains("mine")) {
      mines++;
    }
  }

  if (column < 10) {
    let right = document.querySelector(`.cell-${row}-${Number(column) + 1}`);
    if (right && right.classList.contains("mine")) {
      mines++;
    }
  }

  return mines;
}

function checkVerticalMines(row, column) {
  let mines = 0;
  const currentCell = document.querySelector(`.cell-${row}-${column}`);
  if (currentCell.classList.contains("mine")) {
    return 0;
  }

  if (row > 1) {
    let up = document.querySelector(`.cell-${Number(row) - 1}-${column}`);
    if (up && up.classList.contains("mine")) {
      mines++;
    }
  }

  if (row < 10) {
    let down = document.querySelector(`.cell-${Number(row) + 1}-${column}`);
    if (down && down.classList.contains("mine")) {
      mines++;
    }
  }

  return mines;
}

function checkDiagonalMines(row, column) {
  let mines = 0;
  const currentCell = document.querySelector(`.cell-${row}-${column}`);
  if (currentCell.classList.contains("mine")) {
    return 0;
  }

  if (row > 1 && column > 1) {
    let topLeft = document.querySelector(
      `.cell-${Number(row) - 1}-${Number(column) - 1}`
    );
    if (topLeft && topLeft.classList.contains("mine")) {
      mines++;
    }
  }

  if (row > 1 && column < 10) {
    let topRight = document.querySelector(
      `.cell-${Number(row) - 1}-${Number(column) + 1}`
    );
    if (topRight && topRight.classList.contains("mine")) {
      mines++;
    }
  }

  if (row < 10 && column > 1) {
    let bottomLeft = document.querySelector(
      `.cell-${Number(row) + 1}-${Number(column) - 1}`
    );
    if (bottomLeft && bottomLeft.classList.contains("mine")) {
      mines++;
    }
  }

  if (row < 10 && column < 10) {
    let bottomRight = document.querySelector(
      `.cell-${Number(row) + 1}-${Number(column) + 1}`
    );
    if (bottomRight && bottomRight.classList.contains("mine")) {
      mines++;
    }
  }

  return mines;
}

function checkMines(row, column) {
  let counter = 0;

  counter += checkVerticalMines(row, column);
  counter += checkHorizontalMines(row, column);
  counter += checkDiagonalMines(row, column);

  return counter;
}

function revealCell(row, column) {
  let cell = document.querySelector(`.cell-${row}-${column}`);
  if (
    !cell ||
    cell.classList.contains("revealed") ||
    cell.classList.contains("mine")
  ) {
    return;
  }

  let mines = checkMines(row, column);
  cell.classList.remove("not-revealed");
  cell.classList.add("revealed");
  cell.textContent = mines;

  if (mines === 0) {
    // Recursively reveal all adjacent cells if there are no adjacent mines
    revealCell(row - 1, column - 1); // Top-left
    revealCell(row - 1, column); // Top
    revealCell(row - 1, column + 1); // Top-right
    revealCell(row, column - 1); // Left
    revealCell(row, column + 1); // Right
    revealCell(row + 1, column - 1); // Bottom-left
    revealCell(row + 1, column); // Bottom
    revealCell(row + 1, column + 1); // Bottom-right
  }
}

let correctFlags = 0;

document.getElementById("board").addEventListener("mousedown", (event) => {
  if (event.button === 0) {
    // Check if the left mouse button was pressed
    if (event.target.classList.contains("mine")) {
      alert(`Game Over!, You clicked a mine`);
      location.reload();
    }
    let row = event.target.classList[3].split("-")[1];
    let column = event.target.classList[3].split("-")[2];
    revealCell(row, column);
  } else if (event.button === 2) {
    //check if right mouse button was pressed
    if (!event.target.classList.contains("flagged")) {
      //Flags on right click, checks if the flag is correct
      if (event.target.classList.contains("mine")) {
        correctFlags++;
      }
      event.target.classList.add("flagged");
      if (correctFlags === mineNum) {
        alert(`You win`);
        location.reload();
      }
    } else {
      correctFlags--;
      event.target.classList.remove("flagged");
    }
  }
});

document.getElementById("board").addEventListener("contextmenu", (event) => {
  event.preventDefault();
});
