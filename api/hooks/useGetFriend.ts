import FriendsService from "../FriendsService";

export async function setGetFriend() {
  try {
    const res = await FriendsService.getFriends();
    if (res.status === 200) {
      return res.data.data;
    }
  } catch (e) {
    console.error(e);
  }
}
