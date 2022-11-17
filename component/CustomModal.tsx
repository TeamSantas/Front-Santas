import styled from "styled-components";
import Image from 'next/image';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { ShareModalImage } from './share/Share';
import { CenteredFlex } from "../styles/styledComponentModule";

const CenteredModalWrapper = styled.div`
    margin: auto;
`;

const CustomButtons = styled(Button)`
  // TODO : custom 값으로 세팅
  border: none !important;
  color: #000000;
  background-color: #FFD465;
  font-size: 1.5rem;
  width: 10rem;
`

const CustomModal = (props) => {
  // console.log("props.header >>> ", props.header)
  // console.log("props.body >>> ", props.body)

  return (
    <Modal
    {...props}
    size="lg"
    aria-labelledby="contained-modal-title-vcenter"
    centered
    >
      <CenteredModalWrapper>
        {/* ----------- header ----------- */}
        {props.header && 
          (<Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              {props.header}
            </Modal.Title>
          </Modal.Header>)
        }
        {/* ----------- body ----------- */}
        <Modal.Body>
          {props.body && (props.body)}
          {props.img && (
            <ShareModalImage
              src={props.img} 
              alt={props.name}
            ></ShareModalImage>
          )}
        </Modal.Body>
        {/* ----------- footer ----------- */}
        {props.buttons && (
          <CenteredFlex>
            <Modal.Footer>
              {props.buttons.map((btn)=>
                <CustomButtons key={btn} onClick={props.onHide}>{btn}</CustomButtons>
              )}
            </Modal.Footer>
          </CenteredFlex>)
        }
      </CenteredModalWrapper>
    </Modal>
  );
}

export default CustomModal