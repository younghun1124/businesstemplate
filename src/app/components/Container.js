import BgDiv from "./BgDiv";
import MaxLimitContainer from "./MaxLimitContainer";

export default function Container({children,classname}) {
    return (
        <BgDiv className={classname}>
            <MaxLimitContainer >
                {children}
            </MaxLimitContainer>
        </BgDiv>
    );
}
