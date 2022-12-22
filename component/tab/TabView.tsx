import 'bootstrap/dist/css/bootstrap.css';
import styled from "styled-components";
import {RedButton} from "../../styles/styledComponentModule";
import SendPresentList from "./SendPresentList";
import ReceivedPresentList from "./ReceivedPresentList";
import {useState} from "react";

const StyledTab = styled.div`
  box-sizing: initial;
  width: 70vw;
  height: 80vh;
  justify-content: center;
  align-items: center;
  margin: 30px auto;
  z-index: 8;
  @media (max-width: 600px) {
    margin-top: 20px;
    width: 85vw;
    height: 50vh;
  }
  @media (max-width: 400px) {
    margin-top: 30px
  }
`
const TabButton = styled(RedButton)`
  width: 49.5%;
  padding: 7px;
  color: white;
  background-size: 5px 5px;
  background: rgba(255,255,255,.2);
  text-shadow: 1px 0 black;
  font-weight: bold;
  font-size: 24px;
  @media (max-width: 600px) {
    padding: 0;
    font-size: 18px;
  }
  &:hover{
    background: linear-gradient(45deg, #3C6C54 25%, #78AB91 0, #78AB91 50%, #3C6C54 0, #3C6C54 75%, #78AB91 0 );
  }
  &:active{
    background: linear-gradient(45deg, #3C6C54 25%, #78AB91 0, #78AB91 50%, #3C6C54 0, #3C6C54 75%, #78AB91 0 );
  }
`
const SelectedTabButton = styled(TabButton)`
  color: white;
  border: none;
  background-size: 42.4px 42.4px;
  background: linear-gradient(45deg, #AC473D 25%, #C0544A 0, #C0544A 50%, #AC473D 0, #AC473D 75%, #C0544A 0 );
  &:hover {
    color: white;
    background: linear-gradient(45deg, #3C6C54 25%, #78AB91 0, #78AB91 50%, #3C6C54 0, #3C6C54 75%, #78AB91 0 );
  }
`
const Box = styled.div`
  height: 70vh;
  overflow: scroll;
  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background: linear-gradient(#AC473D, #fff);
  }
  @media (max-width: 600px) {
    &::-webkit-scrollbar {
      width: 3px;
    }
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
