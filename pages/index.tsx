import Seo from "../component/common/Seo";
import styled from "styled-components";
import {NextPage} from "next";
import { Icons, MainContainer, Flex } from "../styles/styledComponentModule";
import html2canvas from "html2canvas";
import Calendar from '../component/Calendar';
import Share from "../component/share/Share";
import ReactHowler from 'react-howler'
import {useState} from "react";

const Friends = styled(Icons)`
  background-image: url("/asset/image/icons/Users.png");
`;

const LinkCopy = styled(Icons)`
  margin-right: 24px;
  background-image: url("/asset/image/icons/Link.png");
`;

const Bgm = styled(Icons)`
  background-image: url("/asset/image/icons/SpeakerHigh.png");
`;
const MuteBgm = styled(Icons)`
  background-image: url("/asset/image/icons/muteSpeaker.png");
`;

const ButtonFlex = styled(Flex)`
  width: 35rem;
  @media (max-width: 600px) {
    width: 90%;
  }
`

const Home: NextPage = () => {
    const [isNotMute, setMute] = useState(true);

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

    const muteHandler = (value) => {
        setMute(!value);
        console.log("음소거 됨");
    };
    const days = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];
    return (
        <div id="home">
            <Seo title="Home" />
            <MainContainer>
                <Calendar />
                <ButtonFlex>
                    {/* TODO : Kakao 친구 목록 연결 */}
                    <Friends />
                    <Flex>
                        {/*BGM react-howler 라이브러리*/}
                        <ReactHowler
                            src='./bgm.mp3'
                            playing={isNotMute}
                            loop={true}
                        />
                        <LinkCopy onClick={linkCopyHandler} />
                        {isNotMute ? <Bgm onClick={()=>muteHandler(isNotMute)} />
                            : <MuteBgm onClick={()=>muteHandler(isNotMute)} />}
                    </Flex>
                </ButtonFlex>
                <Share />
            </MainContainer>
        </div>
    );
};


export default Home;
