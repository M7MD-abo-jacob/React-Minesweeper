// reveals mines when lose or win
export default function showMines(state) {
  let newState = JSON.parse(JSON.stringify(state));
  newState.board.forEach((row, i) => {
    row.forEach((tile, j) => {
      if (tile.isMine) {
        newState.board[i][j].state = "clicked";
      }
    });
  });
  newState.gameOver = true;
  return newState;
}
