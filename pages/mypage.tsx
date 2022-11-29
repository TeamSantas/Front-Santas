import { NextPage } from "next";
import Seo from "../component/common/Seo";
import styled from "styled-components";
import { Flex, Icons, MainContainer } from "../styles/styledComponentModule";
import { useRouter } from "next/router";
import TabView from "../component/tab/TabView";
import { getLoggedMember } from "../api/hooks/useMember";
import { useEffect, useState } from "react";

const Profile = styled.img`
  width: 150px;
  height: 150px;
  margin: 30px auto;
  border-radius: 50%;
  border: solid 3px white;
`;

const CenterFlex = styled(Flex)`
  justify-content: center;
  align-items: end;
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
  const [myProfileImg, setMyProfileImg] = useState<any>(null);

  const getMyData = async () => {
    const res = await getLoggedMember();
    setMyName(res.data.nickname);
    setMyEmail(res.data.email);
    setMyProfileImg(res.data.profileImageURL);
  };
  useEffect(() => {
    getMyData();
  }, []);

  return (
    <MainContainer>
      <Seo title="MyPage" />
      <Profile src={myProfileImg} />
      <CenterFlex>
        <Text name>{myName}</Text>
        {/*<Text nickName>{nickname}</Text>*/}
        <Edit onClick={() => router.push(`/edit`)}></Edit>
      </CenterFlex>
      <Text email>{myEmail}</Text>
      <TabView />
    </MainContainer>
  );
};

export default MyPage;
