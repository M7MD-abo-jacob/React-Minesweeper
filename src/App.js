import { useSelector } from "react-redux";
import Board from "./components/board/Board";
import Controls from "./components/Controls";
import Settings from "./components/Settings";
import "./index.css";
import { mainState } from "./redux/mainSlice";

function App() {
  const { gameStarted } = useSelector(mainState);

  return (
    <>
      <Controls />
      {gameStarted ? <Board /> : <Settings />}
    </>
  );
}
export default App;
