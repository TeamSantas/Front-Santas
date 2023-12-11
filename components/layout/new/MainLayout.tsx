import styled from "styled-components";
import Snow from "../Snow";
import Header from "./Header";
import Gnb from "./GNB";
import { ShareLink } from "../../share/ShareLink";
import { QuestionLink } from "../../share/QuestionLink";
import SettingSideBar from "../../setting/SettingSideBar";

const Layout = ({ children = null }) => {
  return (
    <Wrapper>
      <Header />
      <MainWrapper>
        <Buildings src={"/asset_ver2/image/layout/forest_background.png"} />
        <UpperWrapper>{children}</UpperWrapper>
      </MainWrapper>
      <Ground />
      <SettingSideBar />
      <Snow />
      <QuestionLink />
      <ShareLink />
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
`;

const MainWrapper = styled.div`
  height: calc(100% - 160px);
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
  bottom: 17vh;
  left: 50%;
  transform: translateX(-50%);
`;

const Buildings = styled(AbsoluteImg)`
  height: 25vh;
`;
const Ground = styled.div`
  position: absolute;
  width: 100%;
  height: 30vh;
  bottom: 0;
  background-color: #d9e2ed;

  @media ((max-width: 768px) and (max-height: 700px)) {
    height: 35vh;
  }
  @media (max-width: 300px) {
    height: 210px;
  }
`;
