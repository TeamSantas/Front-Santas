import styled, { css } from "styled-components";
import RedButton from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ShareAPIButton from "./ShareAPIButton";
import { CustomHeader } from "../../styles/styledComponentModule";

const CenteredModalWrapper = styled.div`
  margin: auto;
`;

const CustomBody = styled(Modal.Body)`
  margin: 1rem 0rem 2rem 0rem;
  height: 20rem;

  ${(props) =>
    props.background_img &&
    css`
      background-image: url(${props.background_img});
      background-repeat: no-repeat;
      background-position: center;
      background-size: contain;
    `}
`;

const TabButton = styled(RedButton)`
  width: 250px;
  margin: 20px;
  padding: 7px;
  color: white;
  background-size: 5px 5px;
  background: rgba(255, 255, 255, 0.2);
  text-shadow: 1px 0 black;
  font-weight: bold;
  font-size: 24px;
  border: none !important;
  background: linear-gradient(
    45deg,
    #ac473d 25%,
    #c0544a 0,
    #c0544a 50%,
    #ac473d 0,
    #ac473d 75%,
    #c0544a 0
  );
  &:hover {
    background: linear-gradient(
      45deg,
      #3c6c54 25%,
      #78ab91 0,
      #78ab91 50%,
      #3c6c54 0,
      #3c6c54 75%,
      #78ab91 0
    );
  }
  &:active {
    background: linear-gradient(
      45deg,
      #3c6c54 25%,
      #78ab91 0,
      #78ab91 50%,
      #3c6c54 0,
      #3c6c54 75%,
      #78ab91 0
    );
  }
`;
const TicketModal = (props) => {
  const onDownloadAs = (uri: string, filename: string) => {
    console.log("다운됨");
    const link = document.createElement("a");
    document.body.appendChild(link);
    link.href = uri;
    link.download = filename;
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <CenteredModalWrapper>
        {/* ----------- header ----------- */}
        <CustomHeader closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {props.header}
          </Modal.Title>
        </CustomHeader>
        {/* ----------- body ----------- */}
        <CustomBody background_img={props.background_img}>
          {props.body && props.body}
          {props.text && <h2>{props.text}</h2>}
        </CustomBody>
        {/* ----------- footer ----------- */}
        <ShareAPIButton />
        <TabButton
          onClick={() => onDownloadAs(props.img, "pitapet_calendar.png")}
        >
          내 티켓 저장하기
        </TabButton>
      </CenteredModalWrapper>
    </Modal>
  );
};

export default TicketModal;
