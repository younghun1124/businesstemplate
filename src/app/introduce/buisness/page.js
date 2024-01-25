import Container from "@/app/components/Container";
import { BackgroundBoxes } from "@/app/components/BackgroundBoxes";
import HoverCard from "@/app/components/HoverCard";
import Timeline from "@/app/components/Timeline";
import ScrollAnimationComponent from "@/app/components/ScrollAnimationCompnent";
function Card({children}){
    return <div className="flex flex-col text-lg font-semibold border">{children}</div>
}


export default function Buisness() {
    

   const events=[
        {
          "year": "Inditex korea",
          "description": "PDA 및 바코드 프린터 공급"
        },
        {
          "year": "Kering",
          "description": "매장 인프라 운영 인력 제공"
        },
        {
          "year": "GS25",
          "description": "수도권지역 매장의 POS 장애 예방을 위하여 신속점검 업무 수행"
        },
        {
          "year": "현대백화점 면세점",
          "description": "POS 신규설치 수행"
        },
       
        
      ]
    return (
        
              <>
                 
    <Container >
        <div className="grid place-items-center">
        <h2 className="text-3xl font-bold my-5">사업실적</h2>
        <Timeline events={events}></Timeline>
        
       

        </div>
       
    </Container>
    {/* <Container classname='bg-gray-50'>
    <div className="grid sm:place-items-center">
  

  <div className="flex justify-evenly my-5 flex-col md:flex-row text-md md:text-lg lg:text-xl">

    <ScrollAnimationComponent>
        <div className=" p-4 bold m-2 rounded-lg">
          <p className="text-black mb-2 font-bold ">Hardware</p>
          <p className="text-blue-900">1. END User : 자동화 기기, Retail</p>
          <p className="text-blue-800">2. POS 업체 : 출품업체 및 대리점</p>
          <p className="text-blue-700">2022년도 매출 : <span className="font-bold">255,736k₩</span></p>
        </div>
    </ScrollAnimationComponent>

   <ScrollAnimationComponent>
        <div className=" p-4 m-2 rounded-lg">
        <p className="text-black mb-2 font-bold ">Service</p>
          <p className="text-blue-900">1. Install : HW & SW 설치 프로젝트</p>
          <p className="text-blue-800">2. Repair: POS 및 IT장비</p>
          <p className="text-blue-700">2022년도 매출 : <span className="font-bold">22,736k₩</span></p>
        </div>
   </ScrollAnimationComponent>
  </div>
</div>
    </Container> */}
   
              </>
       
    );
}

