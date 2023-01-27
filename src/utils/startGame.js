// makes the layout with the right amount of tiles when you start a new game

export default function startGame(lines) {
  const board = [];
  for (let r = 0; r < lines; r++) {
    let row = [];
    for (let c = 0; c < lines; c++) {
      row.push({ id: `${r}-${c}`, isMine: null, state: "", content: "" });
    }
    board.push(row);
  }
  return board;
}
