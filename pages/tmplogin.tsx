import {KakaoTmpLogin} from "../api/hooks/useKakaoLogin";
import {setCookie} from "../businesslogics/cookie";
import {getLoggedMember} from "../api/hooks/useMember";
import {useEffect} from "react";
import Link from "next/link";
import {useRouter} from "next/router";

const Tmplogin = () => {
    return (
        <div>
            <Link href={"https://pitapat-adventcalendar.shop/oauth2/authorization/kakao"}>
                <img src="/assets/image/kakao_login_large_narrow.png" width="222" />
            </Link>
        </div>
    )
}
export default Tmplogin
