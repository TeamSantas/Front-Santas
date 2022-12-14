import styled from "styled-components";
import { CenteredFlex, Flex, Icons } from "../../styles/styledComponentModule";
import html2canvas from "html2canvas";
import { useEffect, useState } from "react";
import TicketModal from "./TicketModal";
import { getLoggedMember } from "../../api/hooks/useMember";
import PresentService from "../../api/PresentService";
import CopyModal from "../index/CopyModal";
import { getCookie } from "cookies-next";
import {setGetNumberOfReceivedPresents} from "../../api/hooks/useGetNumberOfReceivedPresents";

export const RedBtn = styled(Icons)`
  width: 35rem;
  height: 72px;
  font-size: 30px;
  font-weight: bold;
  margin-top: 5px;
  margin-bottom: 48px;
  /* background: #ac473d; */
  background: #3C6C54;
  border-radius: 12px;
  z-index: 5;
  color: white;
  @media (max-width: 600px) {
    width: 95%;
    margin-top: 5px;
    height: 52px;
    font-size: 24px;
  }
`;

const Capture = styled.div`
  position: absolute;
  background-color: rgba(0, 0, 0, 0.8);
  border-radius: 10px;
  padding: 20px;
  z-index: -1;
  /* z-index: 10; */
  font-weight: bold;
  color: black;
  width: 90%;
  @media (min-width: 500px) {
    width: 400px;
    min-width: 280px;
  }
`;
const TicketImg = styled.div`
  background-image: url("/assets/image/share/ticket_tree.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  text-align: center;
  height: 25rem;
  width: 100%;
  @media (max-width: 400px) {
    width: 100%;
  }
`;
const StyledTicketText = styled.div`
  font-size: small;
  font-weight: bold;

  @media (max-width: 280px) {
    font-size: x-small;
  }
`;
const StyledTicketDay = styled.div`
  border: 1.8px solid lightgrey;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 5px;
  padding: 5px;
  font-weight: bold;
  width: fit-content;
  text-align: center;
  margin-left: 8rem;
  margin-top: -1rem;

  @media (max-width: 280px) {
    margin-left: 5rem;
  }

  @media (min-width: 500px) {
    margin-left: 10.5rem;
  }
`;
const TicketTitle = styled.div`
  text-align: center;
  margin-top: 3rem;
  @media (max-width: 280px) {
    margin-top: 1.7rem;
    font-size: small;
  }
`;
const TextHeader = styled.p`
  font-size: ${(props) => (props.title ? "18px" : "15px")};
  margin: 5px;
  padding-top: ${(props) => (props.title ? "4.5rem" : "0px")};

  @media (max-width: 280px) {
    font-size: small;
    padding-top: ${(props) => (props.title ? "6.5rem" : "0")};
  }
`;

const DayImage = styled.img`
    width: 2.5rem;
    @media (max-width: 280px) {
      width: 2rem;
    }
`;

const Share = ({loggedId}) => {
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

  const [copyModal, setCopyModal] = useState<boolean>(false);
  const clickCopyIconHandler = () => setCopyModal(true);
  const handleCopyModalClose = () => setCopyModal(false);
  const linkCopyHandler = async () => {
    const copyURL = `https://pitapat-adventcalendar.site/${getCookie(
      "invitationLink"
    )}`;
    // console.log(copyURL)
    try {
      await navigator.clipboard.writeText(copyURL);
      screenCaptureHandler();
    } catch (e) {
      screenCaptureHandler();
      alert(
        '"내 초대링크를 복사해 보내보세요! 바로 복사를 원하신다면~? 크롬브라우저로 접속해보세요✨"'
      );
      clickCopyIconHandler();
    }
  };
  // console.log("Link copied!");

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

  const [receivePresentCount, setReceivePresentCount] = useState<any>([]);

  useEffect(() => {
    //지금 로그인한 loggedId(memeberId) 구하기 -> 상위 index 컴포넌트에서 받아옴
    const getRecivedPresentList = async () => {
      if (loggedId !== null) {
        const res = await setGetNumberOfReceivedPresents(loggedId);
        const presentList = res.data.data;
        const presentTotal = presentList.reduce((total, cur, i) => {
          return total += Number(cur.count);
        }, 0);
        setReceivePresentCount(presentTotal);
      }
    }
    getRecivedPresentList();
  },[])


  const presentNum: number = receivePresentCount;
  const randomEmoji = require("random-unicode-emoji");

  const TicketText = () => {
    const contents = `- 받은 선물 개수 : ${presentNum}개
- 크리스마스 : D-${date}
- 오늘의 행운 아이템 : ${randomEmoji.random({ count: 3 })}
    `;
    return (
      <StyledTicketText>
        <TextHeader title="title">{myData}님의 어드벤트 캘린더✨</TextHeader>
        {contents}
        {/* {Dday === -1 ? (
          <p>- 크리스마스 : 아직도 11월..</p>
        ) : (
          <p>- 크리스마스 : D-{date}</p>
        )} */}
      </StyledTicketText>
    );
  };

  const TicketDay = () => {
    return (
      <StyledTicketDay>
        <CenteredFlex>
          <TextHeader>
            오늘의 <br /> 캘린더 조각{" "}
          </TextHeader>
          {Dday === -1 ? (
            <DayImage src="/assets/image/icons/pen.png" alt="펜" />
          ) : (
            <DayImage src={imgSrc} />
          )}
        </CenteredFlex>
      </StyledTicketDay>
    );
  };

  return (
    <>
      <Capture id="ticket" isOn={shareModalShow}>
        <CopyModal
          link={`https://pitapat-adventcalendar.site/${getCookie(
            "invitationLink"
          )}`}
          show={copyModal}
          onHide={handleCopyModalClose}
        />
        <TicketImg>
          <TicketText />
          <TicketDay />
          <TicketTitle>
            <p> 두근두근 어드벤트 캘린더 </p>
          </TicketTitle>
        </TicketImg>
      </Capture>
      <RedBtn onClick={calendarShareHandler}>기념티켓 발급</RedBtn>
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
