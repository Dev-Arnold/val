import { useEffect, useState } from "react";

const HEARTS_COUNT = 40;

export default function FallingHearts() {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    const newHearts = Array.from({ length: HEARTS_COUNT }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      duration: 5 + Math.random() * 5,
      delay: Math.random() * 5,
      size: 16 + Math.random() * 16,
    }));

    setHearts(newHearts);
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {hearts.map((heart) => (
        <span
          key={heart.id}
          className="absolute top-[-10%] animate-fall"
          style={{
            left: `${heart.left}%`,
            animationDuration: `${heart.duration}s`,
            animationDelay: `${heart.delay}s`,
            fontSize: `${heart.size}px`,
          }}
        >
          ❤️
        </span>
      ))}
    </div>
  );
}
