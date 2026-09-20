import { useEffect, useState } from "react";
import "./App.css";

function Home() {
  const words = [
    "SMARTER",
    "FASTER",
    "BETTER",
    "EASIER",
    "SAFER",
    "QUICKER",
    "WISER"
  ];

  const [text, setText] = useState("");
  const [typingDone, setTypingDone] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);

  const fullText = "SHOPSMARTER";
  const prefix = "SHOP"; 



  useEffect(() => {
    let i = 0;
const startDelay = setTimeout(() => {
    const timer = setInterval(() => {
      setText(fullText.slice(0, i + 1));
      i++;

      if (i === fullText.length) {
        clearInterval(timer);

        setTimeout(() => {
          setTypingDone(true);
        }, 1000);
      }
    }, 60);
}, 1000);
    return () =>
      clearTimeout(startDelay);
       clearInterval(timer);
  }, []);
  useEffect(() => {
    if (!typingDone) return;

    const timer = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length);
    }, 2000);

 
    return () =>

      
       clearInterval(timer);
  }, [typingDone, words.length]);

 
  const typedPrefix = text.slice(0, prefix.length);
  const typedRest = text.slice(prefix.length);

  return (
    <div className="home">
      <h1 className="heading">
        {!typingDone ? (
          <span className="main-text">
            {typedPrefix}
            <span className="highlight">{typedRest}</span>
            <span className="cursor">|</span>
          </span>
        ) : (
          <span className="reveal">
            SHOP{" "}
            <span className="word-box">
              <span
                className="word-track"
                style={{
                  transform: `translateY(-${wordIndex * 1.2}em)`
                }}
              >
                {words.map((word) => (
                  <span className="word" key={word}>
                    {word}
                  </span>
                ))}
              </span>
            </span>
          </span>
        )}
      </h1>
    </div>
  );
}

export default Home;