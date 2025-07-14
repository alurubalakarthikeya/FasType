import React, { useEffect, useState } from 'react';

export default function Timer({ start, onTimeEnd, duration = 60 }) {
  const [time, setTime] = useState(duration);

  useEffect(() => {
    if (!start) return;

    const interval = setInterval(() => {
      setTime(prev => {
        if (prev <= 1) {
          clearInterval(interval);
          onTimeEnd();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [start, onTimeEnd]);

  return <h2>Time: {time}s</h2>;
}
