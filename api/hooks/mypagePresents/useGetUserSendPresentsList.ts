// 로그인한 유저가 보낸 선물을 가져옴
import PresentService from "../../PresentService";

export async function setGetUserSendPresentsList() {
    return await PresentService.getUserSendPresentsList();
}