import { HeartAuthInstance, HeartInstance } from "./APIInstance";
import { ResponseData } from "../util/type";

class HeartService {
  // 좋아요 보내기
  postMemberPick = (params: { toMemberId: number }) =>
    HeartAuthInstance.post<ResponseData<string>>(`/api/member/pick`, params);

  // 오늘의 문구 조회
  getTodaysQuestion = () =>
    HeartInstance.get<ResponseData<string>>(`/api/comment`);
}

export default new HeartService();
