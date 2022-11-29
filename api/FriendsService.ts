import { FriendsAuthInstance } from "./APIInstance";
import { FriendsData, MemberData, ResponseData } from "../util/type";

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
  getFriend = (link:string) => {
    // console.log(link, "링크로친구검색하기api");
    return FriendsAuthInstance.get<ResponseData<FriendsData>>(
      `/api/friend/search?link=${link}`
    );
  };
}
export default new FriendsService();
