// 실질적으로 api 당겨오는 로직을 처리하는 훅
import PresentService from "../PresentService";

export async function usePostPresent(postData) {
  const isAnonymous = postData.get("isAnonymous");
  const res = isAnonymous
    ? await PresentService.postPresent(postData)
    : await PresentService.postAuthPresent(postData);

  // TODO : res 값을 찍어보고 status code 함께 오는지 체크
  // if (res.status === 200) {
  console.log("res >>> ", res);
  // return res;
  // }
}
