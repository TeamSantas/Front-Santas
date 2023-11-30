import { Modal } from "react-bootstrap";
import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
`;

export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CenteredFlex = styled(Flex)`
  justify-content: center;
  white-space: pre-line;
`;

export const Icons = styled.button`
  width: 32px;
  height: 32px;
  background: none;
  border: none;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
`;

export const RedButton = styled.button`
  border-radius: 10px;
  border: none;
  margin-bottom: 10px;
  font-size: 30px;
  cursor: pointer;
  width: 100%;

  &:active {
    background-color: #8d362d;
  }
`;

export const GreenButton = styled(RedButton)`
  background-color: #3c6c54;
  color: white;
  width: 42%;
  font-size: 18px;
  padding: 10px 0;
  /*갤폴드 대응*/
  @media (max-width: 300px) {
    font-size: 13px;
  }
`;

export const GreenCloseButton = styled.div`
  cursor: pointer;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 24px;
  height: 24px;
  background-image: url("/asset_ver2/image/btn/green_close_btn.svg");
  position: absolute;
  right: 12px;
  top: 12px;
`;

export const CustomHeader = styled(Modal.Header)``;

export const ModalTitle = styled.p`
  color: #4d4d4d;
  font-size: 18px;
  font-family: NanumSquare Neo OTF;
  font-weight: 900;
  word-wrap: break-word;
  text-align: center;
`;

export const ModalSubTitle = styled.small`
  color: #808080;
  font-size: 14px;
  font-weight: 400;
`;

export const CustomBody = styled(Modal.Body)`
  border: none;
  overflow: auto;
  max-height: 50rem;
  padding: 0 1rem;
  max-height: 40vh;
  /* Firefox */
  scrollbar-width: none;

  /* Internet Explorer, Edge */
  &::-ms-overflow-style {
    display: none;
  }

  /* Chrome, Safari */
  &::-webkit-scrollbar {
    display: none;
  }
  @media (max-width: 768px) {
    max-width: unset;
  }
`;
export const CustomDescriptionBody = styled(Modal.Body)`
  border: none;
  overflow: auto;
  max-height: 50rem;
  margin: 0 auto;
  padding: 0 1rem;
  font-size: 16px;
  text-align: left;
  white-space: pre-line;
`;
export const CustomFooter = styled(Modal.Footer)`
  border: none;
`;

export const NewBadge = styled.div`
  position: absolute;
  background-color: #ac473d;
  color: white;
  width: 50px;
  height: 25px;
  z-index: 9999;
  border-radius: 4px;
  text-align: center;
  line-height: 25px;
  top: 6px;
  //right: 6px;
`;
