import styled from "styled-components";
import PresentModal from "../receivedPresents/PresentModal";
import { useEffect, useState } from "react";
import { setGetCurrCalendarUserInfo } from "../../api/hooks/useGetCurrCalendarUserInfo";
import { FriendsData } from "../../util/type";
import CustomModal from "../common/CustomModal";

const CalendarWrapper = styled.div`
  padding: 10px;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.1);
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  margin: 24px auto;
`;

const DayImage = styled.img`
  justify-content: center;
  padding: 2px;
  align-items: center;
  cursor: pointer;
  width: 7rem;
  z-index: 10;
  @media (max-width: 600px) {
    width: 100%;
  }
`;

const Calendar = (props) => {
  console.log(props, "캘린더프롭스>>>>>>>")
  const days = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25,
  ];

  // 현재 날짜 - ex) 20221129
  const date = new Date();
  const dateArray = date.toLocaleDateString().split(".").join("").split(" ");
  const today_day = dateArray[2];
  const today = dateArray.join("");

  const [presentModalShow, setPresentModalShow] = useState(false);
  const [notYetModalShow, setNotYeModalShow] = useState(false);

  const [selectedday, setSelectedDay] = useState(0);
  const [canOpenCalendar, setCanOpenCalendar] = useState(true);

  // 캘린더 오픈 가능 여부 체크
  const selectedDayToCompare =
    Number(selectedday) < 10 ? "2022120" + selectedday : "202212" + selectedday;

  // useEffect(() => {
  //   if (Number(selectedDayToCompare) <= Number(today)) {
  //     setCanOpenCalendar(true);
  //   } else {
  //     setCanOpenCalendar(false);
  //   }
  // }, [selectedday]);

  const handleShow = (e) => {
    setSelectedDay(e.target.alt.split("day")[1]);
    if (canOpenCalendar) {
      setPresentModalShow(true);
    } else {
      setNotYeModalShow(true);
    }
  };
  const handleClosePresentModal = () => setPresentModalShow(false);
  const handleCloseNotYetModal = () => setNotYeModalShow(false);

  // 캘린더의 주인 유저 정보(로그인한 유저와 다를수도있음)
  const [currCalUserInfo, setCurrCalUserInfo] = useState<FriendsData>();

  useEffect(() => {
    const getCurrCalendarUserData = async () => {
      // TODO : 현재 캘린더의 invitation link로 변경
      // 내 캘린더일 때(/)와 친구 캘린더일 때(/invitationLink) path 다르니 주의
      if (props.link) {
        try {
          const res = await setGetCurrCalendarUserInfo(
            props.link
          );
          console.log(res, "🙏🙏🙏🙏🙏currCalUserInfo 저장🙏🙏🙏🙏")
          setCurrCalUserInfo(res);
        } catch (e) {
          console.log("getCurrCalendarUserData", e);
        }
      }
      // console.log("캘린더 주인 유저 정보 >>> ", res);
    };
    getCurrCalendarUserData();
    console.log("야야 되는거맞냐????? From calendar.tsx")
  }, [currCalUserInfo]);

  return (
    <>
      <CalendarWrapper>
        {days.map((day, idx) =>
          day > Number(today_day) ? (
            <DayImage
              src={`/assets/image/days/day${idx + 1}.svg`}
              onClick={handleShow}
              alt={`day${idx + 1}`}
              key={day}
            />
          ) : (
            <DayImage
              src={`/assets/image/unopen/UnOpened_${idx + 1}.svg`}
              onClick={handleShow}
              alt={`day${idx + 1}`}
              key={day}
            />
          )
        )}
      </CalendarWrapper>
      <PresentModal
        show={presentModalShow}
        onHide={handleClosePresentModal}
        selectedday={selectedday}
        ismycalendar={props.ismycalendar}
        currCalUserInfo={currCalUserInfo}
      />
      <CustomModal
        show={notYetModalShow}
        onHide={handleCloseNotYetModal}
        // TODO : 디자인 수정
        header={"아직 못 열어"}
        text={"날짜가 지나야 돼"}
      />
    </>
  );
};

export default Calendar;
