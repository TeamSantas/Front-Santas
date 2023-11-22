import styled from "styled-components";
import Image from "next/image";
import AnimatedText from "../components/common/AnimatedText";
import ContentInput from "../components/town/content-input";
import TownContentList from "../components/town/content-list";
import Layout from "../components/layout/new/Layout";
import { Modals } from "../components/modals/modals";
import { getBoard, getBoardPopular } from "../api/hooks/useTownData";
import { notices } from "../components/town/notices";

const Town = ({ allContents, popularContents }) => {
  return (
    <>
      <Modals />
      <Container>
        <ContentWrapper>
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
    const [allContents, popularContents] = await Promise.all([
      getBoard(0),
      getBoardPopular(),
    ]);
    const sanitizedAllContents = allContents || [];
    const sanitizedPopularContents = popularContents || [];
    return {
      props: {
        allContents: sanitizedAllContents,
        popularContents: sanitizedPopularContents,
      },
    };
  } catch (e) {
    throw new Error(e);
  }
}

const Container = styled.div`
  position: absolute;
  bottom: calc(-100vh + 130px + env(safe-area-inset-bottom));
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
  height: 50vh;
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
  height: 50px;
  background-color: rgba(30, 52, 79, 0.53);
  padding: 10px 15px;
  border-radius: 10px;
`;
