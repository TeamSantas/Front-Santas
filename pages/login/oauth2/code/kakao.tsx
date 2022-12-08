import {NextPage} from "next";
import {useContext, useEffect, useState} from "react";
import {useRouter} from "next/router";
import {KakaoDEVLogin, KakaoLogin} from "../../../../api/hooks/useKakaoLogin";

const Kakao : NextPage = () => {
    const router = useRouter();
    const [refreshToken, setRefresh] = useState("");
    const [isLogin, setIsLogin] = useState(false);

    //로그인하는 함수(인가코드 받아와 백엔드에서 두 Token을 받아옴)
    const run = async () => {
        //TODO : 요거 escape문으로 안바뀌게 처리해주면 됨
        // @ts-ignore
        const code = String.raw(new URL(window.location.href).searchParams.get("code"));
        // @ts-ignore
        const state = String.raw(new URL(window.location.href).searchParams.get("state"));
        console.log(code,">>>code")
        console.log(state, ">>>state")
        try {
            // @ts-ignore
            const res = await KakaoDEVLogin(code, state);
            console.log(res);
            // setRefresh(res.data.data.refreshToken);
            // setIsLogin(true);

            // getUserData
            router.reload()
            // await setCookie('invitationLink', loggedMember.invitationLink, 30);
            // console.log(">>>>>>>>>>loggedMember.invitationLink")
            // console.log(loggedMember)
            // console.log(loggedMember.invitationLink)
        }catch (error){
            alert('로그인이 필요한 기능입니다🎁');
            // alert('로그인이 불가한 접근시도입니다.😥');
        }
    }

    useEffect(()=> {
        run();
        router.push('/');
    },[])

    //refreshToken Context API에 저장

    return (
        <></>
    )

}
export default Kakao
