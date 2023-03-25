// takes the number of mines wanted, board width, and the id of clicked tile
// places the mines randomly accross the board except for the tile that was clicked...
// because you don't wanna lose on your first click, do you?

export default function setMines(tileId, width, minesCount) {
  const tileR = tileId.split("-")[0];
  const tileC = tileId.split("-")[1];
  let thisId = `${tileR}${tileC}`;
  const minesLocations = [];
  const testMinesLocs = [];
  let minesLeft = minesCount;
  // keeps looping until the number is satisfied
  while (minesLeft > 0) {
    let r = Math.floor(Math.random() * width).toString();
    let c = Math.floor(Math.random() * width).toString();
    let id = [r, c];

    let testId = `${r}${c}`;

    if (!testMinesLocs.includes(`${r}${c}`) && testId !== thisId) {
      minesLocations.push(id);
      testMinesLocs.push(`${r}${c}`);
      minesLeft--;
    }
  }
  return minesLocations;
}
