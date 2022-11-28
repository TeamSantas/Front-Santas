import {AuthAuthInstance, AuthInstance} from "./APIInstance";
import {ResponseData} from "../util/type";
import axios from "axios";

class AuthService{
    //로그인
        getJWT = () => axios.get<any>("http://ec2-13-209-72-164.ap-northeast-2.compute.amazonaws.com:8080/oauth2/authorization/kakao")
        .then((response)=>console.log(response))
        .catch((error)=>console.log(error));

    //로그아웃 API 🔑
    //TODO : logoutData 명세해주기
    getLogout = () => AuthAuthInstance.get<ResponseData<any>>(`/auth/logout`);
}
export default new AuthService();
