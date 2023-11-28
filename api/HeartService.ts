import { HeartAuthInstance } from "./APIInstance";
import { ResponseData } from "../util/type";

class HeartService {
  // 좋아요 보내기
  postMemberPick = (params: { toMemberId: number }) =>
    HeartAuthInstance.post<ResponseData<string>>(`/api/member/pick`, params);
}

export default new HeartService();
