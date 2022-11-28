import FriendsService from "../FriendsService";

export async function setGetFriend(inviteLink) {
  const res = await FriendsService.getFriends(inviteLink);

  if (res.status === 200) return res.data.data;
}
