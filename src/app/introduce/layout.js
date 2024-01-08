
import BgDiv from "../components/BgDiv";
import MaxLimitContainer from "../components/MaxLimitContainer";

export default function layout({children}) {
    return (
        <>
        <BgDiv className={`bg-[url(/skyscraper.jpg)] bg-cover h-[500px] bg-fixed`}>
            <MaxLimitContainer>
                
            </MaxLimitContainer>
        </BgDiv>
        {children}
        </>
    );
}


