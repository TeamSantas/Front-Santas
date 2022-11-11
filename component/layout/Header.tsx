import styled from "styled-components";
import { Flex, Icons } from "../../styles/styledComponentModule";
import { useRouter } from "next/router";

const Logo = styled.button`
    margin-top: 20px;
    margin-bottom: 20px;
    background: none;
    background-image: url("/asset/image/Logo.svg");
    background-repeat: no-repeat;
    width: 120px;
    height: 40px;
    border: none;
    margin-left: 20px;
  
    @media (max-width: 600px) {
      margin-left: 0;
    }
`;

const MyPage = styled(Icons)`
    width: 80px;
    height: auto;
    margin-right: 2%;
    background-image: url("/asset/image/face.svg");
    @media (max-width: 600px) {  
      width: 40px;
     margin-left: 0;
    }
`;

const Header = () => {
    const router = useRouter();
    // TODO : 조건부 렌더링
    const currPath = router.pathname.slice(1);
    return (
        <Flex>
            <Logo onClick={() => router.push("/")}></Logo>
            <MyPage onClick={() => router.push("/mypage")}></MyPage>
        </Flex>
    );
};
export default Header;
