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

  useEffect(() => {
    const token = getCookie("token");
    if (!router.pathname.includes("upcoming") && token) {
      updateUserData(
        setStoreUserData,
        setTodayPresentCount,
        setBgmOn,
        setNotificationOn
      );
    }
  }, [
    router.pathname,
    setBgmOn,
    setNotificationOn,
    setStoreUserData,
    setTodayPresentCount,
  ]);

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
    const memberData = await getLoggedMemberRaw();
    const { member, todayPresentCount } = memberData;

    // global state 저장 ----------------------
    setStoreUserData(member as MemberData);
    setTodayPresentCount(todayPresentCount);
    setBgmOn(member.setting.bgm);
    setNotificationOn(member.setting.isAlert);
    // ---------------------------------------

    measureUser({ user_id: member.id });
  } catch (e) {
    console.error(e);
  }
};
