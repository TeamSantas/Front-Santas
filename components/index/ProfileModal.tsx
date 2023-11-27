import { Modal } from "react-bootstrap";
import {
  GreenCloseButton,
  CustomHeader,
  CustomFooter,
  CustomDescriptionBody, Flex,
} from "../../styles/styledComponentModule";
import Image from "next/image";
import {useAuthContext} from "../../store/contexts/components/hooks";
import React, {useCallback, useEffect, useRef, useState} from "react";
import styled from "styled-components";
import {setLoggedMemberInfo} from "../../api/hooks/useGetMember";

const ProfileModal = (props) => {
  // info modal
  const [previewImage, setPreviewImg] = useState<File|string>("");
  const [uploadImg, setUploadImg] = useState<File>();
  const userData = useAuthContext();
  let profileImg = userData?.storeUserData.profileImageURL;
  const userName = userData?.storeUserData.nickname;
  const inputRef = useRef< HTMLInputElement| null>(null);

  useEffect(() => {
    setPreviewImg(profileImg);
  }, [profileImg]);

    const onUploadImage = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
      if (!e.target.files) return;
      const selectedFile = e.target.files?.[0];
      setUploadImg(selectedFile);
      // 선택된 파일이 이미지인지 확인
      if (selectedFile && selectedFile.type.startsWith('image/')) {
        const reader : FileReader = new FileReader();
        // 파일을 읽은 후의 동작 정의
        reader.onload = function (loadEvent) {
          setPreviewImg(loadEvent.target.result as string)
        };
        // 파일을 읽기 시작
        reader.readAsDataURL(selectedFile);
      } else {
        setPreviewImg(ProfileImg);
        alert('이미지 파일을 선택하세요.');
      }
      console.log(e.target.files[0].name);
    }, []);


    const onUploadImageButtonClick = useCallback(() => {
      if (!inputRef.current) return;
      inputRef.current.click();
    }, []);

    //TODO:업로드 기능 손보기. 이미지가 어떤 형식을 가야해
    const updateProfile = async () => {
      if (!uploadImg) {
        console.error('이미지를 선택하세요.');
        return;
      }
      try {
        const formData = new FormData();
        formData.append('imageFile', uploadImg);

        const res = await setLoggedMemberInfo(userName, formData);
        console.log('업로드 성공:', res);

        // 업로드 성공 후에 서버에서 새로운 프로필 이미지 URL을 받아와서 state 업데이트 등의 추가 작업을 수행할 수 있습니다.
        // 예시: setPreviewImg(res.newProfileImageUrl);
      } catch (error) {
        console.error('업로드 실패:', error);
      }
    }

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <CustomHeader>
        <CloseBtn onClick={props.onHide} />
      </CustomHeader>
      <CustomDescriptionBody>
        <ProfileImg
          src={previewImage || "/asset_ver2/image/common/default-profile.png"}
          alt="Profile"
          width={250}
          height={250}
        />
        <DecoImg src={'/asset_ver2/image/layout/header/profile_deco.png'} width={36} height={20} alt={"장식"}/>
        <FileInput type="file" accept="image/*" ref={inputRef} onChange={onUploadImage} />
        <UploadImg src={'/asset_ver2/image/layout/header/profile_mod.png'}
                   width={50}
                   height={50}
                   alt={'수정하기'}
                   onClick={onUploadImageButtonClick}/>
      </CustomDescriptionBody>
      <NameText>{userName}</NameText>
      <Text>주고 받은 편지 : {100}개</Text>
      {/*TODO:만약 내 프로필버튼이면 버튼 보이고 아니면 안보임으로 바꿔두기*/}
      {profileImg === previewImage ? null: <ImgSubmitBtn onClick={updateProfile}>확인</ImgSubmitBtn>}
      <CustomFooter />
    </Modal>
  );
};
export default ProfileModal;

const ProfileImg = styled(Image)`
  margin: 10px;
  width: 35%;
  height: auto;
  border-radius: 50%;
`;

const CloseBtn = styled(GreenCloseButton)`
  margin-top: 1rem;
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
  color: #4D4D4D;
  margin: 0 auto 10px auto;
  font-family: "NanumSquareNeoOTF-Rg", NanumSquareNeoOTF-Rg, sans-serif;
`;
const NameText = styled(Text)`
  margin: 10px auto;
  font-size: 1.5rem;
  font-family: "NanumSquareNeoOTF-Bd", NanumSquareNeoOTF-Bd, sans-serif;
`;

