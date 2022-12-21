import {KakaoTmpLogin} from "../api/hooks/useKakaoLogin";
import {setCookie} from "../businesslogics/cookie";
import {getLoggedMember} from "../api/hooks/useMember";
import {useEffect} from "react";
import Link from "next/link";
import {useRouter} from "next/router";
import AuthService from "../api/AuthService";

const Tmplogin = () => {
    return (
        <div>
            <button onClick={()=>AuthService.getFirstKakaoLogin('http://ec2-43-201-99-216.ap-northeast-2.compute.amazonaws.com:8080/oauth2/authorization/kakao')}>
                새로운 카카오 로그인버튼</button>
            <Link href={"https://pitapat-adventcalendar.shop/oauth2/authorization/kakao"}>
                <img src="/assets/image/kakao_login_large_narrow.png" width="222" />
            </Link>
        </div>
    )
}
export default Tmplogin
