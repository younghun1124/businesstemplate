import Image from 'next/image'
import HoverCard from './components/HoverCard'
import BgDiv from './components/BgDiv'

export default function Home() {
  return (<>
  <div className="w-screen bg-center bg-no-repeat bg-cover bg-[url('/introduce/intro.jpg')] h-[500px] md:h-[700px] animate-slide" >
  <div className="mx-auto w-[calc(100%-50px)] flex flex-col h-full justify-center">
      <h1 className='z-10 text-center font-bold text-3xl md:text-4xl text-white leading-relaxed' >
      ALL Together Company, Completion!
      </h1>
    </div>
  <div className='bg-black absolute h-[500px] md:h-[700px] w-full top-0 opacity-30'>
  </div>        
  </div>
  <div className="w-screen bg-top bg-no-repeat bg-cover bg-[url('/introduce/mainimg.jpg')] h-[500px] md:h-[700px]" >
  <div className="flex flex-col h-full relative justify-center">
  <div className='bg-black absolute h-[500px] md:h-[700px] w-full top-0 opacity-30'>
  </div>   
      <div className='z-10 mx-auto w-[calc(100%-48px)] grid place-content-center'>
        <h1 className=' text-left font-bold text-3xl md:text-4xl text-white leading-relaxed' >
        ALT 홈페이지를 찾아주셔서 감사합니다.
        </h1>
        <p className='text-white mt-10 text-left font-[400] text-lg'>
      ‘에이앨티’는 다년간 현장에서 성공적인 Pos 유지 보수를 수행한 경험을 바탕으로 창업하였으며,<br/> 항상 고객의 입장에서 생각하고 함께 성장 하도록 노력하겠습니다.
      </p>
      </div>
    
    </div>
      
  </div>
  <div className='mx-auto w-[calc(100%-80px)] pt-10 mb-10 relative'>
  
      <h1 className=' text-3xl mb-10 text-center font-bold '>Smart Retail</h1>
      <div className='flex flex-col lg:flex-row space-y-5 lg:space-y-0'>
      <HoverCard url='/shopping-center.jpg' p1='Solution' p2='상품, 회원, 결제솔루션 제공'/>
      <HoverCard url='/support/Infra.jpg' p1='Infra' p2='솔루션 운영을 위한 서버 및 네트워크, POS 제공'/>
      <HoverCard url='/poscare/careservice.jpg' p1='Care Service' p2='지속적이고, 안정적인 매장운영 제공'/>
      <HoverCard url='/skyscrapers-3184798_1920.jpg' p1='Logistics' p2='창고, 점포와 고객간의 물류전반 서비스 제공'/>
      
    </div>
    

  </div>
 </>
   
  )
}
