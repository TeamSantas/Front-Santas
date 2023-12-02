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
    return res.data.message.includes("5") ? 900 : res.status;
  } catch (e) {
    const res = e.response.data
    return res.message.includes("5") ? 900 : res.code;
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
