import MemberService from "../MemberService";

export async function setGetMember() {
  return await MemberService.getLoggedMember();
}

export async function setGetMemberById(memberId) {
  const config = {
    params: {
      memberId: memberId,
    },
  };
  return await MemberService.getMemberById(config);
}

export async function setLoggedMemberInfo(formData) {
  return await MemberService.putLoggedMember(formData);
}

/**
 * 나에게 좋아요를 보낸 멤버 배열
 */
export async function getPickedMeFriends() {
  try {
    const res = await MemberService.getPickedMeFriends();
    if (res.status === 200) {
      return res.data.data.pickMembers;
    }
  } catch (e) {
    console.error(e);
  }
}
