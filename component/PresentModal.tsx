import RedButton from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import PresentCardList from "./PresentCardList";
import SendPresents from "./sendPresents/SendPresents";
import styled from "styled-components";
import CustomModal from "./CustomModal";
import { useRef } from "react";

const RedBackground = styled.div`
  background-color: #ac473d;
  border-radius: 5px;
`;

const CustomHeader = styled(Modal.Body)`
  border: none;
  display: flex;
  justify-content: space-between;
`;
const CloseButton = styled.div`
  background-image: url("/assets/image/XCircle.svg");
  background-repeat: no-repeat;
  background-position: center;
  width: 2rem;
`;

const CustomBody = styled(Modal.Body)`
  border: none;
`;

const PresentModal = (props) => {
  const ref = useRef(null);

  const RenderBody = () => {
    return <>{props.ismycalendar ? <PresentCardList /> : <SendPresents />}</>;
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <RedBackground>
        <CustomHeader closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            12월 {props.selectedday}일
          </Modal.Title>
          <CloseButton onClick={props.onHide} />
        </CustomHeader>
        <CustomBody>
          <RenderBody />
        </CustomBody>
      </RedBackground>
    </Modal>
  );
};

export default PresentModal;
