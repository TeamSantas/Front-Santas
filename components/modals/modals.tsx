import { useAtom } from "jotai";
import FriendsModal from "../friends/FriendsModal";
import LikeModal from "../like/LikeModal";
import { modalStateAtom } from "../../store/globalState";

export const Modals = () => {
  const [modalState, setModalState] = useAtom(modalStateAtom);
  const { label, show } = modalState;
  const closeModal = () => {
    setModalState({ ...modalState, show: false });
  };
  return (
    <>
      <FriendsModal show={label === "friends" && show} onHide={closeModal} />
      <LikeModal show={label === "like" && show} onHide={closeModal} />
    </>
  );
};
