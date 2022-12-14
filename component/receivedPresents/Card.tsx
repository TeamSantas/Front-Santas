import { useEffect, useState } from "react";
import styled from "styled-components";
import { setGetPresentDetail } from "../../api/hooks/useGetPresentDetail";
import CustomModal from "../common/CustomModal";
import PresentDetailBody from "../present/PresentDetailBody";
import PresentDetailHeader from "../present/PresentDetailHeader";
import { presentDetail } from "../../util/type";
import { NewBadge } from "../../styles/styledComponentModule";

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
  /* border: ${props => props.isRead ? "none" : "2px solid #ac473d"}; */

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
  const [presentDetail, setPresentDetail] = useState<presentDetail>(null);
  const haveImage = presentDetail?.imageURL.length > 0 ? true : false;

  const handleShow = () => {
    setSelectedCard(props.id);
    setPresentCardShow(true);
  };
  const handleClose = () => setPresentCardShow(false);

  // prop된 카드정보를 가지고 세부정보를 가져온다.
  const initPresentDetail = async () => {
    try {
      const res = await setGetPresentDetail(props.id);
      setPresentDetail(res.data.data);
    } catch (e) {
      // console.log(e);
    }
  };

  useEffect(() => {
    initPresentDetail();
  }, []);

  return (
    <>
      <TabCard>
        {presentDetail && !presentDetail.isRead ? <NewBadge>NEW</NewBadge> : null}
        <CardImg
          id={`${props.id}`}
          src={
            props.thumbnail === "default"
            ? `/assets/image/present/6.png`
            : props.thumbnail
          }
          onClick={handleShow}
          />
      </TabCard>
      <CustomModal
        haveImage={haveImage}
        color={"#ac473d"}
        show={presentCardShow}
        onHide={handleClose}
        selectedcard={selectedcard}
        header={
          presentDetail ? (
            <PresentDetailHeader
            isPublic={presentDetail.isPublic}
            receivedDate={presentDetail.receivedDate}
            />
            ) : (
              "없음"
          )
        }
        body={
          presentDetail ? (
            <PresentDetailBody
              body={presentDetail}
              handleDetail={initPresentDetail}
              type={props.type}
            />
          ) : (
            "없음"
          )
        }
      />
    </>
  );
};
export default Card;
