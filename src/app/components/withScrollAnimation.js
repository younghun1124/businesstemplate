'use client'
import { motion, useAnimation } from 'framer-motion';
import React, { useEffect, useRef, useMemo } from 'react';

const withScrollAnimation = (Component) => {
  const AnimatedComponent = React.forwardRef((props, ref) => {
    const controls = useAnimation();
    const innerRef = useRef(null); // Always create this ref

    const variants = useMemo(() => ({
      visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
      hidden: { opacity: 0, y: 100 }
    }), []);

    useEffect(() => {
      // Determine which ref to use: either the provided ref or the inner ref
      const currentRef = ref ? ref.current : innerRef.current;

      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          controls.start('visible');
        }
      }, {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
      });

      if (currentRef) {
        observer.observe(currentRef);
      }

      return () => {
        if (currentRef) {
          observer.unobserve(currentRef);
        }
      };
    }, [controls, ref, innerRef]);

    // Pass innerRef if ref is not provided
    return (
      <motion.div ref={ref || innerRef} {...props} initial="hidden" animate={controls} variants={variants}>
        <Component {...props} />
      </motion.div>
    );
  });

  // Setting the display name for debugging purposes
  const displayName = Component.displayName || Component.name || 'Component';
  AnimatedComponent.displayName = `WithScrollAnimation(${displayName})`;

  return AnimatedComponent;
};

export default withScrollAnimation;
