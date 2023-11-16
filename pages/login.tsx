import Image from "next/image";
import styled from "styled-components";
import Layout from "../components/layout/new/Layout";

const Login = () => {
  const handleKakaoLogin = () => {
    console.log("로그인 버튼 클릭");
    return;
  };

  return (
    <Container>
      <KakaoLoginButton onClick={handleKakaoLogin}>
        <Image
          alt="kakao-logo"
          src="/assets/image/login/kakao-logo.png"
          width={22}
          height={22}
        />
        <KakaoLoginText>카카오로 3초만에 시작하기</KakaoLoginText>
      </KakaoLoginButton>
    </Container>
  );
};
export default Login;

Login.getLayout = (page) => {
  return <Layout logo={"/assets/image/layout/logo.png"}>{page}</Layout>;
};

const Container = styled.div`
  position: absolute;
  bottom: -94vh;
  left: 50%;
  transform: translateX(-50%);
`;

const KakaoLoginButton = styled.button`
  width: 360px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fee500;
  height: 52px;
  padding: 16px;
  gap: 6px;
  border-radius: 6px;
  border: none;
  text-align: left;

  @media (max-width: 768px) {
    max-width: 80vw;
  }
`;

const KakaoLoginText = styled.div`
  color: #181818;
  font-family: "NanumSquareNeoOTF-Bd";
  font-size: 16px;

  @media (max-width: 375px) {
    font-size: 14px;
  }
`;
