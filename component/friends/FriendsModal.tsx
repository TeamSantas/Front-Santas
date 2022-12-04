// @ts-nocheck
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

const CenteredModalFooter = styled.div`
  width: 90%;
  margin: auto;
  padding-bottom: 1rem;
`;

const FriendsModal = (props) => {
  const [friendsData, setFriendsData] = useState<any>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getKakaoFriendsData = async () => {
    setIsLoading(true);
    try {
      const res: any = await FriendsService.getKakaoFriends();
      if (res === undefined) {
        alert(
          "현재 카카오에서 친구목록을 불러올수 없습니다. 잠시후에 다시 시도해주세요🎅"
        );
      }
    } catch (e) {
      console.log(e, "[🤬]카카오 친구를 못불러와용");
    }
    setIsLoading(false);
  };

  const getFriendsData = async () => {
    setIsLoading(true);
    try {
      await setGetFriend().then((res) => {
        setFriendsData(res.data.data);
      });
    } catch (e) {}
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
      <CenteredModalFooter>
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
      </CenteredModalFooter>
    </Modal>
  );
};

const ButtonFlex = styled(Flex)`
  width: 100%;
  justify-content: space-between;
`;

const UpdateBtn = styled(Button)`
  background-color: #8d362d;
  border-color: #8d362d;
`;

export default FriendsModal;
