import { useDispatch, useSelector } from "react-redux";
import { setMinesCount, setWidth, gameStart } from "../redux/mainSlice";

const Settings = () => {
  const { minesCount, width } = useSelector((state) => state.main);

  const dispatch = useDispatch();

  return (
    <form className="settings w-100 bg-gradient-to-b from-sky-900 to-gray-900 text-white px-2 sm:px-10 flex flex-col justify-center items-center h-[80vh]">
      <label htmlFor="mn" className="w-full text-2xl capitalize">
        mines count:
      </label>
      <input
        type="range"
        className="w-full"
        min={5}
        max={10}
        value={minesCount}
        onChange={(e) => dispatch(setMinesCount(e.target.value))}
      />
      <span className="w-full text-2xl text-sky-500">{minesCount}</span>
      <br />
      <label htmlFor="tpl" className="w-full text-2xl capitalize">
        tiles per line:
      </label>
      <input
        type="range"
        className="w-full"
        min={5}
        max={10}
        value={width}
        onChange={(e) => dispatch(setWidth(e.target.value))}
      />
      <span className="w-full text-2xl text-sky-500">{width}</span>
      <br />
      <button
        type="button"
        className="bg-blue-500 hover:bg-blue-700 text-white text-2xl font-bold py-2 px-4 rounded w-3/4 sm:w-1/2"
        onClick={() => dispatch(gameStart())}
      >
        start
      </button>
    </form>
  );
};

export default Settings;
