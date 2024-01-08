"use client";


import React from "react";
import { cn } from "../../utils/cn";
import { CardBody, CardContainer, CardItem } from "../AceternityUI/3DCard"

export function ThreeDCard({title,desc1, desc2, header }) {
  return (
    <CardContainer className="inter-var">
      <CardBody className={cn(
        "row-span-1 bg-stone-50 relative rounded-xl items-center group/bento hover:shadow-xl transition duration-200 shadow p-4 border border-transparent justify-start flex flex-col space-y-4"
        
      )}>
        <CardItem
          translateZ="60"
          className=" text-xl font-bold text-neutral-800 "
        >
          {title}
        </CardItem>
        <CardItem          
          translateZ="90"
          className="text-neutral-500 text-sm max-w-sm mt-2"
        >
          {header}
        </CardItem>
        <CardItem translateZ="60" className="w-full text-sm text-neutral-500 mt-4 grid place-items-center">
        
          <span>{desc1}<br/>{desc2}</span>
        
        </CardItem>
        {/* <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            Try now →
          </CardItem>         
        </div> */}
      </CardBody>
    </CardContainer>
  );
}
