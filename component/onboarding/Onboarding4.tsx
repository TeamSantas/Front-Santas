import styled from "styled-components";

const OnboardingContainer = styled.div`
  display: ${({ pageNumber, showPage }) =>
    pageNumber === showPage ? "flex" : "none"};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 10vh;
`;

const Text = styled.div`
  color: #ffffff;
  font-size: 24px;
  text-align: center;
  font-weight: 700;
  line-height: 110%;
  margin-bottom: 37px;

  @media screen and (min-width: 1024px) {
    font-size: 36px;
  }
`;

const Image = styled.img`
  width: 223px;
  margin-bottom: 50px;
`;

const GoBtn = styled.button`
  background: #ac473d;
  border-radius: 12px;
  width: 312px;
  height: 72px;

  font-weight: 700;
  font-size: 24px;
  line-height: 100%;
  color: #f0ede2;

  border: 0px;
`;

export const Onboarding4 = ({ showPage }) => {
  const pageNumber = 4;

  return (
    <OnboardingContainer pageNumber={pageNumber} showPage={showPage}>
      <Text>
        어드벤트 캘린더를 통해
        <br /> 친구들과 따뜻한 쪽지를 주고 받으면,₩
        <br /> 하얀코에게 크레파스를
        <br /> 선물할 수 있는 힘이 모여요~!
      </Text>
      <Image src="/assets/image/onboarding/crayon_box.png" />
      <Text>캘린더에 쪽지를 보내러 가볼까요?!</Text>
      <GoBtn onClick={() => (window.location.href = "/login")}>GO!</GoBtn>
    </OnboardingContainer>
  );
};
