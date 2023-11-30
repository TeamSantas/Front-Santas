import styled from "styled-components";
import {useAtom} from "jotai";
import {isMyCalendarAtom, receivedPresentListAtom} from "../../store/globalState";


const NumberOfReceivedPresents = ({ day }) => {
  const [receivedList] = useAtom(receivedPresentListAtom);
  const [isMyCalendar] = useAtom(isMyCalendarAtom);
  let numberOfReceivedPresents = 0;
  //Calendar에서 받아온 day와 /api/present/count API로 받은 리스트를 비교해 day에 받은 선물이 존재하면 count 기록. 없으면 0
  for(let i=0; i<receivedList.length; i++){
    const receivedDay = new Date(receivedList[i].receivedDate);  //받아온 날짜 그대로 넣어주기
    if( receivedDay.getDate() === day) {
      numberOfReceivedPresents = receivedList[i].count;
      break;
    }
  }
  const presentCount =
    numberOfReceivedPresents > 100 ? "99+" : numberOfReceivedPresents;

  return numberOfReceivedPresents > 0 && isMyCalendar ?
    ((day === 1 || day === 14 || day ===25) ?
        <WideStyledNumberOfReceivedPresents>
          {presentCount}
        </WideStyledNumberOfReceivedPresents>
      :<StyledNumberOfReceivedPresents>
          {presentCount}
        </StyledNumberOfReceivedPresents>
      )
   : (
    <></>
  );
};

export default NumberOfReceivedPresents;


const StyledNumberOfReceivedPresents = styled.p`
  background-color: #E25320;
  border-radius: 100%;
  background-position: center;
  width: 20px;
  height: 20px;
  text-align: center;
  align-items: center;
  display: flex;
  justify-content: center;
  position: absolute;
@media (max-width: 320px) {
    font-size: x-small;
    margin-left: 1.7rem;
  }
  @media (min-width: 320px) and (max-width: 600px) {
    font-size: small;
    width: 25px;
    height: 25px;
    margin-left: 3rem;
  }
  @media (min-width: 375px) and (max-width: 600px) {
    margin-left: 2rem;width: 20px;
    height: 20px;
  }
  @media (min-width: 601px) {
    font-size: large;
    background-size: cover;
    width: 35px;
    height: 35px;
    margin-left: 3rem;
  }
  @media (min-width: 1000px){
    font-size: small;
    width: 20px;
    height: 20px;
    margin-left: 2.5rem;
  }
`;
const WideStyledNumberOfReceivedPresents = styled(StyledNumberOfReceivedPresents)`
  margin-left: 3rem;
  @media (max-height: 1000px) {
    margin-left: 6rem;
  }
  @media (max-height: 800px) {
    margin-left: 4.7rem;
  }
  @media (max-height: 600px) {
    margin-left: 4rem;
    width: 20px;
    height: 20px;
  }
  @media (max-height: 480px) {
    margin-left: 3rem;
    width: 20px;
    height: 20px;
  }
  @media (max-height: 300px) {
    margin-left: 3rem;
  }
  //@media (max-width: 320px) {
  //  margin-left: 3.4rem;
  //}
  //@media (min-width: 320px) and (max-width: 600px) {
  //  margin-left: 6rem;
  //}
  //@media (min-width: 375px) and (max-width: 600px) {
  //  margin-left: 6rem;
  //}
  //@media (min-width: 601px) {
  //  margin-left: 8rem;
  //}
  //@media (min-width: 1000px){
  //  margin-left: 5.5rem;
  //}
`;