import styled from "styled-components";

const OnboardingContainer = styled.div`
  display: ${({ pageNumber, showPage }) =>
    pageNumber === showPage ? "flex" : "none"};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 15vh;
`;

const Text = styled.div`
  color: #ffffff;
  font-size: 24px;

  @media screen and (min-width: 1024px) {
    font-size: 36px;
  }
`;

const TextRed = styled.span`
  color: #ac473d;
  font-size: 24px;

  @media screen and (min-width: 1024px) {
    font-size: 36px;
  }
`;

const Image = styled.img`
  width: 252px;
  margin-bottom: 60px;
`;

export const Onboarding1 = ({ showPage }) => {
  const pageNumber = 1;

  return (
    <OnboardingContainer pageNumber={pageNumber} showPage={showPage}>
      <Image src="/assets/image/onboarding/deer_head.png" />
      <Text>
        모두가 행복한 빨간 <TextRed>코</TextRed> 루돌프 마을
      </Text>
    </OnboardingContainer>
  );
};
