import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { popularContents, allContents } from "./dummy";

const TownContentList = () => {
  const [liked, setLiked] = useState(false);
  const ReportLink = "/"; // TODO: 노션이나 카톡 연결해두기
  const ContentTemplate = ({ contents, isPopular = false }) => {
    const handleClickLike = () => setLiked((prev) => !prev);
    return (
      <>
        {contents.map((comment) => (
          <ContentWrapper key={comment.id} popular={isPopular}>
            {/* 댓글 Header 시작 ------ */}
            <Flex justifyContent={"space-between"}>
              <LinkedNameWrapper
                href={`/${comment.code}`}
                onClick={(e) => comment.anonymous && e.preventDefault()}
                popular={isPopular}
              >
                <>{comment.anonymous ? "익명" : comment.name}</>
                <Image
                  alt="announce"
                  src="/assets/image/town/calendar-cursor.png"
                  width={16}
                  height={16}
                />
                <CreatedAt popular={isPopular}>({comment.createdAt})</CreatedAt>
              </LinkedNameWrapper>
              <Link href={ReportLink} target="_blank">
                <Image
                  alt="report"
                  src="/assets/image/town/report.png"
                  width={16}
                  height={16}
                />
              </Link>
            </Flex>
            {/* 댓글 Header 끝 -------- */}

            {/* 댓글 Body 시작 ------ */}
            <Flex>
              <Image
                alt="announce"
                src={
                  comment.anonymous
                    ? "/assets/image/town/default-profile.png"
                    : comment.profile
                }
                width={44}
                height={44}
              />
              {isPopular && (
                <Image
                  alt="announce"
                  src="/assets/image/town/best.svg"
                  width={35}
                  height={18}
                />
              )}
              <>{comment.content}</>
            </Flex>
            {/* 댓글 Body 끝 -------- */}
            <Like popular={isPopular} liked={liked} onClick={handleClickLike}>
              <Image
                alt="announce"
                src="/assets/image/town/like.png"
                width={11}
                height={11}
              />
              <>{comment.like}</>
            </Like>
          </ContentWrapper>
        ))}
      </>
    );
  };
  return (
    <>
      {/* 인기글 */}
      <ContentTemplate contents={popularContents} isPopular />
      {/* 일반 게시글 */}
      <ContentTemplate contents={allContents} />
    </>
  );
};
export default TownContentList;

const ContentWrapper = styled.div`
  flex-shrink: 0;
  font-size: 13px;
  padding: 10px 15px;
  height: fit-content;
  color: ${({ popular }) => (popular ? "#333" : "#F2F2F2")};
  border-radius: 10px;
  background-color: ${(props) =>
    props.popular ? "rgba(255, 255, 255, 0.7)" : "rgba(30, 52, 79, 0.53)"};
`;

const LinkedNameWrapper = styled(Link)`
  display: flex;
  gap: 3px;
  width: fit-comment;
  text-decoration: none;
  color: ${({ popular }) => (popular ? "#333" : "#F2F2F2")};
  font-family: "NanumSquareNeoOTF-Bd";
  align-items: center;
  padding-bottom: 7px;
`;

const Content = styled.div``;

const CreatedAt = styled.small`
  font-size: 12px;
  color: ${({ popular }) => (popular ? "#334d4d4d3" : "#ccc")};
`;

const Flex = styled.div`
  display: flex;
  gap: 10px;
  justify-content: ${({ justifyContent }) => justifyContent || "normal"};
`;

const Like = styled.button`
  display: flex;
  gap: 3px;
  float: right;
  justify-content: space-between;
  padding: 2px 4px;
  border: 2px solid;
  font-family: "NanumSquareNeoOTF-Bd";
  font-size: 11px;
  border-radius: 5px;
  align-items: center;
  background-color: unset;
  color: ${({ liked, popular }) =>
    liked ? "#F15A24" : popular ? "#666" : "#1E344F"};
  border-color: ${({ popular }) => (popular ? "white" : "#1E344F")};
`;
