// import {ResponseData} from "../util/type";
import {SettingAuthInstance} from "./APIInstance";
import {postBGMData, putPushData, ResponseData} from "../util/type";

class SettingService{
    //푸시알림 조회🔑
    getPush = () => {
        return SettingAuthInstance.get<ResponseData<boolean>>(`/api/setting/push`);
    }
    //푸시알림 설정 수정🔑
    putPush = (alertStatus: putPushData) => {
        return SettingAuthInstance.put(`/api/setting/push`, null,{ params : alertStatus}); //맞으면 타입만들기
    }

    //BGM  onoff 설정 🔑
    putBGM = (putData: postBGMData) => {
        return SettingAuthInstance.put(`/api/setting/bgm`, null,{ params : putData});
    }

    //FCM토큰 저장🔑
    setFcmtoken = (fcmtoken: string) => {
        return SettingAuthInstance.post<ResponseData<String>>(`/api/setting/fcmtoken`, fcmtoken);
    };
}
export default new SettingService();
