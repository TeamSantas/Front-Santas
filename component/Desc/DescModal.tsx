import { Modal } from "react-bootstrap";
import styled from "styled-components";

const FriendsModalWrapper = styled.div``;

const CustomHeader = styled(Modal.Header)`
  border: none !important;
`;
const CustomBody = styled(Modal.Body)`
  border: none;
  overflow: auto;
  max-height: 50rem;
`;
const CustomFooter = styled(Modal.Footer)`
  border: none;
`;

const GreenCloseButton = styled.div`
  background-repeat: no-repeat;
  background-position: center;
  width: 2rem;
  height: 2rem;
  background-image: url("/assets/image/greenXCircle.svg"); ;
`;

const DescModal = (props) => {
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
      <CustomBody></CustomBody>
      <CustomFooter />
    </Modal>
  );
};

export default DescModal;
