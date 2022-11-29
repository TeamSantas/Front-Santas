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
const SendPresentList = () => {
  const [sentPresentList, setSentPresentList] = useState([]);

  useEffect(() => {
    const initSendPresentList = async () => {
      const res = await PresentService.getUserSendPresent();
      // console.log(res.data.data);
      setSentPresentList(res.data.data.content);
    };
    initSendPresentList();
  }, []);

  return (
    <TabFlex>
      {sentPresentList?.map((present) => (
        <Card
          key={present.id}
          id={present.id}
          thumbnail={present.imageURL}
          type={"SEND"}
        />
      ))}
    </TabFlex>
  );
};
export default SendPresentList;
