import styled from "styled-components";
import { GreenButton } from "../../styles/styledComponentModule";

const OnboardingContainer = styled.div`
  display: ${({pageNumber, showPage}) => pageNumber===showPage ? "flex" : "none"};
  
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 15vh;
`;

const Text = styled.div`
  font-size: 24px;
  color: white;
  background-color: rgba(0, 0, 0, 0.2);
  padding: 0 10px;
  border-radius: 5px;
  text-align: center;

  @media screen and (min-width: 1024px) {
    font-size: 36px;
  }
`;

const Image = styled.img`
  width: 255px;
  margin-bottom: 80px;
`;

const NextBtn = styled(GreenButton)`
  margin-top: 30px;
`;

export const Onboarding3 = ({showPage}) => {
  const pageNumber = 3

  return (
    <OnboardingContainer pageNumber={pageNumber} showPage={showPage}>
      <Image src="/assets/image/onboarding/crayon_hayanco.png" />
      <Text>
        빨간 루돌프들은 슬퍼하는 하얀코에게
      </Text>
      <Text>
        크레파스를 선물하기로 했어요!
      </Text>
      <NextBtn>다음으로</NextBtn>
    </OnboardingContainer>
  );
};
