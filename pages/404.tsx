import Link from "next/link";
import { MainContainer } from "../styles/styledComponentModule";
import styled from "styled-components";
import AdSense from "../component/adSense";
import { useRouter } from "next/router";

const Container = styled(MainContainer)`
  text-align: center;
  font-size: 20px;
  margin-top: 40px;
  color: white;
`;

const Custom404 = () => {
  const router = useRouter();
  router.push("/upcoming");
  return (
    <Container>
      <AdSense />
      <img src="/assets/image/character/face_crycry.png" width="222" />
      <h3>
        <br />
        앗... 길을 잘못 들었다..
      </h3>
      <h2>내가 &apos;잘못된 친구코드&apos; 를 가져왔구나!</h2>
      <img src="/assets/image/404.png" width="200" />
    </Container>
  );
};
export default Custom404;
