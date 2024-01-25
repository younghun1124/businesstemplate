'use client'
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';

const AnimatedItem = ({ item }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3, // Adjust threshold as needed
  });

  return (
    <div ref={ref} className='w-[270px]'>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: inView ? 1 : 0.3 }}
        transition={{ duration: 0.5 }}
        className='grid place-items-center'
      >
        <Image src={item.src1} width={150} height={150} alt="" />
        
      </motion.div>
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: inView ? 1 : 0.3 }}
        transition={{ duration: 0.5 }}
        className="text-2xl text-center mt-5 font-bold"
      >
        {item.title}
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: inView ? 1 : 0.3 }}
        transition={{ duration: 0.5 }}
        className="text-lg text-center max-w-sm mt-2"
      >
        {item.description}
      </motion.p>
    </div>
  );
};

export const ScrollAnimationCompOpaicty = ({ content }) => {
  return (
    <div className="relative flex flex-col my-20 justify-evenly space-y-20 items-center lg:space-y-0 lg:flex-row px-4">
      {content.map((item, index) => (
        <AnimatedItem key={item.title + index} item={item} />
      ))}
    </div>
  );
};
