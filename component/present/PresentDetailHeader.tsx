import React from "react";
import styled from "styled-components";

const DateWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 20px;
  color: white;
  /* align-items: center; */
`;
const ReceivedDate = styled.div``;

export default function PresentDetailHeader({ receivedDate, isPublic }) {
  const day = Number(receivedDate.split("-")[2]);
  return (
    <>
      <DateWrapper>
        {/* <ReceivedDate>12월 {day}일 {isPublic ? "🔓" : "🔒"}</ReceivedDate> */}
        <ReceivedDate>12월 {day}일</ReceivedDate>
      </DateWrapper>
    </>
  );
}
