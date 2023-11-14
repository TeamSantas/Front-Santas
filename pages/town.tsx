import styled from "styled-components";
import Layout from "../components/layout/new/Layout";
import TownContent from "../components/town/contents";

const Town = () => {
  return (
    <Container>
      <Logo alt={"background"} src={"/assets/image/town/town-logo.png"} />
      <Tree alt={"background"} src={"/assets/image/login/tree.png"} />
      <Ground />
      <TownContent />
    </Container>
  );
};
export default Town;

Town.getLayout = (page) => {
  return <Layout>{page}</Layout>;
};

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  flex-direction: column;
  margin: 0 auto;
`;

const Logo = styled.img`
  width: 150px;
  z-index: 1;
  padding-top: 60px;
`;

const Tree = styled.img`
  width: 100%;
  height: auto;
  max-height: 70vh;
  max-width: 40vh;
  flex: 1;
`;

const Ground = styled.div`
  background-color: #d9d9d9;
  width: 100%;
  margin-top: -50px;
  display: flex;
  justify-content: center;
  padding: 0 22px;

  @media (max-width: 375px) {
    margin-top: -45px;
  }
`;
