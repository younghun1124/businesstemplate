
import BgDiv from "../components/BgDiv";
import MaxLimitContainer from "../components/MaxLimitContainer";
import Container from "../components/Container";

import { ActiveNavLinks } from "@/app/components/ActiveNav";
export default function layout({children}) {
    const navmap=
        [
            {name:'POS system',url:'/hardware/possystem'},
            {name:'POS 제품',url:'/hardware/product'},
            
        ]
    return (
        <>
        <BgDiv className={`bg-[url(/support/infra.jpg)] bg-cover w-100 h-[500px] bg-fixed`}>
            <MaxLimitContainer className="relative z-10 h-full grid place-items-center">
                <h1 className="text-5xl text-white font-bold">하드웨어/POS</h1>
            </MaxLimitContainer>
        </BgDiv>
        <div className='bg-black absolute  h-[500px]  w-full top-[70px] opacity-30'>
  </div>   
            <BgDiv className='bg-sky-900'>
                <MaxLimitContainer className="py-0 bg-inherit">
                <div className="flex justify-evenly  flex-wrap">
                <ActiveNavLinks 
                activeClass='text-sky-900 bg-white' 
                className='text-white md:text-lg text-sm md:p-5 p-2' 
                navmap={navmap}/>
                </div></MaxLimitContainer>
            </BgDiv>
        {children}
        </>
    );
}


