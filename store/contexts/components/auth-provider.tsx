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
      const userData = await getLoggedMember();
      setStoreUserdata(userData);
      measureUser({ user_id: userData?.id });
    } catch (e) {
      // 같은 페이지에 auth 필요한 / 필요 없는 기능 모두 있어서 우선 에러 캐치 스킵할게요!
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
  const [storeSettingStatus, setStoreSettingStatus] = useState<boolean>(false);
  const value = {
    storeUserData,
    updateUserData,
    storeRefreshToken,
    updateRefreshToken,
    storeSettingStatus,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
}
