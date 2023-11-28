import styled from "styled-components";
import { useState } from "react";
import { Flex } from "../../styles/styledComponentModule";
import ReceivedFriendsList from "./received-list";
import SentFriendsList from "./sent-list";

const HeartTab = () => {
  const [tab, setTab] = useState("sent");
  const handleClickTab = (option) => setTab(option);

  return (
    <>
      <TabBars>
        <Tab
          color={"#38805B"}
          tab={(tab === "sent").toString()}
          onClick={() => handleClickTab("sent")}
        >
          보낸 목록
        </Tab>
        <Tab
          color={"#E25320"}
          tab={(tab === "received").toString()}
          onClick={() => handleClickTab("received")}
        >
          받은 목록
        </Tab>
      </TabBars>
      <ContentWrapper>
        {tab === "sent" ? <SentFriendsList /> : <ReceivedFriendsList />}
      </ContentWrapper>
    </>
  );
};

export default HeartTab;

const ContentWrapper = styled.div`
  background-color: rgba(255, 255, 255, 0.5);
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  padding: 16px 20px;
  overflow: hidden;
  flex: 1;
`;

const TabBars = styled(Flex)`
  justify-content: center;
`;
const Tab = styled.div<{ tab: string; color: string }>`
  font-size: 1rem;
  margin-top: 10px;
  cursor: pointer;
  width: 250px;
  border-radius: 16px 16px 0 0;
  padding: 10px 0;
  font-family: NanumSquare Neo OTF;
  font-weight: 900;
  text-align: center;
  color: ${({ tab }) => (tab === "true" ? "#fff" : "#535353")};
  background-color: ${({ tab }) =>
    tab === "true" ? "rgba(255, 255, 255, 0.5)" : "rgba(0, 0, 0, 0.5)"};
  @media (max-width: 500px) {
    width: calc(100vw / 2);
  }
`;
