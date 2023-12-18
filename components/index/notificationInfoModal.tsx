import { Form } from "react-bootstrap";
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
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { SquareImage } from "../common/Image";

const NotificationInfoModal = (props) => {
  const [hidePermanent, setHidePermanent] = useState(false);
  const handleCheckHide = () => setHidePermanent((prev) => !prev);
  const handleClickClose = () => {
    if (hidePermanent) {
      localStorage.setItem("hidePermanent_notification_information", "true");
    }
    props.onHide();
  };

  useEffect(() => {
    const hidePermanent_notification_information = localStorage.getItem(
      "hidePermanent_notification_information"
    );
    if (
      hidePermanent_notification_information !== null &&
      hidePermanent_notification_information
    ) {
      setHidePermanent(JSON.parse(hidePermanent_notification_information));
    }
  }, []);

  return (
    <AdFitModal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      adfitid={informationModalAdID}
    >
      <Header>
        <GreenCloseButton onClick={handleClickClose} />
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
          {[7, 8, 9, 10, 11, 12].map((page, idx) => (
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
      <StyledFooter>
        <Form.Check
          type="checkbox"
          id={`default-checkbox`}
          label={`다시 보지 않기`}
          onClick={handleCheckHide}
          checked={hidePermanent}
        />
      </StyledFooter>
    </AdFitModal>
  );
};

export default NotificationInfoModal;
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

const StyledFooter = styled(CustomFooter)`
  padding: 5px 20px;
`;
