import styled from "styled-components";
import { useGetFriend } from "../../api/hooks/useGetFriend";

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
  // const friendsData = useGetFriend();
  const friendsData = [
    {
      memberId: 2501388498,
      friendId: 4,
      invitationLink: "invitationLink4",
      uuid: "uuid",
      profileImgUrl: "profileimageurl",
      name: "친구4",
      allowedMsg: true,
      isFavorite: false,
    },
    {
      memberId: 2501388498,
      friendId: 5,
      invitationLink: "invitationLink5",
      uuid: "uuid",
      profileImgUrl: "profileimageurl",
      name: "친구5",
      allowedMsg: true,
      isFavorite: false,
    },
    {
      memberId: 2501388498,
      friendId: 6,
      invitationLink: "invitationLink6",
      uuid: "uuid",
      profileImgUrl: "profileimageurl",
      name: "친구6",
      allowedMsg: true,
      isFavorite: false,
    },
    {
      memberId: 2501388499,
      friendId: 6,
      invitationLink: "invitationLink6",
      uuid: "uuid",
      profileImgUrl: "profileimageurl",
      name: "친구7",
      allowedMsg: true,
      isFavorite: false,
    },
  ];

  return (
    <FriendsListWrapper>
      {friendsData?.map((friend) => (
        <FriendCard key={friend.memberId}>{friend.name}</FriendCard>
      ))}
    </FriendsListWrapper>
  );
};

export default FriendsList;
