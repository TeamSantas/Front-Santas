import styles from "../styles/Home.module.css";
import { NextPage } from "next";
import Seo from "../component/common/Seo";
import styled from "styled-components";
import { Flex, Icons, MainContainer } from "../styles/styledComponentModule";
import { useRouter } from "next/router";
import TabViewSY from "../component/TabViewSY";

const Profile = styled(Icons)`
    width: 70px;
    height: 70px;
    margin: 30px auto;
    background-image: url("/asset/image/Profile.png");
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

const Button = styled.button`
    width: 100%;
    height: 40px;
    background: red;
`;

// const presentBtnClickHandler = () => {
//   console.log("버튼 클릭");
// }

const MyPage: NextPage = () => {
    const router = useRouter();
    return (
        <MainContainer>
            <Seo title="MyPage" />
            <Profile />
            <CenterFlex>
                <Text name>이름</Text>
                <Text nickName>닉네임</Text>
                <Edit></Edit>
            </CenterFlex>
            <Text email>teamSantaz@naver.com</Text>
            <TabViewSY/>
        </MainContainer>
    );
};

export default MyPage;
