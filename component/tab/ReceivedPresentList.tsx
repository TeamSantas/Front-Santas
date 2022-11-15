import TabCard from "./TabCard";
import {Flex} from "../../styles/styledComponentModule";
import styled from "styled-components";

const TabFlex = styled(Flex)`
  flex-direction: row;
  flex-wrap: wrap;
`
const ReceivedPresentList = () => {
    const receivedPresentList = [
        "/asset/image/Calendar.svg",
        "/asset/image/Calendar.svg",
        "/asset/image/Calendar.svg",
        "/asset/image/Calendar.svg",
        "/asset/image/Calendar.svg",
        "/asset/image/Calendar.svg",
        "/asset/image/Calendar.svg",
        "/asset/image/Calendar.svg",
        "/asset/image/Calendar.svg"
    ];
    return (
        <TabFlex>
            {
                receivedPresentList.map((presentImg, i) => {
                    return <TabCard img={presentImg} key={i}/>
                })
            }
        </TabFlex>
    )
}
export default ReceivedPresentList
