import { useSelector } from "react-redux";
import { mainState } from "../../redux/mainSlice";
import Row from "./Row";

const Board = () => {
  const { board, width } = useSelector(mainState);
  return (
    <section
      className="h-4/5 content-between justify-between"
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${width}, ${100 / width - 0.7}%`,
        gridTemplateRows: `repeat(${width}, ${100 / width - 0.7}%`,
      }}
    >
      {board.map((row, i) => {
        return <Row key={i} row={row} />;
      })}
    </section>
  );
};

export default Board;
