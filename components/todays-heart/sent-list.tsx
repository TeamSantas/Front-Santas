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
  font-size: 21px;
  @media (max-width: 600px) {
    font-size: 17px;
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
const Text = styled.h5`
  margin: 15px auto;
  text-align: center;
  font-family: "NanumSquareNeoOTF-Lt", KCC-Ganpan, sans-serif;
`;
const SentFriendsList = () => {
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
      //----
      const tmpFriendsData = [
        {
          profileImgUrl: "이미지 URL",
          name: "정소연",
          invitationLink: "초대 링크",
          isFavorite: true, // 또는 false, true면 즐겨찾기 상태를 나타냅니다.
        },
        {
          profileImgUrl: "이미지 URL",
          name: "박수연",
          invitationLink: "초대 링크",
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
      <Flex>
        <Text>서비스에 가입한 친구 목록이에요. </Text>
      </Flex>
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

export default SentFriendsList;
