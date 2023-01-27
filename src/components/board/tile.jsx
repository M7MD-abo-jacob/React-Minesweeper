import { useDispatch, useSelector } from "react-redux";
import { FaFontAwesomeFlag } from "react-icons/fa";
import { GiMineExplosion } from "react-icons/gi";
import { clickTile } from "../../redux/mainSlice";

const Tile = ({ tile }) => {
  // const { width, flagToggled } = useSelector((state) => state.main);
  // TODO
  const dispatch = useDispatch();
  const { gameWon, gameOver } = useSelector((state) => state.main);

  const handleClick = () => {
    dispatch(clickTile(tile.id));
  };

  const tileClass = () => {
    let className = `x${tile.content} bg-gradient-to-b grid place-content-center `;
    if (tile.state === "clicked" && !tile.isMine) {
      className += " from-gray-900 to-sky-900 ";
    }
    if (tile.isMine && gameOver) {
      if (gameWon) {
        className += " from-green-800 to-green-900 ";
      } else {
        className += " from-stone-900 to-red-900 ";
      }
    }
    if (tile.state !== "clicked") {
      className += " cursor-pointer from-cyan-600 to-blue-800 ";
    }
    return className;
  };

  const content = () => {
    if (tile.state === "flagged") {
      return <FaFontAwesomeFlag />;
    }
    if (tile.isMine) {
      if (gameWon) {
        return <FaFontAwesomeFlag className="text-green-500" />;
      } else if (gameOver) {
        return <GiMineExplosion className="text-red-600" />;
      }
    }
    if (tile.state === "clicked") {
      return tile.content;
    }
  };

  return (
    <div
      id={tile.id}
      className={tileClass()}
      onClick={() => {
        handleClick();
      }}
    >
      {content()}
    </div>
  );
};

export default Tile;
