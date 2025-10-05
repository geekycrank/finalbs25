import React, { useState, useEffect } from "react";
import "./CountdownTimer.css";

function CountdownTimer({ targetDate }) {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  function calculateTimeLeft(targetDate) {
    const now = new Date();
    const difference = new Date(targetDate) - now;
    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(2, "0"),
        hours: String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(2, "0"),
        minutes: String(Math.floor((difference / 1000 / 60) % 60)).padStart(2, "0"),
        seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, "0"),
      };
    }
    return timeLeft;
  }

  return (
    <div className="countdown-timer">
      <div className="time-section">
        <div className="time-box">{timeLeft.days || "00"}</div>
        <div className="label">Days</div>
      </div>

      <div className="time-section">
        <div className="time-box">{timeLeft.hours || "00"}</div>
        <div className="label">Hrs</div>
      </div>

      <div className="time-section">
        <div className="time-box">{timeLeft.minutes || "00"}</div>
        <div className="label">Mins</div>
      </div>

      <div className="time-section">
        <div className="time-box">{timeLeft.seconds || "00"}</div>
        <div className="label">Secs</div>
      </div>
    </div>
  );
}

export default CountdownTimer;
