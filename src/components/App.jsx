import React, { useState, useEffect } from "react";
import Timer from "./Timer/Timer";
import Message from "./Message/Message";
import "./App.css"; // Стили для чорного фону

const App = () => {
  const [timeLeft, setTimeLeft] = useState({});
  const [isWeekend, setIsWeekend] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const weekend = getNextWeekend(); // Знаходимо наступні вихідні
      const diff = weekend - now;

      if (diff <= 0) {
        setIsWeekend(true);
        clearInterval(interval); // Зупиняємо таймер
      } else {
        const time = calculateTimeLeft(diff);
        setTimeLeft(time); // Оновлюємо час
      }
    }, 1000);

    return () => clearInterval(interval); // Прибираємо інтервал при розмонтуванні
  }, []);

  const getNextWeekend = () => {
    const now = new Date();
    const dayOfWeek = now.getDay();
    const daysToSaturday = 6 - dayOfWeek; // Субота - 6-й день тижня
    return new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate() + daysToSaturday,
      0,
      0,
      0
    );
  };

  const calculateTimeLeft = (diff) => {
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  };

  return (
    <div className="app">
      {isWeekend ? <Message /> : <Timer timeLeft={timeLeft} />}
    </div>
  );
};

export default App;
