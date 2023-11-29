import { Modal } from "react-bootstrap";
import {
  GreenCloseButton,
  CustomHeader,
  CustomFooter,
  CustomDescriptionBody,
  Flex,
} from "../../styles/styledComponentModule";
import Image from "next/image";
import React, { useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { setLoggedMemberInfo } from "../../api/hooks/useGetMember";
import AdFitModal from "../advertisement/adFitModal";
import { profileModalAdID } from "../advertisement/ad-ids";
import { useAtom } from "jotai";
import {isMyCalendarAtom, loginUserDataAtom} from "../../store/globalState";
import { MemberData } from "../../util/type";
import {setGetExchangedPresentCount} from "../../api/hooks/mypagePresents/useGetUserReceivedPresentsList";
import Head from 'next/head';

interface IProfileModal {
  show;
  onHide;
  profileImg;
  currUserData: MemberData;
}

const ProfileModal = ({
  show,
  onHide,
  profileImg,
  currUserData,
}: IProfileModal) => {
  // info modal
  const [previewImage, setPreviewImg] = useState<File | string>("");
  const [uploadImg, setUploadImg] = useState<File>();
  const [myPresentCnt, setMyPresentCnt] = useState<number>(0);
  const [isMyCalendar] = useAtom(isMyCalendarAtom);
  const [storeUserData, setStoreUserData] = useAtom(loginUserDataAtom);
  const userName = currUserData.nickname;
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    const getMyPresentCnt = async () => {
      const presentCount = await setGetExchangedPresentCount();
      setMyPresentCnt(presentCount.data.data.exchangedPresentCount);
    }
    getMyPresentCnt();
    setPreviewImg(storeUserData.profileImageURL);
  }, []);

  useEffect(() => {
    setPreviewImg(profileImg);
  }, [profileImg, onHide]);

  const onUploadImage = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (!e.target.files) return;
      const selectedFile = e.target.files[0];
      setUploadImg(selectedFile);
      // 선택된 파일이 이미지인지 확인
      if (selectedFile && selectedFile.type.startsWith("image/")) {
        const reader: FileReader = new FileReader();
        // 파일을 읽은 후의 동작 정의
        reader.onload = function (loadEvent) {
          const binaryData = loadEvent.target.result; // 바이너리 데이터
          setPreviewImg(binaryData as string);
        };
        // 파일을 읽기 시작
        reader.readAsDataURL(selectedFile);
      } else {
        setPreviewImg(profileImg);
        alert("이미지 파일을 선택하세요.");
      }
      console.log(e.target.files[0].name);
    },
    [profileImg]
  );

  const onUploadImageButtonClick = useCallback(() => {
    if (!inputRef.current) return;
    inputRef.current.click();
  }, []);

  const updateProfile = async () => {
    if (!uploadImg) {
      console.error("이미지를 선택하세요.");
      return;
    }
    try {
      const formData = new FormData();
      formData.append("nickname", userName);
      formData.append("statusMessage", "none");
      formData.append("profileImage", uploadImg);

      const res = await setLoggedMemberInfo(formData);
      console.log("업로드 성공:", res.data.status);
      
      //header의 메인페이지 프로필 img도 변경 동기화
      let newUserData : MemberData = storeUserData;
      newUserData.profileImageURL = res.data.data.profileImageURL;
      setStoreUserData(newUserData);
      alert("프로필 이미지가 변경되었습니다.")
    } catch (error) {
      console.error("업로드 실패:", error);
    }
  };

  return (
        <AdFitModal
          show={show}
          onHide={onHide}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          adFitId={profileModalAdID}
        >
          <CustomHeader>
            <GreenCloseButton onClick={onHide} />
          </CustomHeader>
          <CustomDescriptionBody>
            <ProfileImg
              src={previewImage || "/asset_ver2/image/common/default-profile.png"}
              alt="Profile"
              width={250}
              height={250}
            />
            <DecoImg
              src={"/asset_ver2/image/layout/header/profile_deco.png"}
              width={36}
              height={20}
              alt={"장식"}
            />
            {isMyCalendar ? (
              <>
                <FileInput
                  type="file"
                  accept="image/*"
                  ref={inputRef}
                  onChange={onUploadImage}
                />
                <UploadImg
                  src={"/asset_ver2/image/layout/header/profile_mod.png"}
                  width={50}
                  height={50}
                  alt={"수정하기"}
                  onClick={onUploadImageButtonClick}
                />
              </>
            ) : null}
          </CustomDescriptionBody>
          {isMyCalendar ? (
            <>
              <NameText>{userName}</NameText>
              <Text>주고 받은 편지 : {myPresentCnt}개</Text>
            </>
          ) : (
            <NameText>{currUserData?.nickname}</NameText>
          )}
          {profileImg === previewImage ? null : (
            <ImgSubmitBtn onClick={updateProfile}>확인</ImgSubmitBtn>
          )}
          <CustomFooter />
        </AdFitModal>
  );
};
export default ProfileModal;

const ProfileImg = styled(Image)`
  margin: 10px;
  width: 10rem;
  height: 10rem;
  object-fit: cover;
  border-radius: 50%;
`;

const DecoImg = styled(Image)`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 4rem;
  height: auto;
  top: 0;
`;
const UploadImg = styled(Image)`
  position: absolute;
  right: 32%;
  bottom: 0.5rem;
  width: 10%;
  height: auto;
`;

const FileInput = styled.input`
  display: none;
`;
const ImgSubmitBtn = styled.label`
  width: 50%;
  height: 30px;
  color: #fff;
  background: rgb(77, 77, 77);
  border: 1px solid rgb(77, 77, 77);
  border-radius: 10px;
  font-weight: 500;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  text-align: center;
  &:hover {
    color: rgb(77, 77, 77);
    background: #fff;
  }
`;
const Text = styled.p`
  color: #4d4d4d;
  margin: 0 auto 10px auto;
  font-family: "NanumSquareNeoOTF-Rg", NanumSquareNeoOTF-Rg, sans-serif;
`;
const NameText = styled(Text)`
  margin: 10px auto;
  font-size: 1.5rem;
  font-family: "NanumSquareNeoOTF-Bd", NanumSquareNeoOTF-Bd, sans-serif;
`;
