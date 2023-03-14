import styled from "styled-components";
import Counter from "@/components/Counter";

const ContentsContainer = styled.main`
    height: 100%;
    background-color: #ffffff;
`;

/**
 * @description Contents 컴포넌트
 */
function Contents() {
    // view
    return (
        <ContentsContainer>
            <h2>Contents</h2>
            <Counter />
        </ContentsContainer>
    );
}

// default를 통해 하나만 export한다고 설정한다.
export default Contents;
