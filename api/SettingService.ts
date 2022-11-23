import { ResponseData } from "../util/type";
import { SettingAuthInstance } from "./APIInstance";

class SettingService{
    //푸시알림 조회🔑
    getPush = () => {
        const res = SettingAuthInstance.get<ResponseData<boolean>>(`api/setting/push`);
        return res;  //TODO : 이거 res어떻게 보는지 찍어보고 boolean 값으로 리턴해주기
    }
    //푸시알림 설정 수정🔑

    //BGM  onoff 설정 🔑

    //FCM토큰 저장🔑
    setFcmtoken = (fcmtoken:string) => {
        return SettingAuthInstance.post<ResponseData<String>>(`/api/setting/fcmtoken`, fcmtoken);
    };
}
export default new SettingService();
