import React, { useState, useRef } from 'react'

import Card from '../components/Card'

function padTime(time) {
  return time.toString().padStart(2,'0');
}

export default function Start() {
  const [ title, setTitle ] = useState('Time elapsed') 
  const [ isRunning, setIsRunning ] = useState(false)
  const [ time, setTime ] = useState(0)
  const intervalRef = useRef(null)
  
  
  function startStopwatch() {
    if(intervalRef.current !== null) return;
    setIsRunning(true)
    intervalRef.current = setInterval(() => {
      setTime((timeLeft) => {
        return timeLeft + 1;
      });
    }, 1000); 
  }

  // startStopwatch()

  function stopStopwatch() {
    if(intervalRef.current === null) return;
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setIsRunning(false)
  }

  const minutes = padTime(Math.floor(time / 60))
  const seconds = padTime((time - minutes * 60))

  return (
    <Card>
      <div className="timer-body">
        <h2 className="card-heading">{title}</h2>

        <div className="timer">
          <span>{minutes}</span>
          <span>:</span>
          <span>{seconds}</span>
        </div>

        <div className="buttons">
          {!isRunning && (
            <button className="grow" onClick={startStopwatch}>
              <svg
                width="46"
                height="46"
                viewBox="0 0 46 46"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="23" cy="23" r="23" fill="#3B82F6" />
                <path
                  d="M35.6102 23.1779L16.9616 33.9447L16.9616 12.4111L35.6102 23.1779Z"
                  fill="white"
                />
              </svg>
            </button>
          )}
          {isRunning && (
            <button className="grow" onClick={stopStopwatch}>
              <svg
                width="46"
                height="46"
                viewBox="0 0 46 46"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="23" cy="23" r="23" fill="#3B82F6" />
                <line
                  x1="19"
                  y1="14"
                  x2="19"
                  y2="32.2432"
                  stroke="white"
                  stroke-width="6"
                  stroke-linecap="round"
                />
                <line
                  x1="28.9459"
                  y1="14"
                  x2="28.9459"
                  y2="32.2432"
                  stroke="white"
                  stroke-width="6"
                  stroke-linecap="round"
                />
              </svg>
            </button>
          )}
        </div>

        <button className="btn-end grow">End Session</button>
      </div>
      <div className="dyk-container">
        <p className="dyk-title">Did you know?</p>
        <p className="dyk-body">
          Spending time reflecting on your wins and where you can improve can
          make you a better learner?
        </p>
      </div>
    </Card>
  );
}
