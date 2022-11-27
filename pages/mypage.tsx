import { NextPage } from "next";
import Seo from "../component/common/Seo";
import styled from "styled-components";
import { Flex, Icons, MainContainer } from "../styles/styledComponentModule";
import { useRouter } from "next/router";
import TabView from "../component/tab/TabView";
import {useLoggedMember} from "../api/hooks/useMember";

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
    props.name ? "x-large" : props.nickName ? "medium" : "small"};
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
  const myData = useLoggedMember();

  const name = myData.nickname;
  const email = myData.email;
  const profileImg = myData.profileImageURL;
  // const nickname = "닉네임";
  return (
    <MainContainer>
      <Seo title="MyPage" />
      <Profile src={profileImg}/>
      <CenterFlex>
        <Text name>{name}</Text>
        {/*<Text nickName>{nickname}</Text>*/}
        <Edit onClick={() => router.push(`/edit`)}></Edit>
      </CenterFlex>
      <Text email>{email}</Text>
      <TabView />
    </MainContainer>
  );
};

export default MyPage;
