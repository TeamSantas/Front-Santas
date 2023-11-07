import styled from "styled-components";
import PromotionLayout from "../component/layout/promotion-layout";
import Countdown from "../component/promotion/countdown";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

const Div = styled.div`
  text-align: center;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Calendar = styled.img`
  display: block;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  @media (max-width: 400px) {
    width: 100%;
  }
`;

const StyledSwiper = styled(Swiper)`
  height: 50vh;
  margin: 30px auto;
  background-color: #1c3249;
`;

const Section = styled.div`
  margin: 0 auto;
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  height: ${(props) => props.height};
  color: ${(props) => props.color};
  background-color: ${(props) => props.background};
  font-size: ${(props) => props.fontSize};

  @media (max-width: 400px) {
    width: 100%;
    max-width: unset;
  }
`;

const StyledImage = styled(Image)`
  width: calc(100vw - 40px);
  padding-bottom: 40px;
`;

const Promotion = () => {
  return (
    <Div>
      <Calendar src="/assets/image/promotion/calendar.svg" />
      <Section background={"white"} height={"10vh"} margin={"-10vh 0 0 0"} />
      <Section
        background={"white"}
        fontSize={"1.7rem"}
        color={"#1E344F"}
        padding={"20px 0"}
      >
        🎄 12월 1일에 만나요! 🎄
      </Section>
      <Countdown />
      <StyledSwiper
        modules={[Pagination]}
        pagination={true}
        spaceBetween={50}
        slidesPerView={1}
        loop
      >
        {[1, 2, 3, 4, 5].map((idx) => (
          <SwiperSlide key={idx}>
            <StyledImage
              src={`/assets/image/promotion/feature${idx}.svg`}
              alt={`feature${idx}`}
              fill
            />
          </SwiperSlide>
        ))}
      </StyledSwiper>
    </Div>
  );
};

Promotion.getLayout = (page) => {
  return <PromotionLayout>{page}</PromotionLayout>;
};

export default Promotion;
