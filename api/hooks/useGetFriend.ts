import FriendsService from "../FriendsService";

export async function setGetFriend() {
  try {
    const res = await FriendsService.getFriends();
    return res;
  } catch (e) {
    console.error(e);
  }
}
