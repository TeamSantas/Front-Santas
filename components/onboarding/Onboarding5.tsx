import styled from "styled-components";
import { useEffect, useState } from "react";
import { getCookie } from "../../businesslogics/cookie";
import { useRouter } from "next/router";

const OnboardingContainer = styled.div`
  display: ${({ pageNumber, showPage }) =>
    pageNumber === showPage ? "flex" : "none"};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 10vh;
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

  border: 0;
`;
const Div = styled.div`
  text-align: center;
`
const Image = styled.img`
  width: 70%;
  display: block;
  margin: 0 auto 40px auto ;
`;
export const Onboarding5 = ({ showPage }) => {
  const pageNumber = 5;
  const [visited, setVisited] = useState(false);
  const router = useRouter()
  useEffect(() => {
    const onboardingCookie = getCookie("onboarding");
    if (onboardingCookie !== "") {
      //방문한 적이 있으면
      setVisited(true);
    }
  }, []);
  return (
    <OnboardingContainer pageNumber={pageNumber} showPage={showPage}>
      <Div>
        <Image src="/assets/image/character/face_heart.png" />
        <Image src="/assets/image/onboarding/title.png" />
        {visited === true ? (
            <GoBtn onClick={() => (router.push("/") )}>
              내 캘린더가기
            </GoBtn>
        ) : (
            <GoBtn onClick={() => (router.push("/login")) }>GO!</GoBtn>
        )}
      </Div>
    </OnboardingContainer>
  );
};
