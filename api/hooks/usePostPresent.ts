// 실질적으로 api 당겨오는 로직을 처리하는 훅
import { getCookie } from "../../businesslogics/reactCookie";
import PresentService from "../PresentService";

export async function usePostPresent(postData) {
  return getCookie('token')
    ? await PresentService.postAuthPresent(postData)
    : await PresentService.postPresent(postData);
}