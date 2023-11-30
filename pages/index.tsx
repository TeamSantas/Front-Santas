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
import { useRouter } from "next/router";

const Home = () => {
  const [, setIsMyCalendar] = useAtom(isMyCalendarAtom);
  const [todayPresentCount] = useAtom(todayPresentCountAtom);
  const [storeUserData] = useAtom(loginUserDataAtom);
  const router = useRouter();
  const isLoginUser = storeUserData.id !== -1;

  useEffect(() => {
    if (!isLoginUser) {
      router.replace("/login");
    }
    setIsMyCalendar(true);
  }, [setIsMyCalendar, router, isLoginUser]);

  return (
    <div id="home">
      <MainFlex>
        <Modals />
        <MainContainer>
          <br />
          <MyCalendar todayPresentCount={todayPresentCount} />
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
  // 친구 코드 접근도 아니고,
  // 로그인한 유저도 아니라면 로그인으로 이동

  if (!token) {
    context.res.writeHead(302, { Location: "/login" });
    context.res.end();
  }
  return {
    props: {},
  };
}

const MainFlex = styled(Flex)`
  margin-top: -15px;
`;
