import { NextPage } from "next";
import Seo from "../component/common/Seo";
import {
  RedButton,
  Icons,
  MainContainer,
} from "../styles/styledComponentModule";
import styled from "styled-components";
import { getLoggedMember } from "../api/hooks/useMember";
import { useEffect, useState } from "react";

const Profile = styled.img`
  width: 150px;
  height: 150px;
  margin: 30px auto;
  border-radius: 50%;
  border: solid 3px white;
`;

const Container = styled.div`
  justify-content: center;
  align-items: end;
`;

const Info = styled.h4`
  color: white;
  margin: 30px auto 5px 10px;
`;

const Text = styled.input`
  display: block;
  width: 400px;
  height: 50px;
  border-radius: 10px;
  border: solid 1px lightgrey;
  margin: 5px auto;
  padding: 20px;
  background-color: ${(props) => (props.email ? "lightgray" : null)};
  @media (max-width: 650px) {
    width: 300px;
  }
`;

const SubmitButton = styled(RedButton)`
  margin: 30px 5px;
  width: 400px;
  height: 50px;
  background-color: #ac473d;
  font-size: 25px;
  color: white;
  @media (max-width: 650px) {
    width: 300px;
  }
`;

const Edit: NextPage = () => {
  const [myName, setMyName] = useState<any>(null);
  const [myEmail, setMyEmail] = useState<any>(null);
  const [myProfileImg, setMyProfileImg] = useState<any>(null);

  const getMyData = async () => {
    try {
      const res = await getLoggedMember();
      setMyName(res.nickname);
      setMyEmail(res.email);
      setMyProfileImg(res.profileImageURL);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getMyData();
  }, []);

  return (
    <MainContainer>
      <Seo title="수정하기" />
      <Profile src={myProfileImg} />
      <h5>뚝딱뚝딱 준비 중인 기능입니다🔧</h5>
      <Container>
        <Info>이름</Info>
        <Text name placeholder={myName} disabled></Text>
        {/*<Info>닉네임</Info>*/}
        {/*<Text nickName placeholder={nickname} disabled></Text>*/}
        <Info>이메일</Info>
        <Text email placeholder={myEmail} disabled></Text>
        <SubmitButton>수정하기</SubmitButton>
      </Container>
    </MainContainer>
  );
};
export default Edit;
