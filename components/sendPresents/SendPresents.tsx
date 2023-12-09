import styled from "styled-components";
import { useRef, useState } from "react";
import {
  Flex,
  GreenButton,
  GreenCloseButton,
} from "../../styles/styledComponentModule";
import Form from "react-bootstrap/Form";
import { usePostPresent } from "../../api/hooks/usePostPresent";
import Image from "next/image";
import { updateUserData } from "../../store/contexts/components/auth-provider";
import { useAtom } from "jotai";
import {
  loginUserDataAtom,
  todayPresentCountAtom,
  sidebarBgmAtom,
  sidebarNotificationAtom,
  profileUserDataAtom,
} from "../../store/globalState";

const SendPresents = ({ onHide, selectedday }) => {
  const [isAnonymous, setAnonymous] = useState(false);
  const [profileUser] = useAtom(profileUserDataAtom);
  const [isLoading, setIsLoading] = useState(false);
  const [fileList, setFileList] = useState<File[]>([]);
  const [storeUserData, setStoreUserData] = useAtom(loginUserDataAtom);
  const [, setTodayPresentCount] = useAtom(todayPresentCountAtom);
  const [, setBgmOn] = useAtom(sidebarBgmAtom);
  const [, setNotificationOn] = useAtom(sidebarNotificationAtom);
  const [showImages, setShowImages] = useState([]);

  const ref = useRef(null);
  const nicknameRef = useRef(null);

  const currCalUserName: string = profileUser
    ? `${profileUser.nickname}`
    : "친구";
  const currCalUserId: number = profileUser ? profileUser.id : 0;

  // 익명 체크
  const handleCheckAnonymous = () => setAnonymous((prev) => !prev);

  // 이미지 상대경로 저장
  const handleAddImages = (e) => {
    const uploadFiles = Array.prototype.slice.call(e.target.files);

    // 파일 첨부 최대 5장 제한
    if ([...uploadFiles, ...fileList].length > 5) {
      alert("사진은 최대 5장 첨부 가능합니다.");
      return;
    }

    setFileList([...fileList, ...uploadFiles]);

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

  // 이미지 삭제
  const handleDeleteImage = (id) => {
    setShowImages((prev) => prev.filter((_, index) => index !== id));
    setFileList((prevFileList) =>
      prevFileList.filter((_, index) => index !== id)
    );
  };

  const checkValidation = () => {
    if (ref.current?.value === "") {
      alert("쪽지를 작성해 주세요.");
      return false;
    }

    return true;
  };

  const HandleImageSubmit = async () => {
    setIsLoading(true);
    let sendNick = nicknameRef.current?.value;
    if (!isAnonymous) {
      if (storeUserData?.nickname) {
        sendNick = storeUserData.nickname;
      } else {
        sendNick = "익명의 산타";
      }
    } else {
      if (!sendNick) {
        sendNick = "익명의 산타";
      }
    }

    const presentData = new FormData();

    // @ts-ignore
    presentData.append("receiverId", currCalUserId);
    presentData.append("nickname", sendNick);
    presentData.append("title", "Test title"); // title 사용하지 않기로 했습니다
    presentData.append("contents", ref.current?.value);
    presentData.append(
      "receivedDate",
      `2023-12-${selectedday.toString().padStart(2, "0")}`
    );
    presentData.append("isAnonymous", isAnonymous.toString());

    if (fileList.length > 0) {
      // HEIC 파일이라면 변환
      const heicFiles = fileList.filter((file) =>
        file.name.toLowerCase().endsWith("heic")
      );
      if (heicFiles.length > 0)
        alert("[✨오픈예정] 현재는 heic형식 파일첨부가 불가합니다.");

      const myFileList = fileList.filter(
        (file) => !file.name.toLowerCase().endsWith("heic")
      );
      myFileList.forEach((file) => {
        presentData.append("multipartFileList", file);
      });
    }

    try {
      const res = await usePostPresent(presentData);
      //TODO: 푸시알림
      // PushService.postPushAlarm(currCalUserId, `누군가 ${currCalUserName}님에게 선물을 보냈어요! \n누가 보냈을까요? 두어캘에서 확인해보세요!`);
      if (res.status === 200) {
        setIsLoading(false);
        alert("선물 보내기 성공! 🎁");
        updateUserData(
          setStoreUserData,
          setTodayPresentCount,
          setBgmOn,
          setNotificationOn
        );
        onHide();
      }
    } catch (e) {
      console.log(e);
      setIsLoading(false);
      alert("선물 보내기에 실패했어요. 잠시 후 다시 시도해 주세요.🥺");
    }
  };
  const placeholder = `여기에 쪽지를 적어주세요. 
(최대 100자)`;
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
          placeholder={placeholder}
          maxLength={100}
        />
      </TextArea>

      <div className="Thumbnail_Wrapper">
        {showImages.length === 0 ? (
          <label
            className="submitImg"
            htmlFor="file"
            onChange={handleAddImages}
          >
            <div className="addButton">
              <input
                id="file"
                type="file"
                accept="image/png, image/jpeg, image/jpg, image/heic"
                multiple
              />
            </div>
          </label>
        ) : (
          <ThumbnailContainer>
            <label id="present_img" htmlFor="file" onChange={handleAddImages}>
              <input
                id="file"
                type="file"
                accept="image/png, image/jpeg, image/jpg, image/heic"
                multiple
              />
            </label>
          </ThumbnailContainer>
        )}

        <Flex>
          {showImages.map((image, id) => (
            <div className="imageContainer" key={id}>
              <img id="present_img" src={image} alt={`${image}-${id}`} />
              <GreenDeleteButton onClick={() => handleDeleteImage(id)} />
            </div>
          ))}
        </Flex>
      </div>
      <SubmitFlex>
        <JustifiedAlignedFlex>
          <Form.Check
            type="checkbox"
            id={`default-checkbox`}
            label={`익명`}
            onClick={handleCheckAnonymous}
            checked={isAnonymous}
          />
          {isAnonymous ? (
            <input
              className="inputNickname"
              type="text"
              placeholder="닉네임(최대 20자)"
              ref={nicknameRef}
              maxLength={20}
            />
          ) : (
            <div className="inputNickname" />
          )}
        </JustifiedAlignedFlex>
        <GreenButton
          onClick={() => {
            if (checkValidation()) {
              HandleImageSubmit();
            }
          }}
        >
          쪽지보내기
          <Image
            src={`/asset_ver2/image/send.png`}
            alt={"쪽지보내기"}
            width={13}
            height={13}
          />
        </GreenButton>
      </SubmitFlex>
      {isLoading ? (
        <LoadingScreenBack>
          <LoadingContainer>
            <img src="/assets/image/character/spinner.gif" alt="로딩하얀코" />
            <p>선물을 보내는 중입니다...</p>
          </LoadingContainer>
        </LoadingScreenBack>
      ) : null}
    </SendPresentsWrapper>
  );
};

