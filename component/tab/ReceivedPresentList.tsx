import { Flex } from "../../styles/styledComponentModule";
import styled from "styled-components";
import Card from "../receivedPresents/Card";
import { useEffect, useState } from "react";
import PresentService from "../../api/PresentService";
import {useRouter} from "next/router";

const TabFlex = styled(Flex)`
  flex-direction: row;
  flex-wrap: wrap;
`;

const ReceivedPresentList = () => {
  const router = useRouter();
  const [receivedPresentList, setReceivedPresentList] = useState([]);

  useEffect(() => {
    const initReceivedPresentList = async () => {
      try {
        const res = await PresentService.getLoggedUserPresentList();
        setReceivedPresentList(res.data.data.content);
      }catch (e){
        alert("로그인이 필요합니다✨")
        router.push('/login')
      }

    };
    initReceivedPresentList();
  }, []);

  return (
    <TabFlex>
      {receivedPresentList?.map((present) => (
        <Card
          key={present.id}
          id={present.id}
          thumbnail={present.imageURL}
          type={"RECEIVED"}
        />
      ))}
    </TabFlex>
  );
};
export default ReceivedPresentList;
