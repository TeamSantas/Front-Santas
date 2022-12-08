import {  AuthInstance } from "./APIInstance";

class AuthService {
    //백엔드에 인가코드주고 Jwt 받아오기
    getKakaoLogin= (code, state) => {
        const link = `https://pitapat-adventcalendar.shop/oauth/callback/kakao?code=${code}&state=${state}`
        return AuthInstance.get<any>(link)
    }
    getDEVKakaoLogin= (code, state) => {
        const link = `http://ec2-13-209-72-164.ap-northeast-2.compute.amazonaws.com:8080/login/oauth2/code/kakao?code=${code}&state=${state}`
        return AuthInstance.get<any>(link)
    }
}
export default new AuthService();
