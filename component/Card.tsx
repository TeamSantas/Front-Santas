import { useState } from "react";
import styled from "styled-components";
import CustomModal from "./CustomModal";

export const StyledCard = styled.div`
  background: white;
  box-shadow: 0 2px 8px rgba(0,0,0,0.26);
  border-radius: 10px;
  padding: 20px;
  width: 50%;
  height: 300px;
  justify-content: center;
  align-items: center;
  margin: 1rem auto;
`

const TabCard = styled(StyledCard)`
  margin: 10px 5px;
  width: 30%;
  height: 30%;

  @media (max-width: 600px) {
    width: 32vw;
  }
  @media (max-width: 400px) {
    width: 70vw;
  }
`

const CardImg = styled.img`
  width: 100%;
  height: 25vh;
  object-fit:cover;
  @media (max-width: 600px) {
    height: 15vh;
}
`

const Card = (props) => {
  const [presentCardShow, setPresentCardShow] = useState(false);
  const [selectedcard, setSelectedCard] = useState(0)

  const handleShow = () => {
    setSelectedCard(props.id)
    setPresentCardShow(true)
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
    )
}
export default Card;

