import { BoardData } from "../../util/type";
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
  return isMyContent ? (
    <>
      {/* 내 게시글 */}
      <Contents contents={myContents} />
      {/* Infinite Scroll */}
      <LoadMore callMyContent={isMyContent} initialContent={initialContent} />
    </>
  ) : (
    <>
      {/* 인기글 */}
      <Contents contents={popularContents} isPopular />
      {/* 일반 게시글 */}
      <Contents contents={allContents} />
      {/* Infinite Scroll */}
      <LoadMore callMyContent={isMyContent} initialContent={initialContent} />
    </>
  );
};

export default TownContentList;
