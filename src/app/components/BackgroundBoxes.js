'use client' 
import React from "react";
import { Boxes } from "../AceternityUI/BoxesCore";
import { cn } from "../../utils/cn";

export function BackgroundBoxes({children}) {
  return (
    <div className="min-h-[500px] relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center pt-10 pb-40">
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      <Boxes />
      {children}
    </div>
  );
}
