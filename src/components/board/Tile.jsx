import { useDispatch, useSelector } from "react-redux";
import { FaFontAwesomeFlag } from "react-icons/fa";
import { GiMineExplosion } from "react-icons/gi";
import { clickTile, mainState } from "../../redux/mainSlice";

const Tile = ({ tile }) => {
  const dispatch = useDispatch();
  const { gameWon, gameOver } = useSelector(mainState);

  const handleClick = () => {
    dispatch(clickTile(tile.id));
  };

  const getTileClass = () => {
    let className = `x${tile.content} grid place-content-center text-3xl rounded w-full h-full `;

    if (tile.state === "clicked" && !tile.isMine) {
      // if tile is clicked
      className += " bg-white bg-opacity-30 ";
    } else if (tile.isMine && gameOver) {
      if (gameWon) {
        // if player won: reveal mines with green color
        className += " bg-green-500 bg-opacity-60 ";
      } else {
        // if player lost: reveal all mines with red color
        className += " bg-red-400 bg-opacity-40 ";
      }
    } else if (tile.state === "flagged") {
      // if tile is flagged
      className += " bg-orange-500 bg-opacity-70 ";
    } else if (tile.state !== "clicked") {
      // if tile is not clicked yet
      className += " cursor-pointer bg-white bg-opacity-80 ";
    }
    return className;
  };

  const getContent = () => {
    if (tile.state === "flagged") {
      return <FaFontAwesomeFlag />;
    }
    if (tile.isMine) {
      if (gameWon) {
        return <FaFontAwesomeFlag className="text-green-900" />;
      } else if (gameOver) {
        return <GiMineExplosion className="text-red-600 " />;
      }
    }
    if (tile.state === "clicked") {
      return tile.content;
    }
  };

  return (
    <div
      id={tile.id}
      className={getTileClass()}
      onClick={() => {
        handleClick();
      }}
    >
      {getContent()}
    </div>
  );
};

export default Tile;
