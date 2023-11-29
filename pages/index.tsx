import styled from "styled-components";
import { MainContainer, Flex } from "../styles/styledComponentModule";
import { Modals } from "../components/modals/modals";
import MainLayout from "../components/layout/new/MainLayout";
import MyCalendar from "../components/index/MyCalendar";
import { useAtom } from "jotai";
import {
  isMyCalendarAtom,
  loginUserDataAtom,
  todayPresentCountAtom,
} from "../store/globalState";
import { useEffect } from "react";

const Home = () => {
  const [, setIsMyCalendar] = useAtom(isMyCalendarAtom);
  const [storeUserData] = useAtom(loginUserDataAtom);
  const [todayPresentCount] = useAtom(todayPresentCountAtom);

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
            userData={storeUserData}
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
        // 친구 코드 접근도 아니고,
        // 로그인한 유저도 아니라면 로그인으로 이동
        redirect: { destination: "/login" },
      },
    };
  }
  return {
    props: {},
  };
}

const MainFlex = styled(Flex)`
  margin-top: -15px;
`;
