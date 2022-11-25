// import {ResponseData} from "../util/type";
import {SettingAuthInstance} from "./APIInstance";
import {ResponseData} from "../util/type";

class SettingService{
    //푸시알림 조회🔑
    getPush = () => {
        return SettingAuthInstance.get<ResponseData<boolean>>(`/api/setting/push`);
    }
    //푸시알림 설정 수정🔑

    //BGM  onoff 설정 🔑

    //FCM토큰 저장🔑
    setFcmtoken = (fcmtoken: string) => {
        return SettingAuthInstance.post<ResponseData<String>>(`/api/setting/fcmtoken`, fcmtoken);
    };

    async putPush(alertStatus: { alertStatus: boolean }) {
        return SettingAuthInstance.put<ResponseData<any>>(`/api/setting/push`, alertStatus);
    }

    async putBGM(putData: { bgmStatus: boolean }) {
        return SettingAuthInstance.put<ResponseData<any>>(`/api/setting/bgm`, putData);
    }
}
export default new SettingService();
