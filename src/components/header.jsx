import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaRegSmileBeam,
} from "react-icons/fa";
import { BsInfoCircleFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { toggleSide } from "../redux/mainSlice";

const Header = () => {
  const dispatch = useDispatch();
  const { sideToggled } = useSelector((state) => state.main);
  return (
    <header className="bg-black text-white p-2">
      <div className="container flex align-items-center place-content-center">
        <div className="brand flex-auto">
          <h3 className="flex-1 text-2xl">Minesweeper</h3>
        </div>
        <button
          onClick={() => {
            dispatch(toggleSide(true));
          }}
          className="options-icon flex-0 flex justify-center align-items-center place-content-center"
        >
          <BsInfoCircleFill className="text-lg" />
        </button>
        <div
          className={`side-panel ${
            sideToggled ? "block" : "hidden"
          } absolute top-0 bottom-0 right-0`}
        >
          <button
            onClick={() => {
              dispatch(toggleSide(false));
            }}
          >
            X
          </button>
          <div className="game-image">
            <FaRegSmileBeam className="text-4xl text-yellow-400" />
          </div>
          <div className="socials">
            <h3>my socials:</h3>
            <ul className="text-center">
              <li>
                <a
                  href="https://www.facebook.com/m7md.master1"
                  className="flex"
                >
                  <FaFacebook /> Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/m7md.abo_jacob/"
                  className="flex"
                >
                  <FaInstagram /> Instagram
                </a>
              </li>
              <li>
                <a href="https://github.com/M7MD-abo-jacob" className="flex">
                  <FaGithub /> Github
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
