import { useEffect, useState } from "react";
import styled from "styled-components";
import { setCookie } from "../businesslogics/cookie";

const OnboardingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledImage = styled.img`
  padding-top: 2rem;
  width: 600px;
  @media (max-width: 600px) {
    width: 100%;
  }
`;

const Onboarding = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    setCookie("ending", "ending", 30);
  }, []);

  useEffect(() => {
    let interval;
    if (!interval) {
      interval = setInterval(() => {
        window.location.href = "/ending";
      }, 10000000000);
    }

    return () => (interval ? clearInterval(interval) : null);
  }, []);

  return (
    <OnboardingContainer>
      <StyledImage src="/assets/image/ending/endingbridge.gif" />
    </OnboardingContainer>
  );
};

export default Onboarding;
