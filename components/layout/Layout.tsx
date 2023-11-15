import Header from "./Header";
import styled from "styled-components";
import { useEffect } from "react";
import Snow from "./Snow";
import Banner from "../common/Banner";

const MainWrapper = styled.div`
  background-color: #1E344F;
  padding: 22px;
  height: 100vh;
  margin: 0 auto;
  overflow: scroll;
  /* box-shadow: 0 5px 20px 5px gray; */
  position: relative;
  background-image: url("/assets/image/snow_background.png");
  background-size: cover;
  -ms-overflow-style: none; /* Explorer */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome */
  }
  @media (max-width: 600px) {
    height: 35%;
    padding: 0px;
  }
`;

const UpperWrapper = styled.div`
  position: relative;
  z-index: 1;
`;
const BackStepImg = styled.img`
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-52%);
  height: 25%;
  z-index: 0;
  overflow: hidden;
  @media (max-width: 600px) and (min-height: 800px) {
    height: 33%;
  }
  @media (max-height: 700px) {
    height: 20%;
  }
`;
const Layout = ({ children }) => {
  useEffect(() => {
    if (window.Kakao.isInitialized()) {
      window.Kakao.cleanup();
    }
    window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_API_JS_KEY);
  }, []);
  return (
    <>
      {/*서비스 종료시 띄우기*/}
      {/*<Banner />*/}
      <MainWrapper>
        <Header />
        <UpperWrapper>{children}</UpperWrapper>
        <Snow />
        <BackStepImg src={`/asset_ver2/image/step_background.png`}/>
      </MainWrapper>
    </>
  );
};

export default Layout;
