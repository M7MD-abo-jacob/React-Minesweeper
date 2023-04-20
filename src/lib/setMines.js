// takes the number of mines wanted, board width, and the id of clicked tile
// places the mines randomly accross the board except for the tile that was clicked...
// because you don't wanna lose on your first click, do you?

export default function setMines(tileId, width, minesCount) {
  // id of the tile that the user clicked
  const clickedId = [tileId.split("-")[0], tileId.split("-")[1]];

  // to keep track of mines and return them at the end
  const minesLocations = [];

  // to keep track of number of mines
  let minesLeft = minesCount;
  // keeps looping until the number is satisfied
  while (minesLeft > 0) {
    // create random tile for a mine to check
    const r = Math.floor(Math.random() * width).toString();
    const c = Math.floor(Math.random() * width).toString();
    const testId = [r, c];

    // check if this mine already exists
    // also check if this is the first tile the player clicked
    // no one wants to lose on first click ;)
    // other than that, set the mine location
    if (
      !JSON.stringify(JSON.parse(JSON.stringify(minesLocations))).includes(
        JSON.stringify(testId)
      ) &&
      JSON.stringify(testId) !== JSON.stringify(clickedId)
    ) {
      minesLocations.push(testId);
      minesLeft--;
    }
  }
  return minesLocations;
}
