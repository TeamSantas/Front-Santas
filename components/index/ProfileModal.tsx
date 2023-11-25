import { Modal } from "react-bootstrap";
import {
  GreenCloseButton,
  CustomHeader,
  CustomFooter,
  CustomDescriptionBody,
} from "../../styles/styledComponentModule";
import Image from "next/image";
import {useAuthContext} from "../../store/contexts/components/hooks";
import {useEffect} from "react";
import styled from "styled-components";

const ProfileModal = (props) => {
  // info modal
  const userData = useAuthContext();
  let profileImg = null;
  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    profileImg = userData?.storeUserData.profileImageURL;
  }, []);

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <CustomHeader>
        <GreenCloseButton onClick={props.onHide} />
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
      <button>수정하기</button>
      <CustomFooter />
    </Modal>
  );
};
export default ProfileModal;

const ProfileImg = styled(Image)`
  margin: 10px;
  height: auto;
  @media (min-width: 800px){
    width: 400px;
    height: auto;
  }
  //갤폴드 대응
  @media (max-width: 280px){
    width: 190px;
    height: auto;
  }
`;