import React, { useState, useRef, useEffect } from "react";
import FallingHearts from "./FallingHearts";

const NO_BUTTON_TEXTS = [
  "No 🙄",
  "Wait lemme tell you smt☹️",
  // "Waaaaaait lemme tell you smt😢",
  // "Waaaaaaaaaaaaait lemme tell you smttttttttt😭",
  "I can cook real good Jollof Rice 🙃",
  "I'll add ponmo🥺",
  "And panla",
  "Miss Okoronkwo-Oraike Nji eka!🫢",
  "Looking for the 'd' ehh?😏",
  "Plot twist: that button is broken 🔧",
  "Seriously? Again? 😩",
  "Instructions unclear, click 'Yes' 🔄",
  "You're breaking my heart here 💔😢",
  "I'll remember this betrayal 😤",
  "You're really testing my patience here 😑",
  "My therapist will hear about this 😔",
  "Bold of you to assume I'll give up 😤",
  "What if I asked nicely?☺️",
  "Error 404: Good decision not found 🚫",
  "Why are you like this???🙄",
  "Omo see wahala 😫",
  "Last last, everybody go chop breakfast!!!!!",
  "Siri, play me something for this heartbreak",
  "I wish I could afford a rollie",
  "Drive around and fck the police",
  "But my mom depending on me",
  "Turn up the volume for me",
  "You seeeee, you're singing it too",
  "The universe is telling you to click 'Yes' ✨",
  "The 'Yes' button is looking really lonely 👉",
  "I'm running out of things to say 😅",
  "Last chance... maybe 👀",
  "Fine. Con dey go😑",
  "You dey go na🤧",
];

function Row2() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [yes, setYes] = useState(false);
  const [yesButtonSize, setYesButtonSize] = useState(1);
  const [textIndex, setTextIndex] = useState(0);
  const audioRef = useRef(new Audio("/valentine.m4a"));
  const bgMusicRef = useRef(new Audio("/forever.m4a"));
  const [musicStarted, setMusicStarted] = useState(false);

  useEffect(() => {
    bgMusicRef.current.loop = true;
    const handleKeyPress = () => {
      if (!musicStarted) {
        bgMusicRef.current.play();
        setMusicStarted(true);
      }
    };
    document.addEventListener("keydown", handleKeyPress);
    return () => document.removeEventListener("keydown", handleKeyPress);
  }, [musicStarted]);

  const moveButton = () => {
    bgMusicRef.current.pause();
    audioRef.current.play().catch(() => {});
    const x = Math.random() * 300 - 150;
    const y = Math.random() * 200 - 300;
    setPos({ x, y });
    setYesButtonSize((prev) => prev + 0.3);
    if (textIndex < NO_BUTTON_TEXTS.length - 1) {
      setTextIndex((prev) => prev + 1);
    }
  };

  const forYes = () => {
    audioRef.current.pause();
    audioRef.current.currentTime = 0;
    bgMusicRef.current.play();
    setYes(true);
    setYesButtonSize(1);
    setPos({ x: 0, y: 0 });
    setTextIndex(0)
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      <FallingHearts />
      <section className="min-h-screen flex flex-col items-center justify-center font-serif bg-[#FCFCF9] text-center gap-6">
        <img
          src={yes ? "kiss.gif" : "bear.gif"}
          alt={yes ? "kiss" : "bear"}
          className={`${yes ? " w-[400px]" : "w-[200px]"}`}
        />
        <h2 className="text-4xl  text-gray-800">
          Will you be my Valentine? 💘
        </h2>

        <div className="flex gap-6">
          <button
            style={{ scale: yesButtonSize }}
            onClick={forYes}
            className="px-8 py-3 rounded-full bg-pink-500 text-white text-lg hover:scale-105 transition"
          > 
            Yes 💖
          </button>

          <button
            onMouseEnter={moveButton}
            onClick={moveButton}
            style={{ transform: `translate(${pos.x}px, ${pos.y}px)` }}
            className="px-6 py-2 font-bold bg-gray-200 rounded-full border-2 border-gray-400 text-gray-600 hover:-translate-y-1 transition"
          >
            {NO_BUTTON_TEXTS[textIndex]}
          </button>
        </div>
      </section>
    </div>
  );
}

export default Row2;
