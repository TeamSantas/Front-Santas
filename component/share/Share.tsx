import styled, {css} from "styled-components";
import {Icons} from "../../styles/styledComponentModule";
import html2canvas from "html2canvas";
import {useState} from "react";
import TicketModal from "./TicketModal";

export const RedBtn = styled(Icons)`
  width: 35rem;
  height: 72px;
  font-size: 30px;
  font-weight: bold;
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
    font-size: 24px;
  }
`;

const Capture = styled.div`
  position: absolute;  
  background-color: rgba(0,0,0,.8);
  border-radius: 10px;
  padding: 20px;
  z-index:-1;
`
const TicketImg = styled.img`
  width: 400px;
  @media (max-width: 600px) {
    width: 400px;
  }
`
const TicketText = styled.div`
  padding: 10px;
  font-weight: bold;
  position: absolute;
  top: 110px;
  left: 110px;
`
const TicketDay = styled.div`
  border: solid 1.8px lightgrey;
  background-color: rgba(255,255,255,.5);
  border-radius: 5px;
  padding: 5px;
  font-weight: bold;
  position: absolute;
  top: 210px;
  right: 80px;
  text-align: center;
`
const TicketTitle = styled.div`
  position: absolute;
  top: 410px;
  left: 160px;
  text-align: center;
`

const Share = () => {
  const [shareModalShow, setShareModalShow] = useState(false);
  const [TicketURL, setTicketURl] = useState('');
  const calendarShareHandler = () => {
    screenCaptureHandler();
    setShareModalShow(true);
  };
  const handleClose = () => setShareModalShow(false);

  const screenCaptureHandler = () => {
    console.log("캡쳐됨");
    html2canvas(document.getElementById("ticket")).then(function (canvas) {
      setTicketURl(canvas.toDataURL("my_calendar/png"));
    });
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

  const memberName = "하얀코";
  const presentNum = 10;
  const presentDate = 8;
  const Dday = 15;

  return (
    <>
      <Capture id="ticket" isOn={shareModalShow}>
        <div>
          <TicketImg src='/assets/image/share/ticket_tree.png' alt='티켓'/>
          <TicketText>
            <h5>{memberName}님의 어드벤트 캘린더✨</h5>
            <h6>- 받은 선물 개수 : {presentNum}개</h6>
            <h6>- 받은 날짜 수 : {presentDate}일</h6>
            <h6>- 크리스마스 : D-{Dday}</h6>
          </TicketText>
          <TicketDay>
            <p> 오늘의 캘린더 조각 </p>
            <img src='/assets/image/days/day10.svg'/>
          </TicketDay>
          <TicketTitle>
            <p> 두근두근 어드벤트 캘린더 </p>
          </TicketTitle>
        </div>
      </Capture>
      <RedBtn onClick={calendarShareHandler}>캘린더 공유하기</RedBtn>
      <TicketModal
        // TODO : 공유 버튼 핸들러 구현 후 추가

        // configs -------------
        show={shareModalShow}
        onHide={handleClose}
        name={"shareModalImg"}
        // body ----------------
        img={TicketURL}
        background_img={TicketURL}
        text={""}
        // footer --------------
        buttons={buttons}
      />
    </>
  );
};

export default Share;
