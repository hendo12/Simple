import React from 'react';
import './Counter.css';

const Counter = ({ exercise, iterate, count }) => {
    return (
        <div className="counter">
            <h1>{exercise}</h1>
            <div className="iterator">
                <button onClick={() => iterate}>-</button>
                <h1>{count}</h1>
                <button>+</button>
            </div>
        </div>
    )
}

export default Counter;