import Image from 'next/image'
import HoverCard from './components/HoverCard'
import Solution from './Solution.png'
import Infra from './Infra.png'
import Careservice from './Careservice.png'
import Logistics from './Logistics.png'
import { BentoGrid } from './AceternityUI/BentoGrid'
import  {BackgroundBoxes}  from './components/BackgroundBoxes'
import { ThreeDCard } from './components/ThreeDCard'
import MaxLimitContainer from './components/MaxLimitContainer'
import { TextGenerateEffect } from './AceternityUI/TextGenerateEffect'


export default function Home() {
  const  svgUrl = "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='8' height='8' fill='none' stroke='rgb(0 0 0 / 0.1)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e"
  const style = {
    backgroundImage: `url("${svgUrl}")`,
    // Add other styles as needed
  };
  return (<>
  <div className="w-screen bg-center bg-no-repeat bg-cover bg-[url('/introduce/intro.jpg')] h-[500px] md:h-[700px] animate-slide" >
  
  <MaxLimitContainer className='max-w-screen-lg relative pt-40 z-10'>
  <h1 className='text-center mb-40 font-bold text-3xl md:text-5xl text-white leading-relaxed' >
      ALL Together Company, Completion!
      </h1>
      <TextGenerateEffect className='leading-none text-3xl' words='ALT 홈페이지를 찾아주셔서 감사합니다.'/>
      <TextGenerateEffect className='text-left font-medium text-xl' words='‘에이앨티’는 다년간 현장에서 성공적인 Pos 유지 보수를 수행한 경험을 바탕으로 창업하였으며'/>
      <TextGenerateEffect className='text-left font-medium text-xl' words='항상 고객의 입장에서 생각하고 함께 성장 하도록 노력하겠습니다.'/>

  </MaxLimitContainer>
      
    
  <div className='bg-black absolute h-[500px] md:h-[700px] w-full top-0 opacity-30'>
  </div>        
  </div>
  
  {/* <div className="w-screen bg-top bg-no-repeat bg-cover bg-[url('/introduce/mainimg.jpg')] h-[500px] md:h-[700px]" >
  <div className="flex flex-col h-full relative justify-center">
  <div className='bg-black absolute h-[500px] md:h-[700px] w-full top-0 opacity-30'>
  </div>   
      <div className='z-10 mx-auto w-[calc(100%-48px)] grid place-content-center'>
        
      </div>
    
    </div>
      
  </div> */}
 
  <div style={style}>
    <div className={`  max-w-screen-xl mx-auto p-5 pt-10 pb-40 relative `}>
    
    <h1 className=' text-4xl m-20 text-center font-bold '>Smart Retail</h1>
    <BentoGrid className="max-w-screen-xl mx-auto ">
        
        <ThreeDCard
          key={1}
          title='Solution'
          desc1={'상품, 회원, 결제 솔루션 제공'}
          header={<Image  width={200} src={Solution} alt="대체 텍스트"/>}       
          
        />
        <ThreeDCard
          key={2}
          title='Infra'
          desc1={`솔루션 운영을 위한`}
          desc2={`서버 및 네트워크, POS 제공`}
          header={<Image    width={200}  src={Infra} alt="대체 텍스트"/>
  }       
       
        />
        <ThreeDCard
          key={3}
          title='Care Service'
          desc1='지속적이고, 안정적인'
          desc2='매장운영 제공'
          header={<Image   width={200}  src={Careservice} alt="대체 텍스트"/>}       
         
        />
        <ThreeDCard
          key={4}
          title='Logistics'
          desc1='창고, 점포와 고객간의'
          desc2='물류 전반 서비스 제공'
          header={<Image    width={200}  src={Logistics} alt="대체 텍스트"/>}       
         
        />
      
    </BentoGrid>

    {/* <div className='place-items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-x-5 gap-y-5'>
   
    <Card >
      
      <h2 className='m-2'>Solution</h2>
      <p className='mb-5'>상품, 회원, 결제 솔루션 제공</p>
    </Card>
    <Card>
      <h2 className='m-2'>Infra</h2>
      <p className='mb-5'>솔루션 운영을 위한 서버 및 네트워크, POS 제공</p>
    </Card>
    <Card>
      <Image  width={200}  src={Careservice} alt="대체 텍스트"></Image>
      <h2 className='m-2'>Care Service</h2>
      <p className='mb-5'>지속적이고, 안정적인 매장운영 제공</p>
    </Card>
    <Card>
      <Image   width={200}  src={Logistics} alt="대체 텍스트"></Image>
      <h2 className='m-2'>Logistics</h2>
      <p className='mb-5'>창고, 점포와 고객간의 물류 전반 서비스 제공</p>
    </Card>
    
    
  </div> */}
  
  
  </div>
  </div>
  <BackgroundBoxes>
   
        <h1 className='relative z-20 mt-10 text-4xl mb-16 text-center font-bold text-slate-100 '>사업 분야</h1>
        <div className='max-w-screen-xl px-5 flex flex-col relative z-20 w-full lg:flex-row'>
        <HoverCard url='/shopping-center.jpg' p1='POS System' p2={['POS system', 'Pos 주변기기']}/>
        <HoverCard url='/support/Infra.jpg' p1='Service' p2={['장비설치', 'IT 아웃소싱',' Repair']}/>
        <HoverCard url='/poscare/careservice.jpg' p1='Project' p2={['시스템 도입, 교체',' 시스템 업그레이드','시스템 점검','시스템 클리닝']}/>        
      </div>
    
  </BackgroundBoxes>
  

 </>
   
  )
}
