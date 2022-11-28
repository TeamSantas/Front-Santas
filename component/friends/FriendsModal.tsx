import { Modal } from "react-bootstrap";
import {
  CustomBody,
  CustomFooter,
  CustomHeader,
  GreenCloseButton,
} from "../../styles/styledComponentModule";
import FriendsList from "./FriendsList";

const FriendsModal = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <CustomHeader>
        <Modal.Title id="contained-modal-title-vcenter">친구 목록</Modal.Title>
        <GreenCloseButton onClick={props.onHide} />
      </CustomHeader>
      <CustomBody>
        <FriendsList />
      </CustomBody>
      <CustomFooter />
    </Modal>
  );
};

export default FriendsModal;
