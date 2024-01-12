import React from 'react';
import ScrollAnimationComponent from './ScrollAnimationCompnent';

const Timeline = ({ events }) => {
  return (
    
      <div className='flex flex-col relative items-center pt-5'>
      
        {/* <div className="absolute left-0 top-0 bottom-0 w-2 bg-blue-500 " /> */}
        <div className='flex flex-col'>
          {events.map((event, index) => (
           <ScrollAnimationComponent key={index}>
              <div key={index} className=" flex items-center mb-10  ">
                <div className="w-3 h-3 bg-blue-500 rounded-full mr-4" />
                <div className='text-sm md:text-lg'>
                  <span className="font-semibold">{event.year}</span>
                  <p className=" text-gray-700">{event.description}</p>
                </div>
              </div>
           </ScrollAnimationComponent>
          ))}
        </div>
      </div>
   
  );
};

export default Timeline;