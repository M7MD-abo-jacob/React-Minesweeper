import { useDispatch, useSelector } from "react-redux";
import {
  setMinesCount,
  setWidth,
  gameStart,
  mainState,
} from "../redux/mainSlice";

const Settings = () => {
  const { minesCount, width } = useSelector(mainState);

  const dispatch = useDispatch();

  return (
    <section>
      <form className="settings w-100 px-2 sm:px-10 flex flex-col justify-center items-center h-[80vh]">
        {/* mines count */}
        <label htmlFor="mn" className="w-full text-4xl capitalize">
          mines count: <span>{minesCount}</span>
        </label>
        <input
          type="range"
          className="w-full"
          min={5}
          max={10}
          value={minesCount}
          onChange={(e) => dispatch(setMinesCount(e.target.value))}
        />
        <br />
        <br />
        {/* tiles per line / width and height */}
        <label htmlFor="tpl" className="w-full text-4xl capitalize">
          tiles per line: <span>{width}</span>
        </label>
        <input
          type="range"
          className="w-full"
          min={5}
          max={10}
          value={width}
          onChange={(e) => dispatch(setWidth(e.target.value))}
        />
        <br />
        <button
          type="button"
          className="bg-blue-700 hover:bg-blue-800 text-white text-2xl font-bold py-2 px-4 rounded w-3/4 sm:w-1/2"
          onClick={() => dispatch(gameStart())}
        >
          start
        </button>
      </form>
    </section>
  );
};

export default Settings;
