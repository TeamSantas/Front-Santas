import styled, { css } from "styled-components";
import RedButton from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { CenteredFlex } from "../../styles/styledComponentModule";

const ColorBackground = styled.div`
  background-color: ${(props) => props.color};
  border-radius: 5px;
  height: ${(props) => (props.haveImage ? "40rem" : "35em")};
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
  background-color: #ac473d;
  border-radius: 10px;
  margin: 60px auto 0 auto;
  color: white;
  font-size: 24px;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
`

const CustomModal = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      {/* ----------- header ----------- */}
      <ColorBackground
        haveImage={props.haveImage}
        color={props.color}
        type={props.type}
      >
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
        <Button onClick={props.onHide}>확인했어요🎁</Button>
      </ColorBackground>
    </Modal>
  );
};

export default CustomModal;
