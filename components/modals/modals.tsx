import { useAtom } from "jotai";
import FriendsModal from "../friends/FriendsModal";
import { gnbActivePathAtom, modalStateAtom } from "../../store/globalState";
import { useRouter } from "next/router";
import { getGnbOptions } from "../utils/getGnbOptions";

export const Modals = () => {
  const router = useRouter();
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
    </>
  );
};
