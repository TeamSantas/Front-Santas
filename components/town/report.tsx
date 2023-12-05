import styled from "styled-components";
import { report } from "../../api/hooks/useTownData";
import { ResponseData } from "../../util/type";
import { useAtom } from "jotai";
import { loginUserDataAtom } from "../../store/globalState";
import { useRouter } from "next/router";

interface IReport {
  boardId: number;
  writerId: number;
  handleSetBlurredId: (boardId: number) => void;
}

const Report = ({ boardId, writerId, handleSetBlurredId }: IReport) => {
  const [storeUserData] = useAtom(loginUserDataAtom);
  const isLoginUser = storeUserData.id > 0;
  const router = useRouter();
  const handleClickReport = async () => {
    if (!isLoginUser) {
      const confirmText = `로그인이 필요한 기능이에요.\n로그인하러 갈까요?`;
      if (confirm(confirmText)) {
        router.push("/login");
      }
      return;
    }

    if (confirm("신고하시겠습니까?")) {
      try {
        const response: ResponseData<string> = await report({
          boardId,
          writerId,
          type: "BOARD",
        });
        if (response.status === 200) {
          alert("신고가 접수되었습니다.");
          handleSetBlurredId(boardId);
        } else if (response.status === 208) {
          alert("이미 신고한 글입니다.");
          handleSetBlurredId(boardId);
        } else {
          alert("신고 접수 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.");
        }
      } catch (e) {
        console.error("Error: ", e);
        alert("신고 접수 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.");
      }
    }
  };

  return (
    <ReportButton alt="report" onClick={handleClickReport}>
      신고하기
    </ReportButton>
  );
};

export default Report;

const ReportButton = styled.div`
  cursor: pointer;
  color: #b3b3b3;
`;
