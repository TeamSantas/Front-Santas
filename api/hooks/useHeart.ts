import { FriendsData } from "./../../util/type";
import HeartService from "../HeartService";

/**
 * 하트 보내기
 */
export async function postMemberPick(friend: FriendsData) {
  const config = {
    toMemberId: friend.friendId,
  };
  try {
    const res = await HeartService.postMemberPick(config);
    if (res.status === 200) {
      return res;
    }
  } catch (e) {
    console.log(e);
    return false;
  }
}
