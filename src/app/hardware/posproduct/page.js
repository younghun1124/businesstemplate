import Container from "@/app/components/Container";
import ScrollAnimationComponent from "@/app/components/ScrollAnimationCompnent";
import Image from "next/image";
function CardGrid({children}){
    return <div className="grid place-content-center place-items-center gap-y-10 sm:grid-cols-2 md:grid-cols-3">{children}</div>
}

function Cards({products}){
    return(
        products.map((item,idx)=>
            <div className="flex lg:w-[300px] max-w-[300px] border-2 bg-gray-100 shadow-lg rounded p-2 flex-col " key={idx}>
        <div className="flex items-center justify-between">
        <div className="flex-col">
            <p className="text-slate-600 font-semibold">{item.company}</p>
                <p className="font-semibold text-xl">{item.name}</p>    
        </div>
            <span className="  p-2 text-slate-800 font-semibold  ">{item.describe}</span>
        </div>

        <div className="w-full  h-[240px] mt-3 p-2 bg-white rounded grid place-items-center self-center">
        <Image  alt={'사진없음'} src={item.src} width={200} height={200}/></div>
        <div className="flex justify-between">
       </div>
        </div>

        
        )
        
    )
    
}
const TooltipButton = ({ tooltipContent }) => {
    return (
      <div className="group relative inline-flex justify-center items-center">
        <button
          type="button"
          className="rounded-full text-sm bg-gray-600 w-5 h-5 flex items-center justify-center text-white focus:outline-none focus:ring"
          aria-label="More info"
        >
          ?
        </button>
        <div className="opacity-0 group-hover:opacity-100 absolute bottom-full mb-3 w-max  ">
          <div className="relative z-10 p-2 bg-gray-600 text-white text-sm rounded shadow-md">
            {tooltipContent}
            <div className="absolute bottom-0 z-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-3 h-3 bg-gray-600 rotate-45"></div>
          </div>
        </div>
      </div>
    );
  };
  

const allInOne=[
    {
        name:'Engage One',
        company:'HP',
        describe:'공간 활용',
        src:'/hardware/HPPOS.jpg'
    },
    {
        name:'Tcx 800',
        company:'Toshiba',
        describe:'심미한 디자인',
        src:'/hardware/tcx810.jpg'
    },
    {
        name:'Mazic',
        company:'POS Bank',
        describe:'간편한 설치',
        src:'/hardware/Mazic.jpg'
    },
    
    
]
const modulePOS=[
    {
        name:'Engage Flex',
        company:'HP',
        describe:'확장성',
        src:'/hardware/HP engage flex.png'
    },
    {
        name:'Tcx 700',
        company:'Toshiba',
        describe:'고 가용성',
        src:'/hardware/tcx700.jpg'
    },
]
const convertable=[
    {
        name:'Engage Go',
        company:'HP',
        describe:'이동성',
        src:'/hardware/HP engage go.jpg'
    },
    {
        name:'SP500',
        company:'Blue bird',
        describe:'편의성',
        src:'/hardware/sp500.png'
    },
]
const Accessories=[
    {
        name:'Barcode Printer',
        company:'BIXOLON',
        describe:'',
        src:'/hardware/barcodeprinter.jpg'
    },
    {
        name:'Scanner',
        company:'Honey well',
        describe:'편의성',
        src:'/hardware/barcodescanner.jpg'
    },
]
export default function page() {
    return (
        <>
           
            <Container>
           <div className="my-10 grid place-content-center">
                <h2 className=" text-3xl font-bold">일체형 POS</h2>
                <h3 className="text-lg">카페, 식당등 식음 분야 <TooltipButton tooltipContent={<><p>베스킨라빈스</p> <p>올리브영 </p><p>스타벅스</p></>}/></h3>
           </div>
            
               <ScrollAnimationComponent>
                    <CardGrid>
                        <Cards products={allInOne}></Cards>
                    </CardGrid>   
               </ScrollAnimationComponent>         </Container>
            <Container>
           <div className="my-10 grid place-content-center">
                <h2 className=" text-3xl font-bold">모듈형 POS</h2>
                <h3 className="text-lg">쇼핑, 유통, 키오스크 분야 <TooltipButton tooltipContent={<>GS 편의점<br/>신라 ,현대<br/> 면세점</>}/></h3>
           </div>
            
                <ScrollAnimationComponent>
                    <CardGrid>
                        <Cards products={modulePOS}></Cards>
                    </CardGrid>    
                </ScrollAnimationComponent>        </Container>
            <Container>
           <div className="my-10 grid place-content-center">
                <h2 className=" text-3xl font-bold">컨버터블</h2>
                <h3 className="text-lg">쇼핑, 식음 분야 <TooltipButton tooltipContent={<>신세계,<br/>갤러리아,<br/>롯데 백화점</>}/></h3>
           </div>
            
               <ScrollAnimationComponent>
                    <CardGrid>
                        <Cards products={convertable}></Cards>
                    </CardGrid>      
               </ScrollAnimationComponent>      
                </Container>
            <Container classname='pb-10'>
           <div className="my-10 grid place-content-center">
                <h2 className=" text-3xl font-bold">주변 기기</h2>
                <h3 className="text-lg">쇼핑, 물류, 식음 
                {/* <TooltipButton tooltipContent='신세계, 갤러리아, 롯데 백화점'/> */}
                </h3>
           </div>
            
                <ScrollAnimationComponent>
                    <CardGrid>
                        <Cards products={Accessories}></Cards>
                    </CardGrid>     
                </ScrollAnimationComponent>       
                </Container>
        </>
    );
}

