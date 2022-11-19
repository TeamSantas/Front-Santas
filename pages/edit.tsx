import {NextPage} from "next";
import Seo from "../component/common/Seo";
import {Button,  Icons, MainContainer} from "../styles/styledComponentModule";
import styled from "styled-components";

const Profile = styled(Icons)`
    width: 150px;
    height: 150px;
    margin: 30px auto;
    border-radius: 50%;
    border: solid 3px white;
    background-image: url("/asset/image/tmpProfil.png");
`;

const Container = styled.div`
    justify-content: center;
    align-items: end;
  
`;

const Info = styled.h4`
    color: white;
    margin: 30px auto 5px 10px;
    
`

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

const SubmitButton = styled(Button)`
    margin: 30px 5px;
    width: 400px;
    height: 50px;
    background-color: #AC473D;
    font-size: 20px;
    color: white;
    @media (max-width: 650px) {
      width: 300px;
    }
`;

const edit: NextPage = () => {
    const name = '하얀코';
    const nickname = '크리스마스덕후';
    const email = 'teamSantaz@naver.com';

    return (
        <MainContainer>
            <Seo title="수정하기" />
            <Profile />
            <Container>
                <Info>이름</Info>
                <Text name placeholder={name}></Text>
                <Info>닉네임</Info>
                <Text nickName placeholder={nickname}></Text>
                <Info>이메일(변경불가)</Info>
                <Text email placeholder={email} disabled></Text>
                <SubmitButton>수정하기</SubmitButton>
            </Container>
        </MainContainer>
    )
}
export default edit
