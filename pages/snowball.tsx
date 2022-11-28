import {NextPage} from "next";
import { Suspense } from "react";
import {Canvas} from "@react-three/fiber";
import {MainContainer} from "../styles/styledComponentModule";
import styled from "styled-components";
import {lazy} from "react";

const Text = styled.h3`
  margin-top: 20px;
  color: white;
`;
const SnowballContainer = styled(MainContainer)`
  height: 80vh;
`;

const Snowball : NextPage = () => {
    // @ts-ignore
    const ModelComponent = lazy(() => import("/component/SnowBallModel"));

    return (
        <SnowballContainer>
            <Text>스노우볼을 움직여보세요</Text>
            <Suspense fallback={<h1>로딩중</h1>}>
            <Canvas>
                    <ModelComponent />
            </Canvas>
            </Suspense>;
        </SnowballContainer>
    )
}
export default Snowball
