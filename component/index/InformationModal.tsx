import { Modal } from "react-bootstrap";
import styled from "styled-components";
import {
  GreenCloseButton,
  CustomHeader,
  CustomBody,
  CustomFooter,
} from "../../styles/styledComponentModule";

const InformationModal = (props) => {
  // info modal
  const header = "어드벤트 캘린더란?";
  const text = "매일 선물 주는거다 임마~";
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <CustomHeader>
        <Modal.Title id="contained-modal-title-vcenter">
          {header}
        </Modal.Title>
        <GreenCloseButton onClick={props.onHide} />
      </CustomHeader>
      <CustomBody>{text}</CustomBody>
      <CustomFooter />
    </Modal>
  );
};

export default InformationModal;
