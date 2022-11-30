import { NextPage } from "next";
import { MainContainer } from "../styles/styledComponentModule";
import styled from "styled-components";
import CustomModal from "../component/common/CustomModal";
import { useState } from "react";
import Link from "next/link";

const Container = styled(MainContainer)`
  text-align: center;
  font-size: 20px;
  margin-top: 80px;
  color: white;
`;

const Login: NextPage = () => {
  const [modalShow, setModalShow] = useState(true);
  const handleClose = () => setModalShow(false);
  return (
    <div>
      <Container>
        <CustomModal
          // configs -------------
          show={modalShow}
          onHide={handleClose}
          name={"modalImg"}
          // body ----------------
          img={""}
          background_img={"/assets/image/icons/warning.png"}
          text={
            "소셜로그인 가입시 뜨는 선택사항을 모두 동의해주셔야 필수기능사용이 가능합니다"
          }
          // footer --------------
          buttons={""}
        ></CustomModal>
        <img src="/assets/image/character/face_smile.png" width="222" />
        <h3>
          하얀코와 함께
          <br /> 어드벤트 캘린더를 모으러 가볼까요?
        </h3>
        <Link href={"https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=3c01bf310ee0268b13dab1daa6c3a78a&scope=account_email%20profile_nickname%20profile_image%20friends&state=ZG_0J4yTF5EXpiZdBZhoTUNkRyyeclSFvLjlJAe20_g%3D&redirect_uri=http://localhost:3000/oauth/callback/kakao"}>
        {/*<Link href={"https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=3c01bf310ee0268b13dab1daa6c3a78a&scope=account_email%20profile_nickname%20profile_image%20friends&state=ZG_0J4yTF5EXpiZdBZhoTUNkRyyeclSFvLjlJAe20_g%3D&redirect_uri=https://pitapat-adventcalendar.site/oauth/callback/kakao"}>*/}
          <img src="/assets/image/kakao_login_large_narrow.png" width="222" />
        </Link>
      </Container>
    </div>
  );
};
export default Login;
