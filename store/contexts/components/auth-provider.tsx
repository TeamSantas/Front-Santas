import React, { useCallback, useEffect, useState } from "react";
import { Context } from "../core/context";
import { getLoggedMemberRaw } from "../../../api/hooks/useMember";
import { MemberData } from "../../../util/type";
import { useRouter } from "next/router";
import { measureUser } from "../../../lib/gtag";
import { useAtom } from "jotai";
import {
  loginUserDataAtom,
  sidebarBgmAtom,
  sidebarNotificationAtom,
  todayPresentCountAtom,
} from "../../globalState";
import { removeCookie } from "../../../businesslogics/cookie";
import { getCookie } from "cookies-next";

interface Props {
  children: React.ReactNode;
}

export default function AuthProvider({ children }: Props) {
  const [storeUserData, setStoreUserData] = useAtom(loginUserDataAtom);
  const [, setTodayPresentCount] = useAtom(todayPresentCountAtom);
  const [, setBgmOn] = useAtom(sidebarBgmAtom);
  const [, setNotificationOn] = useAtom(sidebarNotificationAtom);
  const [storeRefreshToken, setStoreRefreshToken] = useState<string>("");
  const router = useRouter();
  const updateRefreshToken = (refreshToken: string) => {
    setStoreRefreshToken(refreshToken);
  };

  const handleUpdateUserData = useCallback(async () => {
    try {
      const res = await updateUserData(
        setStoreUserData,
        setTodayPresentCount,
        setBgmOn,
        setNotificationOn
      );

      if (!res) {
        removeCookie("token");
        router.push("/login");
      }
    } catch (e) {
      removeCookie("token");
      router.push("/login");
    }
  }, [
    router,
    setBgmOn,
    setNotificationOn,
    setStoreUserData,
    setTodayPresentCount,
  ]);

  useEffect(() => {
    const token = getCookie("token");
    if (!router.pathname.includes("/login") && token) {
      handleUpdateUserData();
    }
  }, [handleUpdateUserData, router.pathname]);

  const value = {
    storeUserData,
    updateUserData,
    storeRefreshToken,
    updateRefreshToken,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
}

export const updateUserData = async (
  setStoreUserData,
  setTodayPresentCount,
  setBgmOn,
  setNotificationOn
) => {
  try {
    const res = await getLoggedMemberRaw();
    if (!res || res.status !== 200) {
      // 토큰 만료 or 로그인 안했으면 리다이렉트
      return false;
    }

    if (res.status === 200) {
      const memberData = res.data.data;
      const { member, todayPresentCount } = memberData;

      // global state 저장 ----------------------
      setStoreUserData(member as MemberData);
      setTodayPresentCount(todayPresentCount);
      setBgmOn(member.setting.bgm);
      setNotificationOn(member.setting.isAlert);
      // ---------------------------------------

      measureUser({ user_id: member.id });
      return true;
    }
  } catch (e) {
    console.error(e);
    return false;
  }
};
