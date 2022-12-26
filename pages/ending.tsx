import router from "next/router";
import React from "react";
import styled from "styled-components";
import { RedBtn } from "../component/share/Share";
import ViewAll from "../component/ending/ViewAll";

function ending(props) {
  const pushToMyCalendar = () => {
    router.push("/");
  };

  return (
    <SnowContainer>
      <EndingContainer>
        <Page1>
          <Page1Left>
            <p style={{ color: "#3c6c54", margin: 0 }}>2022</p>
            <p style={{ margin: 0 }}>한눈에 보는</p>
            <p style={{ margin: 0 }}>내 두근두근</p>
            <p style={{ marginBottom: "20px" }}> 어드벤트 캘린더</p>
            <Button onClick={pushToMyCalendar}>내 캘린더 바로가기</Button>
          </Page1Left>
          <Page1Right>
            <img
              src="/assets/image/character/face_heart_green.png"
              alt="하얀코 하트"
              width="360"
            />
          </Page1Right>
        </Page1>
        <AboutDAC>
          <Inner>
            <InnerContainer>
              <InnerTitle>총 사용자수</InnerTitle>
              <InnerContent>4.5천</InnerContent>
            </InnerContainer>
            <InnerContainer>
              <InnerTitle>이벤트수</InnerTitle>
              <InnerContent>8.1만</InnerContent>
            </InnerContainer>
            <InnerContainer>
              <InnerTitle>총 조회수</InnerTitle>
              <InnerContent>3.7만</InnerContent>
            </InnerContainer>
          </Inner>
        </AboutDAC>
        <Page2>
          <ImgBox>
            <Img src="/assets/image/ending/ending1.jpg" />
          </ImgBox>
          <ImgBox>
            <Img src="/assets/image/ending/ending2.jpg" />
          </ImgBox>
          <ImgBox>
            <Img src="/assets/image/ending/ending3.jpg" />
          </ImgBox>
          <ImgBox>
            <Img src="/assets/image/ending/ending4.jpg" />
          </ImgBox>
          <ImgBox>
            <Img src="/assets/image/ending/ending5.jpg" />
          </ImgBox>
          <ImgBox>
            <Img src="/assets/image/ending/ending6.jpg" />
          </ImgBox>
          <Thanks>
            여러분들 덕분에 하얀코는 무지개코가 되었어요~ <br />
            정말 감사합니다 💗
          </Thanks>
        </Page2>
        <Page3>
          <Title>🎉 이벤트 당첨자 발표 🎉</Title>
          <Subtitle>※ 당첨자는 개인적으로 연락드릴 예정입니다.</Subtitle>
          <Inner>
            <InnerContainer>
              <ImgBox>
                <WinnerContentGreen>
                  <WinnerInner>
                    <WinnerContent white>
                      @wo******e
                      <br />
                      @z4***1
                    </WinnerContent>
                  </WinnerInner>
                </WinnerContentGreen>
              </ImgBox>
              <InnerTitle>
                🥈 2등
                <br />
                충전식
                <br />
                손난로 1개
              </InnerTitle>
            </InnerContainer>
            <InnerContainer>
              <ImgBox>
                <WinnerContentRed>
                  <WinnerInner>
                    <WinnerContent white>
                      @jw***m
                      <br />
                      @zi****l
                    </WinnerContent>
                  </WinnerInner>
                </WinnerContentRed>
              </ImgBox>
              <InnerTitle>
                🥇 1등
                <br />
                배달의민족
                <br />
                상품권(2만) 1개
              </InnerTitle>
            </InnerContainer>
            <InnerContainer>
              <ImgBox>
                <WinnerContentGreen>
                  <WinnerInner>
                    <WinnerContent white>
                      @me*********e
                      <br />
                      @sj***8
                    </WinnerContent>
                  </WinnerInner>
                </WinnerContentGreen>
              </ImgBox>
              <InnerTitle>
                🥉 3등
                <br />
                마이멜로디/쿠로미
                <br />
                핫팩 1개
              </InnerTitle>
            </InnerContainer>
          </Inner>
        </Page3>
        <Page4>
          <Title>내 두어캘 한번에 보기 👀</Title>
          <Counter>
            <Title>- 그동안 받은 쪽지들을 한눈에 보세요🎅-</Title>
            <h5>(PC로 보는게 편해요!)</h5>
          </Counter>
        </Page4>
        <ViewAll />
      </EndingContainer>
    </SnowContainer>
  );
}

