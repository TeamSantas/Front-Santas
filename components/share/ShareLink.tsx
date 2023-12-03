import Image from "next/image";
import styled from "styled-components";
import { loginUserDataAtom, modalStateAtom } from "../../store/globalState";
import { useAtom } from "jotai";

export const ShareLink = () => {
  const [storeUserData] = useAtom(loginUserDataAtom);
  const [, setShowModal] = useAtom(modalStateAtom);

  const linkCopyHandler = async () => {
    const copyURL = `https://merry-christmas.site/${storeUserData.invitationLink}`;
    try {
      await navigator.clipboard.writeText(copyURL);
      setShowModal({
        label: "copy",
        show: true,
      });
    } catch (e) {
      alert(
        "내 초대링크를 복사해 보내보세요! 바로 복사를 원하신다면~? 크롬브라우저로 접속해보세요✨"
      );
    }
  };
  return (
    <ShareBtn
      src={`/asset_ver2/image/btn/link_btn.png`}
      width={44}
      height={44}
      alt={"링크복사버튼"}
      onClick={linkCopyHandler}
    />
  );
};

const ShareBtn = styled(Image)`
  position: absolute;
  cursor: pointer;
  right: 10px;
  bottom: calc(env(safe-area-inset-bottom) + 70px);
  z-index: 100;
`;
