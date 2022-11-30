// 실질적으로 api 당겨오는 로직을 처리하는 훅
import PresentService from "../PresentService";

export async function usePostPresent(postData) {
  const isAnonymous = postData.get("isAnonymous");
  return isAnonymous
    ? await PresentService.postPresent(postData)
    : await PresentService.postAuthPresent(postData);
}