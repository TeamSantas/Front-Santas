// 로그인한 유저의 받은 선물을 가져옴
import PresentService from "../../PresentService";

export async function setGetUserReceivedPresentsList() {
    return await PresentService.getUserReceivedPresentsList();
}