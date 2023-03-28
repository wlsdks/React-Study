import { useState, useEffect } from "react";
import styled from "styled-components";

const Wrap = styled.div`
    padding: 15px;
    font-size: 2em;
    h1 {
        margin-bottom: 20px;
    }
`;

/**
 *
 * @description 시계
 */
function LiveClock() {
    // state
    const [currentTime, setCurrentTime] = useState<Date>(new Date());

    // watch
    useEffect(() => {
        const timer = setTimeout(() => {
            setCurrentTime(new Date());
        }, 1000);

        // clean-up -> java의 가비지 콜렉터 역할을 해줌
        return () => {
            clearTimeout(timer);
        };
    }, [currentTime]);

    // view
    return (
        <Wrap>
            <h1>Live Clock</h1>
            <div>{currentTime.toString()}</div>
        </Wrap>
    );
}

export default LiveClock;
