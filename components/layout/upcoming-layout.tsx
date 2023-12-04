import styled from "styled-components";
import Snow from "./Snow";
import Footer from "./Footer";
import KakaoAdFit from "../advertisement/KakaoAdFit";
import { upcomingAdID } from "../advertisement/ad-ids";

const PromotionWrapper = styled.div`
  background-color: #1c3249;
  height: 100%;
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

const AdWrapper = styled.div`
  margin-top: 50px;
`;

const PromotionLayout = ({ children }) => {
  return (
    <PromotionWrapper>
      <UpperWrapper>{children}</UpperWrapper>
      <Snow />
      <AdWrapper>
        <KakaoAdFit id={upcomingAdID} />
      </AdWrapper>
      <Footer />
    </PromotionWrapper>
  );
};

export default PromotionLayout;
