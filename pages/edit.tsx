import { NextPage } from "next";
import Seo from "../component/common/Seo";
import { RedButton, Icons, MainContainer } from "../styles/styledComponentModule";
import styled from "styled-components";
import {useLoggedMember} from "../api/hooks/useMember";

const Profile = styled(Icons)`
  width: 150px;
  height: 150px;
  margin: 30px auto;
  border-radius: 50%;
  border: solid 3px white;
  background-image: url("/assets/image/tmpProfil.png");
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
  font-size: 20px;
  color: white;
  @media (max-width: 650px) {
    width: 300px;
  }
`;

const Edit: NextPage = () => {
    const myData = useLoggedMember();
    const myname = myData.nickname;
    const email = myData.email;
    const profileImg = myData.profileImageURL;

  return (
    <MainContainer>
      <Seo title="수정하기" />
      <Profile src={profileImg}/>
        <h5>하얀코가 조립 중인 기능입니다🔧</h5>
      <Container>
        <Info>이름</Info>
        <Text name placeholder={myname} disabled></Text>
        {/*<Info>닉네임</Info>*/}
        {/*<Text nickName placeholder={nickname} disabled></Text>*/}
        <Info>이메일</Info>
        <Text email placeholder={email} disabled></Text>
        <SubmitButton>수정하기</SubmitButton>
      </Container>
    </MainContainer>
  );
};
export default Edit;
