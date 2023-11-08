import React, { useEffect, useMemo, useRef, useState } from "react";
import AnimatedNumber from "react-awesome-animated-number";
import "react-awesome-animated-number/dist/index.css";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: #5b93bc;
  color: white;
  padding: 20px;
`;
const Counter = styled.div`
  display: flex;
  font-size: 2rem;
  align-items: center;
  justify-content: center;
  gap: 5px;
  padding: 20px;
`;
const SquareBox = styled(AnimatedNumber)`
  border-radius: 10px;
  background-color: ${(props) => props.background};
  border: 1px solid;
  border-color: ${(props) => (props.border ? props.border : props.background)};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px 12px;
`;
const SmallText = styled.div`
  font-size: 1rem;
`;

const Countdown = () => {
  // 한국 시간 기준으로 12월 1일 00:00:00까지의 시간을 계산합니다.
  const targetDate = new Date("2023-12-01T00:00:00+09:00");
  const currentTime = useMemo(
    () => targetDate.getTime() - new Date().getTime(),
    []
  );

  const timerRef = useRef<number | null>(null);

  const [remainingTime, setRemainingTime] = useState(currentTime);

  useEffect(() => {
    timerRef.current = window.setInterval(() => {
      setRemainingTime((remainingTime) => remainingTime - 1000);
    }, 1000);

    return () => {
      window.clearInterval(timerRef.current);
    };
  }, []);

  const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

  return (
    <Wrapper>
      <Counter>
        <div>
          <SquareBox
            size={40}
            value={days}
            minDigits={2}
            background={"#1c3249"}
          />
          <SmallText>days</SmallText>
        </div>
        <div>
          <SquareBox
            size={40}
            value={hours}
            minDigits={2}
            background={"#1c3249"}
          />
          <SmallText>hours</SmallText>
        </div>
        <div>
          <SquareBox
            size={40}
            value={minutes}
            minDigits={2}
            background={"#1c3249"}
          />
          <SmallText>minutes</SmallText>
        </div>
        <div>
          <SquareBox size={40} value={seconds} minDigits={2} border={"white"} />
          <SmallText>seconds</SmallText>
        </div>
      </Counter>
    </Wrapper>
  );
};

export default Countdown;
