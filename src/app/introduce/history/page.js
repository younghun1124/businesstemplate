import Container from "@/app/components/Container";
import Timeline from "@/app/components/Timeline";



export default function page() {
    
    const events=[
        {
          "year": "2013 10월",
          "description": "㈜에이앨티 회사 설립"
        },
        {
          "year": "2015 7월",
          "description": "㈜아이넷뱅크 협력사 계약체결"
        },
        {
          "year": "2015 9월",
          "description": "INDITEX IT 표준 공급계약체결"
        },
        {
          "year": "2017 7월",
          "description": "블루버드 협력사 등록"
        },
        {
          "year": "2022 5월",
          "description": "ZEBRA Reseller 등록"
        },
        {
          "year": "2023 7월",
          "description": "Kering 서비스 계약체결."
        },
        {
          "year": "2023 11월",
          "description": "도시바글로벌커머스솔루션 조달계약체결"
        },
        
      ]
    return (
        <>        
            <Container>       
            <h1 className='text-3xl text-center font-bold my-5'>History</h1>     
            <Timeline events={events}></Timeline>      
            </Container>
        </>
    );
}

