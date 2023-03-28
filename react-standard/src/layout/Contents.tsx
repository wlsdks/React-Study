import styled from "styled-components";
import Counter from "@/components/Counter";
import Input from "@/components/Input";
// import Calculator from "@/components/Calculator";
import Popup from "@/components/Popup";
import LiveClock from "@/components/LiveClock";
import TodoList from "@/components/ToDoList";

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
            {/* <Calculator />
            <h2>Contents</h2>
            <Counter />
            <hr />
            <Input />
            <hr />
            <Popup content="리액트 스터디 (5회차)" btnTitle="확인" />
            <hr />
            <LiveClock />
            <hr /> */}
            <TodoList />
        </ContentsContainer>
    );
}

// default를 통해 하나만 export한다고 설정한다.
export default Contents;
