import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaRegSmileBeam,
} from "react-icons/fa";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { BsInfoCircleFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { toggleSide } from "../redux/mainSlice";

const Header = () => {
  const dispatch = useDispatch();
  const { sideToggled } = useSelector((state) => state.main);
  return (
    <header className="bg-gradient-to-b from-sky-900 to-cyan-900 text-white p-2">
      <div className="container flex align-items-center place-content-center">
        <div className="brand flex-1">
          <h3 className="flex-1 text-2xl">Minesweeper</h3>
        </div>
        <button
          className="options-icon flex-initial flex justify-center align-items-center place-content-center"
          onClick={() => {
            dispatch(toggleSide(true));
          }}
        >
          <BsInfoCircleFill className="text-3xl" />
        </button>
        <div
          className={`${
            sideToggled ? "block" : "hidden"
          } absolute z-10 top-0 bottom-0 right-0 h-screen w-[90vw] md:w-80 bg-gradient-to-b from-gray-800 to-gray-600 flex flex-col`}
        >
          <button
            className="self-start px-5 py-3"
            onClick={() => {
              dispatch(toggleSide(false));
            }}
          >
            <IoMdCloseCircleOutline className="text-3xl" />
          </button>
          <div className="game-image mx-5 my-7">
            <FaRegSmileBeam className="text-7xl text-yellow-400" />
          </div>
          <div className="socials self-start mx-5">
            <h3 className="text-left self-start">my socials:</h3>
            <ul className="text-left list-none text-sky-200 flex flex-col ml-0">
              <li className="my-2">
                <a
                  href="https://www.facebook.com/m7md.master1"
                  className="flex justify-start"
                >
                  <FaFacebook className="mr-3" />
                  <h3>Facebook</h3>
                </a>
              </li>
              <li className="my-2">
                <a
                  href="https://www.instagram.com/m7md.abo_jacob/"
                  className="flex justify-start"
                >
                  <FaInstagram className="mr-3" />
                  <h3>Instagram</h3>
                </a>
              </li>
              <li className="my-2 shrink mx-0">
                <a
                  href="https://github.com/M7MD-abo-jacob"
                  className="flex justify-start"
                >
                  <FaGithub className="mr-3 ml-0" />
                  <h3>Github</h3>
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
