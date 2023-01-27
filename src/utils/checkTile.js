// this function makes sure we're looking inside the board,
// if the argument coordinates are for a mine, it returns 1
// if it's not a mine, it returns 0
export default function checkTile(state, r, c) {
  const { width, board } = state;
  // if coords are outside board: return 0
  if (r < 0 || r >= width || c < 0 || c >= width) {
    return 0;
  }
  // if tile is mine: return 1
  if (board[r][c].isMine) {
    return 1;
  } else {
    // safety check, i guess!
    return 0;
  }
}
