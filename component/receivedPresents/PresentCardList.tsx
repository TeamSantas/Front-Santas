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
  height: 400px;
  max-height: 50rem;
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
      {receivedPresentList.length > 0 ? (
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
          <div>
            <img src="/assets/image/character/face_crycry.png" width="222" style={{display: 'block', margin: '0 auto', marginTop: '20px'}}/>
            <LoadingHeader>"받은선물이...없써...!"</LoadingHeader>
          </div>
        </LoadingContainer>
      )}
    </>
  );
};

export default PresentCardList;
