import Image from "next/image";
import styled from "styled-components";
import PlainLayout from "../components/layout/new/PlainLayout";
import { kakaoLoginUrl } from "../components/common/urls";

const Login = ({ loginButtonText }) => {
  return (
    <Container>
      <Warning>
        🤍 친구 목록 제공에 동의하셔야 서비스 사용이 가능합니다 🤍
      </Warning>
      <KakaoLoginButton href={kakaoLoginUrl}>
        <Image
          alt="kakao-logo"
          src="/assets/image/login/kakao-logo.svg"
          width={22}
          height={22}
        />
        <KakaoLoginText>{loginButtonText}</KakaoLoginText>
      </KakaoLoginButton>
    </Container>
  );
};
export default Login;

Login.getLayout = (page) => {
  return (
    <PlainLayout logo={"/asset_ver2/image/layout/logo.png"}>{page}</PlainLayout>
  );
};

export async function getServerSideProps(context) {
  const token = context.req.cookies["token"];

  // 로그인한 유저
  if (token) {
    return {
      props: {
        loginButtonText: "친구 목록 불러오기",
      },
    };
  } else {
    return {
      props: {
        loginButtonText: "카카오로 3초만에 시작하기",
      },
    };
  }
}

const Container = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  left: 50%;
  transform: translateX(-50%);
  bottom: 10vh;
`;

const Warning = styled.p`
  font-size: 0.7rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  background-color: #e25320;
  border-radius: 5px;
  padding: 3px;
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
