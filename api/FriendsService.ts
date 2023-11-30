import { AuthAPIInstance, FriendsAuthInstance } from "./APIInstance";
import { FriendsData, MemberData, ResponseData } from "../util/type";

class FriendsService {
  //친구 목록 API 🔑
  getFriends = () => {
    return FriendsAuthInstance.get<ResponseData<FriendsData[]>>(`/api/friend`);
  };
  //친구 리스트에 친구목록 저장 🔑 (카카오에서 받아와서 저장)
  getKakaoFriends = () => {
    return FriendsAuthInstance.post<ResponseData<FriendsData[]>>(`/api/friend`);
  };

  //링크로 친구 검색하기 🔑
  getFriend = (config) => {
    return FriendsAuthInstance.get<ResponseData<MemberData>>(
      `/api/friend/search`,
      config
    );
  };

  //링크로 친구 검색하기 (서버) 🔑
  getServerUserInfo = (config, token) => {
    const FriendsServerAuthInstance = AuthAPIInstance(
      process.env.NEXT_PUBLIC_BASE_URL,
      token
    );
    return FriendsServerAuthInstance.get<ResponseData<FriendsData>>(
      `/api/friend/search`,
      config
    );
  };
}
export default new FriendsService();
