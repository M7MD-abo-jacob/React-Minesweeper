import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { BsHourglassSplit } from "react-icons/bs";
import { mainState, playing } from "../redux/mainSlice";

function Timer() {
  const { clicked, gameWon, gameOver } = useSelector(mainState);
  const isActive = useSelector(playing);
  const [time, setTime] = useState(0);

  // useEffect to update the timer every second
  useEffect(() => {
    let interval = null;

    if (isActive) {
      interval = setInterval(() => {
        setTime((time) => time + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    // useEffect cleanup
    return () => clearInterval(interval);
  }, [isActive]);

  // useEffect to reset the timer on new game
  useEffect(() => {
    if (clicked === false) {
      setTime(0);
    }
  }, [clicked]);

  const hours = Math.floor(time / 3600).toLocaleString("en-US", {
    minimumIntegerDigits: 2,
    useGrouping: false,
  });
  const minutes = Math.floor(time / 60).toLocaleString("en-US", {
    minimumIntegerDigits: 2,
    useGrouping: false,
  });
  const seconds = (time - minutes * 60).toLocaleString("en-US", {
    minimumIntegerDigits: 2,
    useGrouping: false,
  });

  return (
    <div id="timer" className="w-min">
      <p
        className={`text-white
        flex items-center gap-2 p-4 rounded-full opacity-90
        
        `}
      >
        <BsHourglassSplit
          className={isActive ? "animate-spin duration-2000" : ""}
        />
        <span
          className={`relative ${
            gameWon
              ? "text-green-500"
              : gameOver
              ? "text-red-400"
              : "text-white"
          }`}
        >
          {isActive && (
            <span className="absolute animate-ping opacity-50">
              {`${hours > 0 ? hours + ":" : ""}${minutes}:${seconds}`}
            </span>
          )}
          {`${hours > 0 ? hours + ":" : ""}${minutes}:${seconds}`}
        </span>
      </p>
    </div>
  );
}

export default Timer;
