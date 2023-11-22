import React from "react";
import { Context } from "../core/context";

/**
 * member: {
    id: number;
    nickname: string;
    profileImageURL: string;
    email: string;
    invitationLink: string;
    setting: {
      id: number;
      isAlert: boolean;
      bgm: boolean;
      fcmtokens: string;
    };
  };
 */
const useAuthContext = () => {
  const state = React.useContext(Context);
  return state;
};

export { useAuthContext };
