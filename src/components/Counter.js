import React from 'react';
import './Counter.css';

const Counter = ({ exercise, iterate, count }) => {
    return (
        <div className="counter">
            <h1>{exercise}</h1>
            <div className="iterator">
                <button onClick={() => count > 0 ? iterate(count - 1) : null}>-</button>
                <h1 className="count">{count}</h1>
                <button onClick={() => count < 10 ? iterate(count + 1) : null}>+</button>
            </div>
        </div>
    )
}

export default Counter;

// if(count > 0 ) {
//     iterate(count - 1);
// }

// if(count < 10) {
//     iterate(count + 1);
// }


