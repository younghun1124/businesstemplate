'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ScrollAnimationComponent = ({ children }) => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Ensures animation happens only once
    threshold: 0.2, // Adjust threshold as needed
  });

  return (
    <motion.div
      ref={ref}
      initial={{ y: 100, opacity: 0 }}
      animate={inView ? { y: 0, opacity: 1, transition: { duration: 0.5 } } : {}}
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimationComponent;