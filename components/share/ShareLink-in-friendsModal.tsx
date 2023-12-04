import Image from "next/image";
import { loginUserDataAtom, modalStateAtom } from "../../store/globalState";
import { useAtom } from "jotai";
import { ShareOption } from "../modals/ShareModal";

export const ShareLinkInFriendsModal = () => {
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
    <ShareOption
      onClick={() => {
        linkCopyHandler();
        setShowModal({
          label: "copy",
          show: true,
        });
      }}
    >
      <Image
        alt="url-copy"
        width={40}
        height={40}
        src="/asset_ver2/image/share/url-copy.png"
      />
      URL
    </ShareOption>
  );
};
