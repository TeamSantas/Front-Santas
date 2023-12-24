import styled from "styled-components";
import { useAtom } from "jotai";
import {
  isMyCalendarAtom,
  receivedPresentListAtom,
} from "../../store/globalState";

const NumberOfReceivedPresents = ({ day, position }) => {
  const [receivedList] = useAtom(receivedPresentListAtom);
  const [isMyCalendar] = useAtom(isMyCalendarAtom);
  let numberOfReceivedPresents = 0;
  //Calendar에서 받아온 day와 /api/present/count API로 받은 리스트를 비교해 day에 받은 선물이 존재하면 count 기록. 없으면 0
  for (let i = 0; i < receivedList.length; i++) {
    const receivedDay = new Date(receivedList[i].receivedDate); //받아온 날짜 그대로 넣어주기
    if (receivedDay.getDate() === day) {
      numberOfReceivedPresents = receivedList[i].count;
      break;
    }
  }
  const presentCount =
    numberOfReceivedPresents > 100 ? "99+" : numberOfReceivedPresents;

  return numberOfReceivedPresents > 0 && isMyCalendar ? (
    <StyledNumberOfReceivedPresents alt={`day${day}_count`} position={position}>
      {presentCount}
    </StyledNumberOfReceivedPresents>
  ) : (
    <></>
  );
};

export default NumberOfReceivedPresents;

const StyledNumberOfReceivedPresents = styled.p`
  background-color: #e25320;
  color: white;
  border-radius: 100%;
  background-position: center;
  width: 20px;
  height: 20px;
  text-align: center;
  align-items: center;
  display: flex;
  justify-content: center;
  font-size: small;
  position: absolute;
  left: ${({ position }) => `${position.left}px`};
  top: ${({ position }) => `${position.top}px`};
`;
