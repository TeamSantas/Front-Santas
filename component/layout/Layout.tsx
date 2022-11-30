import Header from "./Header";
import styled from "styled-components";
import { Suspense, useEffect } from "react";
import Snows from "./Snows";

const MainWrapper = styled.div`
  background-color: #181c23;
  padding: 22px;
  height: 100vh;
  margin: 0 auto;
  overflow: scroll;
  box-shadow: 0 5px 20px 5px gray;
  position: relative;
  background-image: url("/assets/image/snow_background.png");
  background-size: cover;
`;

const Layout = ({ children }) => {
  useEffect(() => {
    if (window.Kakao.isInitialized()) {
      window.Kakao.cleanup();
    }
    window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_API_JS_KEY);
  }, []);
  return (
    <MainWrapper>
      {/*<Suspense fallback={<h1>로딩중</h1>}>*/}
      {/*    <Snows/>*/}
      {/*</Suspense>*/}
      <Header />
      {children}
    </MainWrapper>
  );
};

export default Layout;
