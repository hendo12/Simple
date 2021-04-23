import React from 'react';
import './TimerButton.css';

const TimerButton = ({ timerActive, trigger }) => {
    let buttonClass;
    let buttonText;

    if(timerActive) {
        buttonClass = "stop";
        buttonText = "STOP";
    } else {
        buttonClass = "start";
        buttonText = "START";
    }

    return (
        <div className="timerbutton">
            <button 
                onClick={() => trigger(!timerActive)}
                className={buttonClass}
            >{buttonText}</button>
        </div>
    );
};

export default TimerButton;