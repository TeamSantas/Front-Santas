import {
  GreenCloseButton,
  CustomHeader,
  CustomBody,
  CustomFooter,
} from "../../styles/styledComponentModule";
import AdFitModal from "../advertisement/adFitModal";
import { copyModalAdID } from "../advertisement/ad-ids";

const CopyModal = (props) => {
  // info modal
  const header = "✅ 내 링크 복사완료!✨";
  const text = props.link;
  return (
    <AdFitModal
      {...props}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      adfitid={copyModalAdID}
    >
      <CustomHeader>
        <CustomBody id="contained-modal-title-vcenter">{header}</CustomBody>
        <GreenCloseButton onClick={props.onHide} />
      </CustomHeader>

      <CustomBody>{text}</CustomBody>
      <CustomFooter />
    </AdFitModal>
  );
};

export default CopyModal;
