import { Modal } from "react-bootstrap";
import {
  GreenCloseButton,
  CustomHeader,
  CustomBody,
  CustomFooter,
} from "../../styles/styledComponentModule";

const CopyModal = (props) => {
  // info modal
  const header = "내 링크를 복사해 공유해보세요!✨";
  const text = props.link
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <CustomHeader>
        <Modal.Title id="contained-modal-title-vcenter">{header}</Modal.Title>
        <GreenCloseButton onClick={props.onHide} />
      </CustomHeader>

      <CustomBody>{text}</CustomBody>
      <CustomFooter />
    </Modal>
  );
};

export default CopyModal;
