import MemberService from "../MemberService";

export async function getLoggedMemberRaw() {
  try {
    const res = await MemberService.getLoggedMember();
    return res;
  } catch (e) {
    console.error(e);
  }
}

export async function logoutMember() {
  try {
    const res = await MemberService.logoutMember();
    return res.data.data;
  } catch (e) {
    return e;
  }
}
