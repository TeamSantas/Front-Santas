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

const GotTextArea = styled(TextArea)`
  overflow: auto;
`;

const BlackContents = styled.div`
  color: black;
`;

const IsAnonymous = styled.div`
  color: gray;
  font-size: smaller;
`;

const Contents = styled.div`
  width: 100%;
  height: 80px;
  overflow: scroll;
  word-break: break-all;
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
  const btnText = type === "SEND" ? "또 보내러 가기" : "나도 보내주러 가기";

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

  return (
    <SendPresentsWrapper>
      <PresentHeader>
        {/* TODO : 닉넴 고민 */}
        {type === "SEND" ? body.targetNickname : body.nickname} 님에게 <br />
        {type === "SEND" ? "쪽지를 보내보세요" : "받은 쪽지에요"}
      </PresentHeader>
      <GotTextArea>
        <IsAnonymous>
          {body.isAnonymous ? "이 선물은 익명으로 보내졌어요" : ""}
        </IsAnonymous>
        <BlackContents>{body.contents}</BlackContents>
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
        <GreenButton onClick={handleClickGoCalendarBtn}>{btnText}</GreenButton>
      )}
    </SendPresentsWrapper>
  );
}
