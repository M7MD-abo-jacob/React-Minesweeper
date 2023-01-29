import {
  FaRegSmileBeam,
  FaFontAwesomeFlag,
  FaRegSadTear,
  FaRegGrinStars,
} from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { newGame, toggleFlag } from "../redux/mainSlice";

const Controls = () => {
  const dipatch = useDispatch();
  const { board, minesCount, flagToggled, gameOver, gameWon } = useSelector(
    (state) => state.main
  );
  const minesLeft = () => {
    let mines = 0;
    board.forEach((row) => {
      row.forEach((col) => {
        if (col.state === "flagged") {
          mines++;
        }
      });
    });
    return minesCount - mines;
  };
  const smilie = () => {
    if (gameWon) {
      return <FaRegGrinStars />;
    } else if (gameOver) {
      return <FaRegSadTear />;
    } else return <FaRegSmileBeam />;
  };
  return (
    <div className="controls mx-0 my-0 pb-1 w-full flex items-center content-center justify-between bg-gradient-to-b from-cyan-900 to-sky-700">
      <div className="w-1/4">
        <button
          disabled
          className="w-full p-2 text-sm font-bold rounded-md bg-zinc-700 text-red-500 border-2 border-red-500 border-dashed "
        >
          mines: <span id="mines-count">{minesLeft()}</span>
        </button>
      </div>
      <div className="new-game w-1/4">
        <button
          id="smilie"
          className="w-full p-2 rounded-md bg-gradient-to-b from-zinc-900 to-gray-800"
          onClick={() => dipatch(newGame())}
        >
          {" "}
          <div id="smile" className="text-3xl text-yellow-400">
            {smilie()}
          </div>
        </button>
      </div>
      <div className="w-1/4">
        <button
          id="flag-button"
          className={`flag-${flagToggled ? "" : ""} w-full p-2 rounded-md`}
          onClick={() => {
            dipatch(toggleFlag());
          }}
        >
          <FaFontAwesomeFlag className="text-red-600" />
        </button>
      </div>
    </div>
  );
};

export default Controls;
