import {  AuthInstance } from "./APIInstance";
import {getCookie} from "../businesslogics/cookie";
import {useEffect, useState} from "react";

class AuthService {
    //백엔드에 인가코드주고 Jwt 받아오기
    getKakaoLogin= (code, state) => {
        const link = `http://ec2-43-201-99-216.ap-northeast-2.compute.amazonaws.com:8080/oauth/callback/kakao?code=${code}&state=${state}`
        return AuthInstance.get<any>(link)
    }
    // getToken = () => {
    //     const [token, setToken] = useState(null);
    //     useEffect(()=>{
    //         const accessToken = getCookie('token');
    //         setToken(accessToken);
    //     })
    //     console.log(">>>내쿠키어딧써")
    //     console.log(token)
    //     return token;
    // }
}
export default new AuthService();

// export function NewToken() {
//     const [token, setToken] = useState({});
//     useEffect(()=>{
//         const accessToken = getCookie('token');
//         setToken(accessToken);
//     })
//     console.log(">>>내쿠키어딧써")
//     console.log(token)
//     return (token);
// }
