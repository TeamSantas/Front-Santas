import { NextPage } from "next";
import Seo from "../component/common/Seo";
import styled from "styled-components";
import { Flex, Icons, MainContainer } from "../styles/styledComponentModule";
import { useRouter } from "next/router";
import TabView from "../component/tab/TabView";

const Profile = styled(Icons)`
    width: 150px;
    height: 150px;
    margin: 30px auto;
    border-radius: 50%;
    border: solid 3px white;
    background-image: url("/asset/image/tmpProfil.png");
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
    background-image: url("/asset/image/edit.png");
`;

const MyPage: NextPage = () => {
    const router = useRouter();
    const name = '하얀코';
    const nickname = '크리스마스덕후';
    const email = 'teamSantaz@naver.com';
    return (
        <MainContainer>
            <Seo title="MyPage" />
            <Profile />
            <CenterFlex>
                <Text name>{name}</Text>
                <Text nickName>{nickname}</Text>
                <Edit onClick={()=> router.push(`/edit`)}></Edit>
            </CenterFlex>
            <Text email>{email}</Text>
            <TabView/>
        </MainContainer>
    );
};

export default MyPage;
