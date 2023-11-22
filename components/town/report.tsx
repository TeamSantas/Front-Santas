import styled from "styled-components";
import Image from "next/image";
import { report } from "../../api/hooks/useTownData";
import { useAuthContext } from "../../store/contexts/components/hooks";
import { checkMemberAndRedirect } from "../utils/clickWithCheckMember";

interface IReport {
  boardId: number;
  handleSetBlurredId: (boardId: number) => void;
  isMyComment: () => boolean;
  reportedId: number;
}

const Report = ({
  boardId,
  handleSetBlurredId,
  isMyComment,
  reportedId,
}: IReport) => {
  const { storeUserData } = useAuthContext();
  const handleClickReport = () => {
    if (checkMemberAndRedirect(storeUserData)) return;

    if (isMyComment) {
      alert("자신의 글은 신고할 수 없습니다.");
      return;
    }
    if (confirm("신고하시겠습니까?")) {
      handleSetBlurredId(boardId);
      report({
        boardId,
        reportedId,
        type: "BOARD",
      });
    }
  };

  return (
    <ReportButton
      alt="report"
      src="/asset_ver2/image/town/report.png"
      width={16}
      height={16}
      onClick={handleClickReport}
    />
  );
};

export default Report;

const ReportButton = styled(Image)`
  cursor: pointer;
`;
