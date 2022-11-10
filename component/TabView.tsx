import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import 'bootstrap/dist/css/bootstrap.css';
import styled from "styled-components";
import {Flex, Grid} from "../styles/styledComponentModule";
import Card from "./Card";

const StyledTab = styled.div`
  //background-color: burlywood;
  border-radius: 5px;
  width: 70vw;
  justify-content: center;
  align-items: center;
  margin: 30px auto;
  @media (max-width: 600px) {
    width: 85vw;
  }
`

const TabCard = styled(Card)`
  color: red;  
`

const TabFlex = styled(Flex)`
  margin: 10px;
  flex: 1;
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
                    <TabCard>받은 선물 리스트</TabCard>
                    <TabCard>받은 선물 리스트</TabCard>
                    <TabCard>받은 선물 리스트</TabCard>
                    <TabCard>받은 선물 리스트</TabCard>
                    <TabCard>받은 선물 리스트</TabCard>
                </TabFlex>
            </Tab>
            <Tab eventKey="보낸쪽지" title="보낸쪽지" style={{backgroundColor:"gray", padding:"20px"}}>
                <TabFlex>
                    <Card>보낸 쪽지 리스트</Card>
                    <Card>보낸 쪽지 리스트</Card>
                    <Card>보낸 쪽지 리스트</Card>
                    <Card>보낸 쪽지 리스트</Card>
                    <Card>보낸 쪽지 리스트</Card>
                </TabFlex>
            </Tab>
        </Tabs>
        </StyledTab>
    );
}

export default TapView;
