import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import PresentService from '../../api/PresentService';

const Img = styled.img`
  width: 100%;
`;

export default function PresentDetailBody({body, handleDetail}) {
    const [isPublic, setIsPublic] = useState(false);

    const handlePublic = async (presentId:number) => {
        const res = await PresentService.putPresent_OnOff_Status(presentId, !isPublic);
        setIsPublic(!isPublic);
        console.log(res);
        handleDetail();
    }

    useEffect(() => {
        setIsPublic(body.isPublic);
    }, [])


    return (
        <div>
            <p>{`선물 아이디 >>> ${body.id}`}</p>
            {(body.imageURL).map((img:string) => {
               return <Img src={img}/> 
            })}
            <p>내용 {body.contents}</p>
            <p>{body.imageURL.length > 0 ? "이미지 있음" : "이미지 없음"}</p>
            <p>{body.receivedDate}</p>
            <p>{isPublic ? "공개된 선물입니다" : "미공개된 선물입니다"}</p>
            <p>{isPublic.toString() + " <<< 선물공개여부"}</p>
            <button onClick={() => {handlePublic(body.id)}}>선물공개여부변경하기</button>
            <p>{body.isAnonymous ? "이 선물은 익명으로 보내졌어요" : ""}</p>
        </div>
    );
}