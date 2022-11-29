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
`;
const LoadingHeader = styled.h2`
  margin: 0;
  padding: 0;
  text-align: center;
`;
const Img = styled.img`
  width:50px;
  height:50px;
  margin-right: 5px;
  border-radius: 50px;
`;

const FriendsList = ({friendsData, isLoading}) => {
  const router = useRouter()
  // const [friendsData, setFriendsData] = useState<any>([]);
  // const [isLoading, setIsLoading] = useState<boolean>(false);
  // const [currFriendIsFavorite, setCurrFriendIsFavorite] =
  //   useState<boolean>(false);
  
  // const getKakaoFriendsData = async () => {
  //   const res = await FriendsService.getKakaoFriends();
  //   if (res.status !== 200) {
  //     console.log('어라랍스타? 🦞', res);
  //   }
  // }

  // const getFriendsData = async () => {
  //   setIsLoading(true);
  //   const res = await setGetFriend();
  //   console.log(res);
  //   setFriendsData(res);
  //   setIsLoading(false);
  // };

  // useEffect(() => {
  //   getFriendsData();
  // }, []);

  // const handleClickFavoriteFriend = (isFavorite) => {
  //   // 친구한테 데이터 보내야 함
  //   console.log("조아용");
  //   setCurrFriendIsFavorite(!isFavorite);
  // };

  const RenderFriendCardContents = (props) => {
    const goFriendsCalendar = () => {
      router.push(`/${props.invitationLink}`)
      console.log("친구 캘린더로 가즈아~");
    };


    return (
      <>
        <AlignedFlex>
          <Img src={(props.profileImgUrl).includes('http') ? props.profileImgUrl : '/assets/image/character/face_smile.png'} /> 
          <div>{props.name}</div>
          {/* MVP2 : 즐겨찾기 친구 */}
          {/* {props.isFavorite ? (
            <Image
              // src={props.profileImgUrl}
              src={`/assets/image/friend/fullheart.png`}
              alt="profile-img"
              width={30}
              height={30}
              onClick={handleClickFavoriteFriend}
            />
          ) : (
            <Image
              // src={props.profileImgUrl}
              src={`/assets/image/friend/emptyheart.png`}
              alt="profile-img"
              width={30}
              height={30}
              onClick={handleClickFavoriteFriend}
            />
          )} */}
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
      {!isLoading && friendsData.length < 1 ?
        (<LoadingContainer>
          <img src="/assets/image/character/face_crycry.png" width="200"/>
          <LoadingHeader>"친구가...없써...!"</LoadingHeader>
        </LoadingContainer>)
      : null}
      {isLoading ? 
        (<LoadingContainer>
          <img src="/assets/image/character/spinner.gif" alt="spinner"/>
          <LoadingHeader>친구들 모으는중</LoadingHeader>
        </LoadingContainer>) : 
        (friendsData?.map((friend, idx) => (
          <FriendCard key={friend.memberId+idx}>
            <RenderFriendCardContents
              profileImgUrl={friend.profileImgUrl}
              name={friend.name}
              invitationLink={friend.invitationLink}
              isFavorite={friend.isFavorite}
            />
          </FriendCard>))
        )
      }
    </Container>
  );
};

export default FriendsList;
