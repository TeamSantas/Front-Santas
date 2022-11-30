import styled from "styled-components";
import { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import {
  CustomBody,
  CustomFooter,
  CustomHeader,
  Flex,
  GreenCloseButton,
} from "../../styles/styledComponentModule";
import FriendsList from "./FriendsList";
import { setGetFriend } from "../../api/hooks/useGetFriend";
import FriendsService from "../../api/FriendsService";

const FriendsModal = (props) => {
  const [friendsData, setFriendsData] = useState<any>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getKakaoFriendsData = async () => {
    setIsLoading(true);
    const res:any = await FriendsService.getKakaoFriends();
    if (res.status !== 200) {
      // console.log("어라랍스타? 🦞", res);
      alert(res.response.data.message);
    }
    setIsLoading(false);
  };

  const getFriendsData = async () => {
    setIsLoading(true);
    const res = await setGetFriend();
    // console.log(res);
    setFriendsData(res);
    setIsLoading(false);
  };

  useEffect(() => {
    getFriendsData();
  }, []);

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <CustomHeader>
        <Modal.Title id="contained-modal-title-vcenter">친구 목록</Modal.Title>
        <GreenCloseButton onClick={props.onHide} />
      </CustomHeader>
      <CustomBody>
        <FriendsList friendsData={friendsData} isLoading={isLoading} />
      </CustomBody>
      <CustomFooter>
        <ButtonFlex>
          <UpdateBtn
            onClick={() => {
              getFriendsData();
            }}
          >
            친구목록 새로고침
          </UpdateBtn>
          <UpdateBtn
            onClick={() => {
              getKakaoFriendsData();
            }}
          >
            친구목록 업데이트
          </UpdateBtn>
        </ButtonFlex>
      </CustomFooter>
    </Modal>
  );
};

const ButtonFlex = styled(Flex)`
  width: 100%;
  justify-content: start;
  @media (max-width: 600px) {
    width: 90%;
  }
`;

const UpdateBtn = styled(Button)`
  background-color: #8d362d;
  border-color: #8d362d;
`;

export default FriendsModal;
