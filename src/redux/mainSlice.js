import { createSlice, current } from "@reduxjs/toolkit";
import handleFirstClick from "../utils/handleFirstClick";
import handleTileClick from "../utils/handleTileClick";
import startGame from "../utils/startGame";

const initialState = {
  board: [],
  minesCount: 5,
  width: 5, // width and height of the grid
  minesLocations: [],
  clicked: false, // to call handleFirstClick() or handleTileClick()
  flagToggled: false, // to flag or not to flag
  gameOver: false, // to stop clicks, show mines in red and change smilie
  gameStarted: false, // to render settings or board
  gameWon: false, // to show mines green and change smilie
  sideToggled: false,
};
export const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    setMinesCount: (state, action) => {
      return { ...state, minesCount: Number(action.payload) };
    },
    setWidth: (state, action) => {
      return { ...state, width: Number(action.payload) };
    },
    toggleFlag: (state) => {
      return { ...state, flagToggled: !state.flagToggled };
    },
    // when you start the first game
    gameStart: (state) => {
      const newBoard = startGame(state.width);
      return { ...state, gameStarted: true, board: newBoard };
    },
    // when you loose/win and start a new game with same settings
    newGame: (state) => {
      const newBoard = startGame(state.width);
      return {
        ...initialState,
        gameStarted: true,
        minesCount: state.minesCount,
        width: state.width,
        board: newBoard,
      };
    },
    clickTile: (state, action) => {
      let newState = current(state);
      if (!state.clicked) {
        newState = handleFirstClick(current(state), action.payload);
      }
      console.log(current(state));
      console.log(newState);
      newState = handleTileClick(newState, action.payload);
      return { ...newState };
    },
    toggleSide: (state, action) => {
      return { ...state, sideToggled: action.payload };
    },
  },
});

export const {
  setMinesCount,
  setWidth,
  toggleFlag,
  gameStart,
  newGame,
  clickTile,
  toggleSide,
} = mainSlice.actions;

export default mainSlice.reducer;
