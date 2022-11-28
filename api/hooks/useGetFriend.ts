import FriendsService from "../FriendsService";

export async function setGetFriend() {
  const res = await FriendsService.getFriends();

  if (res.status === 200) return res.data.data; 
}
