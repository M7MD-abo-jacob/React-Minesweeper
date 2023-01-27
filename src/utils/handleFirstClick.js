// handles the first click to spread the mines without losing on the first click
// returns a new state with a new board

import setMines from "./setMines";

export default function handleFirstClick(state, tileId) {
  let newState = JSON.parse(JSON.stringify(state));
  const { width, minesCount } = state;

  newState.minesLocations = setMines(tileId, width, minesCount);
  newState.minesLocations.forEach((loc) => {
    let [r, c] = loc;
    newState.board[r][c].isMine = true;
  });
  newState.clicked = true;
  newState.tilesClicked++;

  return newState;
}
