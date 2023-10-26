import React, { useState, useEffect } from "react";

function App() {
  const [timer, setTimer] = useState(null);

  const [seconds, setSeconds] = useState(0);

  const startTimer = () => {
    const newTimer = setInterval(() => {
      setSeconds((seconds) => seconds + 1);
    }, 1000);

    setTimer(newTimer);
  };

  const clearTimer = () => {
    setTimer((timer) => {
      clearInterval(timer);
      return null;
    });
  };

  useEffect(() => {
    startTimer();
    return clearTimer;
  }, []);

  const reset = () => {
    setSeconds(0);
    clearTimer();
    startTimer();
  };

  const minutes = Math.floor(seconds / 60);

  return (
    <div className="App">
      <p>
        {minutes >= 1 ? (
          <>
            {minutes} minutes and {seconds - minutes * 60} seconds
          </>
        ) : (
          <>{seconds} seconds</>
        )}
      </p>
      <button type="button" onClick={timer ? clearTimer : startTimer}>
        {timer ? "Pause" : "Continue"}
      </button>
      <button onClick={reset}> Reset</button>
    </div>
  );
}

export default App;