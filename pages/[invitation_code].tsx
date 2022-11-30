import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import Home from ".";
import FriendsService from "../api/FriendsService";
import { setGetCurrCalendarUserInfo } from "../api/hooks/useGetCurrCalendarUserInfo";

export default function OtherCalendar() {
  const router = useRouter();
  const [code, setCode] = useState("");
  const [userData, setUserData] = useState({});

  const handleInvitationCode = () => {
    if (typeof window !== "undefined") {
      const path = window.location.pathname;
      if (path.length == 37) {
        const tmp = window.location.pathname.split("/");
        setCode(tmp[1]);
        return tmp[1];
      }
    }
  };

  const getLinkMember = async (code: string) => {
    console.log(code, "코드에용");
    let res;
    try {
      res = await setGetCurrCalendarUserInfo(code);
    } catch (e) {
      console.log(e);
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
