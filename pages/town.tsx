import styled, { keyframes } from "styled-components";
import Image from "next/image";
import AnimatedText from "../components/common/AnimatedText";
import ContentInput from "../components/town/content-input";
import TownContentList from "../components/town/content-list";
import Layout from "../components/layout/new/Layout";
import { Modals } from "../components/modals/modals";
import {
  getBoard,
  getBoardPopular,
  getMyBoard,
} from "../api/hooks/useTownData";
import { notices } from "../components/town/notices";
import { useState } from "react";
import ToggleButton from "../components/town/toggle";

const Town = ({ myContents, allContents, popularContents }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMyContent, setIsMyContent] = useState(false);
  const handleClickClose = () => {
    setIsOpen((prev) => !prev);
  };
  const handleToggle = () => {
    setIsMyContent((prev) => !prev);
  };

  return (
    <>
      <Modals />
      <Container isOpen={isOpen}>
        <ContentWrapper>
          <MyContent>
            내 글 보기
            <ToggleButton on={isMyContent} toggle={handleToggle} />
          </MyContent>
          <Arrow onClick={handleClickClose}>
            <Image
              alt="announce"
              src={`/asset_ver2/image/town/arrow-${isOpen ? "down" : "up"}.svg`}
              width={32}
              height={12}
            />
          </Arrow>
          <Notice>
            <Image
              alt="announce"
              src="/asset_ver2/image/town/announce.png"
              width={22}
              height={22}
            />
            <AnimatedText messages={notices} />
          </Notice>
          <TownContentList
            isMyContent={isMyContent}
            myContents={myContents}
            allContents={allContents}
            popularContents={popularContents}
          />
        </ContentWrapper>
        <ContentInput />
      </Container>
    </>
  );
};
export default Town;

Town.getLayout = (page) => {
  return (
    <Layout logo={"/asset_ver2/image/layout/town-logo.png"}>{page}</Layout>
  );
};

export async function getServerSideProps() {
  try {
    // 최초 게시글 fetch
    const [myContents, allContents, popularContents] = await Promise.all([
      getMyBoard(0),
      getBoard(0),
      getBoardPopular(),
    ]);

    return {
      props: {
        myContents: myContents || [],
        allContents: allContents || [],
        popularContents: popularContents || [],
      },
    };
  } catch (e) {
    console.error("Error: ", e);
    return {
      props: {
        myContents: [],
        allContents: [],
        popularContents: [],
      },
    };
  }
}

const Container = styled.div<{ isOpen: boolean }>`
  position: absolute;
  bottom: calc(-100vh + 130px + env(safe-area-inset-bottom));
  left: 50%;
  animation: ${({ isOpen }) => (isOpen ? slideIn : slideOut)} 0.3s ease-in-out;
  transition: transform 0.3s ease-in-out;
  transform: ${({ isOpen }) =>
    isOpen
      ? "translateY(0) translateX(-50%)"
      : "translateY(calc(100vh - 240px)) translateX(-50%)"};
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  height: calc(100vh - 270px);
  border-radius: 10px 10px 0 0;
  width: 100vw;
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
  background-color: rgba(30, 52, 79, 0.53);
  backdrop-filter: blur(3px);
  width: 100%;
  padding: 10px 15px;
  border-radius: 10px;
`;

const MyContent = styled.div`
  position: absolute;
  display: flex;
  right: 20px;
  gap: 8px;
  color: #1e344f;
`;

const Arrow = styled.div`
  display: flex;
  margin-top: 5px;
  cursor: pointer;
`;

const slideIn = keyframes`
  from {
    transform: translateY(calc(100vh - 240px)) translateX(-50%);
  }
  to {
    transform: translateY(0) translateX(-50%);
  }
`;

const slideOut = keyframes`
  from {
    transform: translateY(0) translateX(-50%);
  }
  to {
    transform: translateY(calc(100vh - 240px)) translateX(-50%);
  }
`;
