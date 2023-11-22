import ContentTemplate from "./content-template";
import { useRef, useState, useEffect } from "react";
import { getBoard } from "../../api/hooks/useTownData";

const TownContentList = ({ allContents, popularContents }) => {
  const loadedContentsRef = useRef(allContents);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const itemsPerPage = 12;
  const offsetRef = useRef(allContents.length - 1);
  const containerRef = useRef();

  return (
    <>
      {/* 인기글 */}
      <ContentTemplate contents={popularContents} isPopular />
      {/* 일반 게시글 */}
      <ContentTemplate contents={loadedContentsRef.current} />

      {/* Infinite Scroll */}
      {hasMore && (
        <div className="infinite-scroll" ref={containerRef}>
          {loading && <p>Loading...</p>}
        </div>
      )}
    </>
  );
};

export default TownContentList;
