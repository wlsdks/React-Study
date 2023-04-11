import { Link } from "react-router-dom";
import styled from "styled-components";

const SidebarContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 240px;
    height: 100vh;
    background-color: #a4d1c7;

    li {
        font-size: 1.5em;
        margin-top: 100px;
        padding-left: 20px;
    }
`;

/**
 * @description sidebar 컴포넌트
 */
function Sidebar() {
    // view
    return (
        <SidebarContainer>
            <h2>Sidebar</h2>
            <ul>
                <li>Page01</li>
                <li>Page02</li>
                <li>Page03</li>
                <li>Page04</li>
            </ul>
        </SidebarContainer>
    );
}

// default를 통해 하나만 export한다고 설정한다.
export default Sidebar;
