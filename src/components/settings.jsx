import { useDispatch, useSelector } from "react-redux";
import { setMinesCount, setWidth, gameStart } from "../redux/mainSlice";

const Settings = () => {
  const { minesCount, width } = useSelector((state) => state.main);

  const dispatch = useDispatch();

  return (
    <form className="settings  w-100 bg-gradient-to-b from-sky-900 to-gray-900 text-white px-2 sm:px-10 flex h-[80vh]">
      <label htmlFor="mn">mines count</label>
      <input
        type="range"
        min={5}
        max={10}
        value={minesCount}
        onChange={(e) => dispatch(setMinesCount(e.target.value))}
      />
      <span id="mn-val">{minesCount}</span>
      <br />
      <label htmlFor="tpl">tiles per line</label>
      <input
        type="range"
        min={5}
        max={10}
        value={width}
        onChange={(e) => dispatch(setWidth(e.target.value))}
      />
      <span id="tpl-val">{width}</span>
      <br />
      <button
        type="button"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => dispatch(gameStart())}
      >
        start
      </button>
    </form>
  );
};

export default Settings;
