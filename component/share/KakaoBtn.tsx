import styled from "styled-components";
import { RedButton } from "../../styles/styledComponentModule";

const SButton = styled(RedButton)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const KakaoBtn = () => {
  const shareKakao = () => {
    // TODO : inviteLink 실제 값으로 연결
    const inviteLink = "/test";
    window.Kakao.Link.sendCustom({
      templateId: 86453,
      templateArgs: {
        pagePathname: inviteLink,
      },
    });
  };
  return <SButton onClick={shareKakao}>카카오톡 공유하기</SButton>;
};

export default KakaoBtn;
