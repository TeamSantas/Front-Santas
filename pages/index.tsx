import Seo from "../component/common/Seo";
import styled from "styled-components";
import { NextPage } from "next";
import { Icons, MainContainer, Flex } from "../styles/styledComponentModule";
import html2canvas from "html2canvas";
import Calendar from "../component/Calendar";
import Share from "../component/share/Share";
import ReactHowler from "react-howler";
import { useState } from "react";

const Friends = styled(Icons)`
  background-image: url("/assets/image/icons/Users.png");
`;

const LinkCopy = styled(Icons)`
  margin-right: 24px;
  background-image: url("/assets/image/icons/Link.png");
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

const Home: NextPage = () => {
  const [mute, setMute] = useState(false);

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
  const ismycalendar = false;

  return (
    <div id="home">
      <Seo title="Home" />
      <MainContainer>
        <Calendar ismycalendar={ismycalendar} />
        {ismycalendar && (
          <>
            <ButtonFlex>
              {/* TODO : Kakao 친구 목록 연결 */}
              <Friends />
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
    </div>
  );
};

export default Home;
