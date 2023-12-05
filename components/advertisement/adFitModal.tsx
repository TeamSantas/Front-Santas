import styled from "styled-components";
import { Modal } from "react-bootstrap";
import KakaoAdFit from "../advertisement/KakaoAdFit";

/**
 * 카카오 애드핏이 하단에 고정된 Modal
 * 애드핏을 넣으려면 props에 adFitId값을 포함해야함
 */
const AdFitModal = (props) => {
  return (
    <Modal {...props} size="m">
      {props.children}
      {props.adfitid && (
        <AdWrapper theme={props.theme}>
          <KakaoAdFit id={props.adfitid} />
        </AdWrapper>
      )}
    </Modal>
  );
};

export default AdFitModal;

const AdWrapper = styled.div`
  border-radius: 0 0 16px 16px;
  background-color: ${({ theme }) =>
    !theme ? "white" : theme === "dark" ? "#1e344f" : theme};
  padding: 10px 20px 20px;
`;
