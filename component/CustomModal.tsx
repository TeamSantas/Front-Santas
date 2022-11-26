import styled, { css } from "styled-components";
import RedButton from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { CenteredFlex } from "../styles/styledComponentModule";

const CenteredModalWrapper = styled.div`
  margin: auto;
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
};
`;
const CustomFooter = styled(Modal.Footer)`
  border: none !important;
`;

const CustomModal = (props) => {
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
        </CenteredModalWrapper>
      </Modal>
  );
};

export default CustomModal;
