import { cn } from "@/utils/cn";
export default function MaxLimitContainer({children,className=''}) {
    return (
        <div className={cn("max-w-screen-xl mx-auto p-5 "+className)}>
            {children}
        </div>
    );
}

