"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface TypingTextProps {
  texts: string[]; // multiple texts
  speed?: number; // typing speed per character (ms)
  delay?: number; // delay before switching to next text (ms)
}

export default function TypingText({
  texts,
  speed = 100,
  delay = 2000,
}: TypingTextProps) {
  const [index, setIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (!isDeleting && displayedText.length < texts[index].length) {
      // typing forward
      timer = setTimeout(() => {
        setDisplayedText(texts[index].slice(0, displayedText.length + 1));
      }, speed);
    } else if (isDeleting && displayedText.length > 0) {
      // deleting backward
      timer = setTimeout(() => {
        setDisplayedText(texts[index].slice(0, displayedText.length - 1));
      }, speed / 2);
    } else if (!isDeleting && displayedText.length === texts[index].length) {
      // wait before deleting
      timer = setTimeout(() => setIsDeleting(true), delay);
    } else if (isDeleting && displayedText.length === 0) {
      // move to next text
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % texts.length);
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, index, texts, speed, delay]);

  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple to-secondary inline-block sm:block md:inline transition-opacity duration-500 transition delay-1500 duration-400 ease-in-out text-center lg:text-left"
    >
      {displayedText}
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 0.8 }}
        className="font-medium text-transparent bg-clip-text bg-gradient-to-b via-purple from-primary to-secondary ease-in-out"
      >
        |
      </motion.span>
    </motion.span>
  );
}
