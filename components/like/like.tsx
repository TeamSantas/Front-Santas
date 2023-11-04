import React, { useState } from "react";
import { Modal } from "react-bootstrap"; // 이 부분 수정
import styled from "styled-components";
import CustomModal from "../common/CustomModal";

interface LikeButtonModalProps {
  likedFriendList: string[];
}

const StyledModalContent = styled(Modal.Body)`
  padding: 20px;
  text-align: center;
`;
const Button = styled.div`
  cursor: pointer;
  font-size: 20px;
`;

const LikeButtonModal = ({ likedFriendList }: LikeButtonModalProps) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <Button onClick={toggleModal}>Like</Button>
      <CustomModal
        show={showModal}
        onHide={toggleModal}
        header={"나를 좋아요한 사람 목록"}
        body={
          <ul>
            {likedFriendList.map((friend, index) => (
              <li key={index}>{friend}</li>
            ))}
          </ul>
        }
      />
    </>
  );
};

export default LikeButtonModal;
