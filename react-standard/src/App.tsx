import Header from "@/layout/Header";
import Footer from "@/layout/Footer";
import Sidebar from "@/layout/Sidebar";
import Contents from "@/layout/Contents";
import GlobalStyle from "@/style/GlobalStyle";
import styled from "styled-components";

const AppContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    margin-left: 240px;
`;

/**
 * @description 루트 컴포넌트
 */
function App() {
    // js

    // view
    return (
        <>
            <GlobalStyle />
            <AppContainer>
                <Header title="Header" description="" />
                <Sidebar />
                <Contents />
                <Footer />
            </AppContainer>
        </>
    );
}

export default App;
