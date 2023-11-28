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