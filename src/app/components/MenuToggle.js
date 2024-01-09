import * as React from 'react';
import { motion } from 'framer-motion';

const Path = props => (
  <motion.path
    fill="transparent"
    strokeWidth="2"
    stroke="hsl(0, 0%, 18%)"
    strokeLinecap=""
    {...props}
  />
);

export const MenuToggle = ({ toggle, isOpen }) => (
  <button className='md:hidden' onClick={toggle}>
    <svg width="23" height="23" viewBox="0 0 23 19">
      <Path
      d="M 2 2.5 L 20 2.5"
        variants={{
          closed: { d:"M 2 2.5 L 20 2.5" },
          open: { d:"M 3 16.5 L 17 2.5" }
        }}
        animate={isOpen !== undefined ? (isOpen ? "open" : "closed") : "closed"}
      />
      <Path
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 }
        }}
        transition={{ duration: 0.1 }}
        animate={isOpen !== undefined ? (isOpen ? "open" : "closed") : "closed"}
      />
      <Path
      d="M 2 16.346 L 20 16.346" 
        variants={{
          closed: { d: "M 2 16.346 L 20 16.346" },
          open: { d: "M 3 2.5 L 17 16.346" }
        }}
        animate={isOpen !== undefined ? (isOpen ? "open" : "closed") : "closed"}
      />
    </svg>
  </button>
);
