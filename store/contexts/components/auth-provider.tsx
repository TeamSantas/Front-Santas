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
  const updateUserData = useCallback(async () => {
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
  }, [setStoreUserData, setTodayPresentCount, setBgmOn, setNotificationOn]);

  const updateRefreshToken = (refreshToken: string) => {
    setStoreRefreshToken(refreshToken);
  };

  useEffect(() => {
    if (!router.pathname.includes("upcoming")) {
      updateUserData();
    }
  }, [router.pathname, updateUserData]);

  const value = {
    storeUserData,
    updateUserData,
    storeRefreshToken,
    updateRefreshToken,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
}
