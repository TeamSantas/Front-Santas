import TabCard from "./TabCard";
import {Flex} from "../../styles/styledComponentModule";
import styled from "styled-components";
import Card from "../Card";

const TabFlex = styled(Flex)`
  flex-direction: row;
  flex-wrap: wrap;
`
const SendPresentList = () => {
    const sentPresentList = [
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
            thumbnail : "face",
            type : "svg"
        }, 
        {
          id : 3,
          thumbnail : "Calendar",
          type : "svg"
        }, 
        {
            id : 4,
            thumbnail : "face",
            type : "svg"
        },
        {
            id : 5,
            thumbnail : "Calendar",
            type : "svg"
        },
      ]
    return (
        <TabFlex>
            {sentPresentList?.map((present) => (
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
export default SendPresentList
