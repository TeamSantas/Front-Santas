import { NextPage } from "next";
import { MainContainer } from "../styles/styledComponentModule";
import styled from "styled-components";
import CustomModal from "../components/common/CustomModal";
import { useEffect, useState } from "react";
import Link from "next/link";
import { getCookie } from "../businesslogics/cookie";

const Container = styled(MainContainer)`
  text-align: center;
  font-size: 20px;
  margin-top: 80px;
  color: white;
`;

const StoryLink = styled.a`
  text-decoration: none;
  color: white;
  font-size: 20px;
  display: block;
  margin-top: 10px;
  background-color: rgba(0, 0, 0, 0.1);
  // background-color: red;
  border-radius: 5px;
  padding: 2px 10px;

  &:hover {
    color: white;
    text-decoration: underline;
  }
`;

const Img = styled.img`
  margin: 0 auto;
  display: block;
  margin-bottom: 10px;
`;

const Alert = styled.div`
  text-align: center;
`;

const AlertContent = styled.p`
  margin-bottom: 0;
  font-size: 1.5rem;
  text-align: center;
`;

const AlertHighlight = styled.span`
  padding: 0 4px;
  background-color: #3c6c54;
  color: white;
`;

const Login: NextPage = () => {
  const [modalShow, setModalShow] = useState(true);
  const handleClose = () => setModalShow(false);
  const [visited, setVisited] = useState(false);
  useEffect(() => {
    const onboardingCookie = getCookie("onboarding");
    if (onboardingCookie !== "") {
      //방문한 적이 있으면
      setVisited(true);
    }
  }, []);
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
          // background_img={"/assets/image/icons/warning.png"}
          body={
            <Alert>
              <Img
                src="/assets/image/character/hayanco_stand_creyon.png"
                width="260"
              />
              <AlertContent>
                소셜로그인시,{" "}
                <AlertHighlight>선택사항을 모두 동의해야</AlertHighlight>
              </AlertContent>
              <AlertContent>친구목록 기능사용이 가능합니다.</AlertContent>
            </Alert>
          }
          // footer --------------
          buttons={""}
          login={"login"}
        ></CustomModal>
        <img src="/assets/image/character/face_smile.png" width="222" />
        <h3>
          하얀코와 함께
          <br /> 어드벤트 캘린더를 모으러 가볼까요?
        </h3>
        {/*<Link href={"https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=3c01bf310ee0268b13dab1daa6c3a78a&scope=account_email%20profile_nickname%20profile_image%20friends&state=ZG_0J4yTF5EXpiZdBZhoTUNkRyyeclSFvLjlJAe20_g%3D&redirect_uri=http://localhost:3000/oauth/callback/kakao"}>*/}
        <div style={{ marginTop: "40px" }}>
          <Link
            href={
              "https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=3c01bf310ee0268b13dab1daa6c3a78a&scope=account_email%20profile_nickname%20profile_image%20friends&state=ZG_0J4yTF5EXpiZdBZhoTUNkRyyeclSFvLjlJAe20_g%3D&redirect_uri=https://pitapat-adventcalendar.site/oauth/callback/kakao"
            }
          >
            <img src="/assets/image/kakao_login_large_narrow.png" width="222" />
          </Link>
          <StoryLink href={`https://pitapat-adventcalendar.site/onboarding`}>
            👉 스토리 보러가기
          </StoryLink>
        </div>
      </Container>
    </div>
  );
};
export default Login;
