import styled from "styled-components";
import { setGetFriend } from "../../api/hooks/useGetFriend";
import Image from "next/image";
import { Flex } from "../../styles/styledComponentModule";
import { useEffect, useState } from "react";

const FriendsListWrapper = styled.div``;

const FriendCard = styled.div`
  width: 35rem;
  height: 72px;
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 10px;
  background: #3c6c54;
  border-radius: 12px;
  z-index: 5;
  color: white;
  @media (max-width: 600px) {
    width: 100%;
    margin-bottom: 10px;
    height: 62px;
    font-size: 24px;
  }
`;

const FriendsList = () => {
  // TODO : friends 데이터 가져와서 작업
  const [friendsData, setFriendsData] = useState<any>();
  const getFriendsData = async () => {
    const res = await setGetFriend();
    setFriendsData(res);
  };

  useEffect(() => {
    getFriendsData();
  }, []);

  const handleClickKakaoShare = () => {
    console.log("카톡으로 링크 공유");
  };
  const goFriendsCalendar = () => {
    console.log("친구 캘린더로 가즈아~");
  };

  const RenderFriendCardContents = (props) => {
    console.log(props.profileImgUrl);
    return (
      <Flex>
        <Image
          // src={props.profileImgUrl}
          src={`/assets/image/character/face_smile.png`}
          alt="profile-img"
          width={50}
          height={50}
        />
        <p>{props.name}</p>
        <Flex>
          <button onClick={handleClickKakaoShare}>카카오톡 공유</button>
          <button onClick={goFriendsCalendar}>친구캘린더로</button>
        </Flex>
      </Flex>
    );
  };

  return (
    <FriendsListWrapper>
      {/* TODO : isFavorite으로 즐찾해둔 친구 상단에 먼저 렌더링 */}
      {friendsData?.map((friend) => (
        <FriendCard key={friend.memberId}>
          <RenderFriendCardContents
            profileImgUrl={friend.profileImgUrl}
            name={friend.name}
            invitationLink={friend.invitationLink}
          />
        </FriendCard>
      ))}
    </FriendsListWrapper>
  );
};

export default FriendsList;
