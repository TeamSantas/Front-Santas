import styled from "styled-components";

export const MainContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
`;

export const CenteredWrapper = styled.div`
  margin: auto;
`;

export const Logo = styled.button`
  margin-top: 16px;
  margin-bottom: 20px;
  background: none;
  background-image: url("/assets/image/Logo.svg");
  background-repeat: no-repeat;
  width: 120px;
  height: 40px;
  border: none;
`;

export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CenteredFlex = styled(Flex)`
  justify-content: center;
`;

export const Icons = styled.button`
  width: 32px;
  height: 32px;
  background: none;
  border: none;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
`;

export const RedButton = styled.button`
  border-radius: 5px;
  border: none;
  margin-bottom: 10px;
  font-size: 30px;
  cursor: pointer;
  width: 100%;

  &:active {
    background-color: #8d362d;
  }
`;

export const GreenButton = styled(RedButton)`
  margin-top: 20px;
  background-color: #3C6C54;
  color: white;
`;
