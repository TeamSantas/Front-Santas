import styled from "styled-components";
import OtherLayout from "../components/layout/new/OtherLayout";
import { useRouter } from "next/router";
import { useCallback, useEffect } from "react";
import { MainContainer, Flex } from "../styles/styledComponentModule";
import { setGetCurrCalendarUserInfo } from "../api/hooks/useGetCurrCalendarUserInfo";
import OtherCalendar from "../components/index/OtherCalendar";
import { Modals } from "../components/modals/modals";
import { useAtom } from "jotai";
import {
  loginUserDataAtom,
  profileUserDataAtom,
  isMyCalendarAtom,
} from "../store/globalState";

const OtherCalendarPage = ({ invitationCode }) => {
  const router = useRouter();
  const [storeUserData] = useAtom(loginUserDataAtom);
  const [profileUser, setProfileUser] = useAtom(profileUserDataAtom);
  const [, setIsMyCalendar] = useAtom(isMyCalendarAtom);

  const getProfileUser = useCallback(async () => {
    try {
      const res = await setGetCurrCalendarUserInfo(invitationCode);
      if (res.status === 200) {
        setProfileUser(res.data.data);
        return;
      }
    } catch (e) {
      console.log(e);
      router.push("/404");
    }
  }, [invitationCode, router, setProfileUser]);

  useEffect(() => {
    // 친구 코드가 내 코드일 때는 내 캘린더로 바로 이동한다.
    if (storeUserData.invitationLink === invitationCode) {
      router.push("/");
      return;
    }

    getProfileUser(); // 캘린더 주인 데이터
    setIsMyCalendar(false);
  }, [
    getProfileUser,
    invitationCode,
    router,
    setIsMyCalendar,
    storeUserData.invitationLink,
  ]);

  return (
    <div id="home">
      <MainFlex>
        <Modals />
        <MainContainer>
          <br />
          <OtherCalendar name={profileUser.nickname} />
        </MainContainer>
      </MainFlex>
    </div>
  );
}

OtherCalendarPage.getLayout = (page) => {
  return <OtherLayout>{page}</OtherLayout>;
};

export default OtherCalendarPage;

export async function getServerSideProps(context) {
  const { invitation_code: invitationCode } = context.params;
  return {
    props: {
      invitationCode,
    },
  };
}

const MainFlex = styled(Flex)`
  margin-top: -15px;
`;
