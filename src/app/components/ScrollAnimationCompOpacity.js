'use client'
import React from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
export const ScrollAnimationCompOpaicty = ({ content }) => {
  return (
    
      <div className="relative flex flex-col  my-20 justify-evenly space-y-20 items-center lg:space-y-0 lg:flex-row  px-4">
        
          {content.map((item, index) => {
            const ref = React.useRef(null);
            const isInView = useInView(ref, { once: false });
            
            return (
              <div key={item.title + index} className='w-[270px]'  ref={ref}>
              <motion.div
                  initial={{
                    opacity: 0
                  }}
                  animate={{
                    opacity: isInView ? 1 : 0.3
                  }}
                  transition={{ duration: 0.5 }}
                  className="text-2xl font-bold "
                >
                  <div className='flex space-x-5'>
                      <Image src={item.src1} width={100} height={100}></Image>
                      <Image src={item.src2} width={100} height={100}></Image>
                  </div>
                </motion.div>
                <motion.h2
                  initial={{
                    opacity: 0
                  }}
                  animate={{
                    opacity: isInView ? 1 : 0.3
                  }}
                  transition={{ duration: 0.5 }}
                  className="text-2xl mt-5 font-bold "
                >
                  {item.title}
                </motion.h2>
                <motion.p
                  initial={{
                    opacity: 0
                  }}
                  animate={{
                    opacity: isInView ? 1 : 0.3
                  }}
                  transition={{ duration: 0.5 }}
                  className="text-lg 0 max-w-sm mt-2"
                >
                  {item.description}
                </motion.p>
              </div>
            );
          })}
      
        
      </div>
   
  );
};