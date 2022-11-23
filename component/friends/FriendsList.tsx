import { useState } from "react";
import styled from "styled-components";
import { Icons } from "../../styles/styledComponentModule";
import CustomModal from "../CustomModal";
import FriendCard from "./FriendCard";

const Friends = styled(Icons)`
  background-image: url("/assets/image/icons/Users.png") !important;
`;
const FriendsList = () => {
  const [friendModalShow, setFriendModalShow] = useState(false);
  const clickFriendIconHandler = () => {
    setFriendModalShow(true);
  };
  const handleClose = () => setFriendModalShow(false);

  return (
    <div>
      <Friends onClick={clickFriendIconHandler} />
      <CustomModal
        // TODO : 공유 버튼 핸들러 구현 후 추가

        // configs -------------
        show={friendModalShow}
        onHide={handleClose}
        name={"shareModalImg"}
        // body ----------------
        img={`/assets/image/shareModalImg.svg`}
        background_img={`/assets/image/shareModalImg.svg`}
        text={"쪽지를 받고 싶은 친구에게 캘린더를 공유해 봐요!"}
        component={"FriendCard"}
      />

    </div>
  );
};

export default FriendsList;
