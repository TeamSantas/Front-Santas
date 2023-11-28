import React from "react";
import styled from "styled-components";

const DateWrapper = styled.div`
  display: flex;
  width: 100%;
  gap: 200px;
  color: white;
  font-size: 14px;
`;
const ReceivedDate = styled.div``;
const GreenCloseButton = styled.div`
  position: relative;
  right: 20px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  width: 1.8rem;
  background-image: url("/asset_ver2/image/btn/green_closeBtn.png");
`;
export default function PresentDetailHeader({ receivedDate, isPublic }) {
  const day = Number(receivedDate.split("-")[2]);
  return (
    <>
      <DateWrapper>
        {/* <ReceivedDate>12월 {day}일 {isPublic ? "🔓" : "🔒"}</ReceivedDate> */}
        <ReceivedDate>12월 {day}일</ReceivedDate>
        {/*TODO: 닫기버튼*/}
        {/*<GreenCloseButton*/}
        {/*  // onClick={props.onHide}*/}
        {/*  // ismycalendar={props.ismycalendar}*/}
        {/*/>*/}
      </DateWrapper>
    </>
  );
}
