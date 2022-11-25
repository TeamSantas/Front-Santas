// 실질적으로 api 당겨오는 로직을 처리하는 훅
import MemberService from "../MemberService";

export async function useGetLoggedMember() {
    const res = await MemberService.getLoggedMemver();
    //res가 status 200/ok 인지 확인하기!
    console.log(res.data);
    return res.data;
}
