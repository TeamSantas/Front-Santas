import { AuthInstance } from "./APIInstance";

class AuthService {
  getKakaoLogin = () => {
    return AuthInstance.post<any>("/oauth2/authorization/kakao");
  };
}
export default new AuthService();
