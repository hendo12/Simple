import React, { useState } from "react"
import Timer from '../components/Timer';
import Counter from '../components/Counter';
import './index.css';


// markup
const IndexPage = () => {
  const [swings, setSwings] = useState(0);
  const [getups, setGetups] = useState(0);

  return (
    <div className="container">
      <h1>Simple and Sinister Tracker</h1>
      <Timer />
      <Counter exercise="Swings" iterate={setSwings} count={swings} />
      <Counter exercise="Get Ups" iterate={setGetups} count={getups} />
      <button>Start</button>
    </div>
  )
}

export default IndexPage;
