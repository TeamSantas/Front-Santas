import Image from "next/image";
import styled from "styled-components";
import { modalStateAtom } from "../../store/globalState";
import { useAtom } from "jotai";

export const ShareLink = () => {
  const [, setShowModal] = useAtom(modalStateAtom);

  return (
    <ShareBtn
      src={`/asset_ver2/image/btn/link_btn.png`}
      width={44}
      height={44}
      alt={"링크복사버튼"}
      onClick={() => {
        setShowModal({
          label: "share",
          show: true,
        });
      }}
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
