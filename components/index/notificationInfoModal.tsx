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
import React, { useState } from "react";
import styled from "styled-components";
import { SquareImage } from "../common/Image";
import { setCookie } from "cookies-next";

const NotificationInfoModal = (props) => {
  const [hidePermanent, setHidePermanent] = useState(false);
  const handleCheckHide = () => setHidePermanent((prev) => !prev);
  const handleClickClose = () => {
    if (hidePermanent) {
      setCookie("hidePermanent-notification-information", true);
    }
    props.onHide();
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
          {["new-notification", 7, 8, 9, 10, 11].map((page, idx) => (
            <SwiperSlide key={idx}>
              <SquareImage
                src={
                  idx > 0
                    ? `/asset_ver2/image/guide/feature${page}.png`
                    : `/asset_ver2/image/guide/new-notification.png`
                }
                alt={`feature${idx}`}
              />
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
