import React from "react";
import { Context } from "../core/context";

/**
 * member: {
    id: string;
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
  if (!state) {
    throw new Error("AuthProvider is not found!");
  }
  return state;
};

/**
 * 로그인이 반드시 필요한 페이지에서 사용
 */
const useAuthRedirect = (returnUrl = "") => {
  const state = React.useContext(Context);
  if (!state) {
    window.location.href = "login";
    throw new Error("AuthProvider is not found!");
  }
};

export { useAuthContext, useAuthRedirect };
