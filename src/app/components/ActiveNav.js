"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/utils/cn";

export const ActiveNavLink = ({name, className, activeClass, url}) => {
    const pathname = usePathname()
    const isActive = pathname === url ? true : false
    

    return(
        
     
            <Link className="grow" href={url} >  
            
             <div className={cn('bg-sky-900 text-center',className, isActive&&activeClass)}>{name} </div>
             </Link>
       
    )
}

export const ActiveNavLinks = ({ navmap, className ,activeClass}) => {
    return (
        <>
            {navmap.map((item, index) => (
                <ActiveNavLink 
                    key={index}
                    {...item} // 스프레드 연산자를 사용하여 모든 프로퍼티를 전달합니다.
                    activeClass={activeClass}
                    className={className}
                />
            ))}
        </>
    );
};


