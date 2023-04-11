import { Outlet } from "react-router-dom";
import styled from "styled-components";

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
            <Outlet />
        </ContentsContainer>
    );
}

// default를 통해 하나만 export한다고 설정한다.
export default Contents;
