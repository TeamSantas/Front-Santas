import { NextPage } from "next";
import Link from "next/link";
import { MainContainer } from "../styles/styledComponentModule";
import styled from "styled-components";
import { useEffect } from "react";
import { removeCookie } from "../businesslogics/cookie";
import { useRouter } from "next/router";
import AdSense from "../components/adSense";

const Container = styled(MainContainer)`
  text-align: center;
  font-size: 20px;
  margin-top: 80px;
  color: white;
`;

const Logout: NextPage = () => {
  const router = useRouter();
  useEffect(() => {
    const preventGoBack = () => {
      history.go(1);
      router.push("/title");
      console.log("prevent go back!");
    };

    history.pushState(null, "", location.href);
    window.addEventListener("popstate", preventGoBack);
    removeCookie("token");
    return () => window.removeEventListener("popstate", preventGoBack);
  }, []);
  return (
    <Container>
      <img src="/assets/image/character/face_sad.png" width="222" />
      <AdSense />
      <h3>
        <br />
        로그아웃되었습니다!
      </h3>
      <p>
        흑흑.. 또 올거지..? <br />
        from.하얀코..
      </p>
      {/* <Link href={"https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=3c01bf310ee0268b13dab1daa6c3a78a&scope=account_email%20profile_nickname%20profile_image%20friends&state=ZG_0J4yTF5EXpiZdBZhoTUNkRyyeclSFvLjlJAe20_g%3D&redirect_uri=http://localhost:3000/oauth/callback/kakao"}> */}
      <Link
        href={
          "https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=3c01bf310ee0268b13dab1daa6c3a78a&scope=account_email%20profile_nickname%20profile_image%20friends&state=ZG_0J4yTF5EXpiZdBZhoTUNkRyyeclSFvLjlJAe20_g%3D&redirect_uri=https://merry-christmas.site/oauth/callback/kakao"
        }
      >
        <img src="/assets/image/kakao_login_large_narrow.png" width="222" />
      </Link>
    </Container>
  );
};
export default Logout;
