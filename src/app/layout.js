import Navbar from './components/Navbar'
import './globals.css'
import Image from 'next/image'
export const metadata = {
  title: '에이엘티',
  description: 'Generated by younghun',  
  icons:{
    icon:"/alticon.ico"
  }
}
import {Noto_Sans_KR} from 'next/font/google'

const noto_sans_kr=Noto_Sans_KR({
  subsets: ['latin'],
  display: 'swap',
  

})


export default function RootLayout({ children }) {
  return (
    <html className={noto_sans_kr.className}>     
      <body>
      
      <header className=''>
      <Navbar />       
      </header>      
      <div className='h-[70px] w-1'></div>
      {children}      
      <footer className='bg-[#191f28]  text-[#6b7684] '>
      <div className='max-w-screen-xl m-auto px-5 py-10'>
        <Image src={'/ALTLOGO.png'} className='mb-5' width={90} height={0} alt='alt로고'></Image>
              <hr className='mb-2 h-[1px] border-[0px] bg-slate-600'></hr>
          <ul className='space-x-0 lg:space-x-1 text-sm flex flex-col lg:flex-row'>
            <li>㈜에이앨티</li>    <span className='hidden lg:inline'>|</span>
            <li>대표 : 이구하</li><span className='hidden lg:inline'>|</span>
            <li>사업자 등록번호 : 119-86-78432</li><span className='hidden lg:inline'>|</span>
            <li><a className='hover:underline' href='tel:02-6291-9595'>Tel) 02–6291-9595</a></li><span className='hidden lg:inline'>|</span>
            <li><a className='hover:underline' href='fax:02-857-7008'>Fax) 02–6291-9599</a></li><span className='hidden lg:inline'>|</span>
            <li><a className='hover:underline' href='mailto:info@alt10.co.kr'>문의메일) info@alt10.co.kr</a></li><span className='hidden lg:inline'>|</span>
            <li><a className='hover:underline' target="_blank" rel="noreferrer" href="https://maps.app.goo.gl/e4mXZAjYkgL6NJpt8">서울 금천구 시흥대로 97, 25-324
  </a></li>
  
          </ul>
          <span className='text-sm'>Copyright© ㈜에이앨티. All Rights Reserved</span>
      </div>
      </footer>
      </body>
    </html>
  )
}
