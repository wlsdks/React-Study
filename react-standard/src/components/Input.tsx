import { ChangeEvent, useState, useEffect } from "react";
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

    //event
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setInputValue(value);
    };

    //watch
    useEffect(() => {
        // init -> 화면 진입에 onload형태로 사용이 가능하다.
        // inputValue를 2번째 인자에 []로 담아주면 내용이 바뀔때마다 함수 body의 내용이 동작한다.
        console.log(inputValue);
    }, [inputValue]);

    //view
    return (
        <Wrap>
            <hr />
            <h1>Input : {inputValue}</h1>
            <input value={inputValue} onChange={onChange} />
        </Wrap>
    );
}

export default Input;
