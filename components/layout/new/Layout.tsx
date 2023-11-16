import styled from "styled-components";
import Snow from "../Snow";
import Header from "./Header";
import Gnb from "./GNB";

const Layout = ({ children, logo = null }) => {
  return (
    <Wrapper>
      <Header />
      <MainWrapper>
        <Logo src={logo} />
        <Buildings src={"/assets/image/layout/buildings.png"} />
        <Tree src={"/assets/image/layout/tree.svg"} />
        <UpperWrapper>{children}</UpperWrapper>
        <Ground />
      </MainWrapper>
      <Snow />
      <Gnb />
    </Wrapper>
  );
};

export default Layout;

const Wrapper = styled.div`
  background-color: #1c3249;
  position: absolute;
  width: 100%;
  height: 100%;
  top: env(safe-area-inset-top);
  bottom: env(safe-area-inset-bottom);
`;

const MainWrapper = styled.div`
  height: calc(100vh - 130px);
  background-color: #1c3249;
  position: relative;

  overflow: scroll;
  -ms-overflow-style: none; /* Explorer */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome */
  }
`;

const UpperWrapper = styled.div`
  position: relative;
  z-index: 1;
`;

const AbsoluteImg = styled.img`
  position: absolute;
  bottom: calc(env(safe-area-inset-bottom) + 17vh);
  left: 50%;
  transform: translateX(-50%);
`;

const Logo = styled(AbsoluteImg)`
  width: 220px;
  max-width: 50vw;
  min-width: 200px;
  top: calc(env(safe-area-inset-top) + 5vh);
`;

const Buildings = styled(AbsoluteImg)`
  height: 25vh;
`;

const Tree = styled(AbsoluteImg)`
  height: 45vh;
  z-index: 1;
  bottom: calc(env(safe-area-inset-bottom) + 14vh);
`;

const Ground = styled.div`
  position: absolute;
  width: 100%;
  height: 17vh;
  bottom: env(safe-area-inset-bottom);
  background-color: #d9d9d9;
`;
