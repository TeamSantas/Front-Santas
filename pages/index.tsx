// @ts-nocheck
import styled from "styled-components";
import { NextPage } from "next";
import { Icons, MainContainer, Flex } from "../styles/styledComponentModule";
import Calendar from "../components/index/Calendar";
import { getCookie } from "../businesslogics/cookie";
import { Component, lazy, ReactElement, useEffect, useState } from "react";
import ReactHowler from "react-howler";
import { dataProps, MemberData } from "../util/type";
import { useRouter } from "next/router";
import { setBGM } from "../api/hooks/useStting";
import { setGetCurrCalendarUserInfo } from "../api/hooks/useGetCurrCalendarUserInfo";
import { Modals } from "../components/modals/modals";
import MainLayout from "../components/layout/new/MainLayout";
import {useAuthContext} from "../store/contexts/components/hooks";
import {setCookie} from "cookies-next";

const Home: NextPage<dataProps> = (props: dataProps) => {
  // console.log(props, "인덱스에넘겨주는프롭스");
  // 만약 프롭스에 유저데이터 있으면 내캘린더 아님;; 없으면 내캘린더 >>>
  const router = useRouter();
  const [memberInfo, setMemberInfo] = useState<string>("나");
  const [loggedMemberId, setLoggedMemberId] = useState(null);
  const [myName, setMyName] = useState<string>("나");
  const [mute, setMute] = useState(false);
  const [isLogged, setIsLogged] = useState(true);


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


//엔딩 떄 사용하기
  const goEndingHandler = () => {
    window.location.href = "/endingbridge";
  };


  // 사용자의 정보를 조회해 캘린더의 접근 권한을 설정한다.

  const userData = useAuthContext().storeUserData;

  useEffect(() => {
    if(userData){
      setMemberInfo(userData.nickname);
      setLoggedMemberId(userData.id);
      setCookie("invitationLink", userData.invitationLink);
    }else{
      setIsLogged(false);
    }
  }, [userData]);

// TODO:새로만든 훅으로 현재 로그인 된 유저정보 가져오기
  const getCurrCalUser = async () => {
    let currInvitationLink = props.link;
    try {
      if (currInvitationLink.length < 2) {
        setMyName(memberInfo);
      } else {
        const res = await setGetCurrCalendarUserInfo(currInvitationLink);
        if (myName != userData.nickname) setMyName(userData.nickname);
      }
    } catch (e) {
      // setMyName(router.asPath.slice(1))
    }
  };

  useEffect(() => {
    getCurrCalUser();
  }, [props]);

  // endingCookie
  const today = new Date();
  // const showEnding = () => {
  //   const endingCookie = getCookie("ending");
  //   if (endingCookie === "" && props.data == undefined) {
  //     router.push("/endingbridge");
  //   }
  //   if (endingCookie && getCookie("token") == "" && props.data === undefined) {
  //     // 엔딩 봤고, 로그인안했고, 친구코드로 접속한게 아니면 login으로
  //     router.push("/title");
  //   }
  // };

  // useEffect(() => {
  //   getMyBGM();
  //   if (today.getDate() === 25) {
  //     showEnding();
  //   }
  // }, []);

  useEffect(() => {
    // getMemberData();
    handleCalendarOwner();
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
    return <Modals />
  };

  const handleGoMyCal = () => {
    router.push("/");
  };

  const FriendsCalendarBtn = () => {
    return (
        <>
          {/*TODO: 내 캘린더로 이동하기/친구 캘린더 가기에 필요한 함수들*/}
          {/*BGM react-howler 라이브러리*/}
          <ReactHowler src="./bgm.mp3" playing={mute} loop={true} />
          {/*TODO: 사이드바에 넣어야 할 기능*/}
          {/*{mute ? (*/}
          {/*  <Bgm onClick={() => muteHandler(mute)} />*/}
          {/*) : (*/}
          {/*  <MuteBgm onClick={() => muteHandler(mute)} />*/}
          {/*)}*/}
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
            {/*TODO: 여기서 시작하기! 여기가 친구 or 내 캘린더로 보내는 지점이야*/}
            <Calendar ismycalendar={ismycalendar} loggedId={loggedMemberId} />
            {ismycalendar ? <MyCalendarBtn /> : <FriendsCalendarBtn />}
          </MainContainer>
        </MainFlex>
      </div>
  );
};

export default Home;
Home.getLayout = (page: ReactElement) => {
  return <MainLayout>{page}</MainLayout>;
};


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

