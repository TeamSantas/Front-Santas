import styled, { keyframes } from "styled-components";

const SnowAnimation = keyframes`
  0%{
    opacity: 0;
    transform: translateY(0);
  }
  20%{
    opacity: 1;
    transform: translateY(-50px, 20vh);
  }
  40%{
    opacity: 1;
    transform: translate(50px, 40vh);
  }
  60%{
    opacity: 1;
    transform: translate(-50px, 60vh);
  }
  80%{
    opacity: 1;
    transform: translate(50px, 80vh);
  }
  100%{
    opacity: 1;
    transform: translateY(100dvh);
  }
`;
const SnowAnimation2 = keyframes`
  0%{
    opacity: 0;
    transform: translateY(0);
  }
  30%{
    opacity: 1;
    transform: translate(-80px, 30vh);
  }
  50%{
    opacity: 1;
    transform: translate(80px, 50vh);
  }
  100%{
    opacity: 1;
    transform: translateY(100dvh);
  }
`;
const Snow = styled.div`
  overflow: hidden;
  justify-content: center;
  position: absolute;
  top: 0;
  width: 5px;
  height: 5px;
  box-shadow: 0 3px 5px 3px white;
  background-color: white;
  border-radius: 50%;
  margin-left: ${(props) => props.position};
  animation: ${SnowAnimation} 10s linear infinite;
  &:nth-of-type(3n) {
    box-shadow: 0 3px 10px 3px white;
    animation-duration: 6s;
  }
  &:nth-of-type(3n + 1) {
    animation-duration: 7s;
  }
  &:nth-of-type(5n) {
    animation-duration: 12s;
    animation-delay: 1s;
    animation: ${SnowAnimation2} 10s linear infinite;
  }
  &:nth-of-type(7n) {
    width: 5px;
    height: 5px;
    box-shadow: 0 3px 3px 3px white;
    animation-duration: 15s;
  }
  &:nth-of-type(8n + 3) {
    animation-delay: 5ms;
    animation-duration: 5s;
  }
  &:nth-of-type(20n + 1) {
    animation-duration: 20s;
    animation-delay: 2s;
    animation: ${SnowAnimation2} 13s linear infinite;
  }
  &:nth-of-type(6n) {
    animation-duration: 8s;
  }
`;

const setPosition = function (windowWidth) {
  let pos = Math.floor(Math.random() * windowWidth);
  return `${pos}px`;
};

const Snows = () => {
  const snowNum = Array(50).fill(1);
  return (
    <div>
      {snowNum.map((snow, i) => {
        return <Snow position={() => setPosition(2200)} key={i} />;
      })}
    </div>
  );
};
export default Snows;
