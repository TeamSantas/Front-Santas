import styled from "styled-components";
import Image from "next/image";
import { useState } from "react";
import { putBoardLikeAndUnlike } from "../../api/hooks/useTownData";
import { useAuthContext } from "../../store/contexts/components/hooks";
import { checkMemberAndRedirect } from "../utils/clickWithCheckMember";

interface IThumbsUp {
  isLiked: boolean;
  boardId: number;
  isMyComment: () => boolean;
  theme: string;
  likeCounts: number;
}
const ThumbsUp = ({
  isLiked,
  boardId,
  isMyComment,
  theme,
  likeCounts,
}: IThumbsUp) => {
  const { storeUserData } = useAuthContext();
  const [liked, setLiked] = useState(isLiked);
  const [newLikeCounts, setNewLikeCounts] = useState(likeCounts);

  const handleLikeCounts = async () => {
    const response = putBoardLikeAndUnlike(boardId);
    if (!response) {
      setNewLikeCounts(likeCounts); // 프론트에서 미리 세팅한 값 원복
      setLiked((prev) => !prev);
    }
  };

  const handleClickLike = () => {
    if (checkMemberAndRedirect(storeUserData)) return;

    if (isMyComment) {
      alert("자신의 글은 좋아요할 수 없습니다.");
      return;
    }
    setNewLikeCounts(liked ? likeCounts : likeCounts + 1);
    setLiked((prev) => !prev);
  };

  return (
    <Like theme={theme} liked={liked} onClick={handleClickLike}>
      <Image
        alt="thumbs-up"
        src="/asset_ver2/image/town/thumbs-up.png"
        width={11}
        height={11}
      />
      <>{newLikeCounts}</>
    </Like>
  );
};

export default ThumbsUp;
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
  color: ${({ liked, theme }) =>
    liked ? "#F15A24" : theme === "light" ? "#666" : "#1E344F"};
  border-color: ${({ theme }) => (theme === "light" ? "white" : "#1E344F")};
`;
