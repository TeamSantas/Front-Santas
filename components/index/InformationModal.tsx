import { Modal } from "react-bootstrap";
import {
  CustomDescriptionBody,
  CustomFooter,
  CustomHeader,
  GreenCloseButton,
} from "../../styles/styledComponentModule";
import AdFitModal from "../advertisement/adFitModal";
import { informationModalAdID } from "../advertisement/ad-ids";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import React, { useState } from "react";
import styled from "styled-components";
import {
  header1,
  header2,
  header3,
  slide1,
  slide2,
  slide3,
} from "./informationModaltext";
import { SquareImage } from "../common/Image";

const InformationModal = (props) => {
  const [index, setIndex] = useState(0);
  // info modal
  const headers = [header1, header2, header3];
  const infoSlides = [slide1, slide2, slide3];
  const handleSlideChange = (swiper) => {
    // 슬라이드가 변경될 때마다 호출되는 함수
    const currentIndex = swiper.realIndex;
    setIndex(currentIndex);
  };
  return (
    <AdFitModal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      adfitid={informationModalAdID}
    >
      <Header>
        <GreenCloseButton onClick={props.onHide} />
      </Header>
      <CustomDescriptionBody>
        <StyledSwiper
          className="mySwiper"
          modules={[EffectFade, Navigation, Pagination]}
          navigation
          pagination={{
            type: "fraction",
          }}
          effect={"fade"}
          slidesPerView={1}
          onClickNext={(swiper) => swiper.next()}
          onSlideChange={(swiper) => handleSlideChange(swiper)}
          loop
        >
          {["guide", 1, 2, 3, 4, 5, 6].map((page, idx) => (
            <SwiperSlide key={idx}>
              <SquareImage
                src={
                  idx > 0
                    ? `/asset_ver2/image/guide/feature${page}.png`
                    : `/asset_ver2/image/guide/guide.png`
                }
                alt={`feature${idx}`}
              />
            </SwiperSlide>
          ))}
        </StyledSwiper>
      </CustomDescriptionBody>
      <CustomFooter />
    </AdFitModal>
  );
};

export default InformationModal;
const Header = styled(CustomHeader)`
  margin-top: 25px;
  text-align: center;
`;

const StyledSwiper = styled(Swiper)`
  max-width: 450px;
  width: 88vw;
  padding: 0;
  .swiper-button-prev,
  .swiper-button-next {
    color: #605b5b;
    z-index: 10;
    width: 5px;
  }
`;
