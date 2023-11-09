import styled from "styled-components";
import PromotionLayout from "../components/layout/upcoming-layout";
import Countdown from "../components/upcoming/countdown";
import { Image } from "../components/common/Image";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import Link from "next/link";

const Div = styled.div`
  text-align: center;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Calendar = styled.img`
  display: block;
  margin: 0 auto;
  @media (max-width: 400px) {
    width: 100%;
  }
`;

const StyledSwiper = styled(Swiper)`
  max-width: 50%;
  padding-bottom: 50px;
  .swiper-button-prev {
    background-image: url(/assets/image/upcoming/prev.png);
  }
  .swiper-button-next {
    background-image: url(/assets/image/upcoming/next.png);
  }
  .swiper-button-prev,
  .swiper-button-next {
    color: white;
    padding: 20px;
    @media (max-width: 400px) {
      padding: 10px;
    }
  }

  @media (max-width: 786px) {
    max-width: unset;
  }
`;

const Section = styled.div`
  margin: 0 auto;
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  height: ${(props) => props.height};
  color: ${(props) => props.color};
  background-color: ${(props) => props.background};
  font-size: ${(props) => props.fontSize};
  text-shadow: ${(props) => props.textShadow};

  @media (max-width: 400px) {
    width: 100%;
    max-width: unset;
  }
`;
const ButtonWrapper = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffcd5a;
`;
const StyledLink = styled(Link)`
  border-radius: 10px;
  padding: 10px 20px;
  text-decoration: none;
  color: #1c3249;
`;

const Promotion = () => {
  return (
    <>
      <Div>
        <Calendar src="/assets/image/upcoming/calendar.svg" alt="calendar" />
        <Section
          background={"#F9F9F9"}
          height={"10vh"}
          margin={"-10vh 0 0 0"}
        />
        <Section
          background={"#F9F9F9"}
          fontSize={"1.7rem"}
          color={"#1E344F"}
          padding={"20px 0"}
          textShadow={
            "0 0 12px #fff, 0 0 2px #fff, 0 0 12px #fff, 0 0 2px #0072ff, 0 0 8px #0251b1, 0 0 22px #62c1db, 0 0 22px #4eccff, 0 0 10px #69ebff"
          }
        >
          12월 1일에 만나요!
        </Section>
        <Countdown />
        <ButtonWrapper>
          <StyledLink
            href={"https://forms.gle/nDu352ZzcwwhLXsK8"}
            target="_blank"
          >
            ⏰ 출시 알람 신청하기 ⏰
          </StyledLink>
        </ButtonWrapper>
        <StyledSwiper
          modules={[EffectFade, Navigation, Pagination]}
          navigation
          pagination={{
            clickable: true,
          }}
          effect={"fade"}
          spaceBetween={50}
          slidesPerView={1}
          onClickNext={(swiper) => swiper.next()}
          loop
        >
          {[1, 2, 3, 4, 5].map((idx) => (
            <SwiperSlide key={idx}>
              <Image
                src={`/assets/image/upcoming/feature-${idx}.png`}
                alt={`feature${idx}`}
                fill
              />
            </SwiperSlide>
          ))}
        </StyledSwiper>
      </Div>
    </>
  );
};

Promotion.getLayout = (page) => {
  return <PromotionLayout>{page}</PromotionLayout>;
};

export default Promotion;
