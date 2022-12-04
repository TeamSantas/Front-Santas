import styled from "styled-components";
import { useEffect, useRef, useState } from "react";
import {
  Flex,
  GreenButton,
  GreenCloseButton,
} from "../../styles/styledComponentModule";
import Form from "react-bootstrap/Form";
import { FriendsData } from "../../util/type";
import { usePostPresent } from "../../api/hooks/usePostPresent";
import { useRouter } from "next/router";
import { setGetCurrCalendarUserInfo } from "../../api/hooks/useGetCurrCalendarUserInfo";
import { getLoggedMember } from "../../api/hooks/useMember";

export const PresentHeader = styled.div`
  font-size: x-large;
`;

const ImageFormWrapper = styled.div`
  display: flex;
`;

const JustifiedAlignedFlex = styled(Flex)`
  align-items: center;
  justify-content: center !important;
  margin-bottom: 1rem;
`;

export const TextArea = styled.div`
  outline-color: #ac473d;
  text-align: center;
  color: white;
  background-image: url(/assets/image/message-background.svg);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  height: 16rem;
  padding: 4.5rem;
`;

export const SendPresentsWrapper = styled.div`
  text-align: center;
  color: white;
`;

const GreenDeleteButton = styled(GreenCloseButton)`
  background-repeat: no-repeat;
  background-size: contain;
  position: relative;
  z-index: 10;
  margin-top: -100px;
  margin-left: 73px;
  width: 1.5rem;
  cursor: pointer;
`;

const SendPresents = ({ onHide, selectedday }) => {
  const [contents, setContents] = useState<string>("");
  const [isAnonymous, setAnonymous] = useState<boolean | any>(false);
  const [nickname, setNickname] = useState<string>("익명");
  const [memberInfo, setMemberInfo] = useState<any>();
  const [currCalUser, setCurrCalUser] = useState<FriendsData>();
  // ImageUpload -------------
  const [fileList, setFileList] = useState<File[]>([]);
  const [showImages, setShowImages] = useState([]);
  const router = useRouter();

  // Ref ---------------------
  const ref = useRef(null);
  const nicknameRef = useRef(null);

  // 현재 로그인한 유저의 정보
  const getUserData = async () => {
    try {
      const res = await getLoggedMember();
      // console.log("선물보낼사람정보>>>>>>>>>>>>", res);
      setMemberInfo(res);
    } catch (e) {
      console.log(e);
    }
  };

  // 현재 캘린더 주인 유저 정보
  const currInvitationLink = router.asPath.slice(1);

  // console.log("currInvitationLink >>> ", currInvitationLink);
  const getCurrCalUser = async () => {
    try {
      const res = await setGetCurrCalendarUserInfo(currInvitationLink);
      // console.log("캘린더주인정보>>>>>>>>>>>>", res.data.data);
      setCurrCalUser(res.data.data);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getUserData();
    getCurrCalUser();
  }, []);

  const currCalUserName: string = currCalUser
    ? `${currCalUser.nickname}`
    : "친구";
  const currCalUserId: number = currCalUser ? currCalUser.id : 0;

  // -------------------------------------

  // 익명 체크
  const handleCheckAnonymous = () => {
    setAnonymous(!isAnonymous);
    // if (isAnonymous === false) {
    //   if (memberInfo.nickname) {
    //     setNickname(memberInfo.nickname);
    //   } else {
    //     setNickname("익명");
    //   }
    // }
  };

  // 선물 보내기 버튼 handler ----------------
  const handleClickSendPresent = () => {
    const inputNickname = nicknameRef.current?.value;
    // console.log(inputNickname, "닉넴님ㄱ넴");
    setContents(ref.current?.value);
    // console.log(ref.current?.value);

    if (inputNickname !== "undefined") {
      setNickname(inputNickname); // << 익명체크시 닉네임
    } else if (memberInfo.nickname) {
      setNickname(memberInfo.nickname); // << 익명아닐때 닉네임(자동주입)
    }

    HandleImageSubmit();
    onHide();
  };

  // 이미지 상대경로 저장
  const handleAddImages = (e) => {
    const uploadFiles = Array.prototype.slice.call(e.target.files);
    setFileList([...uploadFiles, ...fileList]);

    let imageUrlLists = [...showImages];

    for (let i = 0; i < uploadFiles.length; i++) {
      const currentImageUrl = URL.createObjectURL(uploadFiles[i]);
      imageUrlLists.push(currentImageUrl);
    }

    if (imageUrlLists.length > 10) {
      imageUrlLists = imageUrlLists.slice(0, 10);
    }

    setShowImages(imageUrlLists);
  };

  // 클릭 시 이미지 삭제
  const handleDeleteImage = (id) => {
    setShowImages(showImages.filter((_, index) => index !== id));
  };

  const HandleImageSubmit = () => {
    let sendNick = nicknameRef.current?.value;
    if (!isAnonymous) {
      sendNick = memberInfo.nickname;
    } else {
      if (sendNick === "undefined") {
        sendNick = "익명";
      }
    }

    const presentData = new FormData();

    // @ts-ignore
    presentData.append("receiverId", currCalUserId); // TODO : 받은 사람 ID로 가져오기
    presentData.append("nickname", sendNick);
    presentData.append("title", "Test title"); // title 사용하지 않기로 했습니다
    presentData.append("contents", ref.current?.value);
    presentData.append(
      "receivedDate",
      `2022-12-${selectedday.toString().padStart(2, "0")}`
    );
    presentData.append("isAnonymous", isAnonymous);

    if (fileList.length > 0) {
      fileList.forEach((file) => {
        presentData.append("multipartFileList", file);
      });
    }

    console.log(
      "파일들...",
      currCalUserId,
      memberInfo.nickname,
      contents,
      `2022-12-${selectedday.toString().padStart(2, "0")}`,
      isAnonymous,
      fileList
    );

    try {
      usePostPresent(presentData);
      alert("선물 보내기 성공! 🎁");
    } catch (e) {
      console.log(e);
      alert("선물 보내기에 실패했어요. 🥺");
    }
  };

  return (
    <SendPresentsWrapper>
      <PresentHeader>
        {currCalUserName} 님에게
        <br /> 쪽지를 보내보세요
      </PresentHeader>

      <TextArea>
        <textarea
          className="textarea"
          ref={ref}
          id="message"
          name="message"
          placeholder="여기에 쪽지를 적어주세요."
        />
      </TextArea>

      <JustifiedAlignedFlex>
        {isAnonymous ? (
          <input
            className="inputNickname"
            type="text"
            placeholder="닉네임 입력"
            ref={nicknameRef}
          />
        ) : (
          <div className="inputNickname" />
        )}
        <Form.Check
          type="checkbox"
          id={`default-checkbox`}
          label={`익명`}
          onClick={handleCheckAnonymous}
        />
      </JustifiedAlignedFlex>
      <div className="Thumbnail_Wrapper">
        <label id="present_img" htmlFor="file" onChange={handleAddImages}>
          <div className="addButton"></div>
          <input id="file" type="file" multiple />
        </label>
        <Flex>
          {showImages.map((image, id) => (
            <div className="imageContainer" key={id}>
              <img id="present_img" src={image} alt={`${image}-${id}`} />
              <GreenDeleteButton onClick={() => handleDeleteImage(id)} />
            </div>
          ))}
        </Flex>
      </div>
      <GreenButton onClick={handleClickSendPresent}>쪽지보내기</GreenButton>
    </SendPresentsWrapper>
  );
};

export default SendPresents;
