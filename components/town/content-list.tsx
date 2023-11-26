import { BoardData } from "../../util/type";
import { dummyBoardForAds, getContentsWithAd } from "./ad-utils";
import Contents from "./contents";
import LoadMore from "./load-more-content";

interface ITownContentList {
  isMyContent: boolean;
  myContents: BoardData[];
  allContents: BoardData[];
  popularContents: BoardData[];
}

const TownContentList = ({
  isMyContent,
  myContents,
  allContents,
  popularContents,
}: ITownContentList) => {
  const initialContent = isMyContent ? myContents : allContents;

  // 광고 붙인 컨텐츠
  // 인기 글에 0번 광고 붙임
  const popularContentsWithAd = [...popularContents, dummyBoardForAds(0)];
  // 일반 글에 1~15번 광고 붙임
  const allContentsWithAd = getContentsWithAd(allContents);
  const MyContentsWithAd = getContentsWithAd(myContents);

  return isMyContent ? (
    <>
      {/* 내 게시글 */}
      <Contents contents={MyContentsWithAd} />
      {/* Infinite Scroll */}
      <LoadMore callMyContent={isMyContent} initialContent={initialContent} />
    </>
  ) : (
    <>
      {/* 인기글 */}
      <Contents contents={popularContentsWithAd} isPopular />
      {/* 일반 게시글 */}
      <Contents contents={allContentsWithAd} />
      {/* Infinite Scroll */}
      <LoadMore callMyContent={isMyContent} initialContent={initialContent} />
    </>
  );
};

export default TownContentList;
