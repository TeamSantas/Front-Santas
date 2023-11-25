import { Modal } from "react-bootstrap";
import styled from "styled-components";

export const MainContainer = styled.div`
  flex: 1;
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
  background-color: #3C6C54;
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
  background-repeat: no-repeat;
  background-position: center;
  width: 3rem;
  height: 3rem;
  background-image: url("/assets/image/greenXCircle.svg"); ;
  position: absolute;
  right: 5px;
`;

export const CustomHeader = styled(Modal.Header)`
  border: none !important;
  margin: auto;
`;
export const CustomBody = styled(Modal.Body)`
  border: none;
  overflow: auto;
  max-height: 50rem;
  padding: 0 1rem ;
`;
export const CustomDescriptionBody = styled(Modal.Body)`
  border: none;
  overflow: auto;
  max-height: 50rem;
  padding: 0 1rem ;
  font-size: 20px;
  text-align: center;
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
  right: 6px;
`;