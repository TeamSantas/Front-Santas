// @ts-nocheck
import styled from "styled-components";
import { NextPage } from "next";
import { Icons, MainContainer, Flex } from "../styles/styledComponentModule";
import Calendar from "../components/index/Calendar";
import Share from "../components/share/Share";
import { getCookie } from "../businesslogics/cookie";
import ReactHowler from "react-howler";
import { Component, lazy, ReactElement, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import FriendsModal from "../components/friends/FriendsModal";
import { Suspense } from "react";
import { setGetMember } from "../api/hooks/useGetMember";
import { dataProps, MemberData } from "../util/type";
import { useRouter } from "next/router";
import { setBGM } from "../api/hooks/useStting";
import { getLoggedMember } from "../api/hooks/useMember";
import InformationModal from "../components/index/InformationModal";
import { setGetCurrCalendarUserInfo } from "../api/hooks/useGetCurrCalendarUserInfo";
import Seo from "../components/common/Seo";
import { setCookie } from "cookies-next";
import CopyModal from "../components/index/CopyModal";
import { shareKakao } from "../components/share/ShareAPIButton";
import { Modals } from "../components/modals/modals";
import PlainLayout from "../components/layout/new/PlainLayout";
import Login from "./login";
import MainLayout from "../components/layout/new/MainLayout";
import Layout from "../components/layout/new/Layout";

const MainIcons = styled(Icons)`
  height: 35px;
`;
const Snowball = styled(MainIcons)`
  margin-left: 10px;
  background-image: url("/assets/image/icons/snowball.svg");
  @media (max-width: 1000px) {
    display: none;
  }
`;
const GoBackMyCal = styled.div`
  background: #ac473d;
  border-radius: 12px;
  color: white;
  padding: 6px 15px;
  text-align: center;
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
const MainFlex = styled(Flex)`
  margin-top: -15px;
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
      // const res = await getLoggedMember();
      // setMute(res.setting.bgm);
    } catch (e) {
      // console.log(e);
    }
  };

  const muteHandler = (value) => {
    setMute(!value);
    setBGM(!value);
  };

  const linkCopyHandler = async () => {
    const copyURL = `https://merry-christmas.site/${myLink}`;
    console.log(copyURL);
    try {
      await navigator.clipboard.writeText(copyURL);
      alert(
        "내 캘린더 링크가 복사되었습니다. 친구에게 공유해 쪽지를 주고받아보세요!"
      );
    } catch (e) {
      alert(
        "내 초대링크를 복사해 보내보세요! 바로 복사를 원하신다면~? 크롬브라우저로 접속해보세요✨"
      );
      clickCopyIconHandler();
    }
  };

  const goEndingHandler = () => {
    window.location.href = "/endingbridge";
  };

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
      } else {
        const res = await setGetCurrCalendarUserInfo(currInvitationLink);
        if (myName != res.data.data.nickname) setMyName(res.data.data.nickname);
      }
    } catch (e) {
      // setMyName(router.asPath.slice(1))
    }
  };

  const [isLogged, setIsLogged] = useState(true);
  // 사용자의 정보를 조회해 캘린더의 접근 권한을 설정한다.
  const getMemberData = async () => {
    // try {
    //   const res = await setGetMember();
    //   setMemberInfo(res.data.data.nickname);
    //   setMyLink(res.data.data.invitationLink);
    //   setLoggedMemberId(res.data.data.id);
    //   // console.log(">>>>>>>>>")
    //   // console.log(res.data.data.id)
    //   setCookie("invitationLink", res.data.data.invitationLink);
    // } catch (e) {
    //   setIsLogged(false);
    //   // console.log(e);
    // }
  };

  // endingCookie
  const today = new Date();
  const showEnding = () => {
    const endingCookie = getCookie("ending");
    if (endingCookie === "" && props.data == undefined) {
      router.push("/endingbridge");
    }
    if (endingCookie && getCookie("token") == "" && props.data === undefined) {
      // 엔딩 봤고, 로그인안했고, 친구코드로 접속한게 아니면 login으로
      router.push("/title");
    }
  };

  useEffect(() => {
    getMyBGM();
    if (today.getDate() === 25) {
      showEnding();
    }
  }, []);

  useEffect(() => {
    // getMemberData();
    // handleCalendarOwner();
  }, [memberInfo]);

  useEffect(() => {
    // getCurrCalUser();
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
        <Modals />
      </>
    );
  };

  const handleGoMyCal = () => {
    router.push("/");
  };

  const FriendsCalendarBtn = () => {
    return (
      <>
        {/*TODO: 내 캘린더로 이동하기/친구 캘린더 가기에 필요한 함수들*/}
        {/*<ButtonFlex>*/}
        {/*  {isLogged === false ? null : (*/}
        {/*    <GoBackMyCal onClick={handleGoMyCal}>내 캘린더로 이동</GoBackMyCal>*/}
        {/*  )}*/}
        {/*  <Flex>*/}
        {/*    /!*BGM react-howler 라이브러리*!/*/}
        {/*    <ReactHowler src="./bgm.mp3" playing={mute} loop={true} />*/}
        {/*    {mute ? (*/}
        {/*      <Bgm onClick={() => muteHandler(mute)} />*/}
        {/*    ) : (*/}
        {/*      <MuteBgm onClick={() => muteHandler(mute)} />*/}
        {/*    )}*/}
        {/*    <Snowball onClick={clickSnowballIconHandler} />*/}
        {/*    <Info onClick={clickInformationIconHandler} />*/}
        {/*    <InformationModal*/}
        {/*      show={informationModalShow}*/}
        {/*      onHide={handleInformationModalClose}*/}
        {/*    />*/}
        {/*  </Flex>*/}
        {/*</ButtonFlex>*/}
        {isLogged === true ? null : (
          <CalendarYellowBtn onClick={() => router.push("/title")}>
            내 캘린더도 만들기✨
          </CalendarYellowBtn>
        )}
      </>
    );
  };

  return (
    <div id="home">
      <MainFlex>
        <MainContainer>
          <br />
          {/* 실제 invitation Link 로 보내기 */}
          <Calendar ismycalendar={ismycalendar} loggedId={loggedMemberId} />
          {ismycalendar ? <MyCalendarBtn /> : <FriendsCalendarBtn />}
        </MainContainer>
        {snowballModalShow ? <Snowball /> : null}
      </MainFlex>
    </div>
  );
};

export default Home;
// //TODO : 여기 손봐서 집모양 나오게 해야함
Home.getLayout = (page: ReactElement) => {
  return <MainLayout>{page}</MainLayout>;
};
