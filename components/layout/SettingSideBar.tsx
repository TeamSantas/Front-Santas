import styled from "styled-components";

export const SettingSideBar = () => {
  return (
    <Contianer>
      세팅사이드바
      알림수신동의
    </Contianer>
  );
};
const Contianer = styled.div`
  z-index: 100;
  background-color: #F9F9F9;
  height: 100vh;
  position: fixed;
  right: 0;
  top: 0;
  width: 85%;
`;