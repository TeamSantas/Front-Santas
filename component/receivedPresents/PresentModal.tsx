import Modal from "react-bootstrap/Modal";
import PresentCardList from "./PresentCardList";
import SendPresents from "../sendPresents/SendPresents";
import styled, { css } from "styled-components";

const RedBackground = styled.div`
  background-color: #ac473d;
  border-radius: 5px;

  ${(props) =>
    props.ismycalendar &&
    css`
      background-color: white;
    `}
`;

const CustomHeader = styled(Modal.Body)`
  border: none;
  display: flex;
  justify-content: space-between;
`;

const WhiteCloseButton = styled.div`
  background-repeat: no-repeat;
  background-position: center;
  width: 2rem;
  background-image: url("/assets/image/XCircle.svg");

  ${(props) =>
    props.ismycalendar &&
    css`
      background-image: url("/assets/image/greenXCircle.svg"); ;
    `}
`;

const CustomBody = styled(Modal.Body)`
  border: none;
`;

const PresentModal = (props) => {
  console.log(props, "친구선물모달이에욥>>>>>>>>")
  const RenderBody = () => {
    return (
      <>
        {props.ismycalendar ? (
          <PresentCardList selectedday={props.selectedday} />
        ) : (
          <SendPresents />
        )}
      </>
    );
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <RedBackground ismycalendar={props.ismycalendar}>
        <CustomHeader closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            12월 {props.selectedday}일
          </Modal.Title>
          <WhiteCloseButton
            onClick={props.onHide}
            ismycalendar={props.ismycalendar}
          />
        </CustomHeader>
        <CustomBody>
          <RenderBody />
        </CustomBody>
      </RedBackground>
    </Modal>
  );
};

export default PresentModal;
