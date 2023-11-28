import { NextPage } from "next";
import styled from "styled-components";
import { MainContainer } from "../styles/styledComponentModule";
import { Modals } from "../components/modals/modals";
import MessageTab from "../components/tab/message-tab";

const MyPage: NextPage = () => {
  return (
    <>
      <Modals />
      <MainContainer>
        <Logo src={"/asset_ver2/image/layout/messages-logo.png"} />
        <MessageTab />
      </MainContainer>
    </>
  );
};

export default MyPage;
const Logo = styled.img`
  width: 80vw;
  max-width: 350px;
  min-width: 200px;
`;
