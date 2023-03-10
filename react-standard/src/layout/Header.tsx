import styled from "styled-components";

type Props = {
    title: string;
    description?: string;
};

const HeaderContainer = styled.header`
    width: 100%;
    height: 120px;
    background-color: lightgreen;
`;

/**
 * @description 헤더 컴포넌트
 */
function Header({ title, description }: Props) {
    // view -> 아래 {}안에 js의 변수나 함수를 넣을수가 있다.
    return (
        <HeaderContainer>
            <h2>{title}</h2>
            <h2>{description}</h2>
        </HeaderContainer>
    );
}

// default를 통해 하나만 export한다고 설정한다.
export default Header;
