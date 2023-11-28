import styled, { css } from "styled-components";
import RedButton from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import {
  CenteredFlex,
  GreenCloseButton,
} from "../../styles/styledComponentModule";
import AdFitModal from "../advertisement/adFitModal";

const ColorBackground = styled.div`
  background-color: ${(props) => props.color};
  border-radius: 16px 16px 0 0;
  height: ${(props) => (props.haveImage ? "37rem" : "35em")};
`;

const CustomButtons = styled(RedButton)`
  // TODO : custom 값으로 세팅
  border: none !important;
  color: ${(props) => props.color};
  background-color: ${(props) => props.bgcolor};
  font-size: 1.5rem;
  width: 10rem;
`;

const CustomHeader = styled(Modal.Header)`
  border: none !important;
`;

const CustomBody = styled(Modal.Body)`
  margin: 1rem auto 2rem auto;
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

const CustomFooter = styled(Modal.Footer)`
  border: none !important;
`;

const Button = styled.div`
  width: 300px;
  height: 50px;
  background-color: #1e344f;
  border-radius: 10px;
  margin: 60px auto 0 auto;
  color: white;
  font-size: 24px;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
`;

const CustomModal = (props) => {
  return (
    <AdFitModal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      theme="dark"
    >
      {/* ----------- header ----------- */}
      <ColorBackground
        haveImage={props.haveImage}
        color={props.color}
        type={props.type}
      >
        <CustomHeader>
          <Modal.Title id="contained-modal-title-vcenter">
            {props.header}
          </Modal.Title>
          <GreenCloseButton onClick={props.onHide} />
        </CustomHeader>

        {/* ----------- body ----------- */}
        <CustomBody background_img={props.background_img}>
          {props.body && props.body}
          {props.text && <h2>{props.text}</h2>}
        </CustomBody>

        {/* ----------- footer ----------- */}
        {props.buttons && (
          <CenteredFlex>
            <CustomFooter bgcolor={props.btncolor}>
              {props.buttons.map((btn) => (
                <CustomButtons
                  key={btn.title}
                  onClick={props.onHide}
                  color={btn.color}
                  bgcolor={btn.bgcolor}
                >
                  {btn.title}
                </CustomButtons>
              ))}
            </CustomFooter>
          </CenteredFlex>
        )}
        {props.login && <Button onClick={props.onHide}>확인했어요🎁</Button>}
      </ColorBackground>
    </AdFitModal>
  );
};

export default CustomModal;
