import styled from "styled-components";
import { Modal } from "react-bootstrap";
import {
  CenteredFlex,
  CustomBody,
  CustomHeader,
  GreenCloseButton,
  ModalTitle,
} from "../../styles/styledComponentModule";
import AdFitModal from "../advertisement/adFitModal";
import { friendsModalAdID } from "../advertisement/ad-ids";
import { ShareLinkInFriendsModal } from "../share/ShareLink-in-friendsModal";
import { KakaoShare } from "../share/KakaoShare";

const ShareModal = (props) => {
  return (
    <AdFitModal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      adfitid={friendsModalAdID}
    >
      <CustomHeader>
        <Modal.Title id="contained-modal-title-vcenter">
          <ModalTitle>공유하기</ModalTitle>
          <GreenCloseButton onClick={props.onHide} />
        </Modal.Title>
      </CustomHeader>
      <CustomBody>
        <ShareButtons>
          <KakaoShare />
          <ShareLinkInFriendsModal />
        </ShareButtons>
      </CustomBody>
    </AdFitModal>
  );
};

export default ShareModal;

export const ShareButtons = styled(CenteredFlex)`
  gap: 50px;
`;

export const ShareOption = styled(CenteredFlex)`
  cursor: pointer;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  color: #4d4d4d;
  font-size: 16px;
  font-family: NanumSquare Neo OTF;
  font-weight: 800;
  word-wrap: break-word;
`;
