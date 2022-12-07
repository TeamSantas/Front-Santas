import {  AuthInstance } from "./APIInstance";

class AuthService {
    //백엔드에 인가코드주고 Jwt 받아오기
    getKakaoLogin= (code, state) => {
        const link = `https://pitapat-adventcalendar.shop/oauth/callback/kakao?code=${code}&state=${state}`
        return AuthInstance.get<any>(link)
    }
}
export default new AuthService();
