import React, { useEffect, useState } from "react";
export default function AnimatedText(
  texts = [],
  gradient = "from-primary to-dark-tint",
  className = "text-[64px] font-bold"
) {
  //* words through props not working

  const words = ["Administration", "Audit", "Membership"];
  const [index, setIndex] = useState(0);
  const [animateKey, setAnimateKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
      setAnimateKey((prev) => prev + 1);
    }, 2000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className={`inline-block ${className}`}>
      <h1>
        <span
          key={animateKey}
          className={`inline-block bg-clip-text text-transparent bg-gradient-to-r ${gradient}`}
          style={{
            animation: "slide-up-fade 0.9s ease-in-out",
          }}
        >
          {words[index]}
        </span>
      </h1>
    </div>
  );
}
