import Container from "@/app/components/Container";
import Image from "next/image";

export default function page() {
    
    
    return (
        <>        
            <Container>
              <div className="flex flex-col items-center py-10">
                    <Image ></Image>
                   <div className="prose indent-1">
                        <h1 className="indent-0">안녕하십니까?<br/>에이엘티 대표 이구하 입니다.</h1>
                        <p>'에이앨티'는 다년간 현장에서의 성공적인 Pos 유지 보수 경험을 바탕으로 창업한 회사입니다. 고객의 입장에서 생각하고, 고객과 함께 성장하는 것을 우리 회사의 핵심 가치로 삼고 있습니다.</p>
                        <p>유통 및 식음 분야에 특화된 결제 시스템 장비를 공급하며, 이를 통해 고객의 비즈니스 운영을 원활하게 지원합니다. 또한, 최신 물류 시스템에 필요한 바코드 및 프린터 장비도 제공하며, 이에 대한 유지 보수 서비스도 함께 제공하고 있습니다. 이를 통해 고객사의 효율적인 물류 관리를 지원하여, 전체적인 비즈니스 효율성 향상에 기여하고자 합니다.</p>
                        <p>저희 에이앨티는 단순히 제품을 공급하는 것을 넘어, 고객사의 필요와 요구에 맞춘 맞춤형 ITO(Information Technology Outsourcing) 서비스를 제공합니다. 이를 통해 고객사가 정보기술을 보다 효과적으로 활용할 수 있도록 돕고 있습니다.</p>
                        <p>고객의 만족은 저희 에이앨티가 가장 중요하게 생각하는 가치입니다. 끊임없는 혁신과 기술 개발을 통해 고객사와 함께 성장하며, 최고의 서비스를 제공하기 위해 항상 노력하겠습니다. 여러분의 비즈니스가 성공적으로 성장할 수 있도록 저희 에이앨티가 동반자가 되겠습니다.</p>
                        <p>감사합니다.</p>
                        <h3>대표 이구하 드림.</h3>
                   </div>
              </div>
            </Container>
        </>
    );
}