export default SendPresents;

const SubmitFlex = styled(Flex)`
  justify-content: space-between;
`;
const ThumbnailContainer = styled.div`
  width: 80px;
`;
export const PresentHeader = styled.div`
  font-size: large;
  font-family: "NanumSquareNeoOTF-Bd", NanumSquareNeoOTF-Bb, sans-serif;
`;
const JustifiedAlignedFlex = styled(Flex)`
  align-items: center;
  @media (max-width: 300px) {
    font-size: 12px;
  }
`;

export const TextArea = styled.div`
  outline-color: #3d4cac;
  font-family: "NanumSquareNeoOTF-Bd", KCC-Ganpan, sans-serif;
  text-align: center;
  color: white;
  background-image: url("/asset_ver2/image/presents/present_background.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  margin-top: 1rem;
  height: 17rem;
  padding: 1rem 4rem;
  @media (min-width: 768px) {
    //태블릿 대응
    padding: 1rem 6rem;
  }
  @media (max-width: 300px) {
    //갤폴드 대응
    padding: 3rem 1rem;
  }
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
  margin-top: -90px;
  margin-left: 67px;
  width: 1.5rem;
  cursor: pointer;
`;

const LoadingScreenBack = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: #1e344f;
  z-index: 10;
`;

const LoadingContainer = styled.div`
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
