import { useEffect, useState } from "react";
import styled from "styled-components";
import { setGetDayPresents } from "../../api/hooks/useGetDayPresents";
import MemberService from "../../api/MemberService";

const StyledNumberOfReceivedPresents = styled.p`
  background-image: url("/assets/image/icons/heart.svg");
  background-repeat: no-repeat;
  background-position: center;
  width: 20px;
  text-align: center;
  position: absolute;
  @media (max-width: 320px) {
    font-size: x-small;
    margin-left: 1.7rem;
  }
  @media (min-width: 320px) and (max-width: 600px) {
    font-size: small;
    width: 40px;
    margin-left: 1.5rem;
  }
  @media (min-width: 375px) and (max-width: 600px) {
    margin-left: 2rem;
  }
  @media (min-width: 601px) {
    font-size: x-large;
    background-size: cover;
    width: 46px;
    margin-left: 4rem;
  }
`;
const NumberOfReceivedPresents = ({ day, receivedList }) => {
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

  return numberOfReceivedPresents > 0 ? (
    <StyledNumberOfReceivedPresents>
      {presentCount}
    </StyledNumberOfReceivedPresents>
  ) : (
    <></>
  );
};

export default NumberOfReceivedPresents;
