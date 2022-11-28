import { Modal } from "react-bootstrap";
import {
  GreenCloseButton,
  CustomHeader,
  CustomBody,
  CustomFooter,
} from "../../styles/styledComponentModule";

const InformationModal = (props) => {
  // info modal
  const header = "어드벤트 캘린더란 ❓";
  const text = `12월 1일부터 25일까지, 
크리스마스를 기다리면서 하나씩 선물을 열어보는 달력이에요. 📆
  
크리스마스에 진심인 저희 팀 산타즈... ദ്ദി(⸝⸝ʚ̴̶̷̆ ᴗ ʚ̴̶̷̆⸝⸝)☆✨
어드벤트 캘린더를 온라인으로 옮겨봤어요.
미래의 캘린더 조각은 ❗️절대❗️ 열어볼 수 없답니다!
오늘은 무슨 선물을 받았을까, 하는 💗두근두근한 마음💗을 드려요.

Ps. 친구와 선물을 주고받을 수록, 하얀코에게 줄 크레파스가 모아져요.
친구에게 따뜻한 한 마디 건네러 가볼까요? 🎅`;
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <CustomHeader>
        <Modal.Title id="contained-modal-title-vcenter">{header}</Modal.Title>
        <GreenCloseButton onClick={props.onHide} />
      </CustomHeader>
      <CustomBody>{text}</CustomBody>
      <CustomFooter />
    </Modal>
  );
};

export default InformationModal;
