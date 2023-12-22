import { useCallback, useEffect, useState } from "react";
import { BoardData } from "../../util/type";
import { useInView } from "react-intersection-observer";
import { LoadingDots } from "../layout/new/loading-dots";
import { fetchContents, fetchMyContents } from "./fetch-contents";
import { getContentsWithAd } from "./ad-utils";
import Contents from "./contents";
import styled from "styled-components";
import { getCookie } from "cookies-next";

const LoadMore = ({ callMyContent, initialContent }) => {
  const [contents, setContents] = useState<BoardData[]>([]);
  const [endOfContents, setEndOfContents] = useState(
    initialContent.length < 12
  );
  const [lastBoardId, setLastBoardId] = useState(
    initialContent.length > 1
      ? initialContent[initialContent.length - 1].boardId
      : -1
  );
  const noInitialContent = initialContent.length === 0;
  const token = getCookie("token");
  const { ref, inView } = useInView();

  const loadMoreContents = useCallback(async () => {
    const newContents = callMyContent
      ? await fetchMyContents(lastBoardId)
      : await fetchContents(lastBoardId, token);
    if (newContents.length < 12) {
      setEndOfContents(true);
    }
    setLastBoardId(
      newContents.length > 1 ? newContents[newContents.length - 1].boardId : -1
    );
    setContents((prevContents: BoardData[]) => [
      ...prevContents,
      ...newContents,
    ]);
  }, [callMyContent, lastBoardId]);

  useEffect(() => {
    if (inView && !endOfContents && !noInitialContent) {
      loadMoreContents();
    }
  }, [inView, endOfContents, noInitialContent, loadMoreContents]);

  return (
    <>
      <Contents contents={getContentsWithAd(contents)} />
      {!endOfContents && !noInitialContent && (
        <LoadingWrapper ref={ref}>
          <LoadingDots />
        </LoadingWrapper>
      )}
      {noInitialContent && <>아직 작성된 글이 없습니다.</>}
    </>
  );
};

export default LoadMore;

const LoadingWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
