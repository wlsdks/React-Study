import Header from "@/layout/Header";
import Footer from "@/layout/Footer";
import Sidebar from "@/layout/Sidebar";
import Contents from "@/layout/Contents";

/**
 * @description 루트 컴포넌트
 */
function App() {
    // js

    // view
    return (
        <>
            <Header title="최진안" description="test" />
            <Sidebar />
            <Contents />
            <Footer />
        </>
    );
}

export default App;
