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

  const fullText = "SHOP SMARTER";

  // =========================
  // INITIAL TYPING
  // =========================

  useEffect(() => {
    let i = 0;

    const timer = setInterval(() => {
      setText(fullText.slice(0, i + 1));
      i++;

      if (i === fullText.length) {
        clearInterval(timer);

        setTimeout(() => {
          setTypingDone(true);
        }, 2000);
      }
    }, 50);

    return () => clearInterval(timer);
  }, []);

  // =========================
  // CHANGE WORD
  // =========================

  useEffect(() => {
    if (!typingDone) return;

    const timer = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length);
    }, 2000);

    return () => clearInterval(timer);
  }, [typingDone, words.length]);

  return (
    <div className="home">
    <h1 className="heading">

      {!typingDone ? (
        <>
          {text}
          <span className="cursor">|</span>
        </>
      ) : (
        <>
          SHOP{" "}

          <span className="word-box">

            <span
              className="word-track"
              style={{
                transform: `translateY(-${wordIndex * 1.2}em)`
              }}
            >

              {words.map((word) => (
                <span
                  className="word"
                  key={word}
                >
                  { word}
                </span>
              ))}

            </span>

          </span>
        </>
      )}

    </h1>
    </div>
  );
}

export default Home;