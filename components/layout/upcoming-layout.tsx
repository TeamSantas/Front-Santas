import styled from "styled-components";
import Snow from "./Snow";
import Footer from "./Footer";
import KakaoAdFit from "../advertisement/KakaoAdFit";

const PromotionWrapper = styled.div`
  background-color: #1c3249;
  height: 100vh;
  margin: 0 auto;
  overflow: scroll;
  position: relative;
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

const PromotionLayout = ({ children }) => {
  return (
    <PromotionWrapper>
      <UpperWrapper>{children}</UpperWrapper>
      <Snow />
      <KakaoAdFit/>
      <Footer />
    </PromotionWrapper>
  );
};

export default PromotionLayout;
