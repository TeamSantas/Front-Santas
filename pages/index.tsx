// @ts-nocheck
import Seo from "../component/common/Seo";
import styled from "styled-components";
import { NextPage } from "next";
import { Icons, MainContainer, Flex } from "../styles/styledComponentModule";
import Calendar from "../component/index/Calendar";
import Share from "../component/share/Share";
import { getCookie } from "../businesslogics/cookie";
import ReactHowler from "react-howler";
import { lazy, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import FriendsModal from "../component/friends/FriendsModal";
import { Suspense } from "react";
import { setGetMember } from "../api/hooks/useGetMember";
import { dataProps, MemberData } from "../util/type";
import { useRouter } from "next/router";
import { setBGM } from "../api/hooks/useStting";
import { getLoggedMember } from "../api/hooks/useMember";
import InformationModal from "../component/index/InformationModal";
import { setGetCurrCalendarUserInfo } from "../api/hooks/useGetCurrCalendarUserInfo";
import { setCookie } from "cookies-next";
import CopyModal from "../component/index/CopyModal";
import {shareKakao} from "../component/share/ShareAPIButton";

const MainIcons = styled(Icons)`
  height: 35px;
`;
const SearchBtn = styled.img`
  margin: 3px;
  margin-left: 10px;
  height: 28px;
  cursor: pointer;
`;
const LinkCopy = styled(MainIcons)`
  margin: 0 2px;
  background-image: url("/assets/image/icons/Link.svg");
`;
const Friends = styled(MainIcons)`
  margin: 0 2px;
  background-image: url("/assets/image/icons/Users.svg");
`;
const Info = styled(MainIcons)`
  width: 25px;
  margin-left: 10px;
  background-image: url("/assets/image/icons/information.svg");
`;
const Snowball = styled(MainIcons)`
  margin-left: 10px;
  background-image: url("/assets/image/icons/snowball.svg");
  @media (max-width: 1000px) {
    display: none;
  }
`;
const SnowballMobile = styled(MainIcons)`
  margin-left: 15px;
  background-image: url("/assets/image/icons/snowball.svg");
  display: none;
  @media (max-width: 1000px) {
    display: flex;
  }
`;

const Bgm = styled(MainIcons)`
  background-image: url("/assets/image/icons/SpeakerHigh.svg");
`;
const MuteBgm = styled(MainIcons)`
  background-image: url("/assets/image/icons/muteSpeaker.svg");
`;
const GoBackMyCal = styled.div`
  background: #ac473d;
  border-radius: 12px;
  color: white;
  padding: 6px 15px;
  text-align: center;
`;

const ButtonFlex = styled(Flex)`
  padding: 5px 10px;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.3);
  width: 35rem;
  @media (max-width: 600px) {
    width: 95%;
  }
`;

const Text = styled.h3`
  text-align: center;
  color: white;
`;
const SnowballContainer = styled(MainContainer)`
  height: 80vh;
  @media (max-width: 600px) {
    display: none;
  }
`;

const CalendarYellowBtn = styled(Icons)`
  width: 35rem;
  height: 72px;
  font-size: 30px;
  font-weight: bold;
  margin-top: 5px;
  margin-bottom: 48px;
  background: #ac473d;
  border-radius: 12px;
  z-index: 5;
  color: white;
  @media (max-width: 600px) {
    width: 90%;
    margin-top: 45px;
    height: 62px;
    font-size: 24px;
  }
`;
const Span = styled.span`
  margin-top: 5px;
  display: block;
  color: #fff;
  text-shadow: 0 0 20px #fff, 0 0 2px #fff, 0 0 2px #fff, 0 0 42px #079467,
  0 0 82px #1d5c48, 0 0 92px #0fa, 0 0 102px #0fa, 0 0 100px #0fa;
`
const MainFlex = styled(Flex)`
  margin-top: -15px;
`
const InfoText = styled.p`
  font-size: 20px;
  margin: 0 auto;
  @media (max-width: 600px) {
    font-size: 15px;
  }
`
const BottomCopyLink = styled(Icons)`
  width: 35rem;
  height: 72px;
  font-size: 30px;
  font-weight: bold;
  margin-top: 24px;
  margin-bottom: 5px;
  background: #ac473d;
  /* background: #3C6C54; */
  border-radius: 12px;
  z-index: 5;
  color: white;
  @media (max-width: 600px) {
    width: 95%;
    margin-top: 5px;
    height: 52px;
    font-size: 24px;
  }
`;

const Home: NextPage<dataProps> = (props: dataProps) => {
  // console.log(props, "인덱스에넘겨주는프롭스");
  // 만약 프롭스에 유저데이터 있으면 내캘린더 아님;; 없으면 내캘린더 >>>
  const router = useRouter();
  const [memberInfo, setMemberInfo] = useState<string>("나");
  const [loggedMemberId, setLoggedMemberId] = useState(null);
  const [myName, setMyName] = useState<string>("나");
  const [mute, setMute] = useState(false);
  const [myLink, setMyLink] = useState<string>("");

  const getMyBGM = async () => {
    try {
      const res = await getLoggedMember();
      setMute(res.setting.bgm);
    } catch (e) {
      // console.log(e);
    }
  };

  const muteHandler = (value) => {
    setMute(!value);
    setBGM(!value);
  };

  const linkCopyHandler = async () => {
    const copyURL = `https://pitapat-adventcalendar.site/${myLink}`;
    console.log(copyURL);
    try {
      await navigator.clipboard.writeText(copyURL);
      alert("내 캘린더 링크가 복사되었습니다. 친구에게 공유해 쪽지를 주고받아보세요!");
    } catch (e) {
      alert(
        "내 초대링크를 복사해 보내보세요! 바로 복사를 원하신다면~? 크롬브라우저로 접속해보세요✨"
      );
      clickCopyIconHandler();
    }
  };
  // @ts-ignore : glb 파일을 담아오는 type이 하나뿐이라 그냥 ignore 처리
  const ModelComponent = lazy(() => import("/component/index/SnowBallModel"));

  // friends modal
  const [friendModalShow, setFriendModalShow] = useState(false);
  const clickFriendIconHandler = () => {
    setFriendModalShow(true);
  };
  const handleFriendsModalClose = () => setFriendModalShow(false);

  // info modal
  const [informationModalShow, setInformationModalShow] = useState(false);
  const clickInformationIconHandler = () => {
    setInformationModalShow(true);
  };
  const handleInformationModalClose = () => setInformationModalShow(false);

  const [copyModal, setCopyModal] = useState<boolean>(false);
  const clickCopyIconHandler = () => setCopyModal(true);
  const handleCopyModalClose = () => setCopyModal(false);

  // snowball modal
  const [snowballModalShow, setSnawballModalShow] = useState(false);
  const clickSnowballIconHandler = () => {
    setSnawballModalShow(!snowballModalShow);
  };

  const getCurrCalUser = async () => {
    let currInvitationLink = props.link;
    try {
      if (currInvitationLink.length < 2) {
        setMyName(memberInfo);
      }
      else {
        const res = await setGetCurrCalendarUserInfo(currInvitationLink);
        if(myName != res.data.data.nickname) setMyName(res.data.data.nickname);
      }
    } catch (e) {
      // setMyName(router.asPath.slice(1))
    }
  };

  const [isLogged, setIsLogged] = useState(true);
  // 사용자의 정보를 조회해 캘린더의 접근 권한을 설정한다.
  const getMemberData = async () => {
    try {
      const res = await setGetMember();
      setMemberInfo(res.data.data.member.nickname);
      setMyLink(res.data.data.member.invitationLink);
      setLoggedMemberId(res.data.data.member.id)
      // console.log(">>>>>>>>>")
      // console.log(res.data.data.member.id)
      setCookie("invitationLink", res.data.data.member.invitationLink);
    } catch (e) {
      setIsLogged(false);
      // console.log(e);
    }
  };

  // cookie
  const checkLocation = () => {
    const onboardingCookie = getCookie("onboarding");
    if (onboardingCookie === "" && props.data == undefined) {
      router.push("/onboarding");
    }
    if (
      onboardingCookie &&
      getCookie("token") == "" &&
      props.data === undefined
    ) {
      // 온보딩봤고, 로그인안했고, 친구코드로 접속한게 아니면 login으로
      router.push("/title");
    }
  };

  useEffect(() => {
    getMyBGM();
    checkLocation();
  }, []);

  useEffect(() => {
    getMemberData();
    handleCalendarOwner();
  }, [memberInfo]);

  useEffect(() => {
    getCurrCalUser();
  }, [props]);

  // invitation page에서 넘어온건지 확인
  const [ismycalendar, setIsmycalendar] = useState(true);
  const handleCalendarOwner = () => {
    if (Object.keys(props).length < 1 || !props.data) {
      setIsmycalendar(true);
    } else {
      setIsmycalendar(false);
    }
  };

  const MyCalendarBtn = () => {
    ``;
    return (
      <>
        <ButtonFlex>
          <Flex>
            <Friends onClick={clickFriendIconHandler} />
            {/* <LinkCopy onClick={linkCopyHandler} /> */}
            <SearchBtn src="/assets/image/share/kakao_button.png" onClick={shareKakao} />

            <FriendsModal
              show={friendModalShow}
              onHide={handleFriendsModalClose}
            />
          </Flex>
          <Flex>
            <CopyModal
              link={`https://pitapat-adventcalendar.site/${myLink}`}
              show={copyModal}
              onHide={handleCopyModalClose}
            />
          </Flex>
          <Flex>
            {/*BGM react-howler 라이브러리*/}
            <ReactHowler src="./bgm.mp3" playing={mute} loop={true} />
            {mute ? (
              <Bgm onClick={() => muteHandler(mute)} />
            ) : (
              <MuteBgm onClick={() => muteHandler(mute)} />
            )}
            <Snowball onClick={clickSnowballIconHandler} />
            <SnowballMobile onClick={() => router.push("/snowball")} />
            <Info onClick={clickInformationIconHandler} />
            <InformationModal
              show={informationModalShow}
              onHide={handleInformationModalClose}
            />
          </Flex>
        </ButtonFlex>
        <BottomCopyLink onClick={linkCopyHandler}>내 캘린더링크 공유하기</BottomCopyLink>
        <Share loggedId={loggedMemberId}/>
      </>
    );
  };

  const handleGoMyCal = () => {
    router.push("/");
  };

  const FriendsCalendarBtn = () => {
    return (
      <>
        <ButtonFlex>
          {isLogged === false ? null : (
            <GoBackMyCal onClick={handleGoMyCal}>내 캘린더로 이동</GoBackMyCal>
          )}
          <Flex>
            {/*BGM react-howler 라이브러리*/}
            <ReactHowler src="./bgm.mp3" playing={mute} loop={true} />
            {mute ? (
              <Bgm onClick={() => muteHandler(mute)} />
            ) : (
              <MuteBgm onClick={() => muteHandler(mute)} />
            )}
            <Snowball onClick={clickSnowballIconHandler} />
            <Info onClick={clickInformationIconHandler} />
            <InformationModal
              show={informationModalShow}
              onHide={handleInformationModalClose}
            />
          </Flex>
        </ButtonFlex>
        {isLogged === true ? null : (
        <CalendarYellowBtn onClick={()=> router.push('/title')}>내 캘린더도 만들기✨</CalendarYellowBtn>
        )}
      </>
    );
  };

  return (
    <div id="home">
      <MainFlex>
        <Seo title="Home" />
        <MainContainer>
          <br />
          <h2><Span>{myName}의 캘린더</Span></h2>
          <InfoText>날짜조각을 클릭해 기프티콘, 짤, 응원의 메세지등을 보내보세요!</InfoText>
          <InfoText>* 내 캘린더 링크를 공유해 쪽지를 받을 수 있어요 *</InfoText>
          {/* 실제 invitation Link 로 보내기 */}
          <Calendar ismycalendar={ismycalendar} loggedId={loggedMemberId} />
          {ismycalendar ? <MyCalendarBtn /> : <FriendsCalendarBtn />}
        </MainContainer>
        {snowballModalShow ? (
          <SnowballContainer>
            <Suspense
              fallback={
                <div>
                  <Text>로딩 중.....</Text>
                  <img
                    src="/assets/image/character/spinner.gif"
                    alt="spinner"
                  />
                </div>
              }
            >
              <Text>스노우볼을 움직여보세요</Text>
              <Canvas>
                <ModelComponent />
              </Canvas>
            </Suspense>
          </SnowballContainer>
        ) : null}
      </MainFlex>
    </div>
  );
};

export default Home;
