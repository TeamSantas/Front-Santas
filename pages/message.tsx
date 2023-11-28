import { NextPage } from "next";
import styled from "styled-components";
import { Modals } from "../components/modals/modals";
import MessageTab from "../components/tab/message-tab";

const MyPage: NextPage = () => {
  return (
    <>
      <Modals />
      <Wrapper>
        <Logo src={"/asset_ver2/image/layout/messages-logo.png"} />
        <MessageTab />
      </Wrapper>
    </>
  );
};

export default MyPage;

const Wrapper = styled.div`
  display: flex;
  height: calc(100vh - 130px);
  flex-direction: column;
  align-items: center;
  width: 100vw;
  max-width: 500px;
  font-size: 14px;
  color: white;
  text-align: center;
  margin: 0 auto;
`;

const Logo = styled.img`
  width: 80vw;
  max-width: 350px;
  min-width: 200px;
`;
