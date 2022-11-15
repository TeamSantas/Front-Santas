import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import PresentCardList from './PresentCardList';

const PresentModal = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          12월 {props.selectedDay}일
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <PresentCardList />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default PresentModal