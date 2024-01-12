import { motion, useAnimation } from 'framer-motion';
import React, { useEffect, useRef, useMemo } from 'react';

const withScrollAnimation = (Component) => {
  const AnimatedComponent = React.forwardRef((props, ref) => {
    const controls = useAnimation();
    const innerRef = ref || useRef();

    const variants = useMemo(() => ({
      visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
      hidden: { opacity: 0, y: 100 }
    }), []);

    useEffect(() => {
      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          controls.start('visible');
        }
      }, {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
      });

      if (innerRef.current) {
        observer.observe(innerRef.current);
      }

      return () => {
        if (innerRef.current) {
          observer.unobserve(innerRef.current);
        }
      };
    }, [controls, innerRef]);

    return (
      <Component ref={innerRef} {...props} initial="hidden" animate={controls} variants={variants} />
    );
  });

  // Setting the display name for debugging purposes
  const displayName = Component.displayName || Component.name || 'Component';
  AnimatedComponent.displayName = `WithScrollAnimation(${displayName})`;

  return AnimatedComponent;
};

export default withScrollAnimation;