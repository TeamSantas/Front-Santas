import { Modal } from "react-bootstrap";
import {
  GreenCloseButton,
  CustomHeader,
  CustomFooter,
  CustomDescriptionBody,
} from "../../styles/styledComponentModule";
import AdFitModal from "../advertisement/adFitModal";
import { informationModalAdID } from "../advertisement/ad-ids";

const InformationModal = (props) => {
  // info modal
  const header = "어드벤트 캘린더란 ❓";
  const text = `12월 1일부터 25일까지, 크리스마스를 기다리면서
하나씩 선물을 열어보는 달력이에요. 📆 

어드벤트 캘린더를 온라인으로 옮겨봤어요.

미래의 캘린더 조각은 ❗️절대❗️ 열어볼 수 없답니다!
오늘은 무슨 선물을 받았을까, 하는 💗두근두근한 마음💗을 드려요.

-------------
🔗 버튼으로 내 링크를 복사해 친구에게 보내보세요! 
      친구들이 내 캘린더에 찾아와 선물을 줄거예요.
-------------`;
  return (
    <AdFitModal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      adFitId={informationModalAdID}
    >
      <CustomHeader>
        <Modal.Title id="contained-modal-title-vcenter">{header}</Modal.Title>
        <GreenCloseButton onClick={props.onHide} />
      </CustomHeader>
      <CustomDescriptionBody>{text}</CustomDescriptionBody>
      <CustomFooter />
    </AdFitModal>
  );
};

export default InformationModal;
