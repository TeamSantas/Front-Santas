import { AuthAuthInstance, AuthInstance } from "./APIInstance";
import { ResponseData } from "../util/type";
import axios from "axios";
import {removeCookie, setCookie} from "../businesslogics/cookie";
import {useContext} from "react";
import {storeContext} from "../store/Store";
import {useRouter} from "next/router";

class AuthService {
    // const router = useRouter();
    getKaKaoRedirect = () => {
        return "https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=3c01bf310ee0268b13dab1daa6c3a78a&redirect_uri=http://localhost:3000/oauth/callback/kakao";
    }
    upDateRefresh = () => {
        const {storeRefreshToken, updateRefreshToken } = useContext(storeContext);
        updateRefreshToken(AuthInstance.get<string>(`/token/refresh`));
        return storeRefreshToken;
    }
    getLogout = () => {
        removeCookie('token');
        AuthAuthInstance.get<ResponseData<any>>(`/auth/logout`);
        // router.push('/');
    }

    getKakaoLogin= (code, state) => {
        const link = `http://ec2-43-201-99-216.ap-northeast-2.compute.amazonaws.com:8080/oauth/callback/kakao?code=${code}&state=${state}`
        console.log(">>>>>>>>>JWT백으로 요청");
        console.log(link);
        return AuthInstance.get<any>(link)
    }


}
export default new AuthService();
