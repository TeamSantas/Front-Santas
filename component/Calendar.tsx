import styled from "styled-components";
import PresentModal from "./PresentModal";
import { useState } from "react";

const CalendarWrapper = styled.div`
  padding: 10px;
  border-radius: 10px;
  background-color: rgba(0,0,0,.1);
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
  const days = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25,
  ];
  const [presentModalShow, setPresentModalShow] = useState(false);
  const [selectedday, setSelectedDay] = useState("");

  const handleShow = (e) => {
    setSelectedDay(e.target.alt.split("day")[1]);
    setPresentModalShow(true);
  };
  const handleClose = () => setPresentModalShow(false);

  return (
    <>
      <CalendarWrapper>
        {days.map((day, idx) => (
          <DayImage
            src={`/assets/image/days/day${idx + 1}.svg`}
            onClick={handleShow}
            alt={`day${idx + 1}`}
            key={day}
          />
        ))}
      </CalendarWrapper>
      <PresentModal
        show={presentModalShow}
        onHide={handleClose}
        selectedday={selectedday}
        ismycalendar={props.ismycalendar}
      />
    </>
  );
};

export default Calendar;
