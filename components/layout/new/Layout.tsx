import styled from "styled-components";
import Snow from "../Snow";
import Header from "./Header";
import Gnb from "./GNB";
import SettingSideBar from "../../setting/SettingSideBar";

const Layout = ({ children, logo = null }) => {
  return (
    <Wrapper>
      <Header />
      <MainWrapper>
        <Logo src={logo} />
        <Buildings src={"/asset_ver2/image/layout/buildings.png"} />
        <Tree src={"/asset_ver2/image/layout/tree.svg"} />
        <UpperWrapper>{children}</UpperWrapper>
        <Ground />
      </MainWrapper>
      <SettingSideBar />
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
  height: calc(100dvh - 150px);
  background-color: #1c3249;
  position: relative;
  overflow: hidden;
`;

const UpperWrapper = styled.div`
  position: relative;
  z-index: 1;
`;

const AbsoluteImg = styled.img`
  position: absolute;
  overflow: hidden;
  bottom: calc(env(safe-area-inset-bottom) + 17vh);
  left: 50%;
  transform: translateX(-50%);
`;

const Logo = styled(AbsoluteImg)`
  width: 300px;
  max-width: 50vw;
  min-width: 200px;
  top: 8vh;

  @media (max-height: 800px) {
    width: 220px;
    top: 10px;
  }
`;

const Buildings = styled(AbsoluteImg)`
  height: 25vh;
`;

const Tree = styled(AbsoluteImg)`
  height: 40vh;
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
