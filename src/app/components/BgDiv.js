import { cn } from "@/utils/cn"
export default function BgDiv({className,children=''}) {
    return (
        <div className={cn(`w-full ${className}`)}>{children}</div>
    );
}

