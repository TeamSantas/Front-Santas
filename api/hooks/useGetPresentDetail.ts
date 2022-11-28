// 실질적으로 api 당겨오는 로직을 처리하는 훅
import PresentService from "../PresentService";

export async function useGetPresentDetail(presentId: number) {
    const res = await PresentService.getDetailPresent(presentId);
    if (res.status === 200) return res.data.data;
}