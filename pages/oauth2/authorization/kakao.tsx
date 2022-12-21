import {NextPage} from "next";
import {useEffect, useState} from "react";
import {useRouter} from "next/router";
import {KakaoTmpLogin} from "../../../api/hooks/useKakaoLogin";

const Kakao : NextPage = () => {
    const router = useRouter();
    const run = async () => {
        let CODE = String.raw`${new URL(window.location.href).searchParams.get("code")}`;
        let STATUS = String.raw`${new URL(window.location.href).searchParams.get("state")}`;

        if(CODE.slice(-1,CODE.length)===`=`) CODE=CODE.replace(/.$/,'%3D')
        if(STATUS.slice(-1,CODE.length)===`=`) STATUS=STATUS.replace(/.$/,'%3D')

        try {
            console.log(CODE,">>> 보낸 Code");
            console.log(STATUS,">>> 보낸 Status");

            console.log(">>> 백에 전송");
            const res = await KakaoTmpLogin(CODE, STATUS);
            console.log(res.data.data.token, ">>> 받은 tmp_token")

            // await setCookie("tmp_token", res.data.data.token, 30);
            // await setCookie('subToken', res.data.data.refreshToken,30);

            // router.reload()

            // const loggedMember = await getLoggedMember();
            // return loggedMember;
        }catch (error){
            // alert('로그인이 불가한 접근시도입니다.😥');
        }
    }

    useEffect(()=> {
        run();
    },[])

    return (
        <><button>백에서 받아온 페이지</button></>
    )

}
export default Kakao
