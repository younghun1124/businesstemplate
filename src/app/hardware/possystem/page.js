
import Container from "@/app/components/Container";
import ScrollAnimationComponent from "@/app/components/ScrollAnimationCompnent";
import { ScrollAnimationCompOpaicty } from "@/app/components/ScrollAnimationCompOpacity";
export default function page() {
    const content = [
        {
          title: "식당",
          description:
            "식당, 카페 및 프렌차이즈",
            src1:'/posSystem/store.png',
            src2:'/posSystem/pos.png',
        },
        {
          title: "쇼핑",
          description:
            "백화점, 할인점, 서점 등의 유통분야",
            src1:'/posSystem/shopping.png',
            src2:'/posSystem/kiosk.png',
        },
        {
          title: "문화",
          description:
            "리조트, 극장 등 여가, 문화생활",
            src1:'/posSystem/culture.png',
            src2:'/posSystem/pay.png',
        },
       
      ];
    return (
       
           <>
               <Container>
                    <h2 className="text-center font-bold text-3xl m-10">POS System</h2>
                   <ScrollAnimationComponent>
                        <div className="flex flex-col mb-10 sm:flex-row sm:space-x-5 space-x-0 space-y-5 sm:space-y-0">
                            <ul className="basis-1 grow text-center">
                            <li className="text-blue-800 text-lg font-bold mb-2">Back Office (Web, App)</li>
                            <li>기준정보</li>
                            <li>고객정보 (CRM)</li>
                            <li>구매/자재 (발주)</li>
                            <li>영업/가맹 (프로모션)</li>
                            <li>회계 (정산, 매출조회)</li>
                            </ul>
                            <hr></hr>
                            <ul className="basis-1 grow text-center">
                            <li className="text-blue-800 text-lg font-bold mb-2">Front</li>
                            <li>정산</li>
                            <li>판매등록</li>
                            <li>회원관리</li>
                            <li>주변기기 연동</li>
                            <li>결제 (복합결제)</li>
                            </ul>
                            <hr></hr>
                            <ul className="basis-1 grow text-center">
                            <li className="text-blue-800 text-lg font-bold mb-2">Online (Web, App)</li>
                            <li>반품</li>
                            <li>프로모션</li>
                            <li>배송조회</li>
                            <li>고객센터</li>
                            <li>주문(모바일 오더)</li>
                            </ul>
                        </div>
                   </ScrollAnimationComponent>
                
                        
                        
                    
               </Container>
               
               
               <Container classname='bg-gray-50'>
               <h2 className="text-center mt-10  text-3xl font-bold">POS 활용 분야</h2>
               <ScrollAnimationCompOpaicty content={content}/></Container>
              
               
           </>
        
    );
}


