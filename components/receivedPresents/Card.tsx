import { useState } from "react";
import styled from "styled-components";
import { setGetPresentDetail } from "../../api/hooks/useGetPresentDetail";
import CustomModal from "../common/CustomModal";
import PresentDetailBody from "../present/PresentDetailBody";
import PresentDetailHeader from "../present/PresentDetailHeader";
import { presentDetail } from "../../util/type";
import { Flex } from "../../styles/styledComponentModule";
import { NewBadge } from "../../styles/styledComponentModule";

const TabCard = styled.div`
  background: white;
  border-radius: 20px;
  border: 1.5px #e6e6e6 solid;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const ImgWrapper = styled.div`
  width: 100%;
  padding: 10px;
`;

const CardImg = styled.img`
  width: 100%;
  height: 150px;
  overflow: hidden;
  object-fit: cover;
  display: block;
  margin: auto;
  border-radius: 20px;
`;

const Text = styled.div`
  color: white;
  font-size: 12px;
  padding: 10px;
  width: 100%;
  background-color: #1c3249;
  border-radius: 0 0 20px 20px;
  text-align: left;
  span {
    color: #ffe8e3;
  }
`;

const Content = styled.div`
  color: #e6e6e6;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

const CardFlex = styled(Flex)`
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Card = (props) => {
  const [presentCardShow, setPresentCardShow] = useState(false);
  const [selectedcard, setSelectedCard] = useState(0);
  const [presentDetail, setPresentDetail] = useState<presentDetail>(null);
  const [readStatus, setReadStatus] = useState(props.isRead);
  const haveImage = presentDetail?.imageURL.length > 0 ? true : false;

  const handleShow = () => {
    initPresentDetail();
    setReadStatus(true);
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
      console.log(e);
    }
  };

  return (
    <>
      <TabCard>
        {!readStatus ? <NewBadge>NEW</NewBadge> : null}
        <CardFlex>
          <ImgWrapper>
            <CardImg
              id={`${props.id}`}
              src={
                props.thumbnail === "default"
                  ? `/asset_ver2/image/presents/present_background_sm.png`
                  : props.thumbnail
              }
              onClick={handleShow}
            />
          </ImgWrapper>

          {props.type === "RECEIVED" ? (
            <Text onClick={handleShow}>
              <Flex>
                {props.from == "" ? "익명" : `${props.from}`}
                <span>
                  {props.date &&
                    `${props.date.slice(5, 7)}/${props.date.slice(8, 10)}`}
                </span>
              </Flex>
              <Content>{props.contents}</Content>
            </Text>
          ) : props.type === "SEND" ? (
            <Text onClick={handleShow}>
              <Flex>
                {props.to == "" ? "익명" : `to.${props.to}`}
                <span>
                  {props.date &&
                    `${props.date.slice(5, 7)}/${props.date.slice(8, 10)}`}
                </span>
              </Flex>
              {props.from == "" ? "익명" : `from.${props.from}`}
              <br />
              <Content>{props.contents}</Content>
            </Text>
          ) : (
            <Text onClick={handleShow}>
              <Flex>
                {props.from == "" ? "익명" : `${props.from}`}
                <span>
                  {props.date &&
                    `${props.date.slice(5, 7)}/${props.date.slice(8, 10)}`}
                </span>
              </Flex>
              {props.contents && props.contents.length > 5
                ? `${props.contents.slice(0, 5)}..`
                : props.contents && props.contents.slice(0, 5)}
            </Text>
          )}
        </CardFlex>
      </TabCard>
      <CustomModal
        haveImage={haveImage}
        color={"#1E344F"}
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
