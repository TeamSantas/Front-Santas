import 'bootstrap/dist/css/bootstrap.css';
import styled from "styled-components";
import {Button, Flex} from "../../styles/styledComponentModule";
import TabCard from "./TabCard";

const StyledTab = styled.div`
  background-color: burlywood;
  border-radius: 5px;
  width: 70vw;
  height: 80vh;
  overflow: auto;
  justify-content: center;
  align-items: center;
  margin: 30px auto;
  @media (max-width: 600px) {
    margin-top: 50px;
    width: 85vw;
    height: 50vh;
  }
  @media (max-width: 400px) {
    margin-top: 30px
  }
`
const TabFlex = styled(Flex)`
  flex-direction: row;
  flex-wrap: wrap;

`
const TabButton = styled(Button)`
  width: 50%;
  border: solid 2px silver;
`

const TapView = () => {
    return (
        <>
            <StyledTab>
                <TabButton>받은선물</TabButton>
                <TabButton>보낸선물</TabButton>
                <TabFlex>
                    <TabCard img={"/asset/image/Calendar.svg"}/>
                    <TabCard img={"/asset/image/Calendar.svg"}/>
                    <TabCard img={"/asset/image/Calendar.svg"}/>
                    <TabCard img={"/asset/image/Calendar.svg"}/>
                </TabFlex>
            </StyledTab>


















        {/*<StyledTab>*/}
        {/*<Tabs*/}
        {/*    defaultActiveKey="profile"*/}
        {/*    id="fill-tab-example"*/}
        {/*    className="mb-3"*/}
        {/*    fill*/}
        {/*>*/}
        {/*    <Tab eventKey="받은쪽지" title="받은쪽지" style={{backgroundColor:"lightblue", padding:"20px"}}>*/}
        {/*        <TabFlex>*/}
        {/*
        {/*            <TabCard>*/}
        {/*                <CardImg src="/asset/image/face.svg"/>*/}
        {/*            </TabCard>*/}
        {/*        </TabFlex>*/}
        {/*    </Tab>*/}
        {/*    <Tab eventKey="보낸쪽지" title="보낸쪽지" style={{backgroundColor:"gray", padding:"20px"}}>*/}
        {/*        <TabFlex>*/}
        {/*            <TabCard>*/}
        {/*                <CardImg src="/asset/image/face.svg"/>*/}
        {/*            </TabCard>*/}
        {/*        </TabFlex>*/}
        {/*    </Tab>*/}
        {/*</Tabs>*/}
        {/*</StyledTab>*/}
        </>
    );
}

export default TapView;
