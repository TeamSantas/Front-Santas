import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import PresentService from '../../api/PresentService';

const Img = styled.img`
  width: 100%;
`;

export default function PresentDetailBody({body, handleDetail, type}) {
    const [isPublic, setIsPublic] = useState(false);
    const [isReceived, setIsReceived] = useState(false);

    function handleSaveClick(url) {
        const link = document.createElement("a");
        link.href = url;
        link.download = "present";
        link.setAttribute(
            'download',
            `present.jpg`,
        );
        console.log(link);
        document.body.appendChild(link);
        link.click();
        link.parentNode.removeChild(link);
    }

    const handlePublic = async (presentId:number) => {
        const res = await PresentService.putPresent_OnOff_Status(presentId, !isPublic);
        setIsPublic(!isPublic);
        console.log(res);
        handleDetail();
    }

    const handleType = (type) => {
        if (type === "SEND") {
            setIsReceived(false);
        } else {
            setIsReceived(true);
        }
    }

    useEffect(() => {
        setIsPublic(body.isPublic);
        handleType(type);
    }, [])

    // console.log("카드로넘기는데이터", body);


    return (
        <>
            {/* <p>{`선물 아이디 >>> ${body.id}`}</p> */}
            {/* <p>{body.imageURL.length > 0 ? "이미지 있음" : "이미지 없음"}</p> */}
            {(body.imageURL).map((img:string) => {
               return <Img onClick={() => {handleSaveClick(img)}} src={img}/> 
            })}
            <p>내용 {body.contents}</p>
            <p>{body.receivedDate}</p>
            <p>{isPublic ? "공개된 선물입니다" : "미공개된 선물입니다"}</p>
            {isReceived ? <button onClick={() => {handlePublic(body.id)}}>선물공개여부변경하기</button> : null}
            <p>{body.isAnonymous ? "이 선물은 익명으로 보내졌어요" : ""}</p>
        </>
    );
}