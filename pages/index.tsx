import Seo from "../component/common/Seo";
import styled from "styled-components";
import { NextPage } from "next";
import { Icons, MainContainer, Flex } from "../styles/styledComponentModule";
import html2canvas from "html2canvas";
import Calendar from "../component/Calendar";
import Share from "../component/share/Share";
import ReactHowler from "react-howler";
import { lazy, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import FriendsModal from "../component/friends/FriendsModal";
import { setBGM } from "../api/hooks/useStting";
import { getCookie } from "../businesslogics/cookie";
import { Desc } from "../component/Desc/Desc";

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
  const [mute, setMute] = useState(true);

  useEffect(() => {
    setBGM(mute);
  }, [mute]);

  const screenCaptureHandler = () => {
    console.log("캡쳐됨");
    html2canvas(document.getElementById("home")).then(function (canvas) {
      const url = canvas.toDataURL("my_calendar/png");
      onDownloadAs(url, "my_calendar.png");
    });
  };

  const onDownloadAs = (uri: string, filename: string) => {
    console.log("다운됨");
    const link = document.createElement("a");
    document.body.appendChild(link);
    link.href = uri;
    link.download = filename;
    link.click();
    document.body.removeChild(link);
  };

  const linkCopyHandler = () => {
    // TODO : link copy 로직 추가 필요
    console.log("Link copied!");
  };
  const muteHandler = (value) => setMute(!value);

  // TODO : 내 캘린더인가 여부 파악
  const ismycalendar = true;

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

  return (
    <div id="home">
      <Flex>
        <Seo title="Home" />
        <MainContainer>
          <Calendar ismycalendar={ismycalendar} />
          {ismycalendar && (
            <>
              <ButtonFlex>
                {/* TODO : Kakao 친구 목록 연결 */}
                <Friends onClick={clickFriendIconHandler} />
                <Desc />
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
          )}
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
