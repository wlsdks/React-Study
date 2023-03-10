import styled from "styled-components";

const FooterContainer = styled.footer`
    width: 100%;
    height: 50px;
    background-color: #ffce46;
`;

/**
 * @description footer 컴포넌트
 */
function Footer() {
    // view
    return (
        <FooterContainer>
            <h2>Footer</h2>
        </FooterContainer>
    );
}

// default를 통해 하나만 export한다고 설정한다.
export default Footer;
