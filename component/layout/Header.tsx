import styled from "styled-components";
import { Flex, Icons } from "../../styles/styledComponentModule";
import { useRouter } from "next/router";

const Logo = styled.button`
    margin-top: 16px;
    margin-bottom: 20px;
    background: none;
    background-image: url("/asset/image/Logo.png");
    background-repeat: no-repeat;
    width: 120px;
    height: 40px;
    border: none;
`;
const MyPage = styled(Icons)`
    width: 40px;
    background-image: url("/asset/image/favicon.png");
`;

const Header = () => {
    const router = useRouter();
    return (
        <Flex>
            <Logo onClick={() => router.push("/")}></Logo>
            <MyPage onClick={() => router.push("/mypage")}></MyPage>
        </Flex>
    );
};
export default Header;
