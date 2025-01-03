import React, { useEffect, useRef, useState } from "react";
import Button from './Button.jsx'

const Weather = {
  Rain: 1,
  Mild: 2,
  Sunny: 3,
};

const weatherColorMap = {
  [Weather.Rain]: ["#394e7a", "#8e9ac7"], // ["#394e7a", "#8e9ac7", "#4ee"]
  [Weather.Mild]: ["#22d", "#c8f8ff"], // ["#22d", "#c8f8ff", "#6d3"]
  [Weather.Sunny]: ["#39f", "#f4e54d"], // ["#39f", "#f4e54d", "#fa3"]
};

const weatherLabelMap = {
  [Weather.Rain]: "☔",
  [Weather.Mild]: "☁️",
  [Weather.Sunny]: "☀️",
};

const GradientBackground = () => {
  const wrapperRef = useRef(null);
  const [weather, setWeather] = useState(Weather.Mild);

  useEffect(() => {
    if (!wrapperRef.current) return;

    const [a, b, c] = weatherColorMap[weather];
    wrapperRef.current.style.setProperty("--color-a", a);
    wrapperRef.current.style.setProperty("--color-b", b);
    wrapperRef.current.style.setProperty("--color-c", c);
  }, [weather]);

  return (
    <section id="home">
      <div
        ref={wrapperRef}
        className="relative flex h-screen w-full items-center justify-center bg-gradient-to-br from-[--color-a] via-[--color-b] to-[--color-c] duration-500 ease-in [transition-property:_--color-a,_--color-b,_--color-c] before:absolute before:left-[15%] before:top-[10%] before:h-[28.125%] before:w-[28.125%] before:origin-center before:animate-blob before:rounded-3xl before:bg-gradient-to-br before:from-[--color-a] before:to-[--color-b] before:blur-[37.5px] before:brightness-125 after:absolute after:left-[25%] after:top-[25%] after:h-[45%] after:w-[45%] after:origin-center after:animate-blob-reverse after:rounded-3xl after:bg-gradient-to-br after:from-[--color-a] after:to-[--color-b] after:blur-[37.5px] after:brightness-125"
      >
        <div className="relative z-10 text-center text-white">
          <h1 className="mb-12 text-5xl font-medium">Hi, I am Matthew. <span className="waving-hand">👋</span></h1>
          <h2 className="mb-4 text-2xl font-medium">{weatherLabelMap[weather]}</h2>
          <input
            className="range"
            type="range"
            value={weather}
            max={3}
            min={1}
            step={1}
            onChange={(e) => setWeather(Number(e.target.value))}
          />
        </div>
        <div className="absolute bottom-7 left-1/2 transform -translate-x-1/2 z-10">
          <a href="#about">
            <Button name="Learn more" isBeam />
          </a>
        </div>
      </div>
    </section>
  );
};

export default GradientBackground;
