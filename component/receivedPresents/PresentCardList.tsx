import "bootstrap/dist/css/bootstrap.css";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { setGetDayPresents } from "../../api/hooks/useGetDayPresents";
import PresentService from "../../api/PresentService";
import { storeContext } from "../../store/Store";
import { Flex } from "../../styles/styledComponentModule";
import Card from "./Card";

const TabFlex = styled(Flex)`
  flex-direction: row;
  flex-wrap: wrap;
`;

const PresentCardList = ({ selectedday }) => {
  const { storeUserData } = useContext(storeContext);
  const receiverId = storeUserData.id;
  const receivedDay =
    selectedday < 10 ? `2022-12-0${selectedday}` : `2022-12-${selectedday}`;

  const [receivedPresentList, setReceivedPresentList] = useState([]);

  useEffect(() => {
    const initReceivedPresentList = async () => {
      const res = await setGetDayPresents(receiverId, receivedDay);
      // console.log("receivedPresentList >>> ", res.content)
      setReceivedPresentList(res.content);
    };
    initReceivedPresentList();
  }, []);

  // console.log("receivedPresentList >>> ", receivedPresentList)
  return (
    <>
      <TabFlex>
        {receivedPresentList?.map((present) => (
          <Card key={present.id} id={present.id} thumbnail={present.imageURL} />
        ))}
      </TabFlex>
    </>
  );
};

export default PresentCardList;
