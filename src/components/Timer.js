import React from 'react';
import './Timer.css';

const Timer = ({ time, update, timerActive }) => {
    //check time (ms) and convert to 0:00
    //1 sec is 1000ms
    //1 min is 60000ms
    //1 hour is 3,600,000ms
    let hours = Math.floor(time/3600000);
    let minutes = Math.floor((time%3600000)/60000);
    let seconds = ((time%3600000)%60000)/1000;
    const timeUpdate = 1000;

    // hours < 10 ? hours = '0' + hours : null;
    if(hours < 1) {
        hours = '00';
    } else if (hours < 10) {
        hours = '0' + hours;
    }

    console.log('$hours: ', hours);
    
    if(minutes < 1) {
        minutes = '00';
    } else if (minutes < 10) {
        minutes = '0' + minutes;
    }

    console.log('$minutes: ', minutes);

    if(seconds < 1) {
        seconds = '00';
    } else if (seconds < 10) {
        seconds = '0' + seconds;
    }

    console.log('$seconds: ', seconds);

    let formattedTime;

    if(hours === '00') {
        formattedTime = `${minutes}:${seconds}`;
    } else {
        formattedTime = `${hours}:${minutes}:${seconds}`;
    }


    const updateTime = () => {
        setTimeout(function() {
            update(time + timeUpdate);
        }, 1000);
    }

    if(timerActive) {
        updateTime();
    } else {
        clearTimeout(updateTime);
    }

    return (
        <div className="timer">
            <h1>{formattedTime}</h1>
        </div>
    )
}

export default Timer;