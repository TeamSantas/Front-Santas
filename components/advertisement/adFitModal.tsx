import styled from "styled-components";
import { Modal } from "react-bootstrap";
import KakaoAdFit from "../advertisement/KakaoAdFit";

/**
 * 카카오 애드핏이 하단에 고정된 Modal
 * 반드시 props에 adFitId값을 포함해야함
 */
const AdFitModal = (props) => {
  return (
    <Modal {...props}>
      {props.children}
      <AdWrapper>
        <KakaoAdFit id={props.adFitId} />
      </AdWrapper>
    </Modal>
  );
};

export default AdFitModal;

const AdWrapper = styled.div`
  border-radius: 20px;
  padding: 10px 20px 20px;
`;
