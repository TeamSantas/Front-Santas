import AuthService from "../AuthService";
import PresentService from "../PresentService";

export async function kakaoLogout() {
    AuthService.getLogout();
};

//엑세스토큰 받아오는 url
export async function kakaoLogin(code, state) {
    const res = await AuthService.getKakaoLogin(code, state);
    console.log(">>>>여기는 어싱크");
    console.log(res);
    return res;
};
