import Container from "@/app/components/Container";
import ScrollAnimationComponent from "@/app/components/ScrollAnimationCompnent";
import Image from "next/image";

function Cards({json}){
    return(
        json.map((item,idx)=>
            <div className="flex lg:w-[300px] w-full max-w-[300px] border-2 items-start bg-gray-100 shadow-lg rounded p-3 flex-col " key={idx}>       
        
                <p className="font-semibold place-self-center text-2xl">{item.title}</p>    
      <div className="p-4 place-self-center"><Image src={item.src} width={120} height={120} alt=""/></div>
            <p className="text-slate-500 ">{item.work}</p>
                <span className=" text-slate-800 font-semibold  ">{item.describe}</span>
        </div>

        
        )
        
    )
    
}
function CardGrid({children}){
    return <div className="grid place-content-center place-items-center gap-y-10 grid-cols-1 md:grid-cols-2 xl:grid-cols-4">{children}</div>
}
export default function page() {
    const content=[
        {title:'콜센터', work:'장애 접수 및 1차 처리', describe:'365일 15시간 서비스, 긴급장애 대응', src:'/poscare/helpdesk.svg'},
        {title:'현장대응', work:'POS외 점포 IT장비 장애 지원', describe:'365일 지원, 전국 광역시 지사 운영' , src:'/poscare/localservice.svg'},
        {title:'프로젝트', work:'설치 및 업데이트 지원 ', describe:'매장 IT 장비에 대한 설치, 프로그램 지원', src:'/poscare/man.svg'},
        {title:'운영', work:'POS시스템의 운영 ', describe:'시스템 개선 및 신속한 장애 대응 ', src:'/poscare/repair.svg'},
    ]
    return (
        <>
            <Container classname='bg-dot-black/[0.1]'>
            
               <div className="grid place-items-center"> 
             
               <h2 className=" font-semibold m-10"> POS 시스템에 대한 솔루션 및 하드웨어의 유지보수 업무를 수행하고 전문 관리시스템을 바탕으로 지속적인 고객 시스템의 개선 및 향상을 제공합니다. </h2>
               </div>
    <ScrollAnimationComponent><CardGrid><Cards json={content}/></CardGrid></ScrollAnimationComponent>
    
  
    
            </Container>
            <Container>
                <ScrollAnimationComponent>
                    <div className="flex-col items-center  flex">
<h2 className="text-slate-800 font-bold text-3xl mt-10">연중 무휴 서비스, POS 유지보수</h2>
                    <h2 className=" font-semibold m-5"> 본사 및 전국 지사의 전문인력을 통해, 고객의 성장에 바탕이 되도록 하겠습니다. 
</h2>

                      <div className="grid items-center place-items-center grid-cols-2 gap-3 mb-5 sm:grid-cols-4">
                           <div className="w-[100px] h-[100px] font-semibold text-white flex flex-col items-center justify-center p-3 rounded-full bg-orange-400">
                          
                           <span>Helpdesk</span>
                           <span>10명</span>
                               </div>                    
                           <div className="w-[100px] h-[100px] font-semibold text-white flex flex-col items-center justify-center p-3 rounded-full bg-cyan-400">
                            
                           <span>서비스</span>
                           <span>26명</span>
                               </div>                    
                           <div className="w-[100px] h-[100px] font-semibold text-white flex flex-col items-center justify-center p-3 rounded-full bg-yellow-400">
                           
                           <span>Repair</span>
                           <span>3명</span>
                               </div>                    
                           <div className="w-[100px] h-[100px] font-semibold text-white flex flex-col items-center justify-center p-3 rounded-full bg-lime-400">
                           
                           <span>상주인력</span>
                           <span>25명</span>
                               </div>               
                      </div>     
                      <div className="mb-10"> 
 <Image src='/poscare/poscaremap.png'  width={400} height={400}/>  
 </div>            
                    </div>
                </ScrollAnimationComponent>
            </Container>
        </>
    );
}


