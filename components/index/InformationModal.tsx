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
import styled from "styled-components";
import { SquareImage } from "../common/Image";

const InformationModal = (props) => {
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
          loop
        >
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((page, idx) => (
            <SwiperSlide key={`feature${page}${idx}`}>
              <SquareImage
                src={`/asset_ver2/image/guide/feature${page}.png`}
                alt={`feature${idx}`}
                loading="lazy"
              />
              <div className="swiper-lazy-preloader" />
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
