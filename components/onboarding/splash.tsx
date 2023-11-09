import styled from "styled-components";

const OnboardingContainer = styled.div`
  display: flex;
  width: 90vw;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2px;
  /* 데스크톱 일때 다른 이미지 적용하면 눈 내리는 거 대체가능할 듯 */
  background-image: url("/assets/image/onboarding/BG.png");
  background-repeat: no-repeat;
  padding-top: 20vh;
`;
const CharacterImage = styled.img`
  width: 250px;
`;

const TitleImage = styled.img`
  width: 236px;
`;

export const Onboarding1 = () => {
  return (
    <OnboardingContainer>
      <CharacterImage src="/assets/image/onboarding/character.png" alt="" />
      <TitleImage src="/assets/image/onboarding/title.png" alt="" />
    </OnboardingContainer>
  );
};


