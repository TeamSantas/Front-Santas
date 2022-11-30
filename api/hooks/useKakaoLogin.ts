import AuthService from "../AuthService";
import {removeCookie, setCookie} from "../../businesslogics/cookie";

export const kakaoLogout = () => {
    removeCookie('token');
    // AuthAuthInstance.get<ResponseData<any>>(`/auth/logout`);
    return 'logout_ok'
};

//엑세스토큰 받아오는 url
export async function KakaoLogin(code, state) {
    const res = await AuthService.getKakaoLogin(code, state);
    console.log("쿠키굽기");
    console.log(res);
    setCookie("token", res.data.data.token, 30);
    return res;
};

