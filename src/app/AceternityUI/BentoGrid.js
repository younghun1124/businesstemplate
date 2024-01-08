import { cn } from "../../utils/cn";

export const BentoGrid = ({ className, children }) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({ className, title, description, header }) => {
  return (
    <div
      className={cn(
        "row-span-1 h-full rounded-xl items-center group/bento hover:shadow-xl transition duration-200 shadow-md p-4  bg-white border border-transparent justify-start flex flex-col space-y-4",
        className
      )}
    >
    <div className="font-sans font-bold text-neutral-600  mb-2 mt-2">
          {title}
        </div>
      {header}
      <div>
        
        
        <div className="font-sans font-normal text-neutral-600 text-xs" >
          {description}
        </div>
      </div>
    </div>
  );
};