import FriendsService from "../FriendsService";

export async function setGetCurrCalendarUserInfo(inviteLink) {
  const config = {
    params: {
      link: inviteLink,
    },
  };
  return await FriendsService.getFriend(config);
}

/**
 * invitationLink로 멤버 조회 (서버)
 */
export async function getServerUserInfo(inviteLink, token) {
  const config = {
    params: {
      link: inviteLink,
    },
  };
  try {
    const res = await FriendsService.getServerUserInfo(config, token);
    return res;
  } catch (e) {
    console.log(e);
  }
}
