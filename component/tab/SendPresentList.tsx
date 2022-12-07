import TabCard from "./TabCard";
import { Flex } from "../../styles/styledComponentModule";
import styled from "styled-components";
import Card from "../receivedPresents/Card";
import { useEffect, useState } from "react";
import PresentService from "../../api/PresentService";

const TabFlex = styled(Flex)`
  flex-direction: row;
  flex-wrap: wrap;
  text-align: center;
`;

const PrepareingContainer = styled.div`
  margin: 0 auto;
`
const PrepareingHeader = styled.h3`
  display: block;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  padding: 2px 10px;
`;
const Img = styled.img`
  width: 150px;
  margin-top: 40px;
  margin-bottom: 10px;
`;

const SendPresentList = () => {
  const [sentPresentList, setSentPresentList] = useState([]);

  useEffect(() => {
    const initSendPresentList = async () => {
      const res = await PresentService.getUserSendPresentsList();
      // console.log(res.data.data);
      setSentPresentList(res.data.data.content);
    };
    initSendPresentList();
  }, []);

  return (
    <TabFlex>
      <PrepareingContainer>
        <Img src="/assets/image/character/face_cry.png" alt="울고있는하얀코"/>
        <PrepareingHeader>준비중인 기능입니다</PrepareingHeader>
      </PrepareingContainer>
      {/* {sentPresentList?.map((present) => (
        <Card
          key={present.id}
          id={present.id}
          thumbnail={present.imageURL}
          type={"SEND"}
        />
      ))} */}
    </TabFlex>
  );
};

export default SendPresentList;
