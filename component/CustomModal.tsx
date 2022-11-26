import styled, { css } from "styled-components";
import RedButton from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ShareAPIButton from "./share/ShareAPIButton";

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
const TabButton = styled(RedButton)`
  width: 250px;
  margin: 20px;
  padding: 7px;
  color: white;
  background-size: 5px 5px;
  background: rgba(255,255,255,.2);
  text-shadow: 1px 0 black;
  font-weight: bold;
  font-size: 24px;
  border: none !important;
  background: linear-gradient(45deg, #AC473D 25%, #C0544A 0, #C0544A 50%, #AC473D 0, #AC473D 75%, #C0544A 0 );
  &:hover{
    background: linear-gradient(45deg, #3C6C54 25%, #78AB91 0, #78AB91 50%, #3C6C54 0, #3C6C54 75%, #78AB91 0 );
  }
  &:active{
    background: linear-gradient(45deg, #3C6C54 25%, #78AB91 0, #78AB91 50%, #3C6C54 0, #3C6C54 75%, #78AB91 0 );
  }
`
const CustomModal = (props) => {
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
        <ShareAPIButton/>
        <TabButton onClick={()=>onDownloadAs(props.img, "pitapet_calendar.png")}>내 캘린더 저장하기</TabButton>
            {/*{props.buttons && (*/}
        {/*  <CenteredFlex>*/}
        {/*    <CustomFooter bgcolor={props.btncolor}>*/}
        {/*      {props.buttons.map((btn) => (*/}
        {/*        <CustomButtons*/}
        {/*          key={btn.title}*/}
        {/*          onClick={props.onHide}*/}
        {/*          color={btn.color}*/}
        {/*          bgcolor={btn.bgcolor}*/}
        {/*        >*/}
        {/*          {btn.title}*/}
        {/*        </CustomButtons>*/}
        {/*      ))}*/}
        {/*    </CustomFooter>*/}
        {/*  </CenteredFlex>*/}
        {/*)}*/}
      </CenteredModalWrapper>
    </Modal>
  );
};

export default CustomModal;
