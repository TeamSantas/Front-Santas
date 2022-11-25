import TabCard from "./TabCard";
import {Flex} from "../../styles/styledComponentModule";
import styled from "styled-components";
import Card from "../Card";

const TabFlex = styled(Flex)`
  flex-direction: row;
  flex-wrap: wrap;
`

const ReceivedPresentList = () => {
    const receivedPresentList = [
        {
          id : 0,
          thumbnail : "face",
          type : "svg"
        }, 
        {
          id : 1,
          thumbnail : "Calendar",
          type : "svg"
        }, 
        {
            id : 2,
            thumbnail : "Calendar",
            type : "svg"
        }, 
        {
          id : 3,
          thumbnail : "face",
          type : "svg"
        }, 
      ]
    return (
        <TabFlex>
            {receivedPresentList?.map((present) => (
                <Card 
                key={present.id}
                id={present.id}
                thumbnail={present.thumbnail} 
                type={present.type}
                />
          ))}
        </TabFlex>
    )
}
export default ReceivedPresentList
