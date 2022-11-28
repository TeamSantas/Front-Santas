import styled from "styled-components";

const OnboardingContainer = styled.div`
  display: ${({pageNumber, showPage}) => pageNumber===showPage ? "flex" : "none"};
  
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
  width: 255px;
  margin-bottom: 80px;
`;

export const Onboarding3 = ({showPage}) => {
  const pageNumber = 3

  return (
    <OnboardingContainer pageNumber={pageNumber} showPage={showPage}>
      <Image src="/assets/image/onboarding/crayon_hayanco.png" />
      <Text>
        빨간 루돌프들은 슬퍼하는 하얀코에게<br/> 크레파스를 선물하기로 했어요!
      </Text>
    </OnboardingContainer>
  );
};
