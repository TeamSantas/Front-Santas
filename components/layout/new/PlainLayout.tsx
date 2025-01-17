import styled from "styled-components";
import Snow from "../Snow";
import Banner from "../../common/Banner";

const Layout = ({ children, logo = null }) => {
  return (
    <MainWrapper>
      <Logo src={logo} />
      <Buildings src={"/asset_ver2/image/layout/buildings.png"} />
      <Tree src={"/asset_ver2/image/layout/tree.svg"} />
      <UpperWrapper>
        <Banner />
        {children}
      </UpperWrapper>
      <Ground />
      <Snow />
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
  height: 180px;
  max-height: 18vh;
  top: calc(env(safe-area-inset-top) + 12vh);
`;

const Buildings = styled(AbsoluteImg)`
  height: 35vh;
`;

const Tree = styled(AbsoluteImg)`
  height: 50vh;
  z-index: 1;
  bottom: calc(env(safe-area-inset-bottom) + 14vh);
`;

const Ground = styled.div`
  position: absolute;
  width: 100%;
  height: 17vh;
  bottom: env(safe-area-inset-bottom);
  background-color: #d9e2ed;
`;
