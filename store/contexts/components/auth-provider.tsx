import React, { useEffect, useState } from "react";
import { Context } from "../core/context";
import { getLoggedMember } from "../../../api/hooks/useMember";
import { MemberData } from "../../../util/type";
import { useRouter } from "next/router";
import { measureUser } from "../../../lib/gtag";

interface Props {
  children: React.ReactNode;
}

export default function AuthProvider({ children }: Props) {
  const [storeUserData, setStoreUserdata] = useState<MemberData>(
    {} as MemberData
  );
  const [storeRefreshToken, setStoreRefreshToken] = useState<string>("");
  const router = useRouter();
  const updateUserData = async () => {
    try {
      const res = await getLoggedMember();
      setStoreUserdata(res?.data?.data);
      measureUser({ user_id: res?.data?.data?.member?.id }); //TODO: 멤버 데이터 확인
    } catch (e) {
      throw new Error("🔑 로그인이 필요합니다. \n", e);
    }
  };

  const updateRefreshToken = (refreshToken: string) => {
    setStoreRefreshToken(refreshToken);
  };

  useEffect(() => {
    if (!router.pathname.includes("upcoming")) {
      updateUserData();
    }
  }, []);

  const value = {
    storeUserData,
    updateUserData,
    storeRefreshToken,
    updateRefreshToken,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
}
