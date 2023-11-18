import AuthService from "../AuthService";
import { removeCookie } from "../../businesslogics/cookie";
import { AuthAuthInstance } from "../APIInstance";
import { ResponseData } from "../../util/type";

export const kakaoLogout = () => {
  removeCookie("token");
  // AuthAuthInstance.get<ResponseData<any>>(`/api/member/logout`);
  return "logout_ok";
};

//엑세스토큰 받아오는 url
export async function kakaoLogin() {
  try {
    const res = await AuthService.getKakaoLogin();
    const oAuthLoginUrl = res?.data?.data;

    console.log("oAuthLoginUrl: ", oAuthLoginUrl);
  } catch (e) {
    return e;
  }
}
