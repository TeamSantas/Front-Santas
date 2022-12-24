import { useEffect, useState } from "react";
import styled from "styled-components";
import { setCookie } from "../businesslogics/cookie";

const OnboardingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
      }, 2000);
    }

    return () => (interval ? clearInterval(interval) : null);
  }, []);

  return (
    <OnboardingContainer>
      <img
        src="/assets/image/ending/endingbridge.gif"
        style={{ width: "100%", paddingTop: "2rem" }}
      />
    </OnboardingContainer>
  );
};

export default Onboarding;
