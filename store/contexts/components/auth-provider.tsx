import React, { useCallback, useEffect, useState } from "react";
import { Context } from "../core/context";
import { getLoggedMember } from "../../../api/hooks/useMember";
import { MemberData } from "../../../util/type";
import { useRouter } from "next/router";
import { measureUser } from "../../../lib/gtag";
import { useAtom } from "jotai";
import { loginUserDataAtom } from "../../globalState";

interface Props {
  children: React.ReactNode;
}

export default function AuthProvider({ children }: Props) {
  const [storeUserData, setStoreUserData] = useAtom(loginUserDataAtom);
  const [storeRefreshToken, setStoreRefreshToken] = useState<string>("");
  const router = useRouter();
  const updateUserData = useCallback(async () => {
    try {
      const userData = await getLoggedMember();
      setStoreUserData(userData as MemberData);
      measureUser({ user_id: userData?.id });
    } catch (e) {
      console.error(e);
    }
  }, [setStoreUserData]);

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
