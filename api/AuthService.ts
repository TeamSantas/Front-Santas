import {AuthAuthInstance, AuthInstance} from "./APIInstance";
import {ResponseData} from "../util/type";
import axios from "axios";

class AuthService{
    //로그인
        getJWT = () => axios.get<any>(process.env.BASE_URL)
        .then((response)=>console.log(response))
        .catch((error)=>console.log(error));

    //로그아웃 API 🔑
    //TODO : logoutData 명세해주기
    getLogout = () => AuthAuthInstance.get<ResponseData<any>>(`/auth/logout`);
}
export default new AuthService();
