import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import 'bootstrap/dist/css/bootstrap.css';
import styled from "styled-components";
import PresentCardList from './PresentCardList';

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

const TabViewSY = (props) => {
    return (
        <StyledTab>
        <Tabs
            defaultActiveKey="profile"
            id="fill-tab-example"
            className="mb-3"
            fill
        >
            <Tab eventKey="받은쪽지" title="받은쪽지" style={{backgroundColor:"lightblue", padding:"20px"}}>
              <PresentCardList />
            </Tab>
            <Tab eventKey="보낸쪽지" title="보낸쪽지" style={{backgroundColor:"gray", padding:"20px"}}>
              <PresentCardList />
            </Tab>
        </Tabs>
        </StyledTab>
    );
}

export default TabViewSY;
