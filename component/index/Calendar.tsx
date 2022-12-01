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

const LoadingContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -38%);
`;
const LoadingHeader = styled.h2`
  margin: 0;
  padding: 0;
  text-align: center;
`;

const Calendar = ({ ismycalendar }) => {
  const days = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25,
  ];
  
  // 현재 날짜 - ex) 20221129
  const date = new Date();
  const today = `${date.getFullYear()}${date.getMonth()+1}${date.getDate()}`;
  const today_day = date.getDate();
  
  const [presentModalShow, setPresentModalShow] = useState(false);
  const [notYetModalShow, setNotYeModalShow] = useState(false);
  const [selectedday, setSelectedDay] = useState(date.getDate());
  const [canOpenCalendar, setCanOpenCalendar] = useState(false);
  
  useEffect(() => {
    const selectedDayToCompare = Number(selectedday) < 10 ? "202212" + selectedday : "202212" + selectedday;
    if (Number(selectedDayToCompare) <= Number(today)) {
      setCanOpenCalendar(true);
    } else {
      setCanOpenCalendar(false);
    }
    console.log("선택한날>>>>>", selectedDayToCompare, "//", today,Number(selectedDayToCompare) <= Number(today));
  }, [selectedday]);

  const handleShow = (d) => {
    setSelectedDay(d);
    const selDate = `202212${d}`;
    if (ismycalendar) {
      // 열기 시도한 날이 오늘보다 앞의 날
      if (Number(selDate) <= Number(today)) {
        setCanOpenCalendar(true);
        setPresentModalShow(true);
      } else {
        setCanOpenCalendar(false);
        setNotYeModalShow(true);
      }
    } else {
      setPresentModalShow(true);
    }
  };

  const handleClosePresentModal = () => setPresentModalShow(false);
  const handleCloseNotYetModal = () => setNotYeModalShow(false);

  return (
    <>
      <CalendarWrapper>
        {days.map((day, idx) =>
          day > Number(today_day) ? (
            <DayImage
              src={`/assets/image/unopen/UnOpened_${idx + 1}.svg`}
              onClick={() => {handleShow(idx+1)}}
              alt={`day${idx + 1}`}
              key={day}
            />
          ) : (
            <DayImage
              src={`/assets/image/days/day${idx + 1}.svg`}
              onClick={() => {handleShow(idx+1)}}
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
        ismycalendar={ismycalendar}
        // currCalUserInfo={currCalUserInfo}
      />
      <CustomModal
        show={notYetModalShow}
        onHide={handleCloseNotYetModal}
        // TODO : 디자인 수정
        header={""}
        body={<DenyAccess />}
      />
    </>
  );
};

const DenyAccess = () => {
  return (
    <LoadingContainer>
      <img src="/assets/image/character/face_crycry.png" width="222" />
      <LoadingHeader>"날짜가...<br/>지나지 않았써...!"</LoadingHeader>
    </LoadingContainer>
  )
}


export default Calendar;
