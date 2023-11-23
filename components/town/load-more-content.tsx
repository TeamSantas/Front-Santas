import { useEffect, useState } from "react";
import { BoardData } from "../../util/type";
import { useInView } from "react-intersection-observer";
import { LoadingDots } from "../layout/new/loading-dots";
import { fetchContents } from "./fetch-contents";
import Contents from "./contents";
import styled from "styled-components";

const LoadMore = () => {
  const [contents, setContents] = useState<BoardData[]>([]);
  const [contentsLoaded, setContentsLoaded] = useState(1);
  const [endOfContents, setEndOfContents] = useState(false);

  const { ref, inView } = useInView();

  const loadMoreContents = async () => {
    const nextContent = contentsLoaded + 1;
    const newContents = (await fetchContents(nextContent)) ?? [];
    if (newContents.length !== 12) {
      setEndOfContents(true);
    }
    setContents((prevContents: BoardData[]) => [
      ...prevContents,
      ...newContents,
    ]);
    setContentsLoaded(nextContent);
  };

  useEffect(() => {
    if (inView && !endOfContents) {
      loadMoreContents();
    }
  }, [inView]);

  return (
    <>
      <Contents contents={contents} />
      {!endOfContents && (
        <LoadingWrapper ref={ref}>
          <LoadingDots />
        </LoadingWrapper>
      )}
    </>
  );
};

export default LoadMore;

const LoadingWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
