import Header from "./Header";
import styled from "styled-components";
import { useEffect } from "react";
import Snow from "./Snow";
import Banner from "../common/Banner";

const MainWrapper = styled.div`
  background-color: #181c23;
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
`;

const UpperWrapper = styled.div`
  position: relative;
  z-index: 1;
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
      <Banner />
      <MainWrapper>
        <Header />
        <UpperWrapper>{children}</UpperWrapper>
        <Snow />
      </MainWrapper>
    </>
  );
};

export default Layout;
