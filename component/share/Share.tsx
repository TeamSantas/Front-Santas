import styled from "styled-components";
import { Icons } from "../../styles/styledComponentModule";
import html2canvas from "html2canvas";
import { useEffect, useState } from "react";
import TicketModal from "./TicketModal";
import { getLoggedMember } from "../../api/hooks/useMember";
import PresentService from "../../api/PresentService";
import {getCookie} from "../../businesslogics/cookie";

export const RedBtn = styled(Icons)`
  width: 35rem;
  height: 72px;
  font-size: 30px;
  font-weight: bold;
  margin-top: 15px;
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
  background-color: rgba(0, 0, 0, 0.8);
  border-radius: 10px;
  padding: 20px;
  z-index: -1;
  font-weight: bold;
  color: black;
`;
const TicketImg = styled.img`
  width: 400px;
  @media (max-width: 600px) {
    width: 400px;
  }
`;
const TicketText = styled.div`
  padding: 10px;
  font-weight: bold;
  position: absolute;
  top: 110px;
  left: 95px;
`;
const TicketDay = styled.div`
  border: solid 1.8px lightgrey;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 5px;
  padding: 5px;
  font-weight: bold;
  position: absolute;
  top: 210px;
  right: 80px;
  text-align: center;
`;
const TicketTitle = styled.div`
  position: absolute;
  top: 410px;
  left: 160px;
  text-align: center;
`;

const Share = () => {
  const [shareModalShow, setShareModalShow] = useState(false);
  const [TicketURL, setTicketURl] = useState("");
  const [myData, setMyData] = useState(null);

  const getMyData = async () => {
    try {
      const res = await getLoggedMember();
      setMyData(res.nickname);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getMyData();
  }, []);

  const calendarShareHandler = () => {
    linkCopyHandler();
    setShareModalShow(true);
  };
  const handleClose = () => setShareModalShow(false);

  const linkCopyHandler = async () => {
    getCookie('invitationLink')
    const copyURL = `https://pitapat-adventcalendar.site/${getCookie('invitationLink')}`
    try {
      await navigator.clipboard.writeText(copyURL);
      screenCaptureHandler();
      alert('내 캘린더 링크가 클립보드에 복사되었습니다.');
    } catch (e) {
      screenCaptureHandler();
      alert('내 캘린더 링크복사에 실패하였습니다');
    }
    // console.log("Link copied!");
  };

  const screenCaptureHandler = () => {
    console.log("캡쳐됨");
    html2canvas(document.getElementById("ticket")).then(function (canvas) {
      setTicketURl(canvas.toDataURL("my_calendar/png"));
    });
  };

  let today = new Date();
  const DDAY = new Date("2022-12-25");
  let date: number = DDAY.getDate() - today.getDate();

  let Dday: number = -1;
  if (date > 0) Dday = today.getDate();
  const imgSrc = `/assets/image/days/day${Dday}.svg`;

  const [receivedPresentListNum, setReceivedPresentListNum] = useState(0);
  const getMyPresentListNum = async () => {
    try {
      const res = await PresentService.getLoggedUserPresentList();
      setReceivedPresentListNum(res.data.data.totalElements);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getMyPresentListNum();
  }, []);

  const presentNum: number = receivedPresentListNum;
  const randomEmoji = require("random-unicode-emoji");

  return (
    <>
      <Capture id="ticket" isOn={shareModalShow}>
        <div>
          <TicketImg src="/assets/image/share/ticket_tree.png" alt="티켓" />
          <TicketText>
            <h5>{myData}님의 어드벤트 캘린더✨</h5>
            <h6>- 받은 선물 개수 : {presentNum}개</h6>
            {Dday === -1 ? (
              <h6>- 크리스마스 : 아직도 11월..</h6>
            ) : (
              <h6>- 크리스마스 : D-{date}</h6>
            )}
            <h6>[오늘의 행운의 아이템] </h6>
            <h5> &nbsp; &nbsp;{randomEmoji.random({ count: 3 })}</h5>
          </TicketText>
          <TicketDay>
            <p> 오늘의 캘린더 조각 </p>
            {Dday === -1 ? (
              <img src="/assets/image/icons/pen.png" alt="펜" />
            ) : (
              <img src={imgSrc} />
            )}
          </TicketDay>
          <TicketTitle>
            <p> 두근두근 어드벤트 캘린더 </p>
          </TicketTitle>
        </div>
      </Capture>
      <RedBtn onClick={calendarShareHandler}>내 캘린더 & 티켓 공유</RedBtn>
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
      />
    </>
  );
};

export default Share;
