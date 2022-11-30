// 실질적으로 api 당겨오는 로직을 처리하는 훅
import PresentService from "../PresentService";

export async function setGetPresentDetail(presentId: number) {
    return await PresentService.getDetailPresent(presentId);
}