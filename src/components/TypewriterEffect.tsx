import React, { useState, useEffect } from 'react';

interface TypewriterEffectProps {
  texts: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
}

const TypewriterEffect: React.FC<TypewriterEffectProps> = ({
  texts,
  typingSpeed = 50,
  deletingSpeed = 30,
  pauseDuration = 1500,
}) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      // If paused, wait for pause duration and then start deleting
      if (isPaused) {
        setIsPaused(false);
        setIsDeleting(true);
        return;
      }

      // Deleting text
      if (isDeleting) {
        if (currentText.length === 0) {
          setIsDeleting(false);
          setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        } else {
          setCurrentText(currentText.slice(0, -1));
        }
        return;
      }

      // Typing text
      const fullText = texts[currentTextIndex];
      if (currentText.length === fullText.length) {
        setIsPaused(true);
      } else {
        setCurrentText(fullText.slice(0, currentText.length + 1));
      }
    }, isPaused ? pauseDuration : isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, currentTextIndex, isDeleting, isPaused, pauseDuration, deletingSpeed, typingSpeed, texts]);

  return <span>{currentText}<span className="cursor">|</span></span>;
};

export default TypewriterEffect; 