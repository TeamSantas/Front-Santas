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
import { presentDetailModalAdID } from "../advertisement/ad-ids";

interface IPresentModal {
  show: boolean;
  onHide: () => void;
  selectedDay: number;
  isMyCalendar: boolean;
}

const PresentModal = ({
  show,
  onHide,
  selectedDay,
  isMyCalendar,
}: IPresentModal) => {
  return (
    <AdFitModal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      adFitId={presentDetailModalAdID}
      theme={isMyCalendar ? "#f9f9f9" : "dark"}
    >
      <BlueBackground isMyCalendar={isMyCalendar ? "true" : "false"}>
        <CustomHeader>
          <Modal.Title id="contained-modal-title-vcenter">
            {isMyCalendar ? (
              <ModalTitle>
                12월 {selectedDay}일<br />
                <ModalSubTitle>받은 편지함</ModalSubTitle>
              </ModalTitle>
            ) : null}
            <GreenCloseButton onClick={onHide} isMyCalendar={isMyCalendar} />
          </Modal.Title>
        </CustomHeader>
        <CustomBody hasMaxHeight={isMyCalendar ? "true" : "false"}>
          {isMyCalendar ? (
            <>
              <PresentCardList selectedday={selectedDay} />
            </>
          ) : (
            // @ts-ignore
            <SendPresents onHide={onHide} selectedday={selectedDay} />
          )}
        </CustomBody>
      </BlueBackground>
    </AdFitModal>
  );
};

export default PresentModal;

const BlueBackground = styled.div`
  background-color: #1e344f;
  border-radius: 16px 16px 0 0;
  ${({ isMyCalendar }) =>
    isMyCalendar === "true" &&
    css`
      background-color: #f9f9f9;
    `}
`;

const CustomBody = styled(Modal.Body)`
  border: none;
  height: ${({ isMyCalendar }) =>
    isMyCalendar === "true" ? "40vh" : "inherit"};
  overflow-y: scroll;
  -ms-overflow-style: none; /* Explorer */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome */
  }
`;
