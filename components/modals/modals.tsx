import { useAtom } from "jotai";
import FriendsModal from "./FriendsModal";
import {
  gnbActivePathAtom,
  loginUserDataAtom,
  modalStateAtom,
} from "../../store/globalState";
import { useRouter } from "next/router";
import { getGnbOptions } from "../utils/getGnbOptions";
import ShareModal from "./ShareModal";
import CopyModal from "../index/CopyModal";

export const Modals = () => {
  const router = useRouter();
  const [storeUserData] = useAtom(loginUserDataAtom);
  const [modalState, setModalState] = useAtom(modalStateAtom);
  const [, setActivePathOption] = useAtom(gnbActivePathAtom);
  const { label, show } = modalState;
  const closeModal = () => {
    setActivePathOption(getGnbOptions(router.asPath));
    setModalState({ ...modalState, show: false });
  };
  return (
    <>
      <FriendsModal show={label === "friends" && show} onHide={closeModal} />
      <ShareModal show={label === "share" && show} onHide={closeModal} />
      <CopyModal
        link={`https://merry-christmas.site/${storeUserData.invitationLink}`}
        show={label === "copy" && show}
        onHide={closeModal}
      />
    </>
  );
};
