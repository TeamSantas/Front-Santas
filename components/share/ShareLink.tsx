import Image from "next/image";
import { useState } from "react";
import styled from "styled-components";
import CopyModal from "../index/CopyModal";
import { loginUserDataAtom } from "../../store/globalState";
import { useAtom } from "jotai";

export const ShareLink = () => {
  const [copyModal, setCopyModal] = useState<boolean>(false);
  const [storeUserData] = useAtom(loginUserDataAtom);

  const clickCopyIconHandler = () => setCopyModal(true);
  const handleCopyModalClose = () => setCopyModal(false);

  const linkCopyHandler = async () => {
    const copyURL = `https://merry-christmas.site/${storeUserData.invitationLink}`;
    try {
      await navigator.clipboard.writeText(copyURL);
      setCopyModal(true);
    } catch (e) {
      alert(
        "내 초대링크를 복사해 보내보세요! 바로 복사를 원하신다면~? 크롬브라우저로 접속해보세요✨"
      );
      clickCopyIconHandler();
    }
  };
  return (
    <>
      <ShareBtn
        src={`/asset_ver2/image/btn/link_btn.png`}
        width={44}
        height={44}
        alt={"링크복사버튼"}
        onClick={linkCopyHandler}
      />
      <CopyModal
        link={`https://merry-christmas.site/${storeUserData.invitationLink}`}
        show={copyModal}
        onHide={handleCopyModalClose}
      />
    </>
  );
};

const ShareBtn = styled(Image)`
  position: absolute;
  cursor: pointer;
  right: 10px;
  bottom: calc(env(safe-area-inset-bottom) + 70px);
  z-index: 100;
`;
