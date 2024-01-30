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
                <span className=" text-slate-800 font-semibold self-center ">{item.describe}</span>
        </div>

        
        )
        
    )
    
}
function CardGrid({children}){
    return <div className="grid place-content-center place-items-center gap-y-10 grid-cols-1 md:grid-cols-2 xl:grid-cols-4">{children}</div>
}
export default function page() {
    const content=[
        {title:'콜센터', describe:'장애접수 및 원격처리', src:'/poscare/helpdesk.svg'},
        {title:'현장대응',  describe:'POS 포함 매장 IT장비 현장지원' , src:'/poscare/localservice.svg'},
        {title:'프로젝트',  describe:'매장 IT 환경 변경 지원', src:'/poscare/man.svg'},
        {title:'운영',  describe:'고객사 상주 근무', src:'/poscare/repair.svg'},
    ]
    return (
        <>
            <Container classname='bg-dot-black/[0.1]'>
            
               <div className="grid place-items-center"> 
             
               <h2 className=" font-semibold m-10"> IT 장비 및POS 시스템에 대한 솔루션 및 하드웨어의 유지보수 업무를 수행하고 전문 관리시스템을 바탕으로 지속적인 고객 시스템의 개선 및 향상을 제공합니다. </h2>
               </div>
    <ScrollAnimationComponent><CardGrid><Cards json={content}/></CardGrid></ScrollAnimationComponent>
    
  
    
            </Container>
            <Container>
                <ScrollAnimationComponent>
                    <div className="flex-col items-center  flex">
<h2 className="text-slate-800 font-bold text-3xl mt-10">IT 장비 및 POS 시스템 유지보수</h2>
                    <h2 className=" font-semibold m-5"> IT 전문인력을 통해, 고객의 성장에 도움이 되도록 하겠습니다. 
</h2>

                    
                      <div className="mb-10"> 
 <Image src='/poscare/poscaremap.png'  width={400} height={400}/>  
 </div>            
                    </div>
                </ScrollAnimationComponent>
            </Container>
        </>
    );
}


