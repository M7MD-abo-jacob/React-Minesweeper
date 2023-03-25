// this function makes sure we're looking inside the board,
// if the argument coordinates are for a mine, it returns 1
// if it's not a mine, it returns 0
export default function checkTile(state, tileR, tileC) {
  const { width, board } = state;
  // if coords are outside board: return 0
  if (tileR < 0 || tileR >= width || tileC < 0 || tileC >= width) {
    return 0;
  }
  // if tile is mine: return 1
  if (board[tileR][tileC].isMine) {
    return 1;
  } else {
    // safety check, i guess!
    return 0;
  }
}
