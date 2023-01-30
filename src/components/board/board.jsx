import { useSelector } from "react-redux";
import Row from "./row";

const Board = () => {
  const { board, width } = useSelector((state) => state.main);
  return (
    <div
      id="board"
      className="h-[80vh] bg-black border-black border-4"
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
