import styled from "styled-components";
import Image from "next/image";
import AnimatedText from "../components/common/AnimatedText";
import ContentInput from "../components/town/content-input";
import TownContentList from "../components/town/content-list";

const messages = [
  {
    url: "/",
    content: "💡 댓글의 이름 영역을 누르면 캘린더로 이동해요. 💡",
  },
  {
    url: "/",
    content: "🩷 캘린더에 방문해 쪽지를 남겨보세요. 🩷",
  },
  {
    url: "/",
    content: "🚨 부적절한 댓글은 신고 꾹- 눌러주세요. 🚨",
  },
];

const Town = () => {
  return (
    <Container>
      <ContentWrapper>
        <Notice>
          <Image
            alt="announce"
            src="/assets/image/town/announce.png"
            width={22}
            height={22}
          />
          <AnimatedText messages={messages} />
        </Notice>
        <TownContentList />
      </ContentWrapper>
      <ContentInput />
    </Container>
  );
};
export default Town;

const Container = styled.div`
  position: absolute;
  bottom: -100vh;
  left: 50%;
  transform: translateX(-50%);

  @media (max-width: 768px) {
    left: unset;
    transform: unset;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: 60vh;
  border-radius: 10px 10px 0 0;
  width: 100%;
  max-width: 500px;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.5);
  font-size: 14px;

  overflow-y: scroll;
  /* Firefox */
  scrollbar-width: none;

  /* Internet Explorer, Edge */
  &::-ms-overflow-style {
    display: none;
  }

  /* Chrome, Safari */
  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 768px) {
    max-width: unset;
  }
`;

const Notice = styled.div`
  display: flex;
  gap: 10px;
  height: 50px;
  background-color: rgba(30, 52, 79, 0.53);
  padding: 10px 15px;
  border-radius: 10px;
`;
