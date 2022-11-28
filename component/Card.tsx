import { useEffect, useState } from "react";
import styled from "styled-components";
import { useGetPresentDetail } from "../api/hooks/useGetPresentDetail";
import PresentService from "../api/PresentService";
import CustomModal from "./CustomModal";
import PresentDetailBody from "./present/PresentDetailBody";
import PresentDetailHeader from "./present/PresentDetailHeader";

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
    height : 200px;
  }
  @media (max-width: 600px) {
    height : 150px;
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
  top: 0; right: 0; bottom: 0; left: 0;
  margin: auto;
  overflow: hidden;
  object-fit: cover;
  &::after{
    padding-bottom: 100%;
  }
`;

const Card = (props) => {
  const [presentCardShow, setPresentCardShow] = useState(false);
  const [selectedcard, setSelectedCard] = useState(0);
  const [presentDetail, setPresentDetail] = useState({});

  const handleShow = () => {
    setSelectedCard(props.id);
    setPresentCardShow(true);
  };
  const handleClose = () => setPresentCardShow(false);

  // prop된 카드정보를 가지고 세부정보를 가져온다.
  const initPresentDetail = async () => {
    // const res = (await PresentService.getDetailPresent(props.id)).data.data;
    const res = await useGetPresentDetail(props.id);
    console.log(">>>>>", res);
    setPresentDetail(res);
  }

  useEffect(() => {
    initPresentDetail();
  }, [])


  return (
    <>
      <TabCard>
        <CardImg
          id={`${props.id}`}
          // src={`/assets/image/${props.thumbnail}.${props.type}`}
          src={props.thumbnail === "default" ? `/assets/image/present/5.png`: props.thumbnail}
          onClick={handleShow}
        />
      </TabCard>
      <CustomModal
        show={presentCardShow}
        onHide={handleClose}
        selectedcard={selectedcard}
        header={presentDetail === undefined ? "없음" : <PresentDetailHeader nickname={presentDetail.nickname}/>}
        body={presentDetail === undefined ? "없음" : <PresentDetailBody body={presentDetail} handleDetail={initPresentDetail} type={props.type}/>}
      />
    </>
  );
};
export default Card;
