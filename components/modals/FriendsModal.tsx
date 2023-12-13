import styled from "styled-components";
import { useCallback, useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import {
  CustomBody,
  CustomHeader,
  CenteredFlex,
  GreenCloseButton,
  ModalTitle,
  ModalSubTitle,
} from "../../styles/styledComponentModule";
import FriendsList from "../friends/FriendsList";
import { setGetFriend } from "../../api/hooks/useGetFriend";
import AdFitModal from "../advertisement/adFitModal";
import { adFitPaths, friendsModalAdID } from "../advertisement/ad-ids";
import { FriendsData } from "../../util/type";
import { useAtom } from "jotai";
import { loginUserDataAtom, modalStateAtom } from "../../store/globalState";
import { useRouter } from "next/router";
import ShareTriggerButton from "../share/ShareButton";
import { getCookie } from "cookies-next";
import { isSantaz } from "../common/for-santaz";
import { removeCookie } from "../../businesslogics/cookie";
import { getFriendsWithAd } from "../friends/ad-utils";

const CenteredModalFooter = styled.div`
  width: 90%;
  margin: auto;
  padding: ${({ isAdFit }) => (isAdFit === "true" ? "20px" : "20px 0 0 0")};
`;

const FriendsModal = (props) => {
  const router = useRouter();
  const [friendsData, setFriendsData] = useState<FriendsData[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [storeUserData] = useAtom(loginUserDataAtom);
  const [modalState] = useAtom(modalStateAtom);
  const isLoginUser = storeUserData.id > 0;
  const isAdFitPage = adFitPaths.some((path) => router.pathname.includes(path));

  const getFriendsData = useCallback(async () => {
    setIsLoading(true);
    try {
      if (
        // 산타즈는 친구 없음
        isSantaz(getCookie("token"))
      ) {
        setIsLoading(false);
        return;
      }
      const res = await setGetFriend();
      // 친구 동의 안해서 응답 없을 때
      if (res?.code === "M403") {
        const confirmText = `카카오 친구 목록 제공 동의가 필요한 기능입니다.\n다시 동의하러 갈까요?`;
        if (confirm(confirmText)) {
          router.push("/login");
        }
        props.onHide();
      }
      // 토큰 만료되었을 때
      if (!res || res?.code === "J400") {
        removeCookie("token");
        alert("재로그인이 필요합니다.");
        router.push("/login");
        props.onHide();
      }
      if (res?.status === 200) {
        setFriendsData(res.data.data);
      }
    } catch (e) {
      console.log(e);
    }
    setIsLoading(false);
  }, [router]);

  useEffect(() => {
    if (isLoginUser && modalState.show) {
      getFriendsData();
    }
  }, [isLoginUser, getFriendsData, modalState]);

  return (
    <AdFitModal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      adfitid={isAdFitPage ? null : friendsModalAdID}
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
          <FriendsList
            friendsData={
              isAdFitPage ? friendsData : getFriendsWithAd(friendsData, 3)
            }
            isLoading={isLoading}
          />
        ) : (
          <Text>
            {`로그인이 필요한 기능이에요.\n\n오른쪽 위 설정(⚙️)창 하단에\n로그인 버튼이 있어요.☃️`}
          </Text>
        )}
      </CustomBody>
      <CenteredModalFooter isAdFit={isAdFitPage.toString()}>
        <ShareTriggerButton />
      </CenteredModalFooter>
    </AdFitModal>
  );
};

const Text = styled(CenteredFlex)`
  text-align: center;
`;

export default FriendsModal;
