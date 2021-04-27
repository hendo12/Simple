import React from 'react';
import './TimerButton.css';
import { FaPlay, FaStop, FaPause } from 'react-icons/fa';

const TimerButton = ({ type, timerActive, trigger, reset, time, swings, getups }) => {
    // let buttonClass;
    let buttonText;

    const onStopClick = () => {
        trigger(!timerActive);

        const workOut = {
            date: new Date(),
            swings: {swings}, 
            getups: {getups}, 
            time: {time}
        }

        //check if local storage already has workouts saved
        // if yes, then grab those to add on new workout at the end
        // if no, then create new section in local storage

        // const stringifyWorkout = JSON.stringify(workOut);
        const hasPreviousWorkouts = window.localStorage.getItem('workouts') !== null;
        
        if(hasPreviousWorkouts) {
            let pastWorkouts = JSON.parse(window.localStorage.getItem('workouts'));
            pastWorkouts.push(workOut);
            const stringifiedWorkouts = JSON.stringify(pastWorkouts);
            window.localStorage.removeItem('workouts');
            window.localStorage.setItem('workouts', stringifiedWorkouts);
        } else {
            let workouts = [workOut];
            const stringifyWorkout = JSON.stringify(workouts);
            window.localStorage.setItem('workouts', stringifyWorkout);
        }

        setTimeout(() => {
            reset();
        }, 1000);
    }

    if(type === 'start') {
        if(timerActive) {
            // buttonClass = "pause";
            // buttonText = <FaPause className="pause" />;
            buttonText = 'PAUSE'
        } else {
            // buttonClass = "start";
            // buttonText = <FaPlay className="start" />;
            buttonText = 'START'
        }
        
        return (
            <div className="timerButton">
                <button 
                    onClick={() => trigger(!timerActive)}
                    // className={buttonClass}
                >{buttonText}</button>
            </div>
        );
    } else if (type === 'end') {
        return (
            <div className="stopButton">
                <button 
                    onClick={onStopClick}
                    // className="stop"
                >
                    {/* <FaStop className="stop" /> */}
                    STOP
                    </button>
            </div>
        );
    }

};

export default TimerButton;