import styled from "styled-components";
import PresentModal from "../receivedPresents/PresentModal";
import { useState } from "react";
import CalendarDays from "./calendar-form";

interface IOtherCalendar {
  name: string;
}

const OtherCalendar = ({ name }: IOtherCalendar) => {
  const date = new Date();
  const today_day = date.getDate();
  const [presentModalShow, setPresentModalShow] = useState(false);
  const [selectedDay, setSelectedDay] = useState(null);
  const handleClosePresentModal = () => setPresentModalShow(false);

  const handleShow = (selectedDay: number) => {
    setSelectedDay(selectedDay);

    let selectedDayToCompare: string = "202312" + selectedDay;
    selectedDayToCompare =
      Number(selectedDay) < 10
        ? "2023120" + selectedDay
        : "202312" + selectedDay;

    const today =
      Number(today_day) < 10 ? "2023120" + today_day : "202312" + today_day;

    if (Number(selectedDayToCompare) < Number(today)) {
      alert("과거로는 선물을 보낼 수 없어요 ⌛");
    } else setPresentModalShow(true);
  };

  return (
    <>
      <CalendarWrapper>
        <CalendarDays name={name} handleShow={handleShow} />
      </CalendarWrapper>
      {presentModalShow && (
        <PresentModal
          // 선택한 캘린더 날짜로 쪽지 보내는 모달을 띄움
          show={presentModalShow}
          onHide={handleClosePresentModal}
          selectedDay={selectedDay}
          isMyCalendar={false}
        />
      )}
    </>
  );
};

export default OtherCalendar;
const CalendarWrapper = styled.div`
  border-radius: 10px;
  margin: 0px auto;
  z-index: 1;
`;
