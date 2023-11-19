import React, { useEffect, useState } from "react";
import { Context } from "../core/context";
import { getLoggedMember } from "../../../api/hooks/useMember";
import { MemberData } from "../../../util/type";

interface Props {
  children: React.ReactNode;
}

export default function AuthProvider({ children }: Props) {
  const [storeUserData, setStoreUserdata] = useState<MemberData>(
    {} as MemberData
  );
  const [storeRefreshToken, setStoreRefreshToken] = useState<string>("");

  const updateUserData = async () => {
    try {
      const res = await getLoggedMember();
      setStoreUserdata(res.data.data);
    } catch (e) {
      console.log(e);
    }
  };

  const updateRefreshToken = (refreshToken: string) => {
    setStoreRefreshToken(refreshToken);
  };

  useEffect(() => {
    updateUserData();
  }, []);

  const value = {
    storeUserData,
    updateUserData,
    storeRefreshToken,
    updateRefreshToken,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
}
