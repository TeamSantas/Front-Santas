import styled from "styled-components";
import PresentModal from "./PresentModal"
import { useState } from "react";

const CalendarWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  margin-bottom: 24px;
`

const DayImage = styled.img`
    justify-content: center;
    padding: 2px;
    align-items: center;
    width: 7rem;
      @media (max-width: 600px) {
        width: 100%;
      }
`;

const Calendar = () => {
    const days = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];
    const [presentCardsListShow, setPresentCardsListShow] = useState(false);
    const [selectedDay, setSelectedDay] = useState("")
    
    const handleShow = (e) => {
        setSelectedDay(e.target.alt.split('day')[1])
        setPresentCardsListShow(true)
    };
    const handleClose = () => setPresentCardsListShow(false);


    return (
        <>
            <CalendarWrapper>
                {days.map((day, idx)=>(
                    <DayImage 
                        src={`/asset/image/days/day${idx+1}.svg`}
                        onClick={handleShow} 
                        alt={`day${idx+1}`}
                        key={day}
                    />
                    ))
                }
            </CalendarWrapper>
            <PresentModal 
                show={presentCardsListShow}
                onHide={handleClose}
                selectedDay={selectedDay}
            /> 
        </>
        
    )
}



export default Calendar