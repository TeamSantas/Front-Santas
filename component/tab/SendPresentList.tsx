import TabCard from "./TabCard";
import {Flex} from "../../styles/styledComponentModule";
import styled from "styled-components";
import Card from "../Card";

const TabFlex = styled(Flex)`
  flex-direction: row;
  flex-wrap: wrap;
  text-align: center;
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
      ]
    return (
        <TabFlex>
            <img src="/assets/image/icons/pen.png" alt='하얀코'/>
            <h2>준비중인 기능입니다</h2>
            <img src="/assets/image/icons/pen.png" alt='하얀코'/>

            {/*  {sentPresentList?.map((present) => (*/}
          {/*      <Card*/}
          {/*          key={present.id}*/}
          {/*          id={present.id}*/}
          {/*          thumbnail={present.thumbnail}*/}
          {/*          type={present.type}*/}
          {/*      />*/}
          {/*))}*/}
        </TabFlex>
    )
}
export default SendPresentList
