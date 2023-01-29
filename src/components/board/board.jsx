import { useSelector } from "react-redux";
import Row from "./row";

const Board = () => {
  const { board, width } = useSelector((state) => state.main);
  return (
    <div
      id="board"
      className="bg-gradient-to-b from-sky-700 to-sky-900"
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${width}, ${100 / width}%`,
        gridTemplateRows: `repeat(${width}, ${100 / width}%`,
      }}
    >
      {board.map((row, i) => {
        return <Row key={i} row={row} />;
      })}
    </div>
  );
};

export default Board;
