import styled from "styled-components";
import { Flex } from "../../styles/styledComponentModule";
import SentFriendsCard from "./sent-friend-card";
import { useCallback, useEffect, useState } from "react";
import { FriendsData } from "../../util/type";
import { setGetFriend } from "../../api/hooks/useGetFriend";
import { useRouter } from "next/router";
import ShareTriggerButton from "../share/ShareButton";
import { getCookie } from "cookies-next";
import { useAtom } from "jotai";
import { removeCookie } from "../../businesslogics/cookie";
import { loginUserDataAtom } from "../../store/globalState";
import { isSantaz } from "../common/for-santaz";
import { getFriendsWithAd } from "../friends/ad-utils";
import KakaoAdFit from "../advertisement/KakaoAdFit";
import { FriendCard } from "../friends/FriendsList";

const SentFriendsList = () => {
  const router = useRouter();
  const [friendsData, setFriendsData] = useState<FriendsData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [storeUserData] = useAtom(loginUserDataAtom);
  const isLoginUser = storeUserData.id > 0;

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
      }
      // 토큰 만료되었을 때
      if (!res || res?.code === "J400") {
        removeCookie("token");
        alert("재로그인이 필요합니다.");
        router.push("/login");
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
    if (isLoginUser) {
      getFriendsData();
    }
  }, [isLoginUser, getFriendsData]);

  return (
    <Container>
      {!isLoading && friendsData.length < 1 && (
        <LoadingContainer>
          <img
            src="/assets/image/character/face_crycry.png"
            width="200"
            alt="친구사진"
          />
          <LoadingHeader>
            아직 가입한 친구가 없어요. 🥲
            <br />
            친구 초대하기 버튼으로 초대해보세요!
          </LoadingHeader>
          <br />
          <ShareTriggerButton />
        </LoadingContainer>
      )}
      {isLoading ? (
        <LoadingContainer>
          <img src="/assets/image/character/spinner.gif" alt="spinner" />
          <LoadingHeader>친구들 모으는중</LoadingHeader>
        </LoadingContainer>
      ) : (
        getFriendsWithAd(friendsData, 4)?.map((friend, idx) => {
          return friend.nickname === "adFit" ? (
            <FriendCard key={friend.id + idx} justifyContent={"center"}>
              <KakaoAdFit id={friend.invitationLink} />
            </FriendCard>
          ) : (
            <FriendCard key={friend.id + idx}>
              <SentFriendsCard isPicked={friend.isPicked} friend={friend} />
            </FriendCard>
          );
        })
      )}
    </Container>
  );
};

export default SentFriendsList;

export const AlignedFlex = styled(Flex)`
  align-items: center;
`;

const Container = styled.div`
  height: 100%;
  overflow-y: scroll;
  /* Firefox */
  scrollbar-width: none;

  /* Internet Explorer, Edge */
  &::-ms-overflow-style {
    display: none;
  }

  /* Chrome, Safari */
  &::-webkit-scrollbar {
    display: none;
  }
  @media (max-width: 768px) {
    max-width: unset;
  }
`;

const LoadingContainer = styled.div`
  height: 40vh;
  text-align: center;
`;
const LoadingHeader = styled.div`
  margin: 0;
  padding: 0;
  text-align: center;
`;
