import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Flex } from "../styles/styledComponentModule";
import { Button } from "react-bootstrap";
import Layout from "../components/layout/new/EndingLayout";
import { setCookie } from "cookies-next";

const Ending = () => {
  const [showBridge, setShowBridge] = useState(true);
  const handleClickServey = () => {
    window.open("https://forms.gle/TWY7qA76noeHtfTY6", "_blank");
  };

  useEffect(() => {
    setCookie("ending", true);

    let interval;
    if (!interval) {
      interval = setInterval(() => {
        setShowBridge(false);
      }, 2000);
    }

    return () => (interval ? clearInterval(interval) : null);
  }, []);
  return (
    <SnowContainer>
      {showBridge ? (
        <OnboardingContainer>
          <StyledImage src="/assets/image/ending/endingbridge.gif" />
        </OnboardingContainer>
      ) : (
        <>
          <EndingImage alt="ending" src={`/asset_ver2/image/ending.png`} />
          <ButtonFlex>
            <ServeyButton onClick={handleClickServey}>
              👉 두어캘 서비스 설문조사 바로가기 👈
            </ServeyButton>
          </ButtonFlex>
        </>
      )}
    </SnowContainer>
  );
};

Ending.getLayout = (page) => {
  return <Layout>{page}</Layout>;
};

const SnowContainer = styled.div`
  height: calc(100dvh - 150px);
  overflow: scroll;
  display: flex;
  flex-direction: column;

  -ms-overflow-style: none; /* Explorer */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome */
  }
`;

const EndingImage = styled.img`
  width: 100%;
  max-width: 50vw;
  height: auto;
  margin: 0 auto;

  @media (max-width: 600px) {
    max-width: unset;
  }
`;

const ButtonFlex = styled(Flex)`
  width: 100%;
  justify-content: center;
  position: fixed;
  bottom: 80px;
  background-color: #38805b;
`;

const ServeyButton = styled(Button)`
  width: 100%;
  background-color: #38805b;
  border-color: #38805b;
  padding: 10px 20px;
  font-size: 16px;
  font-family: NanumSquare Neo OTF;
  font-weight: 800;

  &:hover {
    background-color: #285f42;
    border-color: #285f42;
  }

  @media (max-width: 300px) {
    font-size: 12px;
  }
`;

const OnboardingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledImage = styled.img`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateY(-50%) translateX(-50%);
  width: 600px;
  @media (max-width: 600px) {
    width: 100%;
  }
`;

export default Ending;
