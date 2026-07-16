import React, { useState, useEffect } from 'react';

const Typewriter = ({ strings }) => {
  const [currentStringIndex, setCurrentStringIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let typingSpeed = isDeleting ? 30 : 70;
    
    if (!isDeleting && currentText === strings[currentStringIndex]) {
      // Pause at end of string
      setTimeout(() => setIsDeleting(true), 2000);
      return;
    } else if (isDeleting && currentText === '') {
      // Move to next string after deleting
      setIsDeleting(false);
      setCurrentStringIndex((prev) => (prev + 1) % strings.length);
      return;
    }

    const timer = setTimeout(() => {
      const fullString = strings[currentStringIndex];
      setCurrentText(
        isDeleting 
          ? fullString.substring(0, currentText.length - 1)
          : fullString.substring(0, currentText.length + 1)
      );
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentStringIndex, strings]);

  return (
    <p className="hero__typeline">
      {currentText}<span className="type-cursor">|</span>
    </p>
  );
};

export default Typewriter;
