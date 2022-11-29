import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { setGetMemberById } from "../../api/hooks/useGetMember";
import PresentService from "../../api/PresentService";
import { Flex } from "../../styles/styledComponentModule";
import {
  PresentHeader,
  SendPresentsWrapper,
  TextArea,
} from "../sendPresents/SendPresents";
import { RedBtn } from "../share/Share";

const GotTextArea = styled(TextArea)`
  color: black;
  overflow: auto;
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

const ChangePublicGreenBtn = styled(RedBtn)`
  background-color: #3c6c54;
  margin: 0px;
`;

export default function PresentDetailBody({ body, handleDetail, type }) {
  const [isPublic, setIsPublic] = useState(false);
  const [isReceived, setIsReceived] = useState(false);
  const router = useRouter();
  const btnText = type === "SEND" ? "또 보내러 가기" : "나도 보내주러 가기";

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

  console.log("카드로넘기는데이터", body);

  const [memberFoundById, setMemberFoundById] = useState({});

  useEffect(() => {
    const initReceivedPresentList = async () => {
      const res = await setGetMemberById(body.senderId);
      // console.log("memberFoundById >>> ", res)
      setMemberFoundById(res);
    };
    initReceivedPresentList();
  }, []);

  return (
    <SendPresentsWrapper>
      <PresentHeader>
        {/* TODO : 실제 데이터로 nickname 익명 default 처리 잘 되는지 확인 필요 */}
        {body.nickname} 님께 <br /> {type === "SEND" ? <>보낸</> : <>받은</>}
        선물이에요 🎁
      </PresentHeader>
      <GotTextArea>
        <IsAnonymous>
          {body.isAnonymous
            ? "이 선물은 익명으로 보내졌어요"
            : "이 선물은 익명으로 보내졌어요"}
        </IsAnonymous>
        {body.contents}
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

      <ChangePublicGreenBtn
        onClick={() => {
          router.push(`/${memberFoundById.invitationLink}`);
        }}
      >
        {btnText}
      </ChangePublicGreenBtn>

      {/* TODO : 공개 비공개 로직 논의 필요 */}
      {/* {isReceived ? (
        <ChangePublicRedBtn
          onClick={() => {
            handlePublic(body.id);
          }}
        >
          {isPublic ? "비공개로 전환" : "공개로 전환"}
        </ChangePublicRedBtn>
      ) : null} */}
    </SendPresentsWrapper>
  );
}
