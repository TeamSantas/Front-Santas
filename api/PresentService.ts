import {PostInstance, PresentInstance} from "./APIInstance";
import {PostData, ResponseData} from "../util/type";

class PresentService{
    //특정 유저의 받은 선물목록 조회 API
    getUserPresentList = () => {
        console.log(PresentInstance.get<ResponseData<any>>(`/present/1?isPublic=true`));
        return PresentInstance.get<ResponseData<any>>(`/present/1?isPublic=true`)
    }
    //로그인한 유저의 받은 모든 선물목록 조회 API 🔑
    getLoggedUserPresentList = () => {

    }
    //선물 상세보기 🔑
    getDetailPresent = () => {

    }
    // 쪽지 보내기 API (쪽지or이미지and닉네임)
    postPresent = () => {

    }
    //받은선물 공개 여부 설정 🔑
    putPresent_OnOff_Status = () => {

    }
}
export default new PresentService();
