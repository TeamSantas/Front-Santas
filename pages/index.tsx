import { MainContainer } from "../styles/styledComponentModule";
import { Modals } from "../components/modals/modals";
import MainLayout from "../components/layout/new/MainLayout";
import MyCalendar from "../components/index/MyCalendar";
import { useAtom } from "jotai";
import {
  isMyCalendarAtom,
  loginUserDataAtom,
  receivedPresentListAtom,
  todayPresentCountAtom,
} from "../store/globalState";
import { useCallback, useEffect } from "react";
import { setGetNumberOfReceivedPresents } from "../api/hooks/useGetNumberOfReceivedPresents";

const Home = () => {
  const [, setIsMyCalendar] = useAtom(isMyCalendarAtom);
  const [todayPresentCount] = useAtom(todayPresentCountAtom);
  const [, setRecivedPresentList] = useAtom(receivedPresentListAtom);
  const [storeUserData] = useAtom(loginUserDataAtom);

  const updateReceivedPresentListData = useCallback(
    async (loggedId: number) => {
      try {
        const res = await setGetNumberOfReceivedPresents(loggedId);
        const presentList = res.data.data;
        setRecivedPresentList(presentList);
      } catch (e) {
        console.error(e);
      }
    },
    [setRecivedPresentList]
  );

  useEffect(() => {
    if (storeUserData.id > 0) {
      updateReceivedPresentListData(storeUserData.id);
    }
  }, [storeUserData, updateReceivedPresentListData]);

  useEffect(() => {
    setIsMyCalendar(true);
  }, [setIsMyCalendar]);

  return (
    <div id="home">
      <Modals />
      <MainContainer>
        <MyCalendar todayPresentCount={todayPresentCount} />
      </MainContainer>
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
