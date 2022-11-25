// 실질적으로 api 당겨오는 로직을 처리하는 훅
import PresentService from "../PresentService";

export async function useGetPresent() {
    const res = await PresentService.getUserPresentList();
    console.log(res);
    return res;
}
