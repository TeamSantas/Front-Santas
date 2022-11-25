import Link from "next/link";
import {MainContainer} from "../styles/styledComponentModule";
import styled from "styled-components";

const Container = styled(MainContainer)`
  text-align: center;
  font-size: 20px;
  margin-top: 40px;
`

const CustomError = () => {
    return (
        <Container>
            <img src="/assets/image/character/face_crycry.png" width="222"/>
            <h3><br/>뭔가가 잘못되었다..</h3>
            <h2>다시 캘린더가 있던 곳으로 가볼까..?</h2>
            <img src="/assets/image/500.png" width="200"/>

        </Container>
    )
}
export default CustomError
