import {FriendsInstance} from "./APIInstance";
import {friendsData, MemberData, ResponseData} from "../util/type";

class FriendsService{
    //친구 목록 API 🔑
    getFriends = () => {
        return FriendsInstance.get<ResponseData<friendsData>>(`/api/friend`);
    };
    //친구 리스트에 친구목록 저장 🔑 (카카오에서 받아와서 저장)

    //링크로 친구 검색하기 🔑

}
export default new FriendsService();
