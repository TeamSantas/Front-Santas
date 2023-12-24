import styled from "styled-components";
import Snow from "../Snow";
import Gnb from "./GNB";
import Header from "./Header";

const Layout = ({ children, logo = null }) => {
  return (
    <MainWrapper>
      <Container>
        <Header />
        <UpperWrapper>{children}</UpperWrapper>
        <Snow />
        <Gnb />
      </Container>
    </MainWrapper>
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
