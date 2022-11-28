import Seo from "../component/common/Seo";
import styled from "styled-components";
import { NextPage } from "next";
import { Icons, MainContainer, Flex } from "../styles/styledComponentModule";
import html2canvas from "html2canvas";
import Calendar from "../component/Calendar";
import Share, { RedBtn } from "../component/share/Share";
import ReactHowler from "react-howler";
import { lazy, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import FriendsModal from "../component/friends/FriendsModal";
import { setBGM } from "../api/hooks/useStting";
import { getCookie } from "../businesslogics/cookie";
import { setGetMember } from "../api/hooks/useGetMember";
import { MemberData } from "../util/type";
import { useRouter } from "next/router";
import { setGetCurrCalendarUserInfo } from "../api/hooks/useGetCurrCalendarUserInfo";

const LinkCopy = styled(Icons)`
  margin-right: 24px;
  background-image: url("/assets/image/icons/Link.png");
`;
const Friends = styled(Icons)`
  background-image: url("/assets/image/icons/Users.png");
`;

const Bgm = styled(Icons)`
  background-image: url("/assets/image/icons/SpeakerHigh.png");
`;
const MuteBgm = styled(Icons)`
  background-image: url("/assets/image/icons/muteSpeaker.png");
`;
const GoBackMyCal = styled.div`
  background: #ac473d;
  border-radius: 12px;
  color: white;
  padding: 6px 15px;
  text-align: center;
`;

const ButtonFlex = styled(Flex)`
  width: 35rem;
  @media (max-width: 600px) {
    width: 90%;
  }
`;

const Text = styled.h3`
  color: white;
`;
const SnowballContainer = styled(MainContainer)`
  @media (max-width: 600px) {
    display: none;
  }
`;
const Home: NextPage = () => {
  const router = useRouter();
  const [mute, setMute] = useState(true);
  const [memberInfo, setMemberInfo] = useState<MemberData>();


  useEffect(() => {
    setBGM(mute);
  }, [mute]);

  const linkCopyHandler = () => {
    // TODO : link copy 로직 추가 필요
    console.log("Link copied!");
  };
  const muteHandler = (value) => setMute(!value);

  // @ts-ignore : glb 파일을 담아오는 type이 하나뿐이라 그냥 ignore 처리
  const ModelComponent = lazy(() => import("/component/SnowBallModel"));

  // friends modal
  const [friendModalShow, setFriendModalShow] = useState(false);
  const clickFriendIconHandler = () => {
    setFriendModalShow(true);
  };
  const handleFriendsModalClose = () => setFriendModalShow(false);

  useEffect(() => {
    const onboardingCookie = getCookie("onboarding");
    if (onboardingCookie === "") {
      window.location.href = "/onboarding";
    }
  }, []);

  // 사용자의 정보를 조회해 캘린더의 접근 권한을 설정한다.
  const getMemberData = async () => {
    const res = await setGetMember();
    setMemberInfo(res);
  };
  useEffect(() => {
    getMemberData();
  }, []);
  const currInvitationLink = router.pathname; // 현재 invitation link
  const ismycalendar =
    memberInfo && currInvitationLink === memberInfo.invitationLink;

  const MyCalendarBtn = () => {
    return (
      <>
        <ButtonFlex>
          <Friends onClick={clickFriendIconHandler} />
          <FriendsModal
            show={friendModalShow}
            onHide={handleFriendsModalClose}
          />
          <Flex>
            {/*BGM react-howler 라이브러리*/}
            <ReactHowler src="./bgm.mp3" playing={mute} loop={true} />
            <LinkCopy onClick={linkCopyHandler} />
            {mute ? (
              <Bgm onClick={() => muteHandler(mute)} />
            ) : (
              <MuteBgm onClick={() => muteHandler(mute)} />
            )}
          </Flex>
        </ButtonFlex>
        <Share />
      </>
    );
  };

  const handleGoMyCal = () => {
    router.push(`/${memberInfo.invitationLink}`)
  }

  const FriendsCalendarBtn = () => {
    return (
      <>
        <ButtonFlex>
          <GoBackMyCal onClick={handleGoMyCal}>내 캘린더로 이동</GoBackMyCal>
          <Flex>
            {/*BGM react-howler 라이브러리*/}
            <ReactHowler src="./bgm.mp3" playing={mute} loop={true} />
            {mute ? (
              <Bgm onClick={() => muteHandler(mute)} />
            ) : (
              <MuteBgm onClick={() => muteHandler(mute)} />
            )}
          </Flex>
        </ButtonFlex>
      </>
    );
  };

  return (
    <div id="home">
      <Flex>
        <Seo title="Home" />
        <MainContainer>
          <Calendar ismycalendar={ismycalendar} />
          {ismycalendar ? <MyCalendarBtn /> : <FriendsCalendarBtn />}
        </MainContainer>
        <SnowballContainer>
          <Text>스노우볼을 움직여보세요</Text>
          <Canvas>
            <ModelComponent />
          </Canvas>
        </SnowballContainer>
      </Flex>
    </div>
  );
};

export default Home;
