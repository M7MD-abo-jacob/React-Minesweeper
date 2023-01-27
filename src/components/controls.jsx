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
    <div className="controls">
      <div>
        <button disabled>
          mines: <span id="mines-count">{minesLeft()}</span>
        </button>
      </div>
      <div className="new-game">
        <button id="smilie" onClick={() => dipatch(newGame())}>
          {" "}
          <div id="smile" className="text-3xl">
            {smilie()}
          </div>
        </button>
      </div>
      <div>
        <button
          id="flag-button"
          className={`flag-${flagToggled ? "toggled" : ""}`}
          onClick={() => {
            dipatch(toggleFlag());
          }}
        >
          <FaFontAwesomeFlag />
        </button>
      </div>
    </div>
  );
};

export default Controls;
