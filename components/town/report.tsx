import styled from "styled-components";
import { report } from "../../api/hooks/useTownData";
import { useAuthContext } from "../../store/contexts/components/hooks";
import { checkMemberAndRedirect } from "../utils/clickWithCheckMember";
import { ResponseData } from "../../util/type";

interface IReport {
  boardId: number;
  reportedId: number;
  handleSetBlurredId: (boardId: number) => void;
}

const Report = ({ boardId, reportedId, handleSetBlurredId }: IReport) => {
  const { storeUserData } = useAuthContext();
  const handleClickReport = async () => {
    if (checkMemberAndRedirect(storeUserData)) return;

    if (confirm("신고하시겠습니까?")) {
      try {
        const response: ResponseData<string> = await report({
          boardId,
          reportedId,
          type: "BOARD",
        });
        if (response.status === 200) {
          alert("신고가 접수되었습니다.");
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
  color: #fff;
`;
