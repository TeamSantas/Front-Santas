import { NextPage } from "next";
import Link from "next/link";
import { MainContainer } from "../styles/styledComponentModule";
import styled from "styled-components";
import CustomModal from "../component/common/CustomModal";
import { useState } from "react";
import { useGetLogin } from "../api/hooks/useGetLogin";

const Container = styled(MainContainer)`
  text-align: center;
  font-size: 20px;
  margin-top: 40px;
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
        <p>
          하얀코와 함께
          <br /> 어드벤트 캘린더를 모으러 가볼까요?
        </p>
        <form method="get" action={process.env.NEXT_PUBLIC_LOGOUT_REDIRECT_URI}>
          <input type="submit" value="GO" />
        </form>
        <Link href={process.env.NEXT_PUBLIC_LOGOUT_REDIRECT_URI ?? ""}>
          <img src="/assets/image/kakao_login_large_narrow.png" width="222" />
        </Link>
        <img
          src="/assets/image/kakao_login_large_narrow.png"
          onClick={useGetLogin}
          width="222"
        />
      </Container>
    </div>
  );
};
export default Login;
