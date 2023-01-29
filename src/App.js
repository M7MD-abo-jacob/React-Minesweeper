import { useSelector } from "react-redux";
import Board from "./components/board/board";
import Controls from "./components/controls";
import Header from "./components/header";
import Settings from "./components/settings";
import "./index.css";

function App() {
  const { gameStarted } = useSelector((state) => state.main);
  return (
    <>
      <Header />
      <main className="relative from-cyan-900 to-blue-900">
        <Controls />
        {gameStarted ? <Board /> : <Settings />}
      </main>
    </>
  );
}
export default App;
