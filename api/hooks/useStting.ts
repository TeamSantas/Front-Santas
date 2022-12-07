import SettingService from "../SettingService";
import {useEffect, useState} from "react";
import {putBGMData, putPushData} from "../../util/type";

export async function getBGMPush() {
    return await SettingService.getPush();
}

export async function setPutPush(status : boolean) {
    const putData : putPushData = {
        alertStatus : status
    };
    await SettingService.putPush(putData);
}

export async function setBGM(status : boolean) {
    const putData : putBGMData = {
        bgmStatus : status
    };
    await SettingService.putBGM(putData);
}
