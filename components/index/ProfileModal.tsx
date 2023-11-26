import { Modal } from "react-bootstrap";
import {
  GreenCloseButton,
  CustomHeader,
  CustomFooter,
  CustomDescriptionBody,
} from "../../styles/styledComponentModule";
import Image from "next/image";
import {useAuthContext} from "../../store/contexts/components/hooks";
import React, {useCallback, useRef} from "react";
import styled from "styled-components";

const ProfileModal = (props) => {
  // info modal
  const userData = useAuthContext();
  let profileImg = userData?.storeUserData.profileImageURL;

    const inputRef = useRef<HTMLInputElement | null>(null);

    const onUploadImage = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
      if (!e.target.files) return;
      console.log(e.target.files[0].name);
    }, []);


    const onUploadImageButtonClick = useCallback(() => {
      if (!inputRef.current) return;
      inputRef.current.click();
    }, []);

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
          src={profileImg || "/asset_ver2/image/common/default-profile.png"}
          alt="Profile"
          width={250}
          height={250}
        />
      </CustomDescriptionBody>
      {/*TODO:만약 내 프로필버튼이면 버튼 보이고 아니면 안보임으로 바꿔두기*/}
      <FileInput type="file" accept="image/*" ref={inputRef} onChange={onUploadImage} />
      <UploadImg src={'/asset_ver2/image/common/default-profile.png'}
                 width={50}
                 height={50}
                 alt={'수정하기'}
                 onClick={onUploadImageButtonClick}/>
      <ImgSubmitBtn>확인</ImgSubmitBtn>
      <CustomFooter />
    </Modal>
  );
};
export default ProfileModal;

const ProfileImg = styled(Image)`
  margin: 10px;
  width: 90%;
  height: auto;
`;

const CloseBtn = styled(GreenCloseButton)`
  margin-top: 1rem;
`;

const UploadImg = styled(Image)`
  position: absolute;
  right: 1rem;
  bottom: 3rem;
`;

const FileInput = styled.input`
  display: none;
`;
const ImgSubmitBtn = styled.label`
  width: 50%;
  height: 30px;
  background: #fff;
  border: 1px solid rgb(77, 77, 77);
  border-radius: 10px;
  font-weight: 500;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  text-align: center;
  &:hover {
    background: rgb(77, 77, 77);
    color: #fff;
  }
`;
