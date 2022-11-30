import FriendsService from "../FriendsService";

export async function setGetFriend() {
  return await FriendsService.getFriends();
}