import styled from "styled-components";
import { useState } from "react";

const Wrap = styled.div`
    padding: 10px;
    h1 {
        font-size: 2em;
    }
`;

/**
 * @description 카운터 컴포넌트
 */

function Counter() {
    // state
    //  [read-only , update]
    const [count, setCount] = useState<number>(0);

    // view
    return (
        <Wrap>
            <hr />
            <h1>Counter : {count}</h1>

            <hr />
        </Wrap>
    );
}

export default Counter;
