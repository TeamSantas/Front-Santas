import styles from '../styles/Home.module.css'
import Seo from "../component/common/Seo";
import styled from "styled-components";
import {NextPage} from "next";
import { Icons, MainContainer, Flex } from "../styles/styledComponentModule";
import html2canvas from "html2canvas";

const Friends = styled(Icons)`
    background-image: url("/asset/image/Users.png");
`;

const LinkCopy = styled(Icons)`
    margin-right: 24px;
    background-image: url("/asset/image/Link.png");
`;

const Bgm = styled(Icons)`
    background-image: url("/asset/image/SpeakerHigh.png");
`;

const Share = styled(Icons)`
    width: 312px;
    height: 72px;
    font-size: 24px;
    margin-top: 20px;
    margin-bottom: 48px;
    background: #ac473d;
    border-radius: 12px;
`;

const Calendar = styled.div`
    background-image: url("/asset/image/Calendar.png");
    background-repeat: no-repeat;
    background-size: contain;
    justify-content: center;
    margin-bottom: 24px;
    align-items: center;
    width: 316px;
    height: 316px;
`;

const Home: NextPage = () => {
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

    const shareHandler = () => {
        console.log("Link copied!");
    };

    const muteHandler = () => {
        // TODO : 음소거 기능 추가 필요
        console.log("음소거 됨");
    };

    return (
        <div id="home">
            <Seo title="Home" />
            <MainContainer>
                <Calendar />
                <Flex>
                    {/* TODO : Kakao 친구 목록 연결 */}
                    <Friends />
                    <Flex>
                        <LinkCopy onClick={shareHandler} />
                        <Bgm onClick={muteHandler} />
                    </Flex>
                </Flex>
                <Share onClick={screenCaptureHandler}>캘린더 공유하기</Share>
            </MainContainer>
        </div>
    );
};


export default Home;
