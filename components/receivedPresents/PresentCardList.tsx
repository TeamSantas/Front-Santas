import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { setGetDayPresents } from "../../api/hooks/useGetDayPresents";
import MemberService from "../../api/MemberService";
import { storeContext } from "../../store/Store";
import { Flex } from "../../styles/styledComponentModule";
import Card from "./Card";
import Image from "next/image";

const TabFlex = styled(Flex)`
  flex-direction: row;
  flex-wrap: wrap;
`;

const LoadingContainer = styled.div`
  height: 400px;
  max-height: 50rem;
  text-align: center;
`;
const LoadingHeader = styled.h2`
  margin: 0;
  padding: 0;
  text-align: center;
`;

const PresentCardList = ({ selectedday }) => {
  const receivedDay =
    selectedday < 10 ? `2022-12-0${selectedday}` : `2022-12-${selectedday}`;
  const [receivedPresentList, setReceivedPresentList] = useState([]);

  useEffect(() => {
    const initReceivedPresentList = async () => {
      const receiverId = (
          await MemberService.getLoggedMember()
      ).data.data.member.id;
      const res = await setGetDayPresents(receiverId, receivedDay);
      console.log("receivedPresentList >>> ", res.content)
      //TODO: 받은 선물 목데이터-----------
      const mockPresentData = [
        {
          "id": 0,
          "senderId": 0,
          "receiverName": "하얀코입니다",
          "nickname": "팀산타즈",
          "isPublic": true,
          "imageURL": "assets/image/face.svg",
          "title": "내가 보내는 선물이야.돼라 좀!!",
          "contents": "대충 내용내용 편지편지 좋은말 좋은 말",
          "receivedDate": "2023-11-19",
          "isRead": true
        },
        {
          "id": 0,
          "senderId": 0,
          "receiverName": "하얀코입니다",
          "nickname": "팀산타즈",
          "isPublic": true,
          "imageURL": "assets/image/face.svg",
          "title": "내가 보내는 선물이야.돼라 좀!!",
          "contents": "대충 내용내용 편지편지 좋은말 좋은 말",
          "receivedDate": "2023-11-19",
          "isRead": true
        }
      ]
      console.log("========mockData", mockPresentData);
      setReceivedPresentList(mockPresentData);
      // TODO---------목데이터 필요 없으면 이거 밑에꺼 주석풀기!
      // setReceivedPresentList(res.content);
    };
    initReceivedPresentList();
  }, []);

  return (
    <>
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
             alt="우는사진"/>
            <LoadingHeader>&quot;받은선물이...없써...!&quot;</LoadingHeader>
            <p>
              (아직 받은 선물이 없어요, 내 캘린더 링크를 공유해 친구에게 선물을
              받아보는건 어떨까요?)
            </p>
          </div>
        </LoadingContainer>
      )}
    </>
  );
};

export default PresentCardList;
