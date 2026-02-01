import { useEffect, useState } from "react";

interface TypewriterTextProps {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBetweenWords?: number;
}

export const TypewriterText = ({
  words,
  typingSpeed = 100,
  deletingSpeed = 60,
  delayBetweenWords = 1200,
}: TypewriterTextProps) => {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting) {
      // typing
      timeout = setTimeout(() => {
        setText(currentWord.slice(0, text.length + 1));
        if (text === currentWord) {
          setTimeout(() => setIsDeleting(true), delayBetweenWords);
        }
      }, typingSpeed);
    } else {
      // deleting
      timeout = setTimeout(() => {
        setText(currentWord.slice(0, text.length - 1));
        if (text === "") {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }, deletingSpeed);
    }

    return () => clearTimeout(timeout);
  }, [
    text,
    isDeleting,
    wordIndex,
    words,
    typingSpeed,
    deletingSpeed,
    delayBetweenWords,
  ]);

  return (
    <span className="relative inline-block">
      {text}
      <span className="ml-1 animate-pulse">|</span>
    </span>
  );
};
