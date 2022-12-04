import styled from "styled-components";
import { setGetFriend } from "../../api/hooks/useGetFriend";
import Image from "next/image";
import { Flex } from "../../styles/styledComponentModule";
import { Suspense, useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useRouter } from "next/router";
import FriendsService from "../../api/FriendsService";

export const AlignedFlex = styled(Flex)`
  align-items: center;
`;

const GoFriendsCalendarBtn = styled(Button)`
  background-color: #8d362d;
  border-color: #8d362d;
  @media (max-width: 600px) {
    font-size: small;
  }
  @media (max-width: 300px) {
    width: 70px;
    font-size: x-small;
  }
`;

const FriendsName = styled.div`
  margin-left: 5px;
  font-size: normal;
  @media (max-width: 600px) {
    font-size: smaller;
  }
  @media (max-width: 300px) {
    max-width: 40px;
    font-size: small;
  }
`;

const FriendCard = styled.div`
  display: flex;
  align-items: center;
  height: 72px;
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 10px;
  background: #3c6c54;
  border-radius: 12px;
  z-index: 5;
  color: white;
  padding: 1rem;
  justify-content: space-between;
  @media (max-width: 600px) {
    width: 100%;
    height: 62px;
    font-size: 24px;
  }
`;

const Container = styled.div`
  height: 360px;
  overflow: scroll;
`;

const LoadingContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;
const LoadingHeader = styled.h2`
  margin: 0;
  padding: 0;
  text-align: center;
`;
const Img = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 5px;
  border-radius: 50px;
`;

const FriendsList = () => {
  const router = useRouter();
  const [friendsData, setFriendsData] = useState<any>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getKakaoFriendsData = async () => {
    try {
      const res = await FriendsService.getKakaoFriends();
    } catch (e) {
      console.log(e);
    }
  };

  const getFriendsData = async () => {
    let res = [];
    setIsLoading(true);
    try {
      const res = await setGetFriend();
      if (res.data.data) setFriendsData(res.data.data);
    } catch (e) {
      console.log(e);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    getFriendsData();
  }, []);

  const RenderFriendCardContents = (props) => {
    const goFriendsCalendar = () => {
      if (props && props.invitationLink) {
        router.push(`/${props.invitationLink}`);
        console.log("친구 캘린더로 가즈아~");
      } else {
        console.log("props.invitationLink 업슴");
      }
    };

    return (
      <>
        <AlignedFlex>
          <Img
            src={
              props.profileImgUrl.includes("http")
                ? props.profileImgUrl
                : "/assets/image/character/face_smile.png"
            }
          />
          <FriendsName>{props.name}</FriendsName>
        </AlignedFlex>

        <Flex>
          <GoFriendsCalendarBtn onClick={goFriendsCalendar}>
            친구 캘린더로 가기
          </GoFriendsCalendarBtn>
        </Flex>
      </>
    );
  };

  return (
    <Container>
      {!isLoading && friendsData.length < 1 ? (
        <LoadingContainer>
          <img src="/assets/image/character/face_crycry.png" width="200" />
          {/*<LoadingHeader>"친구가...없써...!"</LoadingHeader>*/}
          <LoadingHeader>"카카오 승인대기 중"</LoadingHeader>
          <p><br/>진짜 금방 될거에요.. ;o;<br/> 그때까진 🔗링크🔗로 놀러갑시닷~!</p>
        </LoadingContainer>
      ) : null}
      {isLoading ? (
        <LoadingContainer>
          <img src="/assets/image/character/spinner.gif" alt="spinner" />
          <LoadingHeader>친구들 모으는중</LoadingHeader>
        </LoadingContainer>
      ) : (
        friendsData?.map((friend, idx) => (
          <FriendCard key={friend.memberId + idx}>
            <RenderFriendCardContents
              profileImgUrl={friend.profileImgUrl}
              name={friend.name}
              invitationLink={friend.invitationLink}
              isFavorite={friend.isFavorite}
            />
          </FriendCard>
        ))
      )}
    </Container>
  );
};

export default FriendsList;
