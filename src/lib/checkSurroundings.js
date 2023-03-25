import checkTile from "./checkTile";

// checks surrounding tiles to see if there are mines among them,
// it adds 1 for each mine around the argument tile,
// finally, it returns the final number to be displayed inside the clicked tile
export default function checkSurroundings(state, r, c) {
  let minesFound = 0;
  minesFound += checkTile(state, r - 1, c - 1); //top left
  minesFound += checkTile(state, r - 1, c); //top
  minesFound += checkTile(state, r - 1, c + 1); //top right
  minesFound += checkTile(state, r, c - 1); //left
  minesFound += checkTile(state, r, c + 1); //right
  minesFound += checkTile(state, r + 1, c - 1); //bottom left
  minesFound += checkTile(state, r + 1, c); //bottom
  minesFound += checkTile(state, r + 1, c + 1); //bottom right

  return minesFound;
}
