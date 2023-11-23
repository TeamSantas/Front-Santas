import Contents from "./contents";
import LoadMore from "./load-more-content";

const TownContentList = ({ allContents, popularContents }) => {
  return (
    <>
      {/* 인기글 */}
      <Contents contents={popularContents} isPopular />
      {/* 일반 게시글 */}
      <Contents contents={allContents} />
      {/* Infinite Scroll */}
      <LoadMore />
    </>
  );
};

export default TownContentList;
