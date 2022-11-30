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
    const [isLogin, setIsLogin] = useState(false);
    const {updateRefreshToken} = useContext(storeContext);

    //로그인하는 함수
    const run = async () => {
        try {
            const res = await KakaoLogin(new URL(window.location.href).searchParams.get("code"), new URL(window.location.href).searchParams.get("state"));
            setRefresh(res.data.data.refreshToken);
            setIsLogin(true);
        }catch (error){
            alert('로그인이 불가한 접근시도입니다.😥');
            router.push('/login');
        }
    }

    const getUserData = async () => {
        try {
            const res = await getLoggedMember();
            setCookie('invitationLink', res.invitationLink, 30);
            return res;
        }catch (error){
            alert('로그인이 필요한 기능입니다🎁');
            router.push('/login');
        }
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
