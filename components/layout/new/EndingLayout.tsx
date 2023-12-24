import styled from "styled-components";
import Snow from "../Snow";
import Gnb from "./GNB";
import Header from "./Header";
import SettingSideBar from "../../setting/SettingSideBar";

const Layout = ({ children }) => {
  return (
    <>
      <MainWrapper>
        <Container>
          <Header />
          <UpperWrapper>{children}</UpperWrapper>
          <Snow />
          <Gnb />
        </Container>
      </MainWrapper>
      <SettingSideBar />
    </>
  );
};

export default Layout;

const MainWrapper = styled.div`
  background-color: #1c3249;
  position: relative;
  overflow: hidden;
  height: 100dvh;
`;

const Container = styled.div`
  width: 100vw;
  height: 100dvh;
  background-color: rgba(0, 0, 0, 0.7);
`;

const UpperWrapper = styled.div`
  position: relative;
  z-index: 1;
`;
