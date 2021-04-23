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

  return (
    <div className="container">
      <h1 className="title">Simple and Sinister Tracker</h1>
      <Timer time={time} update={setTime} timerActive={timerActive} />
      <Counter exercise="Swings" iterate={setSwings} count={swings} />
      <Counter exercise="Get Ups" iterate={setGetups} count={getups} />
      <TimerButton timerActive={timerActive} trigger={setTimerActive} />
    </div>
  )
}

export default IndexPage;