import { ResponseData } from "../util/type";
import { SettingInstance } from "./APIInstance";

class SettingService{
    //푸시알림 조회🔑

    //푸시알림 설정 수정🔑

    //BGM  onoff 설정 🔑

    //FCM토큰 저장🔑
    setFcmtoken = (fcmtoken:string) => {
        return SettingInstance.post<ResponseData<String>>(`/api/setting/fcmtoken`, fcmtoken);
    };
}
export default new SettingService();
