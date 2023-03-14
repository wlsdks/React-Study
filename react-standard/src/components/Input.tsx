import { useState } from "react";
import styled from "styled-components";

const Wrap = styled.div`
    padding: 15px;
    h1 {
        font-size: 2em;
    }
    input {
        margin-top: 10px;
        padding: 10px;
    }
`;

/**
 * @description 인풋 컴포넌트
 */

function Input() {
    //state
    const [inputValue, setInputValue] = useState<string>("");

    //view
    return (
        <Wrap>
            <h1>Input : {inputValue}</h1>
            <input value={inputValue} />
        </Wrap>
    );
}

export default Input;
