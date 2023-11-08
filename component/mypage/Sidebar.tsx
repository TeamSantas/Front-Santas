import styled from "styled-components";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Switch from "react-switch";
import { getBGMPush, setPutPush } from "../../api/hooks/useStting";
import { kakaoLogout } from "../../api/hooks/useKakaoLogin";
import { removeCookie, setCookie } from "../../businesslogics/cookie";
import MemberService from "../../api/MemberService";

const Container = styled.div`
  background-color: #3c6c54;
  border-radius: 30px 0 0 30px;
  width: 30%;
  height: 100vh;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 10;
  padding-left: 0;
  border: solid 3px white;
  @media (max-width: 1000px) {
    width: 40%;
  }
  @media (max-width: 650px) {
    width: 70%;
    border-radius: 15px 0 0 15px;
  }
`;

const IndexDiv = styled.div`
  cursor: pointer;
  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
  }
`;
const StyledLink = styled.a`
  color: white;
  text-decoration: none;
  &:hover {
    color: white;
  }
`;
const Index = styled.button`
  color: white;
  border: none;
  background-color: transparent;
  width: ${(props) => (props.back ? "50px" : "100%")};
  filter: ${(props) =>
    props.back
      ? "invert(100%) sepia(100%) saturate(2%) hue-rotate(235deg) brightness(115%) contrast(101%)"
      : "transparent"};
  padding: 15px;
  font-size: 22px;
  margin: 0 auto 0 5px;
  font-weight: bold;
  @media (max-width: 600px) {
    font-size: 20px;
  }
`;
const CloseIcon = styled.img`
  width: 50px;
  transform: scaleX(-1);
  cursor: pointer;
`;
const Ul = styled.ul`
  padding-left: 0;
`;
const Li = styled.li`
  padding: 0 10px 0 20px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
const Hr = styled.hr`
  border: dashed 2px white;
  margin: 0;
`;

const Img = styled.img`
  margin-top: -5px;
  width: 65px;
`;

const Background = styled.div`
  position: fixed;
  touch-action: none;
  opacity: 0.7;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9;
  background-color: #191c21;
`;

const Sidebar = (props) => {
  const router = useRouter();
  const [myBGM, setMyBGM] = useState<boolean>(true);
  const run = async () => {
    try {
      const res = await getBGMPush();
      setMyBGM(res.data.data);
    } catch (e) {
      console.log(e);
    }
  };
  const [toggleValue, setToggleValue] = useState(myBGM);
  const toggleHandler = () => setToggleValue(!toggleValue);
  useEffect(() => {
    run();
    setPutPush(toggleValue);
  }, [toggleValue]);

  router.events.on("routeChangeStart", () => {
    props.menuCloser();
  });

  const handleSignout = async () => {
    if (
      confirm(
        "정말 탈퇴할까요🥺? 탈퇴하면 모든 회원정보와 친구, 받은/보낸 선물들은 삭제되고 되돌릴 수 없어요!"
      )
    ) {
      try {
        const res = await MemberService.signoutMember();
        if (res) {
          alert(res.data.message);
          router.push("/title");
        }
      } catch (e) {
        alert(e.response.data.message);
      }
    }
  };

  return (
    <>
      {/*Background : 배경 블러처리 겸, 아무 곳이나 눌러도 사이드바 해제하는 역할*/}
      <Background onClick={props.menu} />
      <Container>
        <Index back>
          <CloseIcon src="/assets/image/icons/close.png" onClick={props.menu} />
        </Index>
        <Ul>
          <Li>
            <Img src="/assets/image/character/face_heart_white.png" />
            <Index>이메일알림설정</Index>
            <Switch
              onChange={toggleHandler}
              checked={toggleValue}
              className="react-switch"
            />
          </Li>
          <Hr />
          <IndexDiv>
            <Li>
              <Img src="/assets/image/character/face_heart_white.png" />
              <Index
                onClick={() => {
                  router.push("https://pf.kakao.com/_wDRPxj");
                }}
              >
                Contact to Us
              </Index>
            </Li>
            <Hr />
          </IndexDiv>
          <IndexDiv>
            <Li>
              <Img src="/assets/image/character/face_heart_white.png" />
              <Index>
                <StyledLink
                  href={`https://www.notion.so/pitapatdac/36927b1bd2b24a6888c0ee786b4eb865`}
                  target="_blank"
                >
                  공지사항
                </StyledLink>
              </Index>
            </Li>
            <Hr />
          </IndexDiv>
          <IndexDiv>
            <Li>
              <Img src="/assets/image/character/face_heart_white.png" />
              <Index>
                <StyledLink href={`https://merry-christmas.site//onboarding`}>
                  스토리 다시보기
                </StyledLink>
              </Index>
            </Li>
            <Hr />
          </IndexDiv>
          <IndexDiv>
            <Li>
              <Img src="/assets/image/character/face_heart_white.png" />
              <Index>
                <StyledLink href={`https://merry-christmas.site//snowball`}>
                  스노우볼
                </StyledLink>
              </Index>
            </Li>
            <Hr />
          </IndexDiv>
          <IndexDiv>
            <Li>
              <Img src="/assets/image/character/face_heart_white.png" />
              <Index
                onClick={() => {
                  if (kakaoLogout() === "logout_ok") router.push("/logout");
                }}
              >
                로그아웃
              </Index>
            </Li>
            <Hr />
          </IndexDiv>
          <IndexDiv>
            <Li>
              <Img src="/assets/image/character/face_heart_white.png" />
              <Index onClick={handleSignout}>회원탈퇴</Index>
            </Li>
            <Hr />
          </IndexDiv>
          <IndexDiv>
            <Li>
              <Img src="/assets/image/character/face_heart_white.png" />
              <Index>v.1.4.0</Index>
            </Li>
            <Hr />
          </IndexDiv>
        </Ul>
      </Container>
    </>
  );
};
export default Sidebar;
