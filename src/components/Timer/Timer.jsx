import React from "react";
import PropTypes from "prop-types";

const Timer = ({ timeLeft }) => {
  const { days, hours, minutes, seconds } = timeLeft;

  return (
    <div className="timer">
      <h1>Time left to weekends</h1>
      <div className="time">
        <span>{days || 0}</span> : <span>{hours || 0}</span> :{" "}
        <span>{minutes || 0}</span> : <span>{seconds || 0}</span>
      </div>
      <div className="labels">
        <span>Days</span>
        <span>Hours</span>
        <span>Minutes</span>
        <span>Seconds</span>
      </div>
    </div>
  );
};

Timer.propTypes = {
  timeLeft: PropTypes.object.isRequired,
};

export default Timer;
