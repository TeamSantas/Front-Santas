import { useEffect, useState } from "react";
import styled from "styled-components";
import { setGetPresentDetail } from "../../api/hooks/useGetPresentDetail";
import CustomModal from "../common/CustomModal";
import PresentDetailBody from "../present/PresentDetailBody";
import PresentDetailHeader from "../present/PresentDetailHeader";
import { presentDetail } from "../../util/type";
import { Flex } from "../../styles/styledComponentModule";

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
  padding: 5px;
  
  /* border: props.isRead ? "none" : "2px solid #ac473d" ; */

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
  height: 74%;
  position: absolute;
  top: 5px;
  right: 0;
  //bottom: 0;
  left: 0;
  margin: auto;
  overflow: hidden;
  object-fit: cover;
  &::after {
    padding-bottom: 100%;
  }
`;
const Text = styled.p`
  color: white;
  position: absolute;
  bottom: 0;
  font-size: 25px;
  padding: 5px 10px;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 0 0 10px 10px;
  width: 90%;
  line-height: 120%;
  text-align: left;
  span {
    font-size: 17px;
    color: #ffe8e3;
  }

  @media (max-width: 1000px) {
    font-size: 17px;
    padding-left: 5px;
    span {
      font-size: 12px
    }
  }
  @media (max-width: 600px) {
    font-size: 15px;
    padding-left: 5px;
  }
`
const CardFlex = styled(Flex)`
  margin: 0 auto;
  justify-content: center;
  align-items: center;
`
const Card = (props) => {
  // console.log("CARD DETAIL", props);
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
            <CardFlex>
                <CardImg
                  id={`${props.id}`}
                  src={
                    props.thumbnail === "default"
                      ? `/assets/image/present/6.png`
                      : props.thumbnail
                  }
                  onClick={handleShow}
                />

                {props.type === "RECEIVED" ?
                    <Text><Flex>{props.from == "" ? "익명" : `${props.from}`}
                    <span>{props.date && `${props.date.slice(5,7)}/${props.date.slice(8,10)}`}</span></Flex>
                    {props.contents && props.contents.length>10 ? `${props.contents.slice(0,10)}..`
                        : props.contents && props.contents.slice(0,10)}</Text>
                 :
                 props.type === "SEND" ?
                         <Text><Flex>{props.to == "" ? "익명" : `to.${props.to}`}
                                <span>{props.date && `${props.date.slice(5, 7)}/${props.date.slice(8, 10)}`}</span></Flex>
                                {props.from == "" ? "익명" : `from.${props.from}`}<br/>
                                {props.contents && props.contents.length > 5 ? `${props.contents.slice(0, 5)}..`
                                    : props.contents && props.contents.slice(0, 5)}</Text>

                            :   <Text><Flex>{props.from == "" ? "익명" : `${props.from}`}
                                    <span>{props.date && `${props.date.slice(5, 7)}/${props.date.slice(8, 10)}`}</span></Flex>
                                {props.contents && props.contents.length > 5 ? `${props.contents.slice(0, 5)}..`
                                :  props.contents && props.contents.slice(0, 5)}</Text>
                }

            </CardFlex>
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
