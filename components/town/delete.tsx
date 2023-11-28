import styled from "styled-components";
import { deleteContent } from "../../api/hooks/useTownData";
import { ResponseData } from "../../util/type";
import { useRouter } from "next/router";

interface IDelete {
  boardId: number;
}

const Delete = ({ boardId }: IDelete) => {
  const router = useRouter();
  const handleClickDelete = async () => {
    if (confirm("삭제하시겠습니까?")) {
      try {
        const response: ResponseData<string> = await deleteContent(boardId);
        if (response.status === 200) {
          alert("삭제되었습니다.");
          //TODO: 삭제 후 refetch
        } else {
          alert("삭제 요청 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.");
        }
      } catch (e) {
        console.error("Error: ", e);
        alert("삭제 요청 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.");
      }
    }
  };

  return (
    <DeleteButton alt="delete" onClick={handleClickDelete}>
      삭제하기
    </DeleteButton>
  );
};

export default Delete;

const DeleteButton = styled.div`
  cursor: pointer;
  color: #b3b3b3;
`;
