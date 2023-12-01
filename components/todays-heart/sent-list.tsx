import styled from "styled-components";
import { Flex } from "../../styles/styledComponentModule";
import SentFriendsCard from "./sent-friend-card";
import { useEffect, useState } from "react";
import { FriendsData } from "../../util/type";
import { setGetFriend } from "../../api/hooks/useGetFriend";
import { useRouter } from "next/router";

const SentFriendsList = () => {
  const router = useRouter();
  const [friendsData, setFriendsData] = useState<FriendsData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const getFriendsData = async () => {
    setIsLoading(true);
    try {
      const res = await setGetFriend();
      if (res.status === 200) {
        setFriendsData(res.data.data);
      }
      if (res.status === 403) {
        alert(
          `카카오 친구 목록 제공에 동의하셔야 사용 가능한 기능이에요.\n다시 동의를 하실 수 있도록 준비중이에요.`
        );
        router.replace("/");
        return;
      }
    } catch (e) {
      console.log(e);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    getFriendsData();
  }, []);

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
            링크를 공유해 초대해보세요.
          </LoadingHeader>
        </LoadingContainer>
      )}
      {isLoading ? (
        <LoadingContainer>
          <img src="/assets/image/character/spinner.gif" alt="spinner" />
          <LoadingHeader>친구들 모으는중</LoadingHeader>
        </LoadingContainer>
      ) : (
        <>
          {friendsData?.map((friend, idx) => (
            <SentFriendsCard
              key={friend.id + idx}
              isPicked={friend.isPicked}
              friend={friend}
            />
          ))}
        </>
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