const SnowContainer = styled.div`
  height: 100vh;
  overflow: scroll;

  -ms-overflow-style: none; /* Explorer */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome */
  }
`;

const EndingContainer = styled.div`
  max-width: 1000px;
  width: 100%;
  margin: 0 auto;
  padding-top: 50px;
`;

const Title = styled.h1`
  margin: 0;
  padding-top: 20px;
  color: #fff;
  font-size: 28px;
  text-align: center;
  @media (max-width: 600px) {
    font-size: 19px;
  }
`;
const Subtitle = styled.p`
  margin: 0;
  color: #aaaaaa;
  font-size: 20px;
  text-align: center;
`;
const Page1 = styled.div`
  display: flex;

  @media (max-width: 600px) {
    flex-direction: column;
    text-align: center;
  }
`;
const Page1Left = styled.div`
  flex: 1;
  padding-left: 22px;
  padding-top: 22px;
  /* background-color: yellow; */
  color: #fff;
  font-size: 30px;
  @media (max-width: 600px) {
    padding-left: 0px;
  }
`;

const Page1Right = styled.div`
  flex: 1;

  @media (max-width: 600px) {
    display: none;
  }
`;

const Button = styled(RedBtn)`
  background-color: #ac473d;
  width: 150px;
  height: 40px;
  font-size: 18px;
  margin-top: 20px;
`;

const AboutDAC = styled.div`
  background-color: rgba(24, 28, 35, 1);
  /* padding-top: 20px; */
  border-radius: 20px;
  max-width: 1000px;
  margin: 0 auto;
  /* backdrop-filter: blur(10px); */
`;

const Thanks = styled.p`
  display: inline-block;
  background-color: #fff;
  opacity: 0.7;
  width: 100%;
  max-width: 600px;
  margin-top: 10px;
  padding: 0 10px;
  border-radius: 20px;
  font-size: 1.5rem;
  @media (max-width: 320px) {
    font-size: 15px;
  }
  @media (min-width: 321px) and (max-width: 600px) {
    font-size: 1rem;
  }
`;

const Inner = styled.div`
  max-width: 1000px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  margin-top: 20px;
  padding: 22px;
  padding-bottom: 30px;
`;
const InnerContainer = styled.span`
  color: #fff;
  flex: 1;
  /* border: 1px solid white; */
  text-align: center;
`;
const InnerTitle = styled.h5`
  margin-top: 20px;
  font-size: 1.5rem;
  @media (max-width: 600px) {
    font-size: 1rem;
  }
`;
const InnerContent = styled.p`
  margin: 0;
  font-size: 62px;
  color: ${(props) => (props.white ? "white" : "#f5af37")};

  @media (max-width: 600px) {
    font-size: 32px;
  }
`;
const WinnerContentGreen = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  height: 80%;
  object-fit: cover;
  background-color: #3c6c54;
  border-radius: 100%;
  text-align: center;
`;
const WinnerContentRed = styled(WinnerContentGreen)`
  background-color: #8d362d;
  width: 100%;
  height: 100%;
`;
const WinnerInner = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 95%;
  height: 95%;
  border: 2px dashed #fff;
  border-radius: 100%;
`;
const WinnerContent = styled(InnerContent)`
  position: absolute;
  display: block;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 45px;
  @media (max-width: 600px) {
    font-size: 12px;
  }
`;

const Page2 = styled.div`
  margin: 0 auto;
  text-align: center;
  margin-top: 20px;
  padding: 22px;
`;

const ImgBox = styled.div`
  position: relative;
  width: 100%;
  max-width: 600px;
  /* border: 1px solid white; */
  margin: 0 auto;

  &::after {
    display: block;
    content: "";
    padding-bottom: 100%;
  }
`;
const Img = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  /* border-radius: 50%; */
`;

const Page3 = styled.div`
  background-color: #181c23;
  text-align: center;
  padding-bottom: 20px;
  border-radius: 20px;
`;
const Page4 = styled.div`
  background-color: #181c23;
  margin-top: 20px;
  color: #fff;
  text-align: center;
  border-radius: 20px;
  padding: 20px 20px 40px 20px;
  margin-bottom: 10px;
`;
const Counter = styled.div`
  max-width: 600px;
  height: 100px;
  text-align: center;
  line-height: 100px;
  background-color: rgba(255, 255, 255, 0.2);
  margin: 0 auto;
  margin-top: 20px;
  border-radius: 10px;
  font-size: 26px;
`;

export default ending;
