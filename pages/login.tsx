import Image from "next/image";
import styled from "styled-components";
import Layout from "../components/layout/login/Layout";

const Login = () => {
  const handleKakaoLogin = () => {
    console.log("로그인 버튼 클릭");
    return;
  };

  return (
    <Container>
      <Logo alt={"background"} src={"/assets/image/login/logo.png"} />
      <Tree alt={"background"} src={"/assets/image/login/tree.png"} />
      <Ground>
        <KakaoLoginButton onClick={handleKakaoLogin}>
          <Image
            alt="kakao-logo"
            src="/assets/image/login/kakao-logo.png"
            width={22}
            height={22}
          />
          <KakaoLoginText>카카오로 3초만에 시작하기</KakaoLoginText>
        </KakaoLoginButton>
      </Ground>
    </Container>
  );
};
export default Login;

Login.getLayout = (page) => {
  return <Layout>{page}</Layout>;
};

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  flex-direction: column;
  margin: 0 auto;
`;

const Logo = styled.img`
  margin-top: 10vh;
  width: 55vw;
  max-width: 300px;
  height: auto;
  z-index: 1;
`;

const Tree = styled.img`
  width: 40vh;
  max-width: 100%;
  height: auto;
  z-index: 1;
`;

const Ground = styled.div`
  background-color: #d9d9d9;
  width: 100vw;
  margin-top: -60px;
  display: flex;
  justify-content: center;
  padding: 22px;
  flex: 1;

  @media (max-width: 375px) {
    margin-top: -40px;
  }
`;

const KakaoLoginButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fee500;
  height: 52px;
  padding: 16px;
  width: 100%;
  max-width: 40vh;
  gap: 6px;
  margin-top: 30px;
  border-radius: 6px;
  border: none;
  text-align: left;
`;

const KakaoLoginText = styled.div`
  color: #181818;
  font-family: "NanumSquareNeoOTF-Bd";
  font-size: 1.2rem;

  @media (max-width: 375px) {
    font-size: 14px;
  }
`;
