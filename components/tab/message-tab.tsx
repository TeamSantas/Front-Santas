import styled from "styled-components";
import { useState } from "react";
import { Flex } from "../../styles/styledComponentModule";
import SendPresentList from "./SendPresentList";
import ReceivedPresentList from "./ReceivedPresentList";

const MessageTab = () => {
  const [tab, setTab] = useState("sent");
  const handleClickTab = (option) => setTab(option);

  return (
    <>
      <Flex>
        <Tab
          color={"#E25320"}
          tab={(tab === "received").toString()}
          onClick={() => handleClickTab("received")}
        >
          받은 편지함
        </Tab>
        <Tab
          color={"#38805B"}
          tab={(tab === "sent").toString()}
          onClick={() => handleClickTab("sent")}
        >
          보낸 편지함
        </Tab>
      </Flex>
      <ContentWrapper>
        {tab === "sent" ? <SendPresentList /> : <ReceivedPresentList />}
      </ContentWrapper>
    </>
  );
};

export default MessageTab;

const ContentWrapper = styled.div`
  background-color: rgba(28, 50, 73, 0.5);
  width: 100%;
  max-width: 500px;
  padding: 16px 20px;
  flex: 1;
  overflow-y: scroll;
  /* Firefox */
  scrollbar-width: none;

  /* Internet Explorer, Edge */
  &::-ms-overflow-style {
    display: none;
  }

  /* Chrome, Safari */
  &::-webkit-scrollbar {
    display: none;
  }
  @media (max-width: 768px) {
    max-width: unset;
  }
`;

const Tab = styled.div<{ tab: string; color: string }>`
  font-size: 18px;
  cursor: pointer;
  width: 250px;
  border-radius: 16px 16px 0 0;
  padding: 10px;
  font-family: NanumSquare Neo OTF;
  font-weight: 900;
  text-align: center;
  background-color: ${({ tab, color }) =>
    tab === "true" ? color : "rgba(0, 0, 0, 0.5)"};
  @media (max-width: 500px) {
    width: calc(100vw / 2);
  }
`;
