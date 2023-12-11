import styled from "styled-components";
import { useRouter } from "next/router";
import { useEffect } from "react";
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
import { defaultMemberData } from "../util/type";
import MainLayout from "../components/layout/new/MainLayout";

export default function OtherCalendarPage({ calendarUser, invitationCode }) {
  const router = useRouter();
  const [storeUserData] = useAtom(loginUserDataAtom);
  const [profileUser, setProfileUser] = useAtom(profileUserDataAtom);
  const [, setIsMyCalendar] = useAtom(isMyCalendarAtom);

  useEffect(() => {
    // 친구 코드가 내 코드일 때는 내 캘린더로 바로 이동한다.
    if (storeUserData.invitationLink === invitationCode) {
      router.push("/");
      return;
    }

    setProfileUser(calendarUser);
    setIsMyCalendar(false);
  }, [
    calendarUser,
    invitationCode,
    router,
    setIsMyCalendar,
    setProfileUser,
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
  return <MainLayout>{page}</MainLayout>;
};

export async function getServerSideProps(context) {
  const { invitation_code: invitationCode } = context.params;

  // returnUrl 쿠키 삭제
  context.res.setHeader(
    "Set-Cookie",
    `returnUrl=; Max-Age=0; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT`
  );

  try {
    const res = await setGetCurrCalendarUserInfo(invitationCode);
    if (res.status === 200) {
      return {
        props: {
          calendarUser: res.data.data,
          invitationCode,
        },
      };
    }
  } catch (e) {
    console.log(e);
    context.res.writeHead(302, { Location: "/invalid-invitation-link" });
    context.res.end();
  }

  return {
    props: {
      calendarUser: defaultMemberData,
      invitationCode,
    },
  };
}

const MainFlex = styled(Flex)`
  margin-top: -15px;
`;
