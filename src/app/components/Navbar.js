'use client';
import Link from 'next/link'

import { useCycle,motion } from 'framer-motion';
import Image from 'next/image';
import { MenuToggle } from './MenuToggle';
export default function Navbar() {
  const [isOpen, toggleOpen] = useCycle(false, true);
    return (
      <>
      
       <div className='z-40 bg-white w-full fixed'>
      <div className="  max-w-screen-xl mx-auto">
      <nav className='flex justify-between text-lg p-5'>
    <Link className='' href="/"><Image src={'/ALTLOGO.png'} width={90} height={0} alt='alt로고'></Image></Link>
    <motion.div animate={isOpen?"open" :"closed"}><MenuToggle toggle={() => toggleOpen()} /></motion.div>
    
    <ul className='hidden md:flex space-x-6 font-medium'>
      <li><Link className='hover:text-blue-400' href="/introduce/ceo">회사소개</Link></li>
      <li><Link href="/">하드웨어</Link></li>
      <li><Link href="/">프로젝트</Link></li>
      <li><Link href="/">유지보수</Link></li>
      <li><Link href="/">ITO</Link></li>
    </ul>
    </nav>
    <nav className={`overflow-hidden border-slate-500/30 border-b-[1px] transition-all ${isOpen ? 'h-[320px]' : 'h-[2px]'} md:hidden `}> 
      <ul>
        <li className='p-5'><Link className='hover:text-blue-400 ' href="/introduce">회사소개</Link></li>
        <li className='p-5'><Link href="/">하드웨어</Link></li>
        <li className='p-5'><Link href="/">프로젝트</Link></li>
        <li className='p-5'><Link href="/">유지보수</Link></li>
        <li className='p-5'><Link href="/">ITO</Link></li>
      </ul>
    
    </nav>
     </div>
  </div>
  <div className='h-[70px] w-1'></div>
  </>
       
    );
}


