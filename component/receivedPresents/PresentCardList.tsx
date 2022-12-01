import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { setGetDayPresents } from "../../api/hooks/useGetDayPresents";
import MemberService from "../../api/MemberService";
import { storeContext } from "../../store/Store";
import { Flex } from "../../styles/styledComponentModule";
import Card from "./Card";

const TabFlex = styled(Flex)`
  flex-direction: row;
  flex-wrap: wrap;
`;

const LoadingContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -38%);
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
      const receiverId = await (await MemberService.getLoggedMember()).data.data.member.id;
      const res = await setGetDayPresents(receiverId, receivedDay);
      console.log("receivedPresentList >>> ", res.content)
      setReceivedPresentList(res.content);
    };
    initReceivedPresentList();
  }, []);

  return (
    <>
      {receivedPresentList ? (
        <TabFlex>
          {receivedPresentList.map((present) => (
            <Card
              key={present.id}
              id={present.id}
              thumbnail={present.imageURL}
            />
          ))}
        </TabFlex>
      ) : (
        <LoadingContainer>
          <img src="/assets/image/character/face_crycry.png" width="222" />
          <LoadingHeader>"받은선물이...없써...!"</LoadingHeader>
        </LoadingContainer>
      )}
    </>
  );
};

export default PresentCardList;
