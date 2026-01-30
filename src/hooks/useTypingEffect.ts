import { useState, useEffect } from 'react';

interface UseTypingEffectProps {
  strings: string[];
  typeSpeed?: number;
  backSpeed?: number;
  loop?: boolean;
}

export const useTypingEffect = ({
  strings,
  typeSpeed = 70,
  backSpeed = 50,
  loop = true,
}: UseTypingEffectProps) => {
  const [displayText, setDisplayText] = useState('');
  const [currentStringIndex, setCurrentStringIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentString = strings[currentStringIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentString.length) {
          setDisplayText(currentString.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          if (loop || currentStringIndex < strings.length - 1) {
            setCurrentStringIndex((prev) => (prev + 1) % strings.length);
          }
        }
      }
    }, isDeleting ? backSpeed : typeSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentStringIndex, strings, typeSpeed, backSpeed, loop]);

  return displayText;
};
