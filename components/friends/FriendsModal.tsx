import styled from "styled-components";
import { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import {
  CustomBody,
  CustomHeader,
  CenteredFlex,
  Flex,
  GreenCloseButton,
  ModalTitle,
  ModalSubTitle,
} from "../../styles/styledComponentModule";
import FriendsList from "./FriendsList";
import { setGetFriend } from "../../api/hooks/useGetFriend";
import AdFitModal from "../advertisement/adFitModal";
import { friendsModalAdID } from "../advertisement/ad-ids";
import { FriendsData } from "../../util/type";
import { useAtom } from "jotai";
import { loginUserDataAtom } from "../../store/globalState";
import { useRouter } from "next/router";

const CenteredModalFooter = styled.div`
  width: 90%;
  margin: auto;
  padding-top: 20px;
`;

const FriendsModal = (props) => {
  const router = useRouter();
  const [friendsData, setFriendsData] = useState<FriendsData[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [storeUserData] = useAtom(loginUserDataAtom);
  const isLoginUser = storeUserData.id !== -1;

  const getFriendsData = async () => {
    setIsLoading(true);
    try {
      const res = await setGetFriend();
      // 친구 동의 안해서 응답 없을 때
      if (!res) {
        const confirmText = `카카오 친구 목록 제공에 동의하셔야 원활한 이용이 가능합니다.\n다시 동의하러 갈까요?`;
        if (confirm(confirmText)) {
          router.push("/login");
          props.onHide();
        }
      }
      if (res.status === 200) {
        setFriendsData(res.data.data);
      }
    } catch (e) {
      console.log(e);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    if (storeUserData.id !== -1) {
      getFriendsData();
    }
  }, [storeUserData.id]);

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
            <ModalSubTitle>
              {isLoginUser && "서비스에 가입한 친구 목록이에요."}
            </ModalSubTitle>
          </ModalTitle>
          <GreenCloseButton onClick={props.onHide} />
        </Modal.Title>
      </CustomHeader>
      <CustomBody>
        {isLoginUser ? (
          <FriendsList friendsData={friendsData} isLoading={isLoading} />
        ) : (
          <Text>
            {`로그인이 필요한 기능이에요.\n\n오른쪽 위 설정(⚙️)창 하단에\n로그인 버튼이 있어요.☃️`}
          </Text>
        )}
      </CustomBody>
      <CenteredModalFooter>
        {isLoginUser && (
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
        )}
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

const Text = styled(CenteredFlex)`
  text-align: center;
`;

export default FriendsModal;
