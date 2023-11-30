import styled from "styled-components";
import Card from "../receivedPresents/Card";
import { useEffect, useState } from "react";
import PresentService from "../../api/PresentService";
import { useRouter } from "next/router";

const ReceivedPresentList = () => {
  const router = useRouter();
  const [receivedPresentList, setReceivedPresentList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const presentLength = receivedPresentList.length;

  useEffect(() => {
    const initReceivedPresentList = async () => {
      try {
        const res = await PresentService.getLoggedUserPresentList();
        setReceivedPresentList(res.data.data.content);
      } catch (e) {
        console.log(e);
        alert("로그인이 필요합니다✨");
        router.push("/login");
      }
      setIsLoading(false);
    };
    initReceivedPresentList();
  }, []);

  return (
    <TabFlex hasPresent={!presentLength || isLoading ? "true" : "false"}>
      {isLoading ? (
        <PreparingContainer>
          <Img src="/assets/image/character/spinner.gif" alt="로딩하얀코" />
          <PreparingHeader>선물 불러오는중...</PreparingHeader>
        </PreparingContainer>
      ) : (
        <>
          {presentLength > 0 ? (
            receivedPresentList.map((present) => (
              <Card
                key={present.id}
                id={present.id}
                date={present.receivedDate}
                from={present.nickname}
                contents={present.contents}
                thumbnail={present.imageURL}
                type={"RECEIVED"}
                isRead={present.isRead}
              />
            ))
          ) : (
            <PreparingContainer>
              <Img
                src="/assets/image/character/face_cry.png"
                alt="울고있는하얀코"
              />
              <PreparingHeader>앗! 아직 받은 선물이 없어요.</PreparingHeader>
            </PreparingContainer>
          )}
        </>
      )}
    </TabFlex>
  );
};
export default ReceivedPresentList;

export const TabFlex = styled.div<{ hasPresent: string }>`
  display: grid;
  grid-template-columns: ${({ hasPresent }) =>
    hasPresent === "true" ? "unset" : "repeat(2, 1fr)"};
  gap: 20px;
`;

export const PreparingContainer = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PreparingHeader = styled.div`
  display: block;
  padding: 2px 10px;
`;

export const Img = styled.img`
  width: 150px;
`;
