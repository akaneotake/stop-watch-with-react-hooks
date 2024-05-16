import React, { useState, useEffect } from 'react';
import './App.css';

const StopWatch = () => {
  let [timePassedInMilliSeconds, setTimePassed] = useState(0);
  let timer = null;
  const start = () => {};
  
  const stop = () => {};
  
  const reset = () => {};
  return (
    <div>
      <h2 className="border px-3 py-4 rounded my-3 mx-auto text-center" style={{maxWidth: "300px"}}>
        {Math.floor(timePassedInMilliSeconds / 1000)} s
      </h2>
      <div className="d-flex justify-content-center">
        <button className="btn btn-outline-primary mr-2" onClick={start}>
          start
        </button>
        <button className="btn btn-outline-danger mr-2" onClick={stop}>
          stop
        </button>
        <button className="btn btn-outline-warning" onClick={reset}>
          reset
        </button>
      </div>
    </div>
  )
}

export default StopWatch;
