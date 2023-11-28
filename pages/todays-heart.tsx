import styled from "styled-components";
import Layout from "../components/layout/new/Layout";
import SentFriendsList from "../components/todays-heart/sent-list";
import ReceivedFriendsList from "../components/todays-heart/received-list";
import { useState } from "react";
import { Flex } from "../styles/styledComponentModule";
import { Modals } from "../components/modals/modals";

const TodaysHeart = () => {
  const [tab, setTab] = useState("sent");
  const handleClickTab = (option) => setTab(option);

  return (
    <>
      <Modals />
      <Wrapper>
        <Logo src={"/asset_ver2/image/layout/todays-heart-logo.png"} />
        <Text>
          매일 달라지는 질문에 마음을 담아 하트를 보내요!
          <br />( 하트는 하루 최대 5명에게 보낼 수 있어요 )
        </Text>
        <Card>
          <Question>Q. 누구와 함께 크리스마스를 보내고 싶나요?</Question>
        </Card>
        <Flex>
          <Tab
            tab={(tab === "sent").toString()}
            onClick={() => handleClickTab("sent")}
          >
            보낸 목록
          </Tab>
          <Tab
            tab={(tab === "received").toString()}
            onClick={() => handleClickTab("received")}
          >
            받은 목록
          </Tab>
        </Flex>
        <ContentWrapper>
          {tab === "sent" ? <SentFriendsList /> : <ReceivedFriendsList />}
        </ContentWrapper>
      </Wrapper>
    </>
  );
};

TodaysHeart.getLayout = (page) => {
  return <Layout>{page}</Layout>;
};

export default TodaysHeart;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 100vw;
  max-width: 500px;
  font-size: 14px;
  color: white;
  text-align: center;
  margin: 0 auto;
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
const ContentWrapper = styled.div`
  background-color: rgba(255, 255, 255, 0.5);
  width: 100%;
  padding: 20px;
`;

const Tab = styled.div<{ tab: string }>`
  font-size: 18px;
  cursor: pointer;
  background-color: rgba(255, 255, 255, 0.5);
  width: 250px;
  border-radius: 20px 20px 0 0;
  margin-bottom: -20px;
  padding: 13px 60px 12px;
  font-family: NanumSquare Neo OTF;
  font-weight: 900;
  color: ${({ tab }) => (tab === "true" ? "#fff" : "#CCCCCC")};
  @media (max-width: 768px) {
    width: calc(100vw / 2);
  }
`;
const Text = styled.div`
  font-size: 0.8rem;
  font-family: NanumSquare Neo OTF;
  font-weight: 800;
`;

const Card = styled.div`
  padding: 11px 16px;
  background: #e25320;
  border-radius: 30px;
  max-width: calc(100vw - 40px);
`;

const Question = styled.div`
  font-size: 0.9rem;
  font-family: "NanumSquare Neo OTF";
  font-weight: 800;
  word-wrap: break-word;
`;

const Logo = styled.img`
  width: 80vw;
  max-width: 350px;
  min-width: 200px;
`;
