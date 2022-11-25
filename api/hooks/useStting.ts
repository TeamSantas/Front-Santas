import SettingService from "../SettingService";
import {useEffect, useState} from "react";

export const useGetPush = () => {
    const [pushData, setPushData] = useState<boolean>();
    const run = async () => {
        const res = await SettingService.getPush();
        setPushData(res.data.data);
    }
    useEffect(()=>{
        run();
    },[])
    return pushData;
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
