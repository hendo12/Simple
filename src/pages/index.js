import React, { useState } from "react"
import Timer from '../components/Timer';
import Counter from '../components/Counter';
import TimerButton from '../components/TimerButton';
import './index.css';

// markup
const IndexPage = () => {
  const [swings, setSwings] = useState(0);
  const [getups, setGetups] = useState(0);
  const [timerActive, setTimerActive] = useState(false);
  const [time, setTime] = useState(0);

  const resetAll = () => {
    setSwings(0);
    setGetups(0);
    setTime(0);
  }

  return (
    <div className="container">
      {/* <h1 className="title">Simple and Sinister Tracker</h1> */}
      <Timer time={time} update={setTime} timerActive={timerActive} />
      <Counter exercise="Swings" iterate={setSwings} count={swings} />
      <Counter exercise="Get Ups" iterate={setGetups} count={getups} />
      <div className="buttonContainer">
        <TimerButton type="start" timerActive={timerActive} trigger={setTimerActive} />
        {timerActive
          ? <TimerButton type="end" timerActive={timerActive} trigger={setTimerActive} reset={resetAll} swings={swings} time={time} getups={getups} />
          : null 
        }
      </div>
    </div>
  )
}

export default IndexPage;