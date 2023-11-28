import styled from "styled-components";
import { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import {
  CustomBody,
  CustomHeader,
  Flex,
  GreenCloseButton,
  ModalTitle,
  ModalSubTitle,
} from "../../styles/styledComponentModule";
import FriendsList from "./FriendsList";
import { setGetFriend } from "../../api/hooks/useGetFriend";
import AdFitModal from "../advertisement/adFitModal";
import { friendsModalAdID } from "../advertisement/ad-ids";

const CenteredModalFooter = styled.div`
  width: 90%;
  margin: auto;
  padding-top: 20px;
`;

const FriendsModal = (props) => {
  const [friendsData, setFriendsData] = useState<any>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

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
    <AdFitModal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      adFitId={friendsModalAdID}
    >
      <CustomHeader>
        <Modal.Title id="contained-modal-title-vcenter">
          <ModalTitle>
            친구 목록
            <br />
            <ModalSubTitle>서비스에 가입한 친구 목록이에요.</ModalSubTitle>
          </ModalTitle>
          <GreenCloseButton onClick={props.onHide} />
        </Modal.Title>
      </CustomHeader>
      <CustomBody>
        <FriendsList friendsData={friendsData} isLoading={isLoading} />
      </CustomBody>
      <CenteredModalFooter>
        <ButtonFlex>
          <UpdateBtn
            onClick={() => {
              getFriendsData();
              alert(
                "친구목록은 10분에 한번 갱신됩니다. 10분 뒤 다시 시도해주세요🎁"
              );
            }}
          >
            친구 목록 새로고침 <img src={"/assets/image/icons/loading.svg"} />
          </UpdateBtn>
        </ButtonFlex>
      </CenteredModalFooter>
    </AdFitModal>
  );
};

const ButtonFlex = styled(Flex)`
  width: 100%;
  justify-content: center;
`;

const UpdateBtn = styled(Button)`
  background-color: #2c6b51;
  border-color: #2c6b51;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 13px;
  &:hover {
    background-color: #3c6c54;
    border-color: #3c6c54;
  }
`;

export default FriendsModal;
