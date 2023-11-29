import { FriendsData, MemberData } from "./../../util/type";
import HeartService from "../HeartService";

/**
 * 하트 보내기
 */
export async function postMemberPick(
  friend: FriendsData,
  storeUserData: MemberData
) {
  const config = {
    toMemberId: friend.id,
    fromMemberName: storeUserData.nickname,
    fromProfileImageURL: storeUserData.profileImageURL,
    fromInvitationLink: storeUserData.invitationLink,
  };
  try {
    const res = await HeartService.postMemberPick(config);
    if (res.data.message.includes("5")) {
      return "좋아요는 하루 최대 5번 보낼 수 있습니다.";
    }
    return res.data.message.includes("5") ? 900 : res.status;
  } catch (e) {
    console.log(e);
    return false;
  }
}

/**
 * 하트 보내기
 */
export async function getTodaysQuestion() {
  try {
    const res = await HeartService.getTodaysQuestion();
    return res.data.data;
  } catch (e) {
    console.log(e);
    return false;
  }
}
