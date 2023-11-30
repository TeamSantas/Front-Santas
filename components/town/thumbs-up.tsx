import styled from "styled-components";
import Image from "next/image";
import { useState } from "react";
import { putBoardLikeAndUnlike } from "../../api/hooks/useTownData";
import { useAtom } from "jotai";
import { loginUserDataAtom } from "../../store/globalState";
import { useRouter } from "next/router";

interface IThumbsUp {
  isLiked: boolean;
  boardId: number;
  isMyComment: boolean;
  likeCounts: number;
}

const ThumbsUp = ({ isLiked, boardId, isMyComment, likeCounts }: IThumbsUp) => {
  const [storeUserData] = useAtom(loginUserDataAtom);
  const [liked, setLiked] = useState(isLiked);
  const [newLikeCounts, setNewLikeCounts] = useState(likeCounts);
  const isLoginUser = storeUserData.id !== -1;
  const router = useRouter();
  const handleLikeCounts = async () => {
    const response = await putBoardLikeAndUnlike(boardId);
    if (!response) {
      setNewLikeCounts(likeCounts); // 프론트에서 미리 세팅한 값 원복
      setLiked((prev) => !prev);
    }
  };

  const handleClickLike = () => {
    if (!isLoginUser) {
      const confirmText = `로그인이 필요한 기능이에요.\n로그인하러 갈까요?`;
      if (confirm(confirmText)) {
        router.push("/login");
      }
      return;
    }

    if (isMyComment) {
      alert("자신의 글은 좋아요할 수 없습니다.");
      return;
    }
    setNewLikeCounts((prev) => (liked ? prev - 1 : prev + 1));
    setLiked((prev) => !prev);

    handleLikeCounts();
  };

  return (
    <Like liked={liked} onClick={handleClickLike}>
      <img
        alt="thumbs-up"
        src={`/asset_ver2/image/town/thumbs-up${
          liked ? "-red" : "-default"
        }.svg`}
        width={11}
        height={11}
      />
      <div>{newLikeCounts}</div>
    </Like>
  );
};

export default ThumbsUp;

const Like = styled.button`
  position: absolute;
  bottom: 10px;
  right: 10px;
  display: flex;
  gap: 8px;
  justify-content: space-between;
  padding: 2px 4px;
  border: none;
  font-family: "NanumSquareNeoOTF-Bd";
  font-size: 11px;
  border-radius: 5px;
  align-items: center;
  background-color: unset;
  color: ${({ liked }) => (liked ? "#F15A24" : "#8E8E8E")};
`;
