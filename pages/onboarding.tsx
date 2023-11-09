import { useEffect, useState } from "react";
import styled from "styled-components";
import { Onboarding1 } from "../components/onboarding/Onboarding1";
import { Onboarding2 } from "../components/onboarding/Onboarding2";
import { Onboarding3 } from "../components/onboarding/Onboarding3";
import { Onboarding4 } from "../components/onboarding/Onboarding4";
import { Onboarding5 } from "../components/onboarding/Onboarding5";
import { setCookie } from "../businesslogics/cookie";

const OnboardingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Onboarding = () => {
  const [showPage, setShowPage] = useState(1);

  const nextPagehandler = () => {
    if (showPage !== 5) {
      setShowPage(showPage + 1);
    }
  };

  useEffect(() => {
    setCookie("onboarding", "onboarding", 30);
  }, []);

  return (
    <OnboardingContainer onClick={() => nextPagehandler()}>
      <Onboarding1 showPage={showPage} />
      <Onboarding2 showPage={showPage} />
      <Onboarding3 showPage={showPage} />
      <Onboarding4 showPage={showPage} />
      <Onboarding5 showPage={showPage} />
    </OnboardingContainer>
  );
};

export default Onboarding;
