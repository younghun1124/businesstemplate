'use client' 
import React from "react";
import { Boxes } from "../AceternityUI/BoxesCore";
import { cn } from "../../utils/cn";

export function BackgroundBoxes({children, bgColor='bg-slate-900'}) {
  return (
    <div className={"min-h-[500px] relative w-full overflow-hidden  flex flex-col items-center justify-center pt-10 pb-40 "+bgColor}>
      <div className={"absolute inset-0 w-full h-full  z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none "+bgColor }/>

      <Boxes />
      {children}
    </div>
  );
}
