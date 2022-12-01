import {  AuthInstance } from "./APIInstance";
import {getCookie} from "../businesslogics/cookie";
import {useEffect, useState} from "react";

class AuthService {
    //백엔드에 인가코드주고 Jwt 받아오기
    getKakaoLogin= (code, state) => {
        const link = `http://pitapat-adventcalendar.shop:8080/oauth/callback/kakao?code=${code}&state=${state}`
        return AuthInstance.get<any>(link)
    }
}
export default new AuthService();
