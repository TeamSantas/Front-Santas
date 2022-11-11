import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import 'bootstrap/dist/css/bootstrap.css';
import styled from "styled-components";
import {Flex} from "../styles/styledComponentModule";
import {StyledCard} from "./Card";

const StyledTab = styled.div`
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

const TabCard = styled(StyledCard)`
  margin: 10px 5px;
  width: 30%;
  height: 30%;

  @media (max-width: 600px) {
    width: 32vw;
  }
  @media (max-width: 400px) {
    width: 70vw;
  }
`

const TabFlex = styled(Flex)`
  flex-direction: row;
  flex-wrap: wrap;

`
const CardImg = styled.img`
  width: 100%;
  height: 25vh;
  object-fit:cover;
  @media (max-width: 600px) {
    height: 15vh;
}
`
const Img = styled.div`
  padding-bottom: 10px;
  overflow: hidden;
`

const TapView = () => {
    return (
        <StyledTab>
        <Tabs
            defaultActiveKey="profile"
            id="fill-tab-example"
            className="mb-3"
            fill
        >
            <Tab eventKey="받은쪽지" title="받은쪽지" style={{backgroundColor:"lightblue", padding:"20px"}}>
                <TabFlex>
                    <TabCard>
                        <Img><CardImg src="/asset/image/Calendar.svg"/></Img>
                    </TabCard>
                    <TabCard>
                        <CardImg src="/asset/image/santa.png"/>
                    </TabCard>
                    <TabCard>
                        <CardImg src="/asset/image/Calendar.svg"/>
                    </TabCard>
                    <TabCard>
                        <CardImg src="/asset/image/face.svg"/>
                    </TabCard>
                </TabFlex>
            </Tab>
            <Tab eventKey="보낸쪽지" title="보낸쪽지" style={{backgroundColor:"gray", padding:"20px"}}>
                <TabFlex>
                    <TabCard>
                        <CardImg src="/asset/image/face.svg"/>
                    </TabCard>
                    <TabCard>
                        <Img><CardImg src="/asset/image/Calendar.svg"/></Img>
                    </TabCard>
                    <TabCard>
                        <CardImg src="/asset/image/santa.png"/>
                    </TabCard>
                    <TabCard>
                        <CardImg src="/asset/image/Calendar.svg"/>
                    </TabCard>
                </TabFlex>
            </Tab>
        </Tabs>
        </StyledTab>
    );
}

export default TapView;
