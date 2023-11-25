import styled from "styled-components";
import {useAuthContext} from "../../../store/contexts/components/hooks";
import {useEffect, useState} from "react";
import {setLoggedMemberInfo} from "../../../api/hooks/useGetMember";
import Image from "next/image";
import ProfileModal from "../../index/ProfileModal";

const Header = () => {
  const [isImgModalOpen, setIsImgModalOpen] = useState(false);
  const userData = useAuthContext();
  let profileImg = null;
    profileImg = userData?.storeUserData.profileImageURL;

  //사이드바(설정창)
  const handleClickMenu = () => {
    console.log("사이드바 click setting");
  };
    // setLoggedMemberInfo
  //프로필이미지
  const handleProfileClick = () => setIsImgModalOpen(true);
  const handleCloseModal = () => setIsImgModalOpen(false);
  console.log("-----profile", profileImg);
  return (
    <Wrapper>
      <Profile
        src={profileImg || "/asset_ver2/image/common/default-profile.png"}
        onClick={handleProfileClick}
      />
      <SettingImg
        src="/asset_ver2/image/layout/header/setting.svg"
        onClick={handleClickMenu}
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
  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
  }
`;
