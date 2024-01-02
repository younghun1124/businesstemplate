'use client';
import Link from 'next/link'
import { useState } from 'react';
import Image from 'next/image';
export default function Navbar() {
    const [navToggle, setNavToggle]=useState(false)
    return (
        <div className='z-20 bg-white w-full fixed'>
            <div className="  max-w-screen-xl mx-auto">
            <nav className='flex justify-between text-lg p-5'>
          <Link className='' href="/"><Image src={'/ALTLOGO.png'} width={90} height={0} alt='alt로고'></Image></Link>
          <button onClick={() => setNavToggle(!navToggle)} className='md:hidden'>X</button>  
          <ul className='hidden md:flex space-x-6'>
            <li><Link className='hover:text-blue-400' href="/">회사소개</Link></li>
            <li><Link href="/">POS 시스템</Link></li>
            <li><Link href="/">POS HW</Link></li>
            <li><Link href="/">POS MA</Link></li>
            <li><Link href="/">회사소개</Link></li>
          </ul>
          </nav>
          <nav className={`overflow-hidden border-slate-500/30 border-b-[1px] transition-all ${navToggle ? 'h-[320px]' : 'h-[2px]'} md:hidden `}> 
            <ul>
              <li className='p-5'><Link className='hover:text-blue-400 ' href="/">IRUM INFRA</Link></li>
              <li className='p-5'><Link href="/">System Intergration</Link></li>
              <li className='p-5'><Link href="/">기업시스템 개발</Link></li>
              <li className='p-5'><Link href="/">제품</Link></li>
              <li className='p-5'><Link href="/">고객지원</Link></li>
            </ul>
          
          </nav>
           </div>
        </div>
    );
}


