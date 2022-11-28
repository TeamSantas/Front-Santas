import FriendsService from "../FriendsService";

export async function setGetCurrCalendarUserInfo(inviteLink) {
  const config = {
    params: {
      link: inviteLink,
    },
  };
  const res = await FriendsService.getFriend(config);

  if (res.status === 200) return res.data.data;
}
