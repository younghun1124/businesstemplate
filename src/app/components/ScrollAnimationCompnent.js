'use client'
import { motion, useAnimation } from 'framer-motion';
import { useEffect, useState, useMemo, Children } from 'react';

const ScrollAnimationComponent = ({ children, className = '' }) => {
  // Function to create individual animation controls for each child
  const createAnimationControls = () =>
    Children.map(children, () => useAnimation());
  const [animationControls, setAnimationControls] = useState(
    createAnimationControls()
  );

  // Function to observe each child element
  const observeElement = (element, index) => {
    if (!element) return;

    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        animationControls[index].start('visible');
        observer.unobserve(element); // Stop observing after animation starts
      }
    }, options);

    observer.observe(element);
  };

  // Memoizing the options for IntersectionObserver
  const options = useMemo(() => ({
    root: null,
    rootMargin: '0px',
    threshold: 0
  }), []);

  // Memoizing the animation variants
  const variants = useMemo(() => ({
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    hidden: { opacity: 0, y: 100 }, 
  }), []);

  // Wrapping each child with a motion.div and its respective control
  const animatedChildren = Children.map(children, (child, index) => {
    const controls = animationControls[index];

    return (
      <motion.div
        className={className}
        key={index}
        initial="hidden"
        animate={animationControls[index]}
        variants={variants}
        ref={(element) => observeElement(element, index)}
      >
        {child}
      </motion.div>
    );
  });

  return <>{animatedChildren}</>;
};

export default ScrollAnimationComponent;
