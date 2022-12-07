import styled from "styled-components";
import { useEffect, useState } from "react";
import { getCookie } from "../../businesslogics/cookie";
import { useRouter } from "next/router";
import { GreenButton } from "../../styles/styledComponentModule";

const OnboardingContainer = styled.div`
  display: ${({ pageNumber, showPage }) =>
    pageNumber === showPage ? "flex" : "none"};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 6vh;
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
  width: 223px;
  margin-top: 30px;
  margin-bottom: 100px;
`;

const Span = styled.span`
  color: #ffd58d;
`;
const Text2 = styled.div`
  font-size: 26px;
  background-color: rgba(0, 0, 0, 0.2);
  padding: 0 10px;
  border-radius: 5px;
  color: #fff;

  @media screen and (min-width: 1024px) {
    font-size: 36px;
  }
`;

const NextBtn = styled(GreenButton)`
  margin-top: 30px;
`;

export const Onboarding4 = ({ showPage }) => {
  const pageNumber = 4;

  // const [visited, setVisited] = useState(false);
  // const router = useRouter()
  // useEffect(() => {
  //   const onboardingCookie = getCookie("onboarding");
  //   if (onboardingCookie !== "") {
  //     //방문한 적이 있으면
  //     setVisited(true);
  //   }
  // }, []);
  return (
    <OnboardingContainer pageNumber={pageNumber} showPage={showPage}>
      <Text>
        어드벤트 캘린더를 통해
        {/* <br /> 친구들과 <Span>따뜻한 쪽지를 주고 받으면,</Span> */}
        {/* <br /> 하얀코에게 크레파스를 */}
        {/* <br /> 선물할 수 있는 힘이 모여요~! */}
      </Text>
      <Text>친구들과 <Span>따뜻한 쪽지를 주고 받으면,</Span></Text>
      <Text>하얀코에게 크레파스를</Text>
      <Text>선물할 수 있는 힘이 모여요~!</Text>
      <Image src="/assets/image/onboarding/crayon_box.png" />
      <Text2> 캘린더에 쪽지를 보내러 가볼까요?! </Text2>
      <NextBtn>다음으로</NextBtn>
      {/*{visited === true ? (*/}
      {/*  <GoBtn onClick={() => (router.push("/") )}>*/}
      {/*    내 캘린더가기*/}
      {/*  </GoBtn>*/}
      {/*) : (*/}
      {/*  <GoBtn onClick={() => (router.push("/login")) }>GO!</GoBtn>*/}
      {/*)}*/}
    </OnboardingContainer>
  );
};
