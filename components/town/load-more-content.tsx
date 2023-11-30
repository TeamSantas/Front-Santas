import { useCallback, useEffect, useState } from "react";
import { BoardData } from "../../util/type";
import { useInView } from "react-intersection-observer";
import { LoadingDots } from "../layout/new/loading-dots";
import { fetchContents, fetchMyContents } from "./fetch-contents";
import Contents from "./contents";
import styled from "styled-components";

const LoadMore = ({ callMyContent, initialContent }) => {
  const [contents, setContents] = useState<BoardData[]>([]);
  const [contentsLoaded, setContentsLoaded] = useState(0);
  const [endOfContents, setEndOfContents] = useState(
    initialContent.length < 12
  );
  const noInitialContent = initialContent.length === 0;
  const { ref, inView } = useInView();

  const loadMoreContents = useCallback(async () => {
    const nextContent = contentsLoaded + 1;
    const newContents = callMyContent
      ? (await fetchMyContents(nextContent)) ?? []
      : (await fetchContents(nextContent)) ?? [];
    if (newContents.length < 12) {
      setEndOfContents(true);
    }
    setContents((prevContents: BoardData[]) => [
      ...prevContents,
      ...newContents,
    ]);
    setContentsLoaded(nextContent);
  }, [callMyContent, contentsLoaded]);

  useEffect(() => {
    if (inView && !endOfContents && !noInitialContent) {
      loadMoreContents();
    }
  }, [inView, endOfContents, noInitialContent, loadMoreContents]);

  return (
    <>
      <Contents contents={contents} />
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
