import TabCard from "./TabCard";
import {Flex} from "../../styles/styledComponentModule";
import styled from "styled-components";

const TabFlex = styled(Flex)`
  flex-direction: row;
  flex-wrap: wrap;
`
const SendPresentList = () => {
    const sendPresentList = [
        "/asset/image/face.svg",
        "/asset/image/face.svg",
        "/asset/image/face.svg",
        "/asset/image/face.svg",
        "/asset/image/face.svg",
        "/asset/image/face.svg",
        "/asset/image/face.svg",
        "/asset/image/face.svg",
        "/asset/image/face.svg"
    ];
    return (
        <TabFlex>
            {
                sendPresentList.map((presentImg, i) => {
                    return <TabCard img={presentImg} key={i}/>
                })
            }
        </TabFlex>
    )
}
export default SendPresentList
