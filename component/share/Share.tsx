import styled from "styled-components";
import { Icons } from "../../styles/styledComponentModule";
import html2canvas from "html2canvas";
import { useState } from "react";
import CustomModal from "../CustomModal";

export const RedBtn = styled(Icons)`
  width: 100%;
  height: 72px;
  font-size: 24px;
  margin-top: 40px;
  margin-bottom: 48px;
  background: #ac473d;
  border-radius: 12px;
  z-index: 5;
  color: white;
  @media (max-width: 600px) {
    width: 100%;
    margin-top: 45px;
    height: 62px;
  }
`;

export const ShareModalImage = styled.img`
  justify-content: center;
  margin: 50px 0px 50px 0px;
  align-items: center;
  width: 25rem;
  @media (max-width: 600px) {
    width: 100%;
  }
`;

const Test = styled.div`
  background-image: url(/assets/image/shareModalImg.svg);
  background-repeat: no-repeat;
  background-position: center;
  background-size: inherit;
`;

const Share = () => {
  const [shareModalShow, setShareModalShow] = useState(false);
  const calendarShareHandler = () => {
    setShareModalShow(true);
  };
  const handleClose = () => setShareModalShow(false);

  const screenCaptureHandler = () => {
    console.log("캡쳐됨");
    html2canvas(document.getElementById("home")).then(function (canvas) {
      const url = canvas.toDataURL("my_calendar/png");
      onDownloadAs(url, "my_calendar.png");
    });
  };

  const onDownloadAs = (uri: string, filename: string) => {
    console.log("다운됨");
    const link = document.createElement("a");
    document.body.appendChild(link);
    link.href = uri;
    link.download = filename;
    link.click();
    document.body.removeChild(link);
  };

  const buttons = [
    {
      title: "카톡 공유",
      color: "#000000",
      bgcolor: "#FFD465",
    },
    {
      title: "인스타 공유",
      color: "#FFFFFF",
      bgcolor: "#3C6C54",
    },
  ];

  return (
    <>
      <RedBtn onClick={calendarShareHandler}>캘린더 공유하기</RedBtn>
      <CustomModal
        // TODO : 공유 버튼 핸들러 구현 후 추가

        // configs -------------
        show={shareModalShow}
        onHide={handleClose}
        name={"shareModalImg"}
        // body ----------------
        img={`/assets/image/shareModalImg.svg`}
        background_img={`/assets/image/shareModalImg.svg`}
        text={"쪽지를 받고 싶은 친구에게 캘린더를 공유해 봐요!"}
        // footer --------------
        buttons={buttons}
      />
    </>
  );
};

export default Share;
