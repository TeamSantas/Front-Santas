import { FriendsAuthInstance } from "./APIInstance";
import { FriendsData, ResponseData } from "../util/type";

class FriendsService {
  //친구 목록 API 🔑
  getFriends = () => {
    return FriendsAuthInstance.get<ResponseData<FriendsData>>(`/api/friend`);
  };
  //친구 리스트에 친구목록 저장 🔑 (카카오에서 받아와서 저장)
  getKakaoFriends = () => {
    return FriendsAuthInstance.post<ResponseData<FriendsData>>(`/api/friend`);
  }

  //링크로 친구 검색하기 🔑
  getFriend = (config) => {
    return FriendsAuthInstance.get<ResponseData<FriendsData>>(
      `/api/friend/search`,
      config
    );
  };
}
export default new FriendsService();
