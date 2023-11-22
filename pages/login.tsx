import Image from "next/image";
import styled from "styled-components";
import PlainLayout from "../components/layout/new/PlainLayout";

const Login = () => {
  return (
    <Container>
      <KakaoLoginButton
        href={
          "https://port-0-back-santas-euegqv2llojq1wch.sel5.cloudtype.app/oauth2/authorization/kakao"
        }
      >
        <Image
          alt="kakao-logo"
          src="/assets/image/login/kakao-logo.svg"
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
  return (
    <PlainLayout logo={"/assets/image/layout/logo.png"}>{page}</PlainLayout>
  );
};

const Container = styled.div`
  position: absolute;
  bottom: -94vh;
  left: 50%;
  transform: translateX(-50%);
`;

const KakaoLoginButton = styled.a`
  width: 360px;
  display: flex;
  justify-content: center;
  text-decoration: none;
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
