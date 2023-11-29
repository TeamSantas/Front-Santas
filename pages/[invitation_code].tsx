import styled from "styled-components";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { MainContainer, Flex } from "../styles/styledComponentModule";
import { getServerUserInfo } from "../api/hooks/useGetCurrCalendarUserInfo";
import OtherCalendar from "../components/index/OtherCalendar";
import { Modals } from "../components/modals/modals";
import { useAtom } from "jotai";
import {
  loginUserDataAtom,
  profileUserDataAtom,
  isMyCalendarAtom,
} from "../store/globalState";

export default function OtherCalendarPage({ invitationCode, userData }) {
  const router = useRouter();
  const [storeUserData] = useAtom(loginUserDataAtom);
  const [, setProfileUser] = useAtom(profileUserDataAtom);
  const [, setIsMyCalendar] = useAtom(isMyCalendarAtom);

  useEffect(() => {
    if (storeUserData.invitationLink === invitationCode) {
      router.push("/");
    }
    setProfileUser(userData);
    setIsMyCalendar(false);
  }, [
    invitationCode,
    router,
    setIsMyCalendar,
    setProfileUser,
    storeUserData.invitationLink,
    userData,
  ]);

  return (
    <div id="home">
      <MainFlex>
        <Modals />
        <MainContainer>
          <br />
          <OtherCalendar name={userData.nickname} />
        </MainContainer>
      </MainFlex>
    </div>
  );
}

export async function getServerSideProps(context) {
  const token = context.req.cookies["token"];
  const { invitation_code: invitationCode } = context.params;

  try {
    const res = await getServerUserInfo(invitationCode, token);

    if (res.status === 200) {
      return {
        props: {
          invitationCode,
          userData: res.data.data,
        },
      };
    }
  } catch (e) {
    console.log(e);
    return {
      props: {
        redirect: { destination: "/404" },
      },
    };
  }
}

const MainFlex = styled(Flex)`
  margin-top: -15px;
`;
