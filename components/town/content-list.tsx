import { BoardData } from "../../util/type";
import { dummyBoardForAds } from "./ad-utils";
import { upcomingAdID } from "../advertisement/ad-ids";
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
  const getContentsWithAd = (contents, adId) => {
    return contents.length > 0
      ? [...contents, dummyBoardForAds(adId)]
      : [...contents];
  };
  // 광고 붙인 pre-render 컨텐츠
  const popularContentsWithAd = getContentsWithAd(popularContents, 0);
  const allContentsWithAd = getContentsWithAd(allContents, 16);
  const myContentsWithAd = getContentsWithAd(myContents, 17);

  return isMyContent ? (
    <>
      {/* 내 게시글 */}
      <Contents contents={myContentsWithAd} />
      {/* Infinite Scroll */}
      <LoadMore callMyContent={isMyContent} initialContent={myContents} />
    </>
  ) : (
    <>
      {/* 인기글 */}
      <Contents contents={popularContentsWithAd} isPopular />
      {/* 일반 게시글 */}
      <Contents contents={allContentsWithAd} />
      {/* Infinite Scroll */}
      <LoadMore callMyContent={isMyContent} initialContent={allContents} />
    </>
  );
};

export default TownContentList;
