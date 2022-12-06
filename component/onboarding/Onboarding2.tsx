import styled from "styled-components";
import { GreenButton } from "../../styles/styledComponentModule";

const OnboardingContainer = styled.div`
  display: ${({ pageNumber, showPage }) =>
    pageNumber === showPage ? "flex" : "none"};
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
    color: #ffffff;
  }
`;

const Image = styled.img`
  width: 230px;
  margin-bottom: 60px;
`;

const NextBtn = styled(GreenButton)`
  margin-top: 30px;
`;

export const Onboarding2 = ({ showPage }) => {
  const pageNumber = 2;

  return (
    <OnboardingContainer pageNumber={pageNumber} showPage={showPage}>
      <Image src="/assets/image/onboarding/face_small_cry.png" />
      <Text>
        마을의 유일한 하얀코는,
      </Text>
      <Text>
        빨간코가 되고 싶어서 슬퍼했어요
      </Text>
      <NextBtn>다음으로</NextBtn>
    </OnboardingContainer>
  );
};
