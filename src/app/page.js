import Image from 'next/image'
import HoverCard from './components/HoverCard'
import Solution from './Solution.png'
import Infra from './Infra.png'
import Careservice from './Careservice.png'
import Logistics from './Logistics.png'
import Card from './components/Card'
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
  {/* <div className='mx-auto w-[calc(100%-80px)] pt-10 mb-10 relative'>
  
      <h1 className=' text-3xl mb-10 text-center font-bold '>Smart Retail</h1>
      <div className='flex flex-col lg:flex-row space-y-5 lg:space-y-0'>
      <HoverCard url='/shopping-center.jpg' p1='Solution' p2='상품, 회원, 결제솔루션 제공'/>
      <HoverCard url='/support/Infra.jpg' p1='Infra' p2='솔루션 운영을 위한 서버 및 네트워크, POS 제공'/>
      <HoverCard url='/poscare/careservice.jpg' p1='Care Service' p2='지속적이고, 안정적인 매장운영 제공'/>
      <HoverCard url='/skyscrapers-3184798_1920.jpg' p1='Logistics' p2='창고, 점포와 고객간의 물류전반 서비스 제공'/>
      
    </div> 
  </div> */}
  <div className='  max-w-screen-xl mx-auto p-5 pt-10 pb-20 mb-10 relative'>
  
  <h1 className=' text-4xl m-20 text-center font-bold '>Smart Retail</h1>
  <div className='place-items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-x-5 gap-y-5'>
  
  <Card >
    <Image style={{marginTop:'0.5rem',}} width={200} src={Solution} alt="대체 텍스트"></Image>
    <h2 className='m-2'>Solution</h2>
    <p className='mb-5'>상품, 회원, 결제 솔루션 제공</p>
  </Card>
  <Card>
    <Image style={{marginTop:'0.5rem',}}  className='' width={200}  src={Infra} alt="대체 텍스트"></Image>
    <h2 className='m-2'>Infra</h2>
    <p className='mb-5'>솔루션 운영을 위한 서버 및 네트워크, POS 제공</p>
  </Card>
  <Card>
    <Image style={{marginTop:'0.5rem',}}  width={200}  src={Careservice} alt="대체 텍스트"></Image>
    <h2 className='m-2'>Care Service</h2>
    <p className='mb-5'>지속적이고, 안정적인 매장운영 제공</p>
  </Card>
  <Card>
    <Image style={{marginTop:'0.5rem',}}   width={200}  src={Logistics} alt="대체 텍스트"></Image>
    <h2 className='m-2'>Logistics</h2>
    <p className='mb-5'>창고, 점포와 고객간의 물류 전반 서비스 제공</p>
  </Card>
  
  
</div>


</div>
  <div className='bg-gradient-to-b from-gray-900 to-[#203345] min-h-[600px]'>
    <div className='max-w-screen-xl  mx-auto p-5 py-[100px] relative'>
    
        <h1 className=' text-4xl mb-16 text-center font-bold text-slate-100 '>사업 분야</h1>
        <div className='flex flex-col lg:flex-row'>
        <HoverCard url='/shopping-center.jpg' p1='POS System' p2={['POS system', 'Pos 주변기기']}/>
        <HoverCard url='/support/Infra.jpg' p1='Service' p2={['장비설치', 'IT 아웃소싱',' Repair']}/>
        <HoverCard url='/poscare/careservice.jpg' p1='Project' p2={['시스템 도입, 교체',' 시스템 업그레이드','시스템 점검','시스템 클리닝']}/>
        
        
      </div>
  </div>
    

  </div>
 </>
   
  )
}
