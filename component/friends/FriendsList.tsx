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
const Text = styled.h5`
    margin: 15px 5px;
    text-align: center;
  `;
const FriendsList = () => {
  const router = useRouter();
  const [friendsData, setFriendsData] = useState<any>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getFriendsData = async () => {
    let res = [];
    setIsLoading(true);
    try {
      const res = await setGetFriend();
      if (res.data.data) setFriendsData(res.data.data.friendDtoList);
      console.log(res.data.data)
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
      <Flex>
        <Text>📜서비스에 가입한 친구목록만 나와요 </Text>
        <Text>({friendsData.length}명)</Text>
      </Flex>
      {!isLoading && friendsData.length < 1 ? (
        <LoadingContainer>
          <img src="/assets/image/character/face_crycry.png" width="200"  alt="친구사진"/>
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
