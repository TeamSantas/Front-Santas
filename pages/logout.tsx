import { NextPage } from "next";
import Link from "next/link";
import { MainContainer } from "../styles/styledComponentModule";
import styled from "styled-components";

const Container = styled(MainContainer)`
  text-align: center;
  font-size: 20px;
  margin-top: 40px;
  color: white;
`;

const Logout: NextPage = () => {
  return (
    <Container>
      <img src="/assets/image/character/face_sad.png" width="222" />
      <h3>
        <br />
        로그아웃되었습니다!
      </h3>
      <p>
        흑흑.. 또 올거지..? <br />
        from.하얀코..
      </p>
        <Link href={"https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=3c01bf310ee0268b13dab1daa6c3a78a&scope=account_email%20profile_nickname%20profile_image%20friends&state=ZG_0J4yTF5EXpiZdBZhoTUNkRyyeclSFvLjlJAe20_g%3D&redirect_uri=http://localhost:3000/oauth/callback/kakao"}>
            {/*<Link href={"https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=3c01bf310ee0268b13dab1daa6c3a78a&scope=account_email%20profile_nickname%20profile_image%20friends&state=ZG_0J4yTF5EXpiZdBZhoTUNkRyyeclSFvLjlJAe20_g%3D&redirect_uri=https://pitapat-adventcalendar.site/oauth/callback/kakao"}>*/}
            <img src="/assets/image/kakao_login_large_narrow.png" width="222" />
        </Link>
    </Container>
  );
};
export default Logout;
