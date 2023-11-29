import styled from "styled-components";
import { MainContainer, Flex } from "../styles/styledComponentModule";
import { MemberData } from "../util/type";
import { Modals } from "../components/modals/modals";
import MainLayout from "../components/layout/new/MainLayout";
import MyCalendar from "../components/index/MyCalendar";
import { getServerLoggedMember } from "../api/hooks/useMember";
import { setCookie } from "../businesslogics/cookie";
import { useAtom } from "jotai";
import { isMyCalendarAtom } from "../store/globalState";
import { useEffect } from "react";

interface IHome {
  userData: MemberData; // [invitation_code].tsx 에서 넘어온 코드
  todayPresentCount: number;
}

const Home = ({ userData, todayPresentCount }: IHome) => {
  const [, setIsMyCalendar] = useAtom(isMyCalendarAtom);

  useEffect(() => {
    setIsMyCalendar(true);
  }, [setIsMyCalendar]);

  return (
    <div id="home">
      <MainFlex>
        <Modals />
        <MainContainer>
          <br />
          <MyCalendar
            userData={userData}
            todayPresentCount={todayPresentCount}
          />
        </MainContainer>
      </MainFlex>
    </div>
  );
};

export default Home;

Home.getLayout = (page) => {
  return <MainLayout>{page}</MainLayout>;
};

export async function getServerSideProps(context) {
  const token = context.req.cookies["token"];
  if (!token) {
    return {
      props: {
        redirect: { destination: "/login" },
      },
    };
  }

  try {
    const res = await getServerLoggedMember(token);
    if (res.status === 200) {
      const userData = res.data.data.member;
      const todayPresentCount = res.data.data.todayPresentCount;
      setCookie("invitationLink", userData.invitationLink, context);
      return {
        props: {
          userData,
          todayPresentCount,
        },
      };
    }
  } catch (e) {
    console.log(e);
    return {
      props: {},
    };
  }
}

const MainFlex = styled(Flex)`
  margin-top: -15px;
`;
