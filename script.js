const cell = document.querySelectorAll(".cell");
const turn = document.getElementById("turn");
const restart = document.getElementById("restart");
let pTurn = true,
  isOver = false,
  winner;

const checkWinner = () => {
  switch (true) {
    case cell[0].textContent != "" &&
      cell[0].textContent == cell[1].textContent &&
      cell[1].textContent == cell[2].textContent:
      cell[0].style.fontWeight = "bold";
      cell[1].style.fontWeight = "bold";
      cell[2].style.fontWeight = "bold";
      winner = cell[0].textContent == "X" ? "X Wins!" : "O Wins!";
      isOver = true;
      break;
    case cell[3].textContent != "" &&
      cell[3].textContent == cell[4].textContent &&
      cell[4].textContent == cell[5].textContent:
      cell[3].style.fontWeight = "bold";
      cell[4].style.fontWeight = "bold";
      cell[5].style.fontWeight = "bold";
      winner = cell[3].textContent == "X" ? "X Wins!" : "O Wins!";
      isOver = true;
      break;
    case cell[6].textContent != "" &&
      cell[6].textContent == cell[7].textContent &&
      cell[7].textContent == cell[8].textContent:
      cell[6].style.fontWeight = "bold";
      cell[7].style.fontWeight = "bold";
      cell[8].style.fontWeight = "bold";
      winner = cell[6].textContent == "X" ? "X Wins!" : "O Wins!";
      isOver = true;
      break;
    case cell[0].textContent != "" &&
      cell[0].textContent == cell[3].textContent &&
      cell[3].textContent == cell[6].textContent:
      cell[0].style.fontWeight = "bold";
      cell[3].style.fontWeight = "bold";
      cell[6].style.fontWeight = "bold";
      winner = cell[0].textContent == "X" ? "X Wins!" : "O Wins!";
      isOver = true;
      break;
    case cell[1].textContent != "" &&
      cell[1].textContent == cell[4].textContent &&
      cell[4].textContent == cell[7].textContent:
      cell[1].style.fontWeight = "bold";
      cell[4].style.fontWeight = "bold";
      cell[7].style.fontWeight = "bold";
      winner = cell[1].textContent == "X" ? "X Wins!" : "O Wins!";
      isOver = true;
      break;
    case cell[2].textContent != "" &&
      cell[2].textContent == cell[5].textContent &&
      cell[5].textContent == cell[8].textContent:
      cell[2].style.fontWeight = "bold";
      cell[5].style.fontWeight = "bold";
      cell[8].style.fontWeight = "bold";
      winner = cell[2].textContent == "X" ? "X Wins!" : "O Wins!";
      isOver = true;
      break;
    case cell[0].textContent != "" &&
      cell[0].textContent == cell[4].textContent &&
      cell[4].textContent == cell[8].textContent:
      cell[0].style.fontWeight = "bold";
      cell[4].style.fontWeight = "bold";
      cell[8].style.fontWeight = "bold";
      winner = cell[0].textContent == "X" ? "X Wins!" : "O Wins!";
      isOver = true;
      break;
    case cell[2].textContent != "" &&
      cell[2].textContent == cell[4].textContent &&
      cell[4].textContent == cell[6].textContent:
      cell[2].style.fontWeight = "bold";
      cell[4].style.fontWeight = "bold";
      cell[6].style.fontWeight = "bold";
      winner = cell[2].textContent == "X" ? "X Wins!" : "O Wins!";
      isOver = true;
      break;
    case cell[0].textContent != "" &&
      cell[1].textContent != "" &&
      cell[2].textContent != "" &&
      cell[3].textContent != "" &&
      cell[4].textContent != "" &&
      cell[5].textContent != "" &&
      cell[6].textContent != "" &&
      cell[7].textContent != "" &&
      cell[8].textContent != "":
      winner = "Draw!";
      isOver = true;
      break;
  }
  return isOver;
};

const unclickable = () => cell.forEach((e) => (e.style.pointerEvents = "none"));

cell.forEach((c) => {
  c.addEventListener("click", () => {
    if (c.textContent == "") {
      if (pTurn) {
        c.textContent = "X";
        if (checkWinner()) {
          turn.textContent = winner;
          unclickable();
        } else {
          turn.textContent = "O's turn";
          pTurn = false;
        }
      } else {
        c.textContent = "O";
        if (checkWinner()) {
          turn.textContent = winner;
          unclickable();
        } else {
          turn.textContent = "X's turn";
          pTurn = true;
        }
      }
    }
  });
});

restart.addEventListener("click", () => {
  cell.forEach((e) => {
    e.textContent = "";
    e.style.pointerEvents = "auto";
    e.style.fontWeight = "normal";
  });
  pTurn = true;
  isOver = false;
  winner = "";
  turn.textContent = "X's turn";
});
