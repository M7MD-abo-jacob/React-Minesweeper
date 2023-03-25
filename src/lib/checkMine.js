import checkSurroundings from "./checkSurroundings";
import showMines from "./showMines";

export default function checkMine(state, tileR, tileC) {
  let newState = JSON.parse(JSON.stringify(state));
  // this makes sure to stay inside the board
  const insideBox =
    tileR < 0 ||
    tileR >= newState.width ||
    tileC < 0 ||
    tileC >= newState.width;
  if (insideBox) {
    return newState;
  }

  // do nothing if this tile is clicked already
  // debugger;
  if (state.board[tileR][tileC].state === "clicked") {
    return newState;
  }

  // else: click the tile
  // checking how many mines are around this tile
  let minesFound = checkSurroundings(newState, tileR, tileC);
  // adding 1 to clicked tiles to keep track of winning
  newState.tilesClicked += 1;

  if (minesFound > 0) {
    newState.board[tileR][tileC].content = minesFound;
    newState.board[tileR][tileC].state = "clicked";
    // return newState;
  } else {
    // if no mines found around, it keeps opening blank tiles
    newState.board[tileR][tileC].content = "";
    newState.board[tileR][tileC].state = "clicked";
    newState = checkMine(newState, tileR - 1, tileC - 1); //top left
    newState = checkMine(newState, tileR - 1, tileC); //top
    newState = checkMine(newState, tileR - 1, tileC + 1); //top right
    newState = checkMine(newState, tileR, tileC - 1); //left
    newState = checkMine(newState, tileR, tileC + 1); //right
    newState = checkMine(newState, tileR + 1, tileC - 1); //bottom left
    newState = checkMine(newState, tileR + 1, tileC); //bottom
    newState = checkMine(newState, tileR + 1, tileC + 1); //bottom right
  }
  // you win when all tiles but mines are clicked
  if (newState.tilesClicked === state.width * state.width - state.minesCount) {
    newState.gameOver = true;
    newState.gameWon = true;
    newState = showMines(newState);
  }
  return newState;
}
