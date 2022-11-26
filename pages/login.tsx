import {NextPage} from "next";
import Link from "next/link";
import {MainContainer} from "../styles/styledComponentModule";
import styled from "styled-components";

const Container = styled(MainContainer)`
  text-align: center;
  font-size: 20px;
  margin-top: 40px;
`

const Login : NextPage = () => {
    return (
        <Container>
            <img src="/assets/image/character/face_smile.png" width="222"/>
            <p>하얀코와 함께<br/> 어드벤트 캘린더를 모으러 가볼까요?</p>
            <Link href={process.env.NEXT_PUBLIC_LOGOUT_REDIRECT_URI ?? ''}>
                <img src="/assets/image/kakao_login_large_narrow.png" width="222"/>
            </Link>
        </Container>
    )
}
export default Login
