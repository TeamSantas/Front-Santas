import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import Home from ".";
import FriendsService from "../api/FriendsService";
import { setGetCurrCalendarUserInfo } from "../api/hooks/useGetCurrCalendarUserInfo";
import MemberService from "../api/MemberService";

export default function OtherCalendar() {
  const router = useRouter();
  const [code, setCode] = useState("");
  const [userData, setUserData] = useState({});

  const isMyCode = async (code: string) => {
    try {
      const myLink = await (
        await MemberService.getLoggedMember()
      ).data.data.invitationLink;
      if (myLink === code) {
        alert(
          "자기 자신은 친구코드로 접근할 수 없습니다! 내 캘린더 페이지로 이동합니다🎅"
        );
        router.push("/");
      }
    } catch (e) {
      // console.log(e);
    }
  };

  const handleInvitationCode = () => {
    if (typeof window !== "undefined") {
      const path = window.location.pathname;
      if (path.length == 37) {
        const tmp = window.location.pathname.split("/");
        setCode(tmp[1].slice(0, 36));
        return tmp[1].slice(0, 36);
      }
    }
  };

  const getLinkMember = async (code: string) => {
    // console.log(code, "url에서 받아온 코드");
    isMyCode(code);

    let res;
    try {
      res = await setGetCurrCalendarUserInfo(code);
    } catch (e) {
      // console.log(e);
    }
    if (res) {
      setUserData(userData);
    } else {
      router.replace("/404");
    }
  };

  useEffect(() => {
    const link = handleInvitationCode();
    getLinkMember(link);
  }, []);

  return <Home data={userData} link={code} />;
}
