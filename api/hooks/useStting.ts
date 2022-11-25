import SettingService from "../SettingService";

export async function useGetPush() {
    const res = await SettingService.getPush();
    console.log(res); // 값 찍어보고 결정하기!
    return res;
}

export async function setPutPush(status : boolean) {
    const putData = {
        alertStatus : status
    };
    const res = await SettingService.putPush(putData);
    console.log(res);
}

export async function setBGM(status : boolean) {
    const putData = {
        bgmStatus : status
    };
    const res = await SettingService.putBGM(putData);
    console.log(res);
}
