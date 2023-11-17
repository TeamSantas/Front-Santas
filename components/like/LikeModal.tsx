// @ts-nocheck
import styled from "styled-components";
import { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import {
  CustomBody,
  CustomHeader,
  Flex,
  GreenCloseButton,
} from "../../styles/styledComponentModule";
import FriendsList from "../friends/FriendsList";
import { setGetFriend } from "../../api/hooks/useGetFriend";
import { useAtom } from "jotai";
import { friendsAtom } from "../../store/globalState";

const CenteredModalFooter = styled.div`
  width: 90%;
  margin: auto;
  padding-bottom: 1rem;
`;

const Title = styled.div`
  font-family: "NanumSquareNeoOTF-Hv", KCC-Ganpan, serif;
`;

const LikeModal = (props) => {
  const [friendsData, setFriendsData] = useAtom(friendsAtom);
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
    // getFriendsData();
  }, []);

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <CustomHeader>
        <Modal.Title id="contained-modal-title-vcenter">
          <Title>좋아요 목록</Title>
        </Modal.Title>
        <GreenCloseButton onClick={props.onHide} />
      </CustomHeader>
      <CustomBody>
        <FriendsList friendsData={friendsData} isLoading={isLoading} />
      </CustomBody>
      {/*<CustomBody>*/}
      {/*  <Text>*/}
      {/*    준비중인 기능이에요.*/}
      {/*    <br />더 편해져서 돌아올게요! 🎅*/}
      {/*  </Text>*/}
      {/*</CustomBody>*/}
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
          {/*<UpdateBtn*/}
          {/*  onClick={() => {*/}
          {/*    getKakaoFriendsData();*/}
          {/*  }}*/}
          {/*>*/}
          {/*  친구목록 업데이트*/}
          {/*</UpdateBtn>*/}
        </ButtonFlex>
      </CenteredModalFooter>
    </Modal>
  );
};

const ButtonFlex = styled(Flex)`
  width: 100%;
  // justify-content: space-between;
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

export default LikeModal;
