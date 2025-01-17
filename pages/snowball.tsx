import { NextPage } from "next";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { MainContainer } from "../styles/styledComponentModule";
import styled from "styled-components";
import { lazy } from "react";
import { Modals } from "../components/modals/modals";
import { Loading } from "../components/layout/new/loading-cute";

const Text = styled.h3`
  margin-top: 20px;
  color: white;
  text-align: center;
`;
const SnowballContainer = styled(MainContainer)`
  height: 80vh;
`;

const Snowball: NextPage = () => {
  // @ts-ignore
  const ModelComponent = lazy(() => import("/components/index/SnowBallModel"));

  return (
    <>
      <Modals />
      <SnowballContainer>
        <Suspense fallback={<Loading />}>
          <Text>스노우볼을 움직여보세요</Text>
          <Canvas>
            <ModelComponent />
          </Canvas>
        </Suspense>
      </SnowballContainer>
    </>
  );
};
export default Snowball;
