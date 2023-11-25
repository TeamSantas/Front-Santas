import styled, { keyframes } from "styled-components";

interface LoadingDotsProps {
  size?: number;
  color?: React.CSSProperties["backgroundColor"];
}
export const LoadingDots = ({ size = 8, color }: LoadingDotsProps) => {
  return (
    <Container size={size}>
      <Dot
        css={{ animationDelay: "-0.3s" }}
        size={size}
        backgroundColor={color}
      />
      <Dot
        css={{ animationDelay: "-0.15s" }}
        size={size}
        backgroundColor={color}
      />
      <Dot size={size} backgroundColor={color} />
    </Container>
  );
};

const Container = styled.div<{ size: number }>`
  display: inline-flex;
  column-gap: 8px;
  justify-content: center;
  align-items: end;
  height: ${({ size }) => size + size + size / 2}px;
`;

const bounce = keyframes`
  0%, 100% {
    transform: translateY(-150%);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }

  50% {
    transform: translateY(0);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
`;

const Dot = styled.div<{
  size: number;
  backgroundColor?: React.CSSProperties["backgroundColor"];
}>`
  background-color: ${({ backgroundColor }) =>
    backgroundColor ? backgroundColor : "#1C3249"};
  border-radius: 9999px;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  animation: ${bounce} 1s infinite;
`;
