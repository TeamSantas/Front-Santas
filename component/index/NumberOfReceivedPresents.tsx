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
const NumberOfReceivedPresents = ({ day }) => {
  const receivedDay = day < 10 ? `2022-12-0${day}` : `2022-12-${day}`;
  const [numberOfReceivedPresents, setReceivedPresentList] = useState(0);

  // 날짜별 선물의 개수를 구해 length로 세팅한다.
  useEffect(() => {
    const initReceivedPresentList = async () => {
      const receiverId = await (
        await MemberService.getLoggedMember()
      ).data.data.member.id;
      // console.log(receiverId)
      const res = await setGetDayPresents(receiverId, receivedDay);
      // console.log("receivedPresentList >>> ", res.content.length)
      setReceivedPresentList(res.content.length);
    };
    initReceivedPresentList();
  }, [receivedDay]);

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
