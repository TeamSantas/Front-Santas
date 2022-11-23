import {NextPage} from "next";
import Link from "next/link";
import {MainContainer} from "../styles/styledComponentModule";
import styled from "styled-components";

const Container = styled(MainContainer)`
  text-align: center;
  font-size: 20px;
  margin-top: 40px;
`

const Logout : NextPage = () => {
    return (
        <Container>
            <img src="/assets/image/character/face_sad.png" width="222"/>
            <h3><br/>로그아웃되었습니다!</h3>
            <p>흑흑.. 또 올거지..? <br/>ps.하얀코..</p>
            <Link href={'https://pitapat-adventCalendar.shop/oauth2/authorization/kakao'}>
                <img src="/assets/image/kakao_login_large_narrow.png" width="222"/>
            </Link>
        </Container>
    )
}
export default Logout
