import styled from "styled-components";
import { useState } from "react";

const Wrap = styled.div`
    padding: 10px;
    h1 {
        font-size: 2em;
    }
    button {
        margin-right: 3px;
        width: 30px;
        height: 30px;
    }
`;

/**
 * @description 카운터 컴포넌트
 */

function Counter() {
    // state
    //  [read-only , update]
    const [count, setCount] = useState<number>(0);

    // event 함수 생성
    const onIncrease = () => {
        setCount(count + 1);
    };

    const onDecrease = () => {
        setCount(count - 1);
    };

    // view
    return (
        <Wrap>
            <hr />
            <h1>Counter : {count}</h1>
            <button onClick={onIncrease}>+</button>
            <button onClick={onDecrease}>-</button>
            <hr />
        </Wrap>
    );
}

export default Counter;
