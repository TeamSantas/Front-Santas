import { removeCookie } from "../../businesslogics/cookie";

export const kakaoLogout = () => {
  removeCookie("token");
  // AuthAuthInstance.get<ResponseData<any>>(`/api/member/logout`);
  return "logout_ok";
};
