import 'bootstrap/dist/css/bootstrap.css';
import styled from "styled-components";
import {Button, Flex} from "../../styles/styledComponentModule";
import TabCard from "./TabCard";
import SendPresentList from "./SendPresentList";
import ReceivedPresentList from "./ReceivedPresentList";
import {useState} from "react";

const StyledTab = styled.div`
  background-color: burlywood;
  border-radius: 5px;
  width: 70vw;
  height: 80vh;
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
const TabButton = styled(Button)`
  width: 50%;
  border: solid 2px silver;
`
const SelectedTabButton = styled(TabButton)`
  background-color: saddlebrown;
`
const Box = styled.div`
  height: 90%;
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`
const TapView = () => {
    const [sendBtn, setSendBtn] = useState('received');
    const btnHandler = (value) => setSendBtn(value);
    return (
        <>
            <StyledTab>
                {
                    sendBtn === 'received' ? <SelectedTabButton onClick={()=>btnHandler('received')}>받은선물</SelectedTabButton>
                    : <TabButton onClick={()=>btnHandler('received')}>받은선물</TabButton>
                }
                {
                    sendBtn === 'send' ? <SelectedTabButton onClick={()=>btnHandler('send')}>보낸선물</SelectedTabButton>
                        : <TabButton onClick={()=>btnHandler('send')}>보낸선물</TabButton>
                }
                <Box>
                    {
                        sendBtn === 'received' ? <ReceivedPresentList/> : <SendPresentList/>
                    }
                </Box>
            </StyledTab>
        </>
    );
}

export default TapView;
