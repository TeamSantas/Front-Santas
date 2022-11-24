// 실질적으로 api 당겨오는 로직을 처리하는 훅
import PresentService from "../PresentService";

export async function usePostPresent(postData) {
  const isAnonymous = postData.get("isAnonymous");
  const res = isAnonymous
    ? await PresentService.postPresent(postData)
    : await PresentService.postAuthPresent(postData);

  // console.log("선물보내기 성공? ", res)
  if (res.status === 200) return res;
}
