'use client'
import Link from 'next/link'

import { useCycle } from 'framer-motion';
import Image from 'next/image';
import { MenuToggle } from './MenuToggle';
import { cn } from '@/utils/cn';

export default function Navbar() {
  const [isOpen, toggleOpen] = useCycle(false, true);
  function HoverLink({children, href, className}){
    return <Link onClick={() => toggleOpen()} className={cn('hover:text-blue-400',className)} href={href}>{children}</Link>
    }
    return (
      <>
      
       <div className='z-40 bg-white w-full fixed'>
      <div className="  max-w-screen-xl mx-auto">
      <nav className='flex justify-between h-[70px] text-lg text-black p-5'>
    <Link className='' href="/"><Image src={'/ALTLOGO.png'} width={90} height={0} alt='alt로고'></Image></Link>
    <div className='h-[23px] my-auto'><MenuToggle toggle={() => toggleOpen()} isOpen={isOpen} /></div>
    
    <ul className='hidden md:flex space-x-6 font-medium'>
      <li><HoverLink href="/introduce/ceo">회사소개</HoverLink></li>
      <li><HoverLink href="/hardware/possystem">하드웨어/POS</HoverLink></li>
      <li><HoverLink href="/service/poscare">유지보수</HoverLink></li>
      {/* <li><HoverLink href="/">유지보수</HoverLink></li>
      <li><HoverLink href="/">ITO</HoverLink></li> */}
    </ul>
    </nav>
    <nav className={`overflow-hidden border-slate-500/30 border-b-[1px] transition-all ${isOpen ? 'h-[200px]' : 'h-[2px]'} md:hidden `}> 
      <ul>
        <li className='p-5'><HoverLink  href="/introduce/ceo">회사소개</HoverLink></li>
        <li className='p-5'><HoverLink href="/hardware/possystem">하드웨어/POS</HoverLink></li>
        <li className='p-5'><HoverLink href="/service/poscare">유지보수</HoverLink></li>
        {/* <li className='p-5'><HoverLink href="/">유지보수</HoverLink></li>
        <li className='p-5'><HoverLink href="/">ITO</HoverLink></li> */}
      </ul>
    
    </nav>
     </div>
  </div>
  
  </>
       
    );
}


