import React, { useEffect, useState } from "react";
import styled from "styled-components";
import PresentService from "../../api/PresentService";
import { RedBtn } from "../share/Share";

const Img = styled.img`
  width: 100%;
`;

const LockIcon = styled.div`

`;

const Contents = styled.div`

`;

const ReceivedDate = styled.div`
    
`;

const ChangePublicRedBtn = styled(RedBtn)`

`;

export default function PresentDetailBody({ body, handleDetail, type }) {
  const [isPublic, setIsPublic] = useState(false);
  const [isReceived, setIsReceived] = useState(false);

  function handleSaveClick(url) {
    const link = document.createElement("a");
    link.href = url;
    link.download = "present";
    link.setAttribute("download", `present.jpg`);
    // console.log(link);
    document.body.appendChild(link);
    link.click();
    link.parentNode.removeChild(link);
  }

  const handlePublic = async (presentId: number) => {
    const res = await PresentService.putPresent_OnOff_Status(
      presentId,
      !isPublic
    );
    setIsPublic(!isPublic);
    // console.log(res);
    handleDetail();
  };

  const handleType = (type) => {
    if (type === "SEND") {
      setIsReceived(false);
    } else {
      setIsReceived(true);
    }
  };

  useEffect(() => {
    setIsPublic(body.isPublic);
    handleType(type);
  }, []);

  // console.log("카드로넘기는데이터", body);
  
  return (
    <>
      {body.imageURL.map((img: string) => {
        return (
          <Img
            key={img}
            onClick={() => {
              handleSaveClick(img);
            }}
            src={img}
          />
        );
      })}
      <Contents>내용 {body.contents}</Contents>
      <ReceivedDate>{body.receivedDate}</ReceivedDate>
      <LockIcon>{isPublic ? "🔒" : "🔓"}</LockIcon>
      {isReceived ? (
        <ChangePublicRedBtn
          onClick={() => {
            handlePublic(body.id);
          }}
        >
          {isPublic ? "비공개로 전환" : "공개로 전환"}
        </ChangePublicRedBtn>
      ) : null}
      <p>{body.isAnonymous ? "이 선물은 익명으로 보내졌어요" : ""}</p>
    </>
  );
}
