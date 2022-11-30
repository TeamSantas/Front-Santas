import React, { createContext, useState } from "react";
import { getLoggedMember } from "../api/hooks/useMember";
import { defaultMemberData, MemberData } from "../util/type";

const initialValue: valueType = {
  storeUserData: defaultMemberData,
  updateUserData: () => {},
  storeRefreshToken: "",
  updateRefreshToken: "",
};

export const storeContext = createContext(initialValue);

export default function Store({ children }: Props) {
  const [storeUserData, setStoreUserdata] = useState<MemberData>(
    {} as MemberData
  );
  const [storeRefreshToken, setStoreRefreshToken] = useState<string>("");

  const updateUserData = async () => {
    try {
      const data = await getLoggedMember();
      console.log(data.data)
      setStoreUserdata(data.data.data);
      return data.data;
    } catch (e) {
      console.log(e);
    }
  };

  const updateRefreshToken = (refreshToken: string) => {
    setStoreRefreshToken(refreshToken);
  };

  const value = {
    storeUserData,
    updateUserData,
    storeRefreshToken,
    updateRefreshToken,
  };

  return (
    <storeContext.Provider value={value}>{children}</storeContext.Provider>
  );
}

interface Props {
  children: React.ReactNode;
}

interface valueType {
  storeUserData: MemberData;
  updateUserData: any;
  storeRefreshToken: string;
  updateRefreshToken: any;
}
