import Link from "next/link";
import { MainContainer } from "../styles/styledComponentModule";
import styled from "styled-components";

const Container = styled(MainContainer)`
  text-align: center;
  font-size: 20px;
  margin-top: 40px;
  color: white;
`;

const Custom404 = () => {
  return (
    <Container>
      <img src="/assets/image/character/face_crycry.png" width="222" />
      <h3>
        <br />
        앗... 길을 잘못 들었다..
      </h3>
      <h2>이 마을엔 아무도 안 살고 잇따!</h2>
      <img src="/assets/image/404.png" width="200" />
    </Container>
  );
};
export default Custom404;
