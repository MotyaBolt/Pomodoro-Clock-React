import React, { useState, useEffect } from 'react';
import soundFile from '../../assets/clock_sound.mp3';
import '../../styles/MainTimerBlock.css';

const MainTimerBlock = (props) => {
  const [sessionLength, setSessionLength] = useState(props.sessionLength);
  const [breakLength, setBreakLength] = useState(props.breakLength);
  const [timerIsStarted, setTimerStatus] = useState(false);
  const [globalTime, setGlobalTime] = useState(props.sessionLength * 60);
  const [timerLabel, setTimerLabel] = useState('Session');
  const [menuOption, setMenuOption] = useState(props.menuOption);
  const clockSound = document.getElementById('beep');
  const [firstStart, setFirstStart] = useState(false);

  const restartSession = () => {
    setSessionLength(props.sessionLength);
    setGlobalTime(props.sessionLength * 60);
    setTimerStatus(false);
    setFirstStart(false);
  };

  const restartBreak = () => {
    setBreakLength(props.breakLength);
    setGlobalTime(props.breakLength * 60);
    setTimerStatus(false);
    setFirstStart(false);
  };

  const restartLoop = () => {
    setSessionLength(props.sessionLength);
    setBreakLength(props.breakLength);
    setGlobalTime(props.sessionLength * 60);
    setTimerStatus(false);
    setFirstStart(false);
  };

  const loopSwitch = () => {
    if (timerLabel === 'Session') {
      console.log('hre');
      setGlobalTime(props.breakLength * 60);
      setTimerLabel('Break');
    } else {
      setGlobalTime(props.sessionLength * 60);
      setTimerLabel('Session');
    }
  };

  useEffect(() => {
    if (menuOption !== props.menuOption) {
      setMenuOption(props.menuOption);
      props.menuOption === 'Session' && props.menuOption !== 'Loop'
        ? restartSession()
        : restartBreak();
      if (props.menuOption === 'Loop') {
        restartLoop();
      }
    }

    if (
      props.sessionLength !== sessionLength &&
      props.sessionLength > 0 &&
      props.sessionLength <= 60
    ) {
      if (props.menuOption === 'Break') {
        setSessionLength(props.sessionLength);
      } else {
        restartSession();
      }
    }
    if (
      props.breakLength !== breakLength &&
      props.breakLength > 0 &&
      props.breakLength <= 60
    ) {
      if (props.menuOption === 'Loop' || props.menuOption === 'Session') {
        setBreakLength(props.breakLength);
      } else {
        restartBreak();
      }
    }

    let interval = null;

    if (timerIsStarted && globalTime > 0) {
      interval = setInterval(timerInterval, 1000);
    } else if (timerIsStarted && globalTime === 0) {
      if (props.menuOption === 'Session') {
        clockSound.play();
        restartSession();
      } else if (props.menuOption === 'Break') {
        clockSound.play();
        restartBreak();
      } else {
        clockSound.play();
        interval = setInterval(timerInterval, 1000);
        loopSwitch();
      }
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [
    sessionLength,
    breakLength,
    globalTime,
    timerIsStarted,
    timerLabel,
    menuOption,
    props.menuOption,
    props.sessionLength,
    props.breakLength,
    firstStart,
  ]);

  let [minutes, seconds] = [Math.floor(globalTime / 60), globalTime % 60];

  const startTimer = () => {
    if (firstStart === false) {
      timerInterval();
      setFirstStart(true);
    }
    if (!timerIsStarted) setTimerStatus(true);
  };

  const timerInterval = () => {
    setGlobalTime(globalTime - 1);
  };

  const pauseTimer = () => {
    if (timerIsStarted) setTimerStatus(false);
  };

  const resetTimer = () => {
    console.log(clockSound);
    if (clockSound !== null && !clockSound.paused) {
      clockSound.pause();
      clockSound.currentTime = 0;
    }
    setTimerLabel('Session');
    if (props.menuOption === 'Session') restartSession();
    if (props.menuOption === 'Break') restartBreak();
    if (props.menuOption === 'Loop') restartLoop();
  };

  return (
    <div className="main-timer-block">
      <span className="time">
        {minutes < 10 ? '0' + minutes : minutes}:
        {seconds < 10 ? '0' + seconds : seconds}
      </span>
      <div className="timer-btns">
        <i className="fas fa-play" onClick={startTimer}></i>
        <i className="fas fa-pause" onClick={pauseTimer}></i>
        <i className="fas fa-redo-alt" onClick={resetTimer}></i>
      </div>
      <audio id="beep" src={soundFile} type="audio"></audio>
    </div>
  );
};

export default MainTimerBlock;
