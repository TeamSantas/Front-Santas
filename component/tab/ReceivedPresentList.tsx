import TabCard from "./TabCard";
import {Flex} from "../../styles/styledComponentModule";
import styled from "styled-components";
import Card from "../Card";
import { useEffect, useState } from "react";
import PresentService from "../../api/PresentService";

const TabFlex = styled(Flex)`
  flex-direction: row;
  flex-wrap: wrap;
`

const ReceivedPresentList = () => {
  const [receivedPresentList, setReceivedPresentList] = useState([]);
    
    useEffect(() => {
      const initReceivedPresentList = async () => {
        const res = await PresentService.getLoggedUserPresentList();
        setReceivedPresentList(res.data.data.content);
      }
      initReceivedPresentList();
    }, [])

    return (
        <TabFlex>
            {receivedPresentList?.map((present) => (
                <Card
                key={present.id}
                id={present.id}
                thumbnail={present.imageURL}
                type={present.type}
                />
          ))}
        </TabFlex>
    )
}
export default ReceivedPresentList
