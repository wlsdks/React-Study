import styled from "styled-components";
import Counter from "@/components/Counter";
import Input from "@/components/Input";
import Calculator from "@/components/Calculator";

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
            <Calculator />
            <h2>Contents</h2>
            <Counter />
            <Input />
        </ContentsContainer>
    );
}

// default를 통해 하나만 export한다고 설정한다.
export default Contents;
