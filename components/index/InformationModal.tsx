import {Modal} from "react-bootstrap";
import {CustomDescriptionBody, CustomFooter, CustomHeader, GreenCloseButton,} from "../../styles/styledComponentModule";
import AdFitModal from "../advertisement/adFitModal";
import {informationModalAdID} from "../advertisement/ad-ids";
import {Swiper, SwiperSlide} from "swiper/react";
import {EffectFade, Navigation, Pagination} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import React, {useState} from "react";
import styled from "styled-components";
import {header_1, header_2, header_3, slide_1, slide_2, slide_3} from "./informationModaltext";

const InformationModal = (props) => {
  const [index, setIndex] = useState<number>(0);
  // info modal
  const headers = [header_1, header_2, header_3];
  const infoSlides = [slide_1,slide_2,slide_3]
  const handleSlideChange = (swiper) => {
    // 슬라이드가 변경될 때마다 호출되는 함수
    const currentIndex = swiper.activeIndex;
    setIndex((currentIndex));
    console.log("현재 슬라이드 인덱스:", currentIndex);
  };
  return (
    <AdFitModal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      adFitId={informationModalAdID}
    >
      <Header>
        <Modal.Title id="contained-modal-title-vcenter">{headers[index]}</Modal.Title>
        <GreenCloseButton onClick={props.onHide} />
      </Header>
      <CustomDescriptionBody>
        <StyledSwiper
          className="mySwiper"
          modules={[EffectFade, Navigation, Pagination]}
          navigation
          pagination={{
            type: 'fraction',
          }}
          effect={"fade"}
          slidesPerView={1}
          onClickNext={(swiper) => swiper.next()}
          onSlideChange={(swiper) => handleSlideChange(swiper)}
        >
          {infoSlides.map((text, idx) => (
            <SwiperSlide key={idx}>
              <Text>
                {text}
              </Text>
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
    //버튼 보이고싶으면 풀기
    display: none;
  }
`;

const Text = styled.div`
  width: 100%;
  background-color: #fff;
  padding: 30px 50px;
  margin: 0 auto;
`;