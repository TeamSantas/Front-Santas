import styled from "styled-components";

export const Loading = () => {
  return (
    <Container>
      <Text>로딩 중.....</Text>
      <img src="/assets/image/character/spinner.gif" alt="spinner" />
    </Container>
  );
};

const Text = styled.h3`
  text-align: center;
  color: white;
`;

const Container = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.5);
`;
