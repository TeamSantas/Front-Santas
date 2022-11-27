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
  text-align: center;

  @media screen and (min-width: 1024px) {
    font-size: 36px;
  }
`;

const Image = styled.img`
  width: 161px;
  margin-bottom: 60px;
`;

export const Onboarding2 = ({ showPage }) => {
  const pageNumber = 2;

  return (
    <OnboardingContainer pageNumber={pageNumber} showPage={showPage}>
      <Image src="/assets/image/onboarding/sed_deer_head.png" />
      <Text>
        마을의 유일한 하얀코는,
        <br /> 빨간코가 되고 싶어서 슬퍼했어요
      </Text>
    </OnboardingContainer>
  );
};
