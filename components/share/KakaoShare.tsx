import Image from "next/image";
import { ShareOption } from "../modals/ShareModal";
import { useAtom } from "jotai";
import { loginUserDataAtom } from "../../store/globalState";

export const KakaoShare = () => {
  const [storeUserData] = useAtom(loginUserDataAtom);
  const invitationLink = storeUserData.invitationLink;

  const shareKakao = () => {
    if (typeof window !== "undefined") {
      window.Kakao.Link.sendCustom({
        templateId: 86453,
        templateArgs: {
          invitationLink,
        },
      });
    }
  };

  return (
    <ShareOption onClick={shareKakao}>
      <Image
        alt="kakao-share"
        width={40}
        height={40}
        src="/asset_ver2/image/share/kakao-share.svg"
      />
      카카오톡
    </ShareOption>
  );
};
