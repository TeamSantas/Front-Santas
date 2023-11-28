import styled from "styled-components";
import { useAuthContext } from "../../../store/contexts/components/hooks";
import { useEffect, useState } from "react";
import { setLoggedMemberInfo } from "../../../api/hooks/useGetMember";
import Image from "next/image";
import ProfileModal from "../../index/ProfileModal";
import { useAtom } from "jotai";
import { ismycalendarAtom, sidebarOpenAtom } from "../../../store/globalState";
import { setGetCurrCalendarUserInfo } from "../../../api/hooks/useGetCurrCalendarUserInfo";

const Header = () => {
  const [isImgModalOpen, setIsImgModalOpen] = useState(false);
  const userData = useAuthContext();
  const [, setIsOpen] = useAtom(sidebarOpenAtom);
  const [ismycalendar, setIsmycalendar] = useAtom(ismycalendarAtom);
  const [profileImg, setProfileImg] = useState("");
  const [currUserData, setCurrUserData] = useState(null);

  useEffect(() => {
    let myProfileImg = userData?.storeUserData.profileImageURL;
    setProfileImg(myProfileImg);
  }, [userData]);

  const handleInvitationCode = () => {
    if (typeof window !== "undefined") {
      const path = window.location.pathname;
      if (path.length == 37) {
        const tmp = window.location.pathname.split("/");
        return tmp[1].slice(0, 36);
      }
    }
  };

  const getCurrUserImg = async () => {
    const currInvitationLink = handleInvitationCode();
    const res = await setGetCurrCalendarUserInfo(currInvitationLink);
    setProfileImg(res.data.data.profileImgUrl);
    setCurrUserData(res.data.data);
  };
  useEffect(() => {
    if (!ismycalendar) getCurrUserImg();
  }, [ismycalendar]);

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
        profileImg={profileImg}
        currUserData={currUserData}
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
