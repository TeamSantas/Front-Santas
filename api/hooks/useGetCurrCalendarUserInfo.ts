import FriendsService from "../FriendsService";

export async function setGetCurrCalendarUserInfo(inviteLink) {
  const res = await FriendsService.getFriend(inviteLink);

  if (res.status === 200) return res.data.data;
}
