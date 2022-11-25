// 실질적으로 api 당겨오는 로직을 처리하는 훅
import MemberService from "../MemberService";

export async function useGetLoggedMember() {
    const res = await MemberService.getLoggedMember();
    // console.log(res);
    return res;
}
