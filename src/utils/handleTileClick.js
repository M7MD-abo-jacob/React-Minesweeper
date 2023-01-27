// fired when you click a tile
// checks some conditions and calls the suitable function

import checkMine from "./checkMine";
import showMines from "./showMines";

export default function handleTileClick(state, tileId) {
  const tileR = Number(tileId.split("-")[0]);
  const tileC = Number(tileId.split("-")[1]);
  let newState = JSON.parse(JSON.stringify(state));
  // stays inside the board
  if (
    tileR < 0 ||
    tileR >= newState.width ||
    tileC < 0 ||
    tileC >= newState.width
  ) {
    return state;
  }
  let { gameOver, flagToggled } = newState;

  // if the game is over or tile is flagged: do nothing;
  if (
    gameOver ||
    (newState.board[tileR][tileC].state === "flagged" && !flagToggled) ||
    newState.board[tileR][tileC].state === "clicked"
  ) {
    return state;
  }

  // if the flagged is toggled: flag or unflag a tile
  if (flagToggled) {
    // if there are more mines && the tile is not flagged && not clicked: we flag it
    if (newState.minesCount > 0 && newState.board[tileR][tileC].state === "") {
      newState.board[tileR][tileC].state = "flagged";
      return newState;
    } else {
      // if the tile is flagged: we unflag it
      if (newState.board[tileR][tileC].state === "flagged") {
        newState.board[tileR][tileC].state = "";
      }
      return newState;
    }
  } else {
    // else if flag is not toggled: we open the tile
    // if the tile has a mine: GAME OVER
    if (newState.board[tileR][tileC].isMine) {
      newState = showMines(newState);
      return newState;
    }

    // finally we open the tile in the regular case
    newState = checkMine(newState, tileR, tileC);
    return newState;
  }
}
