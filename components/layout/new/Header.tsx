import styled from "styled-components";
import {useAuthContext} from "../../../store/contexts/components/hooks";
import {useEffect, useState} from "react";
import ProfileModal from "../../index/ProfileModal";
import { useAtom } from "jotai";
import { sidebarOpenAtom } from "../../../store/globalState";

const Header = () => {
  const [isImgModalOpen, setIsImgModalOpen] = useState(false);
  const userData = useAuthContext();
  const [, setIsOpen] = useAtom(sidebarOpenAtom);
  let profileImg = userData?.storeUserData.profileImageURL;

  const handleClickSetting = () => {
    setIsOpen(true);
  };
    // setLoggedMemberInfo
  //프로필이미지
  const handleProfileClick = () => setIsImgModalOpen(true);
  const handleCloseModal = () => setIsImgModalOpen(false);
  return (
    <Wrapper>
      <Profile
        src={profileImg || "/asset_ver2/image/common/default-profile.png"}
        onClick={handleProfileClick}
      />
      <SettingImg
        src="/asset_ver2/image/layout/header/setting.svg"
        onClick={handleClickSetting}
      />
        <ProfileModal
            show={isImgModalOpen}
            onHide={handleCloseModal}
        />
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  height: 70px;
  align-items: center;
  justify-content: space-between;
  padding: 20px 22px;
  z-index: 10;
`;

const SettingImg = styled.img`
  width: 48px;
  height: 48px;
  z-index: 10;
`;

const Profile = styled.img`
  width: 50px;
  height: 50px;
  z-index: 10;
  border-radius: 50%;
  overflow: hidden;
  object-fit: cover;
  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
  }
`;
