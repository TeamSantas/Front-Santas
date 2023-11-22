import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import { BoardData } from "../../util/type";
import ThumbsUp from "./thumbs-up";
import Report from "./report";
import { useAuthContext } from "../../store/contexts/components/hooks";
import { useState } from "react";
import { useRouter } from "next/router";

interface IContentTemplate {
  contents: BoardData[];
  isPopular?: boolean;
}

const ContentTemplate = ({ contents, isPopular = false }: IContentTemplate) => {
  const [blurredId, setBlurredId] = useState(null);
  const router = useRouter();
  const { storeUserData } = useAuthContext();
  const isMyContent = (comment) => comment.writerId === storeUserData?.id;
  const handleSetBlurredId = (boardId) => setBlurredId(boardId);
  const handleClickProfile = (comment) => {
    if (comment.isAnonymous) return;
    router.push(`/${comment.invitationLink}`);
  };

  return (
    <>
      {contents?.map((comment) => {
        return blurredId === comment.boardId ? (
          <BlurWrapper key={comment.boardId} popular={isPopular.toString()}>
            🚨신고한 게시글입니다.🚨 검토 후 삭제처리할게요.
          </BlurWrapper>
        ) : (
          <ContentWrapper key={comment.boardId} popular={isPopular.toString()}>
            {/* 댓글 Header 시작 ------ */}
            <Flex justifyContent={"space-between"}>
              <NameWrapper popular={isPopular.toString()}>
                <>{comment.isAnonymous ? "익명" : comment.writerName}</>
                <CreatedAt popular={isPopular.toString()}>
                  ({comment.createdAt})
                </CreatedAt>
              </NameWrapper>
              <Report
                boardId={comment.boardId}
                handleSetBlurredId={handleSetBlurredId}
                isMyComment={() => isMyContent(comment)}
                reportedId={comment.writerId}
              />
            </Flex>
            {/* 댓글 Header 끝 -------- */}
            {/* 댓글 Body 시작 ------ */}
            <Flex>
              <CircularImage
                alt="profile"
                src={
                  comment.isAnonymous
                    ? "/asset_ver2/image/common/default-profile.png"
                    : comment.profile
                }
                width={44}
                height={44}
              />
              <GoCalendar
                alt="profile"
                src={
                  comment.isAnonymous
                    ? comment.profile
                    : "/asset_ver2/image/town/go-profile.svg"
                }
                width={20}
                height={20}
                anonymous={comment.isAnonymous.toString()}
                onClick={() => handleClickProfile(comment)}
              />
              {isPopular && (
                <Image
                  alt="best"
                  src="/asset_ver2/image/town/best.png"
                  width={35}
                  height={18}
                />
              )}
              <>{comment.contents}</>
            </Flex>
            {/* 댓글 Body 끝 -------- */}
            <ThumbsUp
              isLiked={comment.isLiked}
              boardId={comment.boardId}
              isMyComment={() => isMyContent(comment)}
              theme={isPopular ? "light" : "dark"}
              likeCounts={comment.likeCounts}
            />
          </ContentWrapper>
        );
      })}
    </>
  );
};

export default ContentTemplate;

const GoCalendar = styled(Image)`
  position: absolute;
  top: 62px;
  left: 45px;
  cursor: ${({ anonymous }) => (anonymous === "false" ? "pointer" : "unset")};
`;
const CircularImage = styled(Image)`
  border-radius: 100%;
`;

const ContentWrapper = styled.div`
  flex-shrink: 0;
  font-size: 13px;
  padding: 10px 15px;
  height: fit-content;
  min-height: 100px;
  overflow-y: scroll;
  color: ${({ popular }) => (popular === "true" ? "#333" : "#F2F2F2")};
  border-radius: 10px;
  background-color: ${({ popular }) =>
    popular === "true" ? "rgba(255, 255, 255, 0.7)" : "rgba(30, 52, 79, 0.53)"};
  backdrop-filter: blur(10px);
  -ms-overflow-style: none; /* Explorer */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome */
  }
`;

const BlurWrapper = styled(ContentWrapper)`
  height: 100px;
  display: flex;
  align-items: center;
`;

const NameWrapper = styled.div`
  display: flex;
  gap: 3px;
  width: fit-comment;
  text-decoration: none;
  color: ${({ popular }) => (popular === "true" ? "#333" : "#E6E6E6")};
  font-family: "NanumSquareNeoOTF-Bd";
  align-items: center;
  padding-bottom: 7px;
`;

const CreatedAt = styled.small`
  font-size: 12px;
  color: ${({ popular }) => (popular === "true" ? "#4D4D4D" : "#ccc")};
`;

const Flex = styled.div`
  display: flex;
  gap: 10px;
  justify-content: ${({ justifyContent }) => justifyContent || "normal"};
`;
