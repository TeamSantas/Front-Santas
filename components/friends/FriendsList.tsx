import styled from "styled-components";
import { setGetFriend } from "../../api/hooks/useGetFriend";
import { Flex } from "../../styles/styledComponentModule";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useRouter } from "next/router";

export const AlignedFlex = styled(Flex)`
  align-items: center;
`;

const GoFriendsCalendarBtn = styled(Button)`
  background-color: #d84d23;
  border-color: #d84d23;
  border-radius: 13px;
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
  font-size: 16px;

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
  background: #1c3249;
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
  height: 40vh;
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
`;

const LoadingContainer = styled.div`
  height: 40vh;
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

  const getFriendsData = async () => {
    let res = [];
    setIsLoading(true);
    try {
      //TODO: 디비 연결되면 밑에 목데이터 지우고 이 코드 살리기
      // const res = await setGetFriend();
      // if (res.data.data) setFriendsData(res.data.data);
      // ----
      const tmpFriendsData = [
        {
          profileImgUrl: "이미지 URL",
          name: "정석현",
          invitationLink: "8fd53779-d6ca-4e47-b5b5-ff0dd2c502eb",
          isFavorite: true, // 또는 false, true면 즐겨찾기 상태를 나타냅니다.
        },
        {
          profileImgUrl: "이미지 URL",
          name: "박수연",
          invitationLink: "ef189e9f-54d8-4ca4-a768-2c3f51f5bbe9",
          isFavorite: true, // 또는 false, true면 즐겨찾기 상태를 나타냅니다.
        },
        {
          profileImgUrl: "이미지 URL",
          name: "산타즈",
          invitationLink: "ca8f8e79-d48d-4bca-a653-04093125a2c5",
          isFavorite: true, // 또는 false, true면 즐겨찾기 상태를 나타냅니다.
        },
      ];
      setFriendsData(tmpFriendsData);
      //---
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
      } else {
        console.log("props.invitationLink 없어용");
      }
    };

    return (
      <>
        <AlignedFlex>
          <Img
            src={
              props.profileImgUrl.includes("http")
                ? props.profileImgUrl
                : "/assets/image/character/character.svg"
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
          <img
            src="/assets/image/character/face_crycry.png"
            width="200"
            alt="친구사진"
          />
          <LoadingHeader>&#34;친구가...없써...!&#34;</LoadingHeader>
        </LoadingContainer>
      ) : null}
      {isLoading ? (
        <LoadingContainer>
          <img src="/assets/image/character/spinner.gif" alt="spinner" />
          <LoadingHeader>친구들 모으는중</LoadingHeader>
        </LoadingContainer>
      ) : (
        friendsData?.map((friend, idx) => (
          <FriendCard key={friend.friendId + idx}>
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
