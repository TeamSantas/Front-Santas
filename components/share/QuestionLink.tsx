import Image from "next/image";
import { useState } from "react";
import styled from "styled-components";
import InformationModal from "../index/InformationModal";

export const QuestionLink = () => {
  const [informationModalShow, setInformationModalShow] = useState(false);
  const handleInformationModalClose = () => setInformationModalShow(false);
  const clickInformationIconHandler = () => {
    setInformationModalShow(true);
  };
  //TODO: 서비스 소개 Info 보여주는 기능 구현하기
  return (
    <>
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
  bottom: 70px;
  z-index: 100;
`;
