import { useEffect, useState } from "react";
import styled from "styled-components";
import { setGetDayPresents } from "../../api/hooks/useGetDayPresents";
import Card from "./Card";
import Image from "next/image";
import { useAuthContext } from "../../store/contexts/components/hooks";
import { TabFlex } from "../tab/ReceivedPresentList";

const LoadingContainer = styled.div`
  height: 40vh;
  text-align: center;
  @media (max-width: 380px){
    height: 50vh;
  }
`;

const PresentCardList = ({ selectedday }) => {
  const receivedDay =
    selectedday < 10 ? `2023-12-0${selectedday}` : `2023-12-${selectedday}`;
  const [receivedPresentList, setReceivedPresentList] = useState([]);
  const userData = useAuthContext();

  const initReceivedPresentList = async () => {
    const receiverId = userData.storeUserData.id;
    //TODO: 특정날짜에 받은 선물(작동잘됨. 작업 후 주석풀기)
    const res = await setGetDayPresents(receiverId, receivedDay);
    setReceivedPresentList(res.content);
  };

  useEffect(() => {
    initReceivedPresentList();
  }, []);

  return (
    <>
      {/* TODO: loading 아닐 때도 조건에 추가*/}
      {receivedPresentList.length > 0 ? (
        <TabFlex>
          {receivedPresentList.map((present) => (
            <Card
              key={present.id}
              id={present.id}
              date={present.receivedDate}
              from={present.nickname}
              contents={present.contents}
              type={"NONE"}
              thumbnail={present.imageURL}
              isRead={present.isRead}
            />
          ))}
        </TabFlex>
      ) : (
        <LoadingContainer>
          <div style={{ maxWidth: "18rem", margin: "0 auto" }}>
            <Image
              src="/assets/image/character/face_crycry.png"
              width="222"
              height="222"
              style={{ display: "block", margin: "0 auto", marginTop: "20px" }}
              alt="우는사진"
            />
            <p>
              아직 받은 선물이 없어요. 🥲
              <br />
              <br />내 캘린더 링크를 공유해 친구에게 선물을 받아보는건 어떨까요?
            </p>
          </div>
        </LoadingContainer>
      )}
    </>
  );
};

export default PresentCardList;
