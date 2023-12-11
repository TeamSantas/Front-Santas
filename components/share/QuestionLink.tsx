import Image from "next/image";
import { useEffect, useState } from "react";
import styled from "styled-components";
import InformationModal from "../index/InformationModal";
import InfoModal from "../modals/InfoModal";
import { getCookie, setCookie } from "cookies-next";

export const QuestionLink = () => {
  const [informationModalShow, setInformationModalShow] = useState(false);
  const [isDisplayInfo, setIsDisplayInfo] = useState(false); //사용법 말풍선 노출여부
  const handleInformationModalClose = () => setInformationModalShow(false);
  const clickInformationIconHandler = () => {
    setIsDisplayInfo(false);
    setInformationModalShow(true);
    setCookie("info", true);
  };
  useEffect(() => {
    const isClicked = getCookie("info");
    if (!isClicked) setIsDisplayInfo(true);
  }, []);

  return (
    <>
      <InfoModal
        isDisplay={isDisplayInfo}
        text={"💌 사용법을 알아보세요!"}
        direction={"down"}
      />
      <ShareBtn
        src={`/asset_ver2/image/btn/question_btn.png`}
        width={44}
        height={44}
        onClick={clickInformationIconHandler}
        alt={"링크복사버튼"}
      />
      <InformationModal
        show={informationModalShow}
        onHide={handleInformationModalClose}
      />
    </>
  );
};

const ShareBtn = styled(Image)`
  position: absolute;
  cursor: pointer;
  right: 55px;
  bottom: 90px;
  z-index: 100;
`;
