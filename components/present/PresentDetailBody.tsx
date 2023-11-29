import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { setGetUserSendPresentsList } from "../../api/hooks/mypagePresents/useGetUserSendPresentsList";
import { setGetMemberById } from "../../api/hooks/useGetMember";
import { Flex, GreenButton } from "../../styles/styledComponentModule";
import { MemberData } from "../../util/type";
import {
  PresentHeader,
  SendPresentsWrapper,
  TextArea,
} from "../sendPresents/SendPresents";
import { RedBtn } from "../share/Share";
import Image from "next/image";
import {processEnv} from "@next/env";

const GotTextArea = styled(TextArea)`
  overflow: auto;
  background-image: url("/asset_ver2/image/presents/present_background.png");
`;

const BlackContents = styled.div`
  color: black;
  margin: 0 auto;
  max-width: 277px;
  overflow: auto;
  word-break: break-all;
`;

const IsAnonymous = styled.div`
  color: gray;
  font-size: smaller;
`;

const Contents = styled.div`
  max-width: 277px;
  width: 100%;
  margin: 0 auto;
  height: 80%;
  overflow: auto;
  word-break: break-all;
  z-index: 100;
`;

const MyGreenBtn = styled(RedBtn)`
  background-color: #3c6c54 !important;
  margin: 0px !important;
  width: 100%;
`;

export default function PresentDetailBody({ body, handleDetail, type }) {
  // console.log(body, "선물디테일바디");
  const [isPublic, setIsPublic] = useState(false);
  const [isReceived, setIsReceived] = useState(false);

  const router = useRouter();
  const btnText = type === "SEND" ? "또 보내러 가기" : "답장 보내기";

  function handleSaveClick(url) {
    const link = document.createElement("a");
    link.href = url;
    link.download = "present";
    link.setAttribute("download", `present.jpg`);
    document.body.appendChild(link);
    link.click();
    link.parentNode.removeChild(link);
  }

  const handleType = (type) => {
    if (type === "SEND") {
      setIsReceived(false);
    } else {
      setIsReceived(true);
    }
  };

  const handleClickSendPresent = () => {
    // TODO
    console.log("보내준사람 초대코드 알아오기");
    // router.push(`process.env["NEXT_PUBLIC_DOMAIN "]/${}`);
  }
  useEffect(() => {
    setIsPublic(body.isPublic);
    handleType(type);
  }, []);

  // 나한테 선물 보낸 사람 정보
  const [senderFoundById, setSenderFoundById] = useState<MemberData>();
  useEffect(() => {
    const getSenderUserById = async () => {
      try {
        const res = await setGetMemberById(body.senderId);
        setSenderFoundById(res.data.data);
      } catch (e) {
        // console.log(e);
      }
    };
    getSenderUserById();
  }, []);

  // 내가 선물 보내준 사람 정보
  const [receiverFoundById, setReceiverFoundById] = useState<MemberData>();
  useEffect(() => {
    const getReceiverUserById = async () => {
      try {
        const res = await setGetUserSendPresentsList();
        setReceiverFoundById(res.data.data);
      } catch (e) {
        // console.log(e);
      }
    };
    getReceiverUserById();
  }, []);

  //TODO: 답장보내기api/present/detail/ 한번 보기
  const handleClickGoCalendarBtn = () => {
    let url = "";
    if (type && type === "SEND") {
      url = `/${body.receiverInvitationLink}`;
    } else if (type && type === "RECEIVED") {
      url = `/${body.senderInvitationLink}`;
    } else {
      url = `/${body.senderInvitationLink}`;
    }
    router.push(url);
  };
// console.log("===body",body);
  return (
    <SendPresentsWrapper>
      <PresentHeader>
        {type === "SEND" ? body.targetNickname : body.nickname} 님에게 <br />
        {type === "SEND" ? "쪽지를 보내보세요" : "받은 쪽지에요"}
      </PresentHeader>
      <GotTextArea>
        <IsAnonymous>
          {body.isAnonymous ? "이 선물은 익명으로 보내졌어요" : ""}
        </IsAnonymous>
        <Contents>
        <BlackContents>{body.contents}</BlackContents>
        </Contents>
      </GotTextArea>
      {body.imageURL.length > 0 ? (
        <div className="Thumbnail_Wrapper">
          <Flex>
            {body.imageURL.map((img: string) => {
              return (
                <div className="imageContainer" key={img}>
                  <img
                    id="present_img"
                    onClick={() => {
                      handleSaveClick(img);
                    }}
                    src={img}
                  />
                </div>
              );
            })}
          </Flex>
        </div>
      ) : (
        <div style={{ height: "50px" }}></div>
      )}
      {body.senderId === 0 || body.isAnonymous ? null : (
        <GreenSendButton onClick={handleClickGoCalendarBtn}>{btnText}</GreenSendButton>
      )}
    </SendPresentsWrapper>
  );
}
const GreenSendButton = styled(GreenButton)`
  width: 100%;
`;
