import Image from "next/image";
import {useEffect, useState} from "react";
import styled from "styled-components";
import InformationModal from "../index/InformationModal";
import InfoModal from "../modals/InfoModal";
import {getCookie, setCookie} from "cookies-next";

export const QuestionLink = () => {
  const [informationModalShow, setInformationModalShow] = useState(false);
  const [isDisplay, setIsDisplay] = useState(true);
  const handleInformationModalClose = () => setInformationModalShow(false);
  const clickInformationIconHandler = () => {
    setIsDisplay(false);
    setInformationModalShow(true);
    setCookie("info",true);
  };
  useEffect(() => {
    const isClicked = getCookie("info");
    if(isClicked) setIsDisplay(false);
  }, []);

  return (
    <>
      <InfoModal isDisplay={isDisplay}/>
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
  bottom: calc(env(safe-area-inset-bottom) + 70px);
  z-index: 100;
`;
