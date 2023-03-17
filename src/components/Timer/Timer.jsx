import React, { useState } from "react";
import MainTimerBlock from "./MainTimerBlock.jsx";
import "../../styles/Timer.css";

const Timer = (props) => {
  const [sessionLength, setSessionLength] = useState(25);
  const [breakLength, setBreakLength] = useState(5);
  const [sessionInputVal, setSessionInputVal] = useState("25");
  const [breakInputVal, setBreakInputVal] = useState("5");

  const sessionChangeHandler = (e) => {
    setSessionInputVal(e.target.value);
  };

  const breakChangeHandler = (e) => {
    setBreakInputVal(e.target.value);
  };

  const saveTimeData = (e) => {
    if (e.keyCode === 13 || e.keyCode === undefined) {
      if (sessionInputVal !== "" && breakInputVal !== "") {
        setSessionLength(parseFloat(sessionInputVal));
        setBreakLength(parseFloat(breakInputVal));
      }
    }
  };

  return (
    <div className="timer">
      <div className="timer-settings-block-wrapper">
        <div className="timer-settings-block">
          <h3 className="timer-settings-name">Session length:</h3>
          <input
            className="timer-option-length"
            placeholder="25"
            type="text"
            onChange={sessionChangeHandler}
            value={sessionInputVal}
            onKeyUp={saveTimeData}
            onBlur={saveTimeData}
          ></input>
        </div>
        <div className="timer-settings-block">
          <h3 className="timer-settings-name">Break length:</h3>
          <input
            className="timer-option-length"
            placeholder="5"
            type="text"
            onChange={breakChangeHandler}
            value={breakInputVal}
            onKeyUp={saveTimeData}
            onBlur={saveTimeData}
          ></input>
        </div>
      </div>
      <MainTimerBlock
        sessionLength={sessionLength}
        breakLength={breakLength}
        menuOption={props.menuOption}
      />
    </div>
  );
};

export default Timer;
