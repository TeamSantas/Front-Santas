import styled from "styled-components";
import { useEffect, useState } from "react";
import ProfileModal from "../../index/ProfileModal";
import { useAtom } from "jotai";
import {
  isMyCalendarAtom,
  loginUserDataAtom,
  profileUserDataAtom,
  sidebarOpenAtom,
} from "../../../store/globalState";

const Header = () => {
  const [isImgModalOpen, setIsImgModalOpen] = useState(false);
  const [storeUserData] = useAtom(loginUserDataAtom);
  const [profileUserData] = useAtom(profileUserDataAtom);
  const [, setIsOpen] = useAtom(sidebarOpenAtom);
  const [isMyCalendar] = useAtom(isMyCalendarAtom);
  const [profileImg, setProfileImg] = useState("");

  useEffect(() => {
    if (isMyCalendar) {
      setProfileImg(storeUserData.profileImageURL);
      return;
    }
    setProfileImg(profileUserData.profileImageURL);
  }, [
    profileUserData.profileImageURL,
    isMyCalendar,
    storeUserData.profileImageURL,
  ]);

  const handleClickSetting = () => {
    setIsOpen(true);
  };

  //프로필이미지
  const handleProfileClick = () => setIsImgModalOpen(true);
  const handleCloseModal = () => setIsImgModalOpen(false);
  return (
    <Wrapper>
      <Profile
        src={profileImg || "/asset_ver2/image/common/default-profile.png"}
        onClick={handleProfileClick}
        alt="Profile"
      />
      <SettingImg
        src="/asset_ver2/image/layout/header/setting.svg"
        onClick={handleClickSetting}
      />
      <ProfileModal
        show={isImgModalOpen}
        onHide={handleCloseModal}
        profileImg={profileImg}
        currUserData={isMyCalendar ? storeUserData : profileUserData}
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
  cursor: pointer;
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
