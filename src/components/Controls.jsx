import {
  FaRegSmileBeam,
  FaFontAwesomeFlag,
  FaRegSadTear,
  FaRegGrinStars,
} from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { mainState, newGame, toggleFlag } from "../redux/mainSlice";
import Timer from "./Timer";

const Controls = () => {
  const dipatch = useDispatch();
  const { board, minesCount, flagToggled, gameOver, gameWon } =
    useSelector(mainState);

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
    <section
      id="controls"
      className="mx-0 py-3 w-full flex items-center flex-auto "
    >
      {/* ====================  timer  ==================== */}
      <div className="basis-1/3">
        <Timer />
      </div>

      {/* ====================  new game button  ==================== */}
      <div className="basis-1/3">
        <button
          className=" p-4 rounded-full bg-gray-50 bg-opacity-90 mix-blend-screen hover:animate-wiggle"
          onClick={() => dipatch(newGame())}
        >
          <div id="smilie" className="text-3xl ">
            {smilie()}
          </div>
        </button>
      </div>

      {/* ====================  toggle flag and number of mines  ==================== */}
      <div className="basis-1/3" id="flags">
        <div className="w-min">
          <button
            className="relative bg-gray-50 bg-opacity-90 px-3 py-4 rounded-full flex items-center gap-2 mix-blend-screen"
            onClick={() => {
              dipatch(toggleFlag());
            }}
          >
            {flagToggled ? (
              <div className="absolute bottom-0 right-0 opacity-100">
                <span className="relative flex h-5 w-5 opacity-100">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500"></span>
                  <span className="relative inline-flex rounded-full h-5 w-5 bg-green-500"></span>
                </span>
              </div>
            ) : (
              <div className="absolute bottom-0 right-0 opacity-100">
                <span className="relative flex h-5 w-5 opacity-100">
                  <span className="relative inline-flex rounded-full h-5 w-5 bg-gray-400 opacity-100"></span>
                </span>
              </div>
            )}
            <FaFontAwesomeFlag
              className={`${
                flagToggled
                  ? "animate-ping inline-flex bg-green-500 opacity-100"
                  : ""
              } absolute `}
            />
            <FaFontAwesomeFlag className="relative inline-flex text-xl stroke-[20px] opacity-100" />
            <p className="font-black">{minesLeft()}</p>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Controls;
