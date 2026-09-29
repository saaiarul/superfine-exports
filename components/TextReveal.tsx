"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

interface TextRevealProps {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  delay?: number;
}

export const TextReveal: React.FC<TextRevealProps> = ({
  text,
  className = "",
  as: Component = "h2",
  delay = 0,
}) => {
  const words = text.split(" ");

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: delay,
      },
    },
  };

  const wordVariants: Variants = {
    hidden: { opacity: 0, y: 20, rotateX: -20 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      className="inline-block overflow-hidden"
    >
      <Component className={className}>
        {words.map((word, i) => (
          <motion.span
            key={`${word}-${i}`}
            variants={wordVariants}
            className="inline-block mr-[0.25em] last:mr-0 transform-gpu"
          >
            {word}
          </motion.span>
        ))}
      </Component>
    </motion.div>
  );
};
