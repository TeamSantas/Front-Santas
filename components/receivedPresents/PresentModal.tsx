import Modal from "react-bootstrap/Modal";
import PresentCardList from "./PresentCardList";
import SendPresents from "../sendPresents/SendPresents";
import styled, { css } from "styled-components";

const BlueBackground = styled.div`
  background-color: #1E344F;
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
  color: white;
`;
const DateText = styled.p`
  font-size: 1.2rem;
  align-items: center;
`;
const GreenCloseButton = styled.div`
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  width: 1.8rem;
  margin-top: -20px;
  background-image: url("/asset_ver2/image/btn/green_closeBtn.png");

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
  const RenderBody = () => {
    return (
      <>
        {props.ismycalendar ? (
          <PresentCardList selectedday={props.selectedday} />
        ) : (
          // @ts-ignore
          <SendPresents onHide={props.onHide} selectedday={props.selectedday}/>
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
      <BlueBackground ismycalendar={props.ismycalendar}>
        <CustomHeader closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <DateText>12월 {props.selectedday}일</DateText>
          </Modal.Title>
          <GreenCloseButton
            onClick={props.onHide}
            ismycalendar={props.ismycalendar}
          />
        </CustomHeader>
        <CustomBody>
          <RenderBody />
        </CustomBody>
      </BlueBackground>
    </Modal>
  );
};

export default PresentModal;
