import AuthService from "../AuthService";
import {removeCookie} from "../../businesslogics/cookie";
import {AuthAuthInstance} from "../APIInstance";
import {ResponseData} from "../../util/type";

export const kakaoLogout = () => {
  removeCookie("token");
  // AuthAuthInstance.get<ResponseData<any>>(`/api/member/logout`);
  return "logout_ok";
};

//엑세스토큰 받아오는 url
export async function KakaoLogin(code, state) {
  try {
    // console.log("쿠키굽기 #################");
    // // console.log(res);
    // await setCookie("token", res.data.data.token, 30);
    // await setCookie('subToken', res.data.data.refreshToken,30);
    return await AuthService.getKakaoLogin(code, state);
  } catch (e) {
      return e;
  }
}
