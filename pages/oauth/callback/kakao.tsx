import {NextPage} from "next";
import {useContext, useEffect, useState} from "react";
import {useRouter} from "next/router";
import {KakaoLogin} from "../../../api/hooks/useKakaoLogin";
import {storeContext} from "../../../store/Store";
import SettingService from "../../../api/SettingService";
import {setCookie} from "../../../businesslogics/cookie";
import {getLoggedMember} from "../../../api/hooks/useMember";

const Kakao : NextPage = () => {
    const router = useRouter();
    const [refreshToken, setRefresh] = useState("");
    // const [invitationLink, setInvitationLink] = useState<any>(null);

    const {updateRefreshToken} = useContext(storeContext);
    const run = async () => {
        const res = await KakaoLogin(new URL(window.location.href).searchParams.get("code"), new URL(window.location.href).searchParams.get("state"));
        setRefresh(res.data.data.refreshToken);
    }

    const getUserData = async () => {
        const res = await getLoggedMember();
        setCookie('invitationLink', res.invitationLink, 30);
    }

    useEffect(()=> {
        run();
        getUserData();
        router.push('/');
    },[])

    //refreshToken Context API에 저장
    updateRefreshToken(refreshToken);

    return (
       <></>
    )

}
export default Kakao
