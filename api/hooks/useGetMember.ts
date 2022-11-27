import MemberService from "../MemberService";

export async function setGetMember() {
  const res = await MemberService.getLoggedMember();

  if (res.status === 200) return res.data.data;
}