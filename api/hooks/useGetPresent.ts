// 실질적으로 api 당겨오는 로직을 처리하는 훅
import PresentService from "../PresentService";

export async function useGetPresent() {
    const res = await PresentService.getUserPresentList();
    //res가 status 200/ok 인지 확인하기!
    console.log(res);
    return res;
}
