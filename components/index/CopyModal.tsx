import { Modal } from "react-bootstrap";
import {
  GreenCloseButton,
  CustomHeader,
  CustomBody,
  CustomFooter,
} from "../../styles/styledComponentModule";

const CopyModal = (props) => {
  // info modal
  const header = "✅ 내 링크 복사완료!✨";
  const text = props.link
  return (
    <Modal
      {...props}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <CustomHeader>
        <CustomBody id="contained-modal-title-vcenter">{header}</CustomBody>
        <GreenCloseButton onClick={props.onHide} />
      </CustomHeader>

      <CustomBody>{text}</CustomBody>
      <CustomFooter />
    </Modal>
  );
};

export default CopyModal;
