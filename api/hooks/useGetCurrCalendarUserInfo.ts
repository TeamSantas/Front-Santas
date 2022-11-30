import FriendsService from "../FriendsService";

export async function setGetCurrCalendarUserInfo(inviteLink) {
  const config = { 
    params: {
      link: inviteLink,
    },
  };
  return await FriendsService.getFriend(config);
}
