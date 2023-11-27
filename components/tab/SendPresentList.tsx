import Card from "../receivedPresents/Card";
import { useEffect, useState } from "react";
import PresentService from "../../api/PresentService";
import { TabFlex, PreparingContainer, Img } from "./ReceivedPresentList";

const SendPresentList = () => {
  const [sentPresentList, setSentPresentList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const presentLength = sentPresentList.length;

  useEffect(() => {
    const initSendPresentList = async () => {
      const res = await PresentService.getUserSendPresentsList();
      setSentPresentList(res.data.data.content);
      setIsLoading(false);
    };
    initSendPresentList();
  }, []);

  return (
    <TabFlex hasPresent={!presentLength || isLoading ? "true" : "false"}>
      {isLoading ? (
        <PreparingContainer>
          <Img src="/assets/image/character/spinner.gif" alt="로딩하얀코" />
          <PreparingContainer>선물 불러오는중...</PreparingContainer>
        </PreparingContainer>
      ) : (
        <>
          {sentPresentList.length > 0 ? (
            sentPresentList.map((present) => (
              <Card
                key={present.id}
                id={present.id}
                to={present.receiverName}
                from={present.nickname}
                date={present.receivedDate}
                contents={present.contents}
                thumbnail={present.imageURL}
                type={"SEND"}
                isRead={true}
              />
            ))
          ) : (
            <PreparingContainer>
              <Img
                src="/assets/image/character/face_cry.png"
                alt="울고있는하얀코"
              />
              <PreparingContainer>
                앗! 아직 보낸 선물이 없어요.
              </PreparingContainer>
            </PreparingContainer>
          )}
        </>
      )}
    </TabFlex>
  );
};

export default SendPresentList;
