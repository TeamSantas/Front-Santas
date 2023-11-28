import Modal from "react-bootstrap/Modal";
import PresentCardList from "./PresentCardList";
import SendPresents from "../sendPresents/SendPresents";
import styled, { css } from "styled-components";
import AdFitModal from "../advertisement/adFitModal";
import {
  CustomHeader,
  GreenCloseButton,
  ModalTitle,
  ModalSubTitle,
} from "../../styles/styledComponentModule";

const PresentModal = (props) => {
  const RenderBody = () => {
    return (
      <>
        {props.ismycalendar ? (
          <>
            <PresentCardList selectedday={props.selectedday} />
          </>
        ) : (
          // @ts-ignore
          <SendPresents onHide={props.onHide} selectedday={props.selectedday} />
        )}
      </>
    );
  };

  return (
    <AdFitModal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <BlueBackground ismycalendar={props.ismycalendar}>
        <CustomHeader>
          <Modal.Title id="contained-modal-title-vcenter">
            {props.ismycalendar ? (
              <ModalTitle>
                12월 {props.selectedday}일<br />
                <ModalSubTitle>받은 편지함</ModalSubTitle>
              </ModalTitle>
            ) : null}
            <GreenCloseButton
              onClick={props.onHide}
              ismycalendar={props.ismycalendar}
            />
          </Modal.Title>
        </CustomHeader>
        <CustomBody>
          <RenderBody />
        </CustomBody>
      </BlueBackground>
    </AdFitModal>
  );
};

export default PresentModal;

const BlueBackground = styled.div`
  background-color: #1e344f;
  border-radius: 20px;
  ${(props) =>
    props.ismycalendar &&
    css`
      background-color: #f9f9f9;
    `}
`;

const CustomBody = styled(Modal.Body)`
  border: none;
  height: 40vh;
  overflow-y: scroll;
  -ms-overflow-style: none; /* Explorer */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome */
  }
`;
