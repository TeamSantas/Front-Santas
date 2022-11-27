import styled from "styled-components";
import { setGetFriend } from "../../api/hooks/useGetFriend";
import Image from "next/image";
import { Flex } from "../../styles/styledComponentModule";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

const AlignedFlex = styled(Flex)`
  align-items: center;
`;

const KakaoShare = styled.div`
  background-image: url(https://developers.kakao.com/assets/img/about/logos/kakaotalksharing/kakaotalk_sharing_btn_medium.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  width: 2.5rem;
  cursor: pointer;
  margin-right: 5px;
  @media (max-width: 600px) {
    margin-right: 3px;
  }
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

const FriendsList = () => {
  const [friendsData, setFriendsData] = useState<any>();
  const [currFriendIsFavorite, setCurrFriendIsFavorite] =
    useState<boolean>(false);
  const getFriendsData = async () => {
    const res = await setGetFriend();
    setFriendsData(res);
  };

  useEffect(() => {
    getFriendsData();
  }, []);

  const goFriendsCalendar = () => {
    console.log("친구 캘린더로 가즈아~");
  };

  const handleClickFavoriteFriend = (isFavorite) => {
    // 친구한테 데이터 보내야 함
    console.log("조아용");
    setCurrFriendIsFavorite(!isFavorite);
  };

  const RenderFriendCardContents = (props) => {
    return (
      <>
        <AlignedFlex>
          <Image
            // src={props.profileImgUrl}
            src={`/assets/image/character/face_smile.png`}
            alt="profile-img"
            width={50}
            height={50}
            style={{ marginRight: "5px" }}
          />
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
            쪽지 보내러 가기
          </GoFriendsCalendarBtn>
        </Flex>
      </>
    );
  };

  return (
    <>
      {/* TODO : isFavorite으로 즐찾해둔 친구 상단에 먼저 렌더링 */}
      {friendsData?.map((friend) => (
        <FriendCard key={friend.memberId}>
          <RenderFriendCardContents
            profileImgUrl={friend.profileImgUrl}
            name={friend.name}
            invitationLink={friend.invitationLink}
            isFavorite={friend.isFavorite}
          />
        </FriendCard>
      ))}
    </>
  );
};

export default FriendsList;
