import { useState } from "react";
import styled from "styled-components";
import CustomModal from "../common/CustomModal";

export const StyledCard = styled.div`
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 10px;
  padding: 20px;
  width: 50%;
  height: 350px;
  justify-content: center;
  align-items: center;
  margin: 1rem auto;
  overflow: hidden;
  @media (max-width: 1000px) {
    height: 200px;
  }
  @media (max-width: 600px) {
    height: 150px;
  }
`;

const TabCard = styled(StyledCard)`
  margin: 10px 5px;
  width: 30%;
  position: relative;

  @media (max-width: 600px) {
    width: 32vw;
    margin: 10px auto;
  }
  @media (max-width: 400px) {
    width: 38vw;
  }
`;

const CardImg = styled.img`
  width: 90%;
  height: 90%;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  overflow: hidden;
  object-fit: cover;
  &::after {
    padding-bottom: 100%;
  }
`;

const Card = (props) => {
  const [presentCardShow, setPresentCardShow] = useState(false);
  const [selectedcard, setSelectedCard] = useState(0);

  const handleShow = () => {
    setSelectedCard(props.id);
    setPresentCardShow(true);
  };
  const handleClose = () => setPresentCardShow(false);

  return (
    <>
      <TabCard>
        <CardImg
          id={`${props.id}`}
          src={`/assets/image/${props.thumbnail}.${props.type}`}
          onClick={handleShow}
        />
      </TabCard>
      <CustomModal
        show={presentCardShow}
        onHide={handleClose}
        selectedcard={selectedcard}
        header={`쪽지 제목`}
        body={`쪽지 내용`}
      />
    </>
  );
};
export default Card;
