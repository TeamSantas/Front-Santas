import { NextPage } from "next";
import styled from "styled-components";
import { Flex, Icons, MainContainer } from "../styles/styledComponentModule";
import { useRouter } from "next/router";
import TabView from "../components/tab/TabView";
import { getLoggedMember } from "../api/hooks/useMember";
import { useEffect, useState } from "react";
import AdSense from "../components/adSense";
import { Modals } from "../components/modals/modals";

const Container = styled.div`
  overflow: auto;
  height: 100vh;
  ::-webkit-scrollbar {
    display: none;
  }
`;
const InnerContainer = styled(Flex)`
  justify-content: center;
  margin: 5px auto;
  align-items: center;
`;
const Profile = styled.img`
  width: 100px;
  height: 100px;
  margin: 30px 20px 5px 20px;
  border-radius: 50%;
  border: solid 0px white;
  object-fit: cover;
  @media (max-width: 600px) {
    margin: 5px 20px;
    width: 75px;
    height: 75px;
  }
`;

const CenterFlex = styled(Flex)`
  justify-content: left;
  align-items: center;
`;

const Text = styled.div`
  padding-right: 5px;
  margin: ${(props) => (props.email ? "auto" : "0")};
  font-size: ${(props) =>
    props.name ? "x-large" : props.nickName ? "medium" : "18px"};
  font-weight: ${(props) => (props.name ? "bold" : "normal")};
  color: ${(props) => (props.name ? "white" : "grey")};
`;

const Edit = styled(Icons)`
  width: 20px;
  height: 20px;
  background-image: url("/assets/image/edit.png");
`;

const MyPage: NextPage = () => {
  const router = useRouter();
  const [myName, setMyName] = useState<any>(null);
  const [myEmail, setMyEmail] = useState<any>(null);

  // const getUserData = async () => {
  //   try {
  //     const res = await getLoggedMember();
  //     setMyName(res.nickname);
  //     setMyEmail(res.email);
  //     setMyProfileImg(res.profileImageURL);
  //   } catch (e) {
  //     router.push("/title");
  //   }
  // };

  // useEffect(() => {
  //   // getUserData();
  // }, []);

  return (
    <>
      <Modals />
      <MainContainer>
        <AdSense />
        <Container>
          <TabView />
        </Container>
      </MainContainer>
    </>
  );
};

export default MyPage;
