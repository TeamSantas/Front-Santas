import styled from "styled-components";
import Snow from "../Snow";

const Layout = ({ children }) => {
  return (
    <MainWrapper>
      <ImgWrapper>
        <Buildings src={"/assets/image/layout/buildings.png"} />
      </ImgWrapper>
      <ImgWrapper>
        <Tree src={"/assets/image/layout/tree.svg"} />
      </ImgWrapper>
      <UpperWrapper>{children}</UpperWrapper>
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
  height: 100vh;
`;

const UpperWrapper = styled.div`
  position: relative;
  z-index: 1;
`;

const Buildings = styled.img`
  height: 50vh;
`;

const Tree = styled.img`
  height: 50vh;
`;

const Ground = styled.img`
  position: absolute;
  width: 100%;
  height: 15vh;
  bottom: env(safe-area-inset-bottom);
  background-color: #d9d9d9;
`;

const ImgWrapper = styled.div`
  position: absolute;
  bottom: calc(env(safe-area-inset-bottom) + 15vh);
  left: 50%;
  transform: translateX(-50%);
`;
